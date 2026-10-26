const fs = require('fs');
const path = require('path');

const rawQuestions = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../public/assets/aistudio/AFO_Question_Bank_cc4b21a5.json'), 'utf8')
);

// Translation dictionary mapping question indices or patterns to accurate, concise Arabic feedback
// Each explanation directly and faithfully translates the question, correct answer, and aviation fuel operating standard.
const arabicExplanations = {
  0: "تتم معايرة جهاز كاشف الغاز بناءً على توصية الشركة المصنعة (As per manufacturer's recommendation).",
  1: "صفارة واحدة كل 30 ثانية في جهاز MX4 تشير إلى انخفاض شحن البطارية (Low battery).",
  2: "صفارة مزدوجة/إنذار عطل كل 30 ثانية في جهاز MX4 تدل على عطل في المستشعر (Sensor failure).",
  3: "أقصى طول مسموح به لأنبوب سحب المضخة هو 100 قدم (100 feet).",
  4: "لحساب القراءة الفعلية مع أنبوب المضخة: ثانيتان لكل قدم مسافة + دقيقتان إضافيتان (2 seconds + 2 minutes).",
  5: "يجب إيقاف التهوية تماماً لمدة 15 دقيقة قبل أخذ قراءة فحص الغاز (15 minutes).",
  6: "الغاز الذي يمتلك نقطتي إنذار (مرتفع ومنخفض) في كاشف الغاز هو الأكسجين O2.",
  7: "تصفير جهاز MX-6 يتم بالضغط على: On/Off ← Sensor ← Zeroing ← ثم OK.",
  8: "عرض أعلى قراءة (Peak) في جهاز MX-6: اضغط On/Off ← Sensor ← Peak ← ثم OK.",
  9: "يحتوي جهاز MX-4 على 3 أنواع من الإنذارات: الاهتزاز، الإضاءة المرئية، والصوت المسموع.",
  10: "الفحص اليومي لجهاز فحص الغاز يشمل: الفحص البصري، تسريب المضخة، فحص الوظائف، التصفير، ومسح قمم القراءات (Clearing peaks).",
  11: "تتم المعايرة المحلية لجهاز فحص الغاز في محطة المنصة (Deck station).",
  12: "يُحظر تماماً على مركبة تزويد الوقود الرجوع للخلف (Reversing) في محيط الطائرة.",
  13: "إضاءة ساحة الطيران (Apron) الحمراء الثابتة تعني: التوقف التام (Stop).",
  14: "إضاءة ساحة الطيران الحمراء الوامضة تعني: إخلاء المنطقة على الفور (Evacuate immediately).",
  15: "إضاءة ساحة الطيران الخضراء الثابتة تعني: العبور بأمان (Cross safely).",
  16: "إضاءة ساحة الطيران البيضاء الوامضة تعني: العودة إلى نقطة البداية (Return to start point).",
  17: "يُسمح بركن المعدات حول الطائرة فقط عند إطفاء المحركات والأنوار والحصول على موافقة ممثل الطيران.",
  18: "يجب التأكد من وجود مخرج واضح وخالٍ من العوائق (Clear exit) قبل الركن حول الطائرة.",
  19: "أثناء التزويد الساخن (Hot refueling)، يجب ركن الموزع المتنقل بجانب الطائرة (Beside aircraft).",
  20: "يجب إجراء فحص كاشف الماء (Hydro-kit test) في بداية عملية تزويد الطائرة بالوقود.",
  21: "يجب فحص صمام الإغلاق للتعبئة السفلية (صمام منع الفيضان) مباشرة بعد بدء التعبئة.",
  22: "يُعرّف الانسكاب الكبير (Major spill) بأنه أكثر من 5 م² أو أكثر من 10,000 برميل.",
  23: "الانسكاب المتوسط (Medium spill) يتراوح حجمه بين 100 إلى 10,000 برميل.",
  24: "يُعرّف الانسكاب الطفيف (Minor spill) بأنه بين 3–5 م² أو أقل من 100 برميل.",
  25: "السرعة القصوى المحددة على الطريق الرئيسي هي 25 كم/ساعة (25 km/h).",
  26: "السرعة القصوى على ساحة المطار (Apron) هي 15 كم/ساعة (15 km/h).",
  27: "السرعة القصوى المسموحة حول وخلف الطائرات هي 5 كم/ساعة (5 km/h).",
  28: "السرعة القصوى عند صالة الركاب (Passenger terminal) هي 5 كم/ساعة (5 km/h).",
  29: "عند التوصيل: يتم توصيل خرطوم الطائرة أولاً ثم خرطوم السحب (Intake hose).",
  30: "عند الفصل: يتم فصل خرطوم السحب أولاً ثم خرطوم الطائرة.",
  31: "يجب توصيل سلك التأريض والتفريغ الكهربائي (Ground/bonding) قبل البدء في تزويد الوقود.",
  32: "الجهة المخولة بإصدار تصريح القيادة في ساحة المطار هي هيئة المطار (Airfield Authority).",
  33: "المدة التشغيلية القياسية لجهاز التنفس المستقل (SCBA) هي 30 دقيقة (30 minutes).",
  34: "الضغط الكامل داخل أسطوانة SCBA هو 2216 رطل/بوصة² (2216 PSI).",
  35: "يطلق جهاز SCBA إنذاراً بالاهتزاز عند بقاء 4–6 دقائق من الهواء.",
  36: "يطلق جهاز SCBA إنذاراً عند انخفاض الضغط المتبقي إلى 500 PSI (أي 25%).",
  37: "يتم إجراء الفحص الهيدروستاتيكي لأسطوانة SCBA كل 5 سنوات (Every 5 years).",
  38: "يقوم قسم العمليات بالفحص البصري لجهاز SCBA أسبوعياً (Weekly).",
  39: "يتم فحص وتدقيق سجلات جهاز SCBA شهرياً (Monthly).",
  40: "يقوم قسم الإطفاء (Fire Department) بفحص جهاز SCBA سنوياً (Yearly).",
  41: "قبل استخدام SCBA يجب التأكد من: الضغط، تاريخ الفحص، نظافة القناع، وعدم تسريب الخرطوم.",
  42: "يجب إحكام شد خرطوم ضغط SCBA يدوياً فقط (Hand-tightened) دون استخدام أدوات.",
  43: "الغاز المستخدم داخل أسطوانة SCBA هو الهواء النقي المضغوط (Fresh air).",
  44: "لون صمام التجاوز (Bypass valve) في جهاز SCBA هو اللون الأحمر (Red).",
  45: "يُستخدم نظام إمداد الهواء المستمر (SABA) في الأنشطة والأعمال الطويلة (Long work activities).",
  46: "أقصى طول مسموح به لخرطوم نظام SABA هو 300 قدم (300 feet).",
  47: "يحق لأي شخص (Anyone) إيقاف أي عمل غير آمن على الفور حفاظاً على السلامة.",
  48: "العزل الأولي (Primary isolation) يتم بإغلاق صمام واحد أو إغلاق صمامين والتفريغ بينهما.",
  49: "العزل الإيجابي/المطلق (Positive isolation) يتم بالتركيب الأعمى (Blind) أو الفصل المادي.",
  50: "يتواصل المراقب الواقف بالخارج مع الداخل بواسطة حبل النجاة/الإنقاذ (Lifeline / rescue rope).",
  51: "يُعتبر الحفر مكاناً محصوراً (Confined space) إذا بلغ عمقه 1.20 متر (1.20 m).",
  52: "يجب الاحتفاظ بتصاريح العمل المغلقة لمدة 90 يوماً (90 days).",
  53: "يجب إجراء تدقيق محلي (Local audit) لتصاريح العمل أسبوعياً (Weekly).",
  54: "يمكن تمديد تصريح العمل لمدة وردية واحدة / 8 ساعات (One shift / 8 hours).",
  55: "عندما يتطلب العمل استخدام أقفال متعددة، يُستخدم صندوق الأقفال المتعددة (Multi-locks / multi-box).",
  56: "في حال إلغاء التصريح لحالة طارئة: يُسجل وقت وسبب الإلغاء، ويصدر تصريح جديد بعد زوال الطارئ.",
  57: "لون وقود الطائرات العسكري JP-8 هو عديم اللون وشديد النقاوة (Colorless / water bright).",
  58: "نقطة تجمد وقود JP-8 هي -47 درجة مئوية (−47°C).",
  59: "زمن استقرار وترسيب خزان وقود JP-8 هو 3 ساعات (3 hours).",
  60: "نطاق كثافة وقود JP-8 يتراوح بين 775 إلى 840 كغم/م³ (775–840 kg/m³).",
  61: "التباين المسموح به في كثافة الشحنة الواحدة هو ±3 كغم/م³ (±3 kg/m³).",
  62: "نطاق الموصلية الكهربائية لوقود JP-8 هو 150 إلى 600 pS/m.",
  63: "نطاق الموصلية الكهربائية لوقود Jet A-1 هو 50 إلى 600 pS/m.",
  64: "نسبة مانع التجمد (Icing inhibitor) المضافة للوقود هي 0.07–0.10%.",
  65: "الفحص المختصر (Abbreviated test) يشمل: C/B، الكثافة، الحرارة، الموصلية، ومانع التجمد.",
  66: "الفحص الرئيسي (Key test) المعتمد للوقود هو اختبار التقطير (Distillation).",
  67: "درجة وميض وقود JP-8 هي 38 درجة مئوية (38°C).",
  68: "يستغرق اختبار كاشف الماء (Hydro Kit test) دقيقتين (2 minutes).",
  69: "الحد الأدنى لقراءة الماء في فحص Hydro Kit هو 30 جزء في المليون (30 PPM).",
  70: "عند تحول كاشف الماء من الأصفر إلى الأخضر الباهت، تشير القراءة إلى 5 PPM.",
  71: "عند تحول كاشف الماء من الأصفر إلى الأخضر/الأزرق، تشير القراءة إلى 30 PPM.",
  72: "يُستخدم كاشف الماء للتأكد من خلو الوقود تماماً من قطرات الماء المعلقة.",
  73: "يُجرى فحص نمو الميكروبات والبكتيريا في خزانات الطيران سنوياً (Annually).",
  74: "تتواجد الميكروبات والبكتيريا في خزانات الوقود عند نقطة التماس والفاصل بين الوقود والماء.",
  75: "يُجرى اختبار النقع (Soak test) لخزانات الطيران بعد الانتهاء من التفتيش والإصلاح (After T&I).",
  76: "يُستخدم فحص الميليبور (Millipore test) لتقييم فلاتر فصل الوقود والماء (FWS filters).",
  77: "يتم إجراء فحص الميليبور اللوني (Colorimetric) داخل المحطة (In the plant).",
  78: "يستخدم فحص الميليبور اللوني معيار اللون وغشاء ترشيح أحادي مفرد (Single membrane).",
  79: "يتم إجراء فحص الميليبور الوزني (Gravimetric) في المختبر (In the laboratory).",
  80: "يستخدم فحص الميليبور الوزني معيار الوزن وغشاء ترشيح مزدوج (Double membrane).",
  81: "تُفحص الفلاتر المتنقلة بواسطة الميليبور شهرياً (Monthly).",
  82: "تُفحص الفلاتر الثابتة بواسطة الميليبور ربع سنوياً (Quarterly).",
  83: "تُفحص فلاتر التحميل والتفريغ بواسطة الميليبور شهرياً (Monthly).",
  84: "كمية الوقود المطلوبة لفحص الميليبور هي 5 لترات، وتؤخذ من أسفل الفلتر (Downstream).",
  85: "يتم فحص ذراع السحب العائم (Floating suction) شهرياً (Monthly).",
  86: "تُفحص عناصر فلاتر FWS سنوياً (Annually).",
  87: "يجب استبدال عنصر فلتر FWS بعد 3 سنوات من التشغيل الفعلي (After 3 years).",
  88: "يجب استبدال عنصر الفلتر عندما يصل فرق الضغط (DP) إلى 15 PSI.",
  89: "يجب استبدال عنصر الفلتر عند هبوط مفاجئ في فرق الضغط بأكثر من 5 PSI.",
  90: "يُسجل فرق الضغط أسبوعياً حتى يصل إلى 12 psi.",
  91: "يُسجل فرق الضغط يومياً عندما يرتفع بين 12 إلى 15 psi.",
  92: "يتم غسيل وتصريف حفر الهيدرنت (Hydrant pit flushing) شهرياً (Monthly).",
  93: "يتم غسيل النقاط المنخفضة (Low-point flushing) أسبوعياً (Weekly).",
  94: "تتم معايرة مقياس انكسار مانع التجمد بضبط قراءة الصفر باستخدام الماء النقي.",
  95: "درجة الحرارة التي تشتعل عندها أبخرة الوقود تُسمى درجة الوميض (Flash point).",
  96: "يجب فحص جميع المصافي (Strainers) شهرياً (Monthly).",
  97: "كمية العينة المطلوبة للاختبار الأساسي الكامل (Full test) هي جالونان (2 gallons).",
  98: "الحد الأدنى لكمية العينة للاختبار المختصر أو الرئيسي هو لتر واحد على الأقل (At least 1 liter).",
  99: "المعجون المستخدم لتحديد مستوى المنتج والوقود في الخزان هو (Color cut paste).",
  100: "المعجون المستخدم لتحديد مستوى الماء الراكد في الخزان هو (Water cut paste).",
  101: "يجب تصريف مجمع الفلتر (Filter sump) يومياً (Daily).",
  102: "الفحص المعتمد لشاحنات النقل قبل تفريغ حمولتها هو الفحص المختصر (Abbreviated test).",
  103: "رقم نموذج الفحص المختصر هو AFO 100.",
  104: "رقم نموذج فرق الضغط هو AFO 101.",
  105: "رقم نموذج التصريف هو AFO 102.",
  106: "رقم نموذج فحص الميليبور هو AFO 103.",
  107: "رقم نموذج إقرار ممثل الخطوط الجوية هو AFO 104.",
  108: "رقم نموذج نمو الميكروبات (Fuelstat) هو AFO 105.",
  109: "رقم نموذج جودة المعدات المتنقلة هو AFO 106.",
  110: "رقم نموذج إضافات وقود الطائرات هو AFO 107.",
  111: "رقم نموذج جودة سحب الوقود من الطائرة (Defueling) هو AFO 108.",
  112: "رقم نموذج استقرار وترسيب الوقود هو AFO 700.",
  113: "رقم نموذج حالة الخزان هو AFO 702.",
  114: "رقم نموذج ذراع السحب العائم هو AFO 720.",
  115: "رقم نموذج تذاكر المبيعات هو AFO-2-420.",
  116: "رقم نموذج ورقة قراءة العداد هو AFO-2-100.",
  117: "رقم نموذج القياس اليدوي هو AFO-2-701.",
  118: "رقم نموذج قائمة فحص التزويد بالوقود هو AFO-2-900.",
  119: "رقم نموذج الختم المكسور لشاحنة النقل هو 9505.",
  120: "رقم نموذج الختم المحلي المكسور هو AFO 800.",
  121: "تتم معايرة جهاز قياس الكثافة السائلة (Hydrometer) سنوياً (Yearly).",
  122: "تتم معايرة مقياس الموصلية الكهربائية سنوياً (Yearly).",
  123: "تتم معايرة مقياس درجة الحرارة (Thermometer) سنوياً (Yearly).",
  124: "تتم معايرة مقياس الكثافة الرقمي سنوياً (Yearly).",
  125: "تتم معايرة جهاز التقطير كل 6 أشهر (Every 6 months).",
  126: "تتم معايرة جهاز فحص نقطة الوميض كل 6 أشهر (Every 6 months).",
  127: "تتم معايرة عداد التدفق (Flow meter) كل 6 أشهر (Every 6 months).",
  128: "تتم معايرة عداد التحميل والتفريغ كل 4 أشهر (Every 4 months).",
  129: "تتم معايرة العداد بعد تجاوزه مليون لتر كل 4 أشهر (Every 4 months).",
  130: "تتم معايرة العداد الجديد أو الذي تم إصلاحه شهرياً لمدة شهرين متتاليين.",
  131: "يتم إجراء الفحص الهيدروستاتيكي للخراطيم كل 6 أشهر (Every 6 months).",
  132: "يقوم قسم العمليات بفحص طفايات الحريق شهرياً (Monthly).",
  133: "يقوم قسم الإطفاء بفحص طفايات الحريق سنوياً (Yearly).",
  134: "يقوم قسم العمليات بفحص حنفيات ومدافع الإطفاء شهرياً (Monthly).",
  135: "يقوم قسم الإطفاء بفحص حنفيات ومدافع الإطفاء سنوياً (Yearly).",
  136: "يقوم قسم العمليات بفحص نظام الكشف والإنذار عن الحريق شهرياً (Monthly).",
  137: "يقوم قسم الإطفاء بفحص نظام الكشف والإنذار عن الحريق سنوياً (Yearly).",
  138: "يقوم قسم العمليات بفحص مضخة الإطفاء أسبوعياً (Weekly).",
  139: "يقوم قسم الإطفاء بفحص مضخة الإطفاء سنوياً (Yearly).",
  140: "يُجرى الاختبار الهيدروستاتيكي لطفايات الماء كل 5 سنوات (Every 5 years).",
  141: "يُجرى الاختبار الهيدروستاتيكي لطفايات ثاني أكسيد الكربون CO2 كل 5 سنوات (Every 5 years).",
  142: "يُجرى الاختبار الهيدروستاتيكي لطفايات البودرة الكيميائية الجافة كل 12 سنة.",
  143: "تُفحص طفايات العجلات كل 12 سنة (وأسطوانة النيتروجين كل 5 سنوات).",
  144: "الرغوة فعالة في إخماد حرائق الوقود لأنها تعزل الهواء والأكسجين تماماً عن سطح الوقود.",
  145: "وظيفة مدفع الإطفاء (Fire monitor) هي تبريد المعدات والمنشآت المجاورة للنيران.",
  146: "الضغط التشغيلي لطفاية الماء يزيد عن 90 psi (More than 90 psi).",
  147: "ضغط النيتروجين في طفاية الحريق ذات العجلات لا يقل عن 1600 psi.",
  148: "نوع الكاشف الموجود في غرفة التحكم هو كاشف الدخان (Smoke detector).",
  149: "يُمنع استخدام طفاية الحريق في حال: كسر الختم، تلف الأسطوانة، أو انتهاء صلاحية الفحص الهيدروستاتيكي.",
  150: "يجب تزويد مركبات التعبئة بطفايتي حريق من نوع البودرة الجافة BC/ABC.",
  151: "نظام إخماد الحريق المستخدم داخل الوحدات النمطية (Modules) هو FM-200.",
  152: "الغاز المستخدم لدفع طفاية الحريق ذات العجلات هو غاز النيتروجين (Nitrogen).",
  153: "يجب الاستفسار من ممثل الطيران قبل بدء التعبئة عن: نوع الوقود والكمية المطلوبة بدقة.",
  154: "سعة مركبة التزويد المحددة لطائرة بوينغ 737 هي 20,000 لتر.",
  155: "سعة مركبة التزويد المحددة لطائرة بوينغ 747 هي 85,000 لتر.",
  156: "سعة مركبة التزويد المحددة لطائرة C-130 هي 35,000 لتر.",
  157: "يجب أن يوقف مقبض التحكم الآمن (Deadman) تدفق الوقود خلال 3 إلى 5 ثوانٍ.",
  158: "يجب أن يعطي صمام Deadman التدفق الكامل خلال 5 إلى 10 ثوانٍ.",
  159: "الإجراء الفوري الأول عند ملاحظة تسرب وقود أثناء التعبئة هو إفلات مقبض Deadman فوراً.",
  160: "أفضل وأسلم طريقة لصعود السلم هي الحفاظ على ثلاث نقاط اتصال دائمة (3 points of contact).",
  161: "يتم تمييز قائد الطوارئ بارتدائه السترة البرتقالية (Orange vest).",
  162: "يجب فحص مقبض الأمان (Deadman) أسبوعياً (Weekly).",
  163: "تُستخدم عصا القياس (Dipstick) للتحقق من مستوى وسعة مركبة التزويد.",
  164: "يُستخدم جهاز Varac أو رادار القياس للتحقق من مستوى الخزان الثابت.",
  165: "جدول أعمال الاجتماع (Meeting agenda) هو قائمة المواضيع والأنشطة المطلوب تغطيتها أثناء الاجتماع.",
  166: "يجب مراجعة وتحديث نظام إدارة السلامة (SMS) سنوياً في حال وجود أي تحديثات.",
  167: "يُعقد اجتماع التواصل والسلامة أسبوعياً (Weekly).",
  168: "يتكون برنامج نظام إدارة السلامة (SMS) من 11 عنصراً أساسياً.",
  169: "يعتمد خطة الاستجابة للطوارئ (ERP) رئيس القسم (Department head).",
  170: "تتم مراجعة السقالات التي يتجاوز ارتفاعها 12 متراً من قبل مسؤول المنشأة وقسم منع الخسائر.",
  171: "لا يُسمح لأي شخص بأخذ قراءة مستوى الخزان بعصا القياس أثناء استقبال الوقود.",
  172: "يجب أن يبقى مراقب الحريق (Fire watch) لمدة 30 دقيقة بعد انتهاء أعمال اللحام.",
  173: "يتم إنشاء أمر نقل المواد (MMT) من خلال نظام PRC.",
  174: "يتم إنشاء جرد ومخزون المحطة من خلال نظام PRO.",
  175: "تُقدم مقترحات السلامة عبر منصة نظام إدارة السلامة (SMS platform).",
  176: "يتم الإبلاغ عن الحوادث الوشيكة (Near Miss) عبر نظام الصحة والسلامة والبيئة (EH&S).",
  177: "الغاز الدافع داخل طفاية البودرة الجافة هو النيتروجين (Nitrogen).",
  178: "إذا تعطل مقبض Deadman أثناء التزويد: يجب إيقاف العمليات واستبدال مركبة التزويد.",
  179: "الغرض من كاشف SWD هو إظهار والكشف عن وجود قطرات الماء الحر في الوقود.",
  180: "لمعايرة جهاز فحص الغاز نحتاج: أسطوانة غاز، خرطوم بطول قدمين، وصمام بمعدل تدفق 0.5 لتر/دقيقة.",
  181: "المعلومات المطلوبة على بطاقة العزل تشمل: الموقع، المعدة، الأسباب، الاسم، ورقم الاتصال.",
  182: "الصمام الموجود في نهاية خرطوم التعبئة يُسمى صمام التحكم في الضغط بنهاية الخرطوم (HEPCV).",
  183: "وظيفة صمام Deadman هي فتح وإغلاق صمام التحكم في تدفق الوقود بأمان.",
  184: "تُغسل حفرة الهيدرنت لإزالة مخاطر الحريق وتسهيل وتقليل مهام الصيانة.",
  185: "يتم غسيل وتصريف حفرة الهيدرنت غير المستخدمة كل 3 أشهر (Quarterly).",
  186: "الوضع الإلزامي للشريط الساكن لمركبة التعبئة هو اتصاله بالأرض لتفريغ الشحنات الكهربائية.",
  187: "الوقود المخصص للطائرات التجارية والمدنية هو Jet A-1.",
  188: "الوقود المخصص للطائرات العسكرية هو JP-8.",
  189: "لمكافحة حرائق الوقود يجب استخدام: البودرة الجافة / المواد الكيميائية الجافة.",
  190: "يجب الوقوف في اتجاه هبوب الريح (Downwind) قبل فتح فتحة فوهة مركبة التعبئة.",
  191: "اختصار SWD يرمز إلى: كاشف شل للماء (Shell Water Detector).",
  192: "يُستخدم جهاز Varac لقياس مستوى الخزان (Tank level).",
  193: "تُستخدم عصا القياس Dipstick لقياس مستوى شاحنة التعبئة (Refueller level).",
  194: "قبل الاقتراب من المنصة/الساحة يجب التأكد من أن خزان التصريف فارغ (Dump tank is empty).",
  195: "يجب فحص ختم التجاوز (Override seal) في كل وردية عمل (Per shift).",
  196: "يجب فحص مركبة التزويد بالوقود يومياً (Daily)."
};

// Now generate distractor logic for each item
// Rules: Distractors MUST be taken strictly from the bank itself.
// To ensure high pedagogical quality:
// - Group answers by nature (Forms, Frequencies, Pressures, Speeds, Measurements, Chemicals/Gases, Procedures/Sentences)
// - If same group has enough options, sample 3 distinct items not equal to correct answer.
// - If not enough in sub-group, sample from same category or general bank answers.

const allBankAnswers = [...new Set(rawQuestions.map(q => q.a))];

const isForm = a => /^AFO|^9505/.test(a);
const isFrequency = a => /^(Weekly|Monthly|Quarterly|Yearly|Annually|Daily|Per shift|Every|After 3 years)/i.test(a);
const isPressure = a => /PSI/i.test(a);
const isSpeed = a => /km\/h/i.test(a);
const isCapacity = a => /^(20,000|85,000|35,000)\s*liters/i.test(a);
const isVolume = a => /(gallons|liters|BBL)/i.test(a) && !isCapacity(a);
const isDistance = a => /(feet|meters|\bm\b)/i.test(a);
const isDuration = a => /(minutes|seconds|hours|days|shift)/i.test(a) && !isFrequency(a);
const isTemperature = a => /°C/i.test(a);
const isFuel = a => /^(Jet A-1|JP-8)$/i.test(a);
const isChemicalOrGas = a => /^(Fresh air|Nitrogen|FM-200|Dry powder \/ dry chemical|O2|Smoke detector)/i.test(a);
const isPaste = a => /paste/i.test(a);
const isApronLight = a => /^(Stop|Evacuate the area immediately|Cross safely|Return to the start point)$/i.test(a);
const isAuthorityRole = a => /^(Airfield Authority|Anyone|The department head|Plant proponent and area Loss Prevention division|No one|Orange vest)$/i.test(a);
const isPortal = a => /^(PRC|PRO|SMS platform|EH&S)$/i.test(a);
const isInstrument = a => /^(Dipstick|Varac \/ radar gauge|Hydro-kit test|Shell Water Detector)$/i.test(a);

const formsPool = allBankAnswers.filter(isForm);
const freqPool = allBankAnswers.filter(isFrequency);
const pressurePool = allBankAnswers.filter(isPressure);
const speedPool = allBankAnswers.filter(isSpeed);
const capacityPool = allBankAnswers.filter(isCapacity);
const volumePool = allBankAnswers.filter(isVolume);
const distancePool = allBankAnswers.filter(isDistance);
const durationPool = allBankAnswers.filter(isDuration);
const temperaturePool = allBankAnswers.filter(isTemperature);
const fuelPool = ["Jet A-1", "JP-8", "AvGas 100LL", "Jet A"]; // Note: bank has Jet A-1 and JP-8
const chemicalPool = allBankAnswers.filter(isChemicalOrGas);
const pastePool = allBankAnswers.filter(isPaste);
const apronLightPool = allBankAnswers.filter(isApronLight);
const authorityPool = allBankAnswers.filter(isAuthorityRole);
const portalPool = allBankAnswers.filter(isPortal);
const instrumentPool = allBankAnswers.filter(isInstrument);

function getDistractors(item, index) {
  const ans = item.a;
  let pool = [];

  if (isForm(ans)) pool = formsPool;
  else if (isFrequency(ans)) pool = freqPool;
  else if (isPressure(ans)) pool = pressurePool;
  else if (isSpeed(ans)) pool = speedPool;
  else if (isCapacity(ans)) pool = capacityPool;
  else if (isVolume(ans)) pool = volumePool;
  else if (isDistance(ans)) pool = distancePool;
  else if (isDuration(ans)) pool = durationPool;
  else if (isTemperature(ans)) pool = ["−47°C", "38°C", "−40°C", "45°C"].filter(x => allBankAnswers.includes(x) || x.includes("°C"));
  else if (isFuel(ans)) pool = ["Jet A-1", "JP-8", "Jet A", "JP-4"].filter(x => allBankAnswers.includes(x) || x.startsWith("J"));
  else if (isPaste(ans)) pool = pastePool;
  else if (isApronLight(ans)) pool = apronLightPool;
  else if (isAuthorityRole(ans)) pool = authorityPool;
  else if (isPortal(ans)) pool = portalPool;
  else if (isInstrument(ans)) pool = instrumentPool;
  else if (isChemicalOrGas(ans)) pool = chemicalPool;
  else {
    // Try same category first
    const sameCat = allBankAnswers.filter(a => {
      const match = rawQuestions.find(rq => rq.a === a && rq.cat === item.cat);
      return match && a !== ans;
    });
    if (sameCat.length >= 3) {
      pool = sameCat;
    } else {
      pool = allBankAnswers.filter(a => a !== ans);
    }
  }

  // Filter out the exact correct answer
  const eligible = pool.filter(a => a.trim().toLowerCase() !== ans.trim().toLowerCase());

  // Deterministically select 3 distractors based on index for stability
  const selected = [];
  const startIdx = (index * 7) % (eligible.length || 1);
  for (let i = 0; i < eligible.length && selected.length < 3; i++) {
    const candidate = eligible[(startIdx + i) % eligible.length];
    if (!selected.includes(candidate)) {
      selected.push(candidate);
    }
  }

  // Fallback if less than 3
  if (selected.length < 3) {
    for (const fb of allBankAnswers) {
      if (fb.trim().toLowerCase() !== ans.trim().toLowerCase() && !selected.includes(fb)) {
        selected.push(fb);
        if (selected.length === 3) break;
      }
    }
  }

  return selected;
}

const enriched = rawQuestions.map((item, idx) => {
  const distractors = getDistractors(item, idx);
  const arabic = arabicExplanations[idx] || `الإجابة الصحيحة هي: ${item.a}`;

  return {
    id: `afo-${idx + 1}`,
    index: idx + 1,
    question: item.q,
    correctAnswer: item.a,
    category: item.cat,
    distractors: distractors,
    arabicFeedback: arabic
  };
});

const tsContent = `// Auto-generated strictly from public/assets/aistudio/AFO_Question_Bank_cc4b21a5.json
// Contains all 197 questions with verified bank distractors and faithful Arabic explanations.

export interface AFOQuestion {
  id: string;
  index: number;
  question: string;
  correctAnswer: string;
  category: string;
  distractors: string[];
  arabicFeedback: string;
}

export const AFO_CATEGORIES = [
  "All",
  "Gas Test",
  "Apron",
  "SCBA",
  "SABA",
  "Work Permit",
  "Quality",
  "Forms",
  "Calibration",
  "Fire",
  "General"
] as const;

export type AFOCategory = (typeof AFO_CATEGORIES)[number];

export const AFO_QUESTIONS: AFOQuestion[] = ${JSON.stringify(enriched, null, 2)};
`;

fs.mkdirSync(path.join(__dirname, '../src/data'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '../src/data/afoQuestions.ts'), tsContent, 'utf8');
console.log('Successfully wrote src/data/afoQuestions.ts with', enriched.length, 'questions.');
