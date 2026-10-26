// Auto-generated strictly from public/assets/aistudio/AFO_Question_Bank_cc4b21a5.json
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

export const AFO_QUESTIONS: AFOQuestion[] = [
  {
    "id": "afo-1",
    "index": 1,
    "question": "What is the recommended basis for gas monitor calibration?",
    "correctAnswer": "As per the manufacturer's recommendation",
    "category": "Gas Test",
    "distractors": [
      "Low battery",
      "Sensor failure",
      "100 feet"
    ],
    "arabicFeedback": "تتم معايرة جهاز كاشف الغاز بناءً على توصية الشركة المصنعة (As per manufacturer's recommendation)."
  },
  {
    "id": "afo-2",
    "index": 2,
    "question": "What does a single beep every 30 seconds on an MX4 indicate?",
    "correctAnswer": "Low battery",
    "category": "Gas Test",
    "distractors": [
      "Press On/Off → Sensor → Peak → OK",
      "3 (vibration, visible light, audible sound)",
      "Visual inspection, pump leak, function test, zeroing, clearing peaks"
    ],
    "arabicFeedback": "صفارة واحدة كل 30 ثانية في جهاز MX4 تشير إلى انخفاض شحن البطارية (Low battery)."
  },
  {
    "id": "afo-3",
    "index": 3,
    "question": "What does a double/trouble beep every 30 seconds on an MX4 indicate?",
    "correctAnswer": "Sensor failure",
    "category": "Gas Test",
    "distractors": [
      "For each 1 foot: 2 seconds + 2 minutes",
      "15 minutes",
      "O2 (high and low alarm)"
    ],
    "arabicFeedback": "صفارة مزدوجة/إنذار عطل كل 30 ثانية في جهاز MX4 تدل على عطل في المستشعر (Sensor failure)."
  },
  {
    "id": "afo-4",
    "index": 4,
    "question": "What is the maximum pump tube length?",
    "correctAnswer": "100 feet",
    "category": "Gas Test",
    "distractors": [
      "1.20 m",
      "775–840 kg/m³",
      "±3 kg/m³"
    ],
    "arabicFeedback": "أقصى طول مسموح به لأنبوب سحب المضخة هو 100 قدم (100 feet)."
  },
  {
    "id": "afo-5",
    "index": 5,
    "question": "How do you obtain the actual reading when using the pump tube?",
    "correctAnswer": "For each 1 foot: 2 seconds + 2 minutes",
    "category": "Gas Test",
    "distractors": [
      "30 minutes",
      "4–6 minutes",
      "90 days"
    ],
    "arabicFeedback": "لحساب القراءة الفعلية مع أنبوب المضخة: ثانيتان لكل قدم مسافة + دقيقتان إضافيتان (2 seconds + 2 minutes)."
  },
  {
    "id": "afo-6",
    "index": 6,
    "question": "How long must ventilation be OFF before conducting the gas test?",
    "correctAnswer": "15 minutes",
    "category": "Gas Test",
    "distractors": [
      "5–10 seconds",
      "For each 1 foot: 2 seconds + 2 minutes",
      "30 minutes"
    ],
    "arabicFeedback": "يجب إيقاف التهوية تماماً لمدة 15 دقيقة قبل أخذ قراءة فحص الغاز (15 minutes)."
  },
  {
    "id": "afo-7",
    "index": 7,
    "question": "Which gas has two alarm points in the gas monitor?",
    "correctAnswer": "O2 (high and low alarm)",
    "category": "Gas Test",
    "distractors": [
      "FM-200",
      "Nitrogen",
      "Dry powder / dry chemical"
    ],
    "arabicFeedback": "الغاز الذي يمتلك نقطتي إنذار (مرتفع ومنخفض) في كاشف الغاز هو الأكسجين O2."
  },
  {
    "id": "afo-8",
    "index": 8,
    "question": "How do you perform zeroing on the MX-6?",
    "correctAnswer": "Press On/Off → Sensor → Zeroing → OK",
    "category": "Gas Test",
    "distractors": [
      "15 minutes",
      "O2 (high and low alarm)",
      "Press On/Off → Sensor → Peak → OK"
    ],
    "arabicFeedback": "تصفير جهاز MX-6 يتم بالضغط على: On/Off ← Sensor ← Zeroing ← ثم OK."
  },
  {
    "id": "afo-9",
    "index": 9,
    "question": "How do you view Peak on the MX-6?",
    "correctAnswer": "Press On/Off → Sensor → Peak → OK",
    "category": "Gas Test",
    "distractors": [
      "Low battery",
      "Sensor failure",
      "100 feet"
    ],
    "arabicFeedback": "عرض أعلى قراءة (Peak) في جهاز MX-6: اضغط On/Off ← Sensor ← Peak ← ثم OK."
  },
  {
    "id": "afo-10",
    "index": 10,
    "question": "How many alarms does the MX-4 have?",
    "correctAnswer": "3 (vibration, visible light, audible sound)",
    "category": "Gas Test",
    "distractors": [
      "Press On/Off → Sensor → Peak → OK",
      "Visual inspection, pump leak, function test, zeroing, clearing peaks",
      "Deck station"
    ],
    "arabicFeedback": "يحتوي جهاز MX-4 على 3 أنواع من الإنذارات: الاهتزاز، الإضاءة المرئية، والصوت المسموع."
  },
  {
    "id": "afo-11",
    "index": 11,
    "question": "What is included in the daily inspection of the gas tester?",
    "correctAnswer": "Visual inspection, pump leak, function test, zeroing, clearing peaks",
    "category": "Gas Test",
    "distractors": [
      "For each 1 foot: 2 seconds + 2 minutes",
      "15 minutes",
      "O2 (high and low alarm)"
    ],
    "arabicFeedback": "الفحص اليومي لجهاز فحص الغاز يشمل: الفحص البصري، تسريب المضخة، فحص الوظائف، التصفير، ومسح قمم القراءات (Clearing peaks)."
  },
  {
    "id": "afo-12",
    "index": 12,
    "question": "Where is local calibration of the gas test monitor performed?",
    "correctAnswer": "Deck station",
    "category": "Gas Test",
    "distractors": [
      "As per the manufacturer's recommendation",
      "Low battery",
      "Sensor failure"
    ],
    "arabicFeedback": "تتم المعايرة المحلية لجهاز فحص الغاز في محطة المنصة (Deck station)."
  },
  {
    "id": "afo-13",
    "index": 13,
    "question": "What action is not allowed for a refueler around aircraft?",
    "correctAnswer": "Reversing",
    "category": "Apron",
    "distractors": [
      "Bottom-loading shut-off valve (overfill valve)",
      "More than 5 sq. m² / more than 10,000 BBL",
      "Between 100 and 10,000 BBL"
    ],
    "arabicFeedback": "يُحظر تماماً على مركبة تزويد الوقود الرجوع للخلف (Reversing) في محيط الطائرة."
  },
  {
    "id": "afo-14",
    "index": 14,
    "question": "What does a steady red apron light mean?",
    "correctAnswer": "Stop",
    "category": "Apron",
    "distractors": [
      "Cross safely",
      "Return to the start point",
      "Evacuate the area immediately"
    ],
    "arabicFeedback": "إضاءة ساحة الطيران (Apron) الحمراء الثابتة تعني: التوقف التام (Stop)."
  },
  {
    "id": "afo-15",
    "index": 15,
    "question": "What does a flashing red apron light mean?",
    "correctAnswer": "Evacuate the area immediately",
    "category": "Apron",
    "distractors": [
      "Return to the start point",
      "Stop",
      "Cross safely"
    ],
    "arabicFeedback": "إضاءة ساحة الطيران الحمراء الوامضة تعني: إخلاء المنطقة على الفور (Evacuate immediately)."
  },
  {
    "id": "afo-16",
    "index": 16,
    "question": "What does a steady green apron light mean?",
    "correctAnswer": "Cross safely",
    "category": "Apron",
    "distractors": [
      "Stop",
      "Evacuate the area immediately",
      "Return to the start point"
    ],
    "arabicFeedback": "إضاءة ساحة الطيران الخضراء الثابتة تعني: العبور بأمان (Cross safely)."
  },
  {
    "id": "afo-17",
    "index": 17,
    "question": "What does a flashing white apron light mean?",
    "correctAnswer": "Return to the start point",
    "category": "Apron",
    "distractors": [
      "Evacuate the area immediately",
      "Cross safely",
      "Stop"
    ],
    "arabicFeedback": "إضاءة ساحة الطيران البيضاء الوامضة تعني: العودة إلى نقطة البداية (Return to start point)."
  },
  {
    "id": "afo-18",
    "index": 18,
    "question": "When are you allowed to park around aircraft?",
    "correctAnswer": "Aircraft engine and lights OFF, plus representative approval",
    "category": "Apron",
    "distractors": [
      "A clear exit",
      "Beside the aircraft",
      "Hydro-kit test (water detector test)"
    ],
    "arabicFeedback": "يُسمح بركن المعدات حول الطائرة فقط عند إطفاء المحركات والأنوار والحصول على موافقة ممثل الطيران."
  },
  {
    "id": "afo-19",
    "index": 19,
    "question": "What must you prepare before parking around an aircraft?",
    "correctAnswer": "A clear exit",
    "category": "Apron",
    "distractors": [
      "25 km/h",
      "15 km/h",
      "5 km/h"
    ],
    "arabicFeedback": "يجب التأكد من وجود مخرج واضح وخالٍ من العوائق (Clear exit) قبل الركن حول الطائرة."
  },
  {
    "id": "afo-20",
    "index": 20,
    "question": "Where must the mobile dispenser be parked during hot refueling?",
    "correctAnswer": "Beside the aircraft",
    "category": "Apron",
    "distractors": [
      "Reversing",
      "Stop",
      "Evacuate the area immediately"
    ],
    "arabicFeedback": "أثناء التزويد الساخن (Hot refueling)، يجب ركن الموزع المتنقل بجانب الطائرة (Beside aircraft)."
  },
  {
    "id": "afo-21",
    "index": 21,
    "question": "What should be performed at the beginning of aircraft refueling?",
    "correctAnswer": "Hydro-kit test (water detector test)",
    "category": "Apron",
    "distractors": [
      "Beside the aircraft",
      "Bottom-loading shut-off valve (overfill valve)",
      "More than 5 sq. m² / more than 10,000 BBL"
    ],
    "arabicFeedback": "يجب إجراء فحص كاشف الماء (Hydro-kit test) في بداية عملية تزويد الطائرة بالوقود."
  },
  {
    "id": "afo-22",
    "index": 22,
    "question": "What should be checked after starting to refill/load the refueler?",
    "correctAnswer": "Bottom-loading shut-off valve (overfill valve)",
    "category": "Apron",
    "distractors": [
      "5 km/h",
      "Aircraft hose, then the intake hose",
      "Intake hose, then aircraft hose"
    ],
    "arabicFeedback": "يجب فحص صمام الإغلاق للتعبئة السفلية (صمام منع الفيضان) مباشرة بعد بدء التعبئة."
  },
  {
    "id": "afo-23",
    "index": 23,
    "question": "What defines a major spill in the source?",
    "correctAnswer": "More than 5 sq. m² / more than 10,000 BBL",
    "category": "Apron",
    "distractors": [
      "5 liters, downstream of the filter",
      "2 gallons",
      "Between 100 and 10,000 BBL"
    ],
    "arabicFeedback": "يُعرّف الانسكاب الكبير (Major spill) بأنه أكثر من 5 م² أو أكثر من 10,000 برميل."
  },
  {
    "id": "afo-24",
    "index": 24,
    "question": "What volume range defines a medium spill in the source?",
    "correctAnswer": "Between 100 and 10,000 BBL",
    "category": "Apron",
    "distractors": [
      "Between 3–5 sq. m² / less than 100 BBL",
      "5 liters, downstream of the filter",
      "2 gallons"
    ],
    "arabicFeedback": "الانسكاب المتوسط (Medium spill) يتراوح حجمه بين 100 إلى 10,000 برميل."
  },
  {
    "id": "afo-25",
    "index": 25,
    "question": "What defines a minor spill in the source?",
    "correctAnswer": "Between 3–5 sq. m² / less than 100 BBL",
    "category": "Apron",
    "distractors": [
      "More than 5 sq. m² / more than 10,000 BBL",
      "Between 100 and 10,000 BBL",
      "5 liters, downstream of the filter"
    ],
    "arabicFeedback": "يُعرّف الانسكاب الطفيف (Minor spill) بأنه بين 3–5 م² أو أقل من 100 برميل."
  },
  {
    "id": "afo-26",
    "index": 26,
    "question": "What is the speed limit on the main road?",
    "correctAnswer": "25 km/h",
    "category": "Apron",
    "distractors": [
      "5 km/h",
      "15 km/h",
      "As per the manufacturer's recommendation"
    ],
    "arabicFeedback": "السرعة القصوى المحددة على الطريق الرئيسي هي 25 كم/ساعة (25 km/h)."
  },
  {
    "id": "afo-27",
    "index": 27,
    "question": "What is the speed limit on the apron?",
    "correctAnswer": "15 km/h",
    "category": "Apron",
    "distractors": [
      "25 km/h",
      "5 km/h",
      "As per the manufacturer's recommendation"
    ],
    "arabicFeedback": "السرعة القصوى على ساحة المطار (Apron) هي 15 كم/ساعة (15 km/h)."
  },
  {
    "id": "afo-28",
    "index": 28,
    "question": "What is the speed limit around/behind aircraft?",
    "correctAnswer": "5 km/h",
    "category": "Apron",
    "distractors": [
      "15 km/h",
      "25 km/h",
      "As per the manufacturer's recommendation"
    ],
    "arabicFeedback": "السرعة القصوى المسموحة حول وخلف الطائرات هي 5 كم/ساعة (5 km/h)."
  },
  {
    "id": "afo-29",
    "index": 29,
    "question": "What is the speed limit at the passenger terminal?",
    "correctAnswer": "5 km/h",
    "category": "Apron",
    "distractors": [
      "25 km/h",
      "15 km/h",
      "As per the manufacturer's recommendation"
    ],
    "arabicFeedback": "السرعة القصوى عند صالة الركاب (Passenger terminal) هي 5 كم/ساعة (5 km/h)."
  },
  {
    "id": "afo-30",
    "index": 30,
    "question": "Which hose is connected first?",
    "correctAnswer": "Aircraft hose, then the intake hose",
    "category": "Apron",
    "distractors": [
      "25 km/h",
      "15 km/h",
      "5 km/h"
    ],
    "arabicFeedback": "عند التوصيل: يتم توصيل خرطوم الطائرة أولاً ثم خرطوم السحب (Intake hose)."
  },
  {
    "id": "afo-31",
    "index": 31,
    "question": "Which hose is disconnected first?",
    "correctAnswer": "Intake hose, then aircraft hose",
    "category": "Apron",
    "distractors": [
      "Stop",
      "Evacuate the area immediately",
      "Cross safely"
    ],
    "arabicFeedback": "عند الفصل: يتم فصل خرطوم السحب أولاً ثم خرطوم الطائرة."
  },
  {
    "id": "afo-32",
    "index": 32,
    "question": "What must be connected before refueling begins?",
    "correctAnswer": "Ground/bonding to earth",
    "category": "Apron",
    "distractors": [
      "Hydro-kit test (water detector test)",
      "Bottom-loading shut-off valve (overfill valve)",
      "More than 5 sq. m² / more than 10,000 BBL"
    ],
    "arabicFeedback": "يجب توصيل سلك التأريض والتفريغ الكهربائي (Ground/bonding) قبل البدء في تزويد الوقود."
  },
  {
    "id": "afo-33",
    "index": 33,
    "question": "Who issues the apron driving authority license?",
    "correctAnswer": "Airfield Authority",
    "category": "Apron",
    "distractors": [
      "No one",
      "Anyone",
      "Orange vest"
    ],
    "arabicFeedback": "الجهة المخولة بإصدار تصريح القيادة في ساحة المطار هي هيئة المطار (Airfield Authority)."
  },
  {
    "id": "afo-34",
    "index": 34,
    "question": "What is the normal duration of SCBA?",
    "correctAnswer": "30 minutes",
    "category": "SCBA",
    "distractors": [
      "2 minutes",
      "3–5 seconds",
      "5–10 seconds"
    ],
    "arabicFeedback": "المدة التشغيلية القياسية لجهاز التنفس المستقل (SCBA) هي 30 دقيقة (30 minutes)."
  },
  {
    "id": "afo-35",
    "index": 35,
    "question": "What is the full pressure inside SCBA?",
    "correctAnswer": "2216 PSI",
    "category": "SCBA",
    "distractors": [
      "More than 90 psi",
      "At least 1600 psi",
      "500 PSI (25%)"
    ],
    "arabicFeedback": "الضغط الكامل داخل أسطوانة SCBA هو 2216 رطل/بوصة² (2216 PSI)."
  },
  {
    "id": "afo-36",
    "index": 36,
    "question": "When does SCBA give an alarm/vibration in terms of remaining time?",
    "correctAnswer": "4–6 minutes",
    "category": "SCBA",
    "distractors": [
      "30 minutes",
      "90 days",
      "One shift / 8 hours"
    ],
    "arabicFeedback": "يطلق جهاز SCBA إنذاراً بالاهتزاز عند بقاء 4–6 دقائق من الهواء."
  },
  {
    "id": "afo-37",
    "index": 37,
    "question": "At what remaining pressure does SCBA give an alarm/vibration?",
    "correctAnswer": "500 PSI (25%)",
    "category": "SCBA",
    "distractors": [
      "2216 PSI",
      "15 PSI",
      "More than 90 psi"
    ],
    "arabicFeedback": "يطلق جهاز SCBA إنذاراً عند انخفاض الضغط المتبقي إلى 500 PSI (أي 25%)."
  },
  {
    "id": "afo-38",
    "index": 38,
    "question": "How often is the SCBA cylinder hydro-tested?",
    "correctAnswer": "Every 5 years",
    "category": "SCBA",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يتم إجراء الفحص الهيدروستاتيكي لأسطوانة SCBA كل 5 سنوات (Every 5 years)."
  },
  {
    "id": "afo-39",
    "index": 39,
    "question": "How often does Operations perform visual SCBA inspection?",
    "correctAnswer": "Weekly",
    "category": "SCBA",
    "distractors": [
      "Every 5 years",
      "Monthly",
      "Yearly"
    ],
    "arabicFeedback": "يقوم قسم العمليات بالفحص البصري لجهاز SCBA أسبوعياً (Weekly)."
  },
  {
    "id": "afo-40",
    "index": 40,
    "question": "How often is the SCBA record inspection performed?",
    "correctAnswer": "Monthly",
    "category": "SCBA",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يتم فحص وتدقيق سجلات جهاز SCBA شهرياً (Monthly)."
  },
  {
    "id": "afo-41",
    "index": 41,
    "question": "How often does the Fire Department inspect SCBA?",
    "correctAnswer": "Yearly",
    "category": "SCBA",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "يقوم قسم الإطفاء (Fire Department) بفحص جهاز SCBA سنوياً (Yearly)."
  },
  {
    "id": "afo-42",
    "index": 42,
    "question": "What must be checked before using SCBA?",
    "correctAnswer": "Pressure, inspection date, mask cleanliness, hose leakage",
    "category": "SCBA",
    "distractors": [
      "2216 PSI",
      "4–6 minutes",
      "500 PSI (25%)"
    ],
    "arabicFeedback": "قبل استخدام SCBA يجب التأكد من: الضغط، تاريخ الفحص، نظافة القناع، وعدم تسريب الخرطوم."
  },
  {
    "id": "afo-43",
    "index": 43,
    "question": "How should the SCBA pressure hose be tightened?",
    "correctAnswer": "Hand-tightened",
    "category": "SCBA",
    "distractors": [
      "Pressure, inspection date, mask cleanliness, hose leakage",
      "Fresh air",
      "Red"
    ],
    "arabicFeedback": "يجب إحكام شد خرطوم ضغط SCBA يدوياً فقط (Hand-tightened) دون استخدام أدوات."
  },
  {
    "id": "afo-44",
    "index": 44,
    "question": "What type of gas is used for SCBA?",
    "correctAnswer": "Fresh air",
    "category": "SCBA",
    "distractors": [
      "Smoke detector",
      "FM-200",
      "Nitrogen"
    ],
    "arabicFeedback": "الغاز المستخدم داخل أسطوانة SCBA هو الهواء النقي المضغوط (Fresh air)."
  },
  {
    "id": "afo-45",
    "index": 45,
    "question": "What is the color of the SCBA bypass?",
    "correctAnswer": "Red",
    "category": "SCBA",
    "distractors": [
      "30 minutes",
      "2216 PSI",
      "4–6 minutes"
    ],
    "arabicFeedback": "لون صمام التجاوز (Bypass valve) في جهاز SCBA هو اللون الأحمر (Red)."
  },
  {
    "id": "afo-46",
    "index": 46,
    "question": "What is SABA used for?",
    "correctAnswer": "Long work activities",
    "category": "SABA",
    "distractors": [
      "Shell Water Detector",
      "Tank level",
      "Refueller level"
    ],
    "arabicFeedback": "يُستخدم نظام إمداد الهواء المستمر (SABA) في الأنشطة والأعمال الطويلة (Long work activities)."
  },
  {
    "id": "afo-47",
    "index": 47,
    "question": "What is the maximum SABA hose length?",
    "correctAnswer": "300 feet",
    "category": "SABA",
    "distractors": [
      "50–600 pS/m",
      "Gas cylinder, 2 feet tubing, and a valve with 0.5 LPM flow rate",
      "100 feet"
    ],
    "arabicFeedback": "أقصى طول مسموح به لخرطوم نظام SABA هو 300 قدم (300 feet)."
  },
  {
    "id": "afo-48",
    "index": 48,
    "question": "Who has the authority to stop unsafe work?",
    "correctAnswer": "Anyone",
    "category": "Work Permit",
    "distractors": [
      "No one",
      "Airfield Authority",
      "Orange vest"
    ],
    "arabicFeedback": "يحق لأي شخص (Anyone) إيقاف أي عمل غير آمن على الفور حفاظاً على السلامة."
  },
  {
    "id": "afo-49",
    "index": 49,
    "question": "What is primary isolation?",
    "correctAnswer": "One valve closed / two valves closed and bleed (drain)",
    "category": "Work Permit",
    "distractors": [
      "Lifeline / rescue rope",
      "1.20 m",
      "90 days"
    ],
    "arabicFeedback": "العزل الأولي (Primary isolation) يتم بإغلاق صمام واحد أو إغلاق صمامين والتفريغ بينهما."
  },
  {
    "id": "afo-50",
    "index": 50,
    "question": "What is positive isolation?",
    "correctAnswer": "Blind / disconnect",
    "category": "Work Permit",
    "distractors": [
      "Anyone",
      "One valve closed / two valves closed and bleed (drain)",
      "Lifeline / rescue rope"
    ],
    "arabicFeedback": "العزل الإيجابي/المطلق (Positive isolation) يتم بالتركيب الأعمى (Blind) أو الفصل المادي."
  },
  {
    "id": "afo-51",
    "index": 51,
    "question": "How does the standby person communicate with the entrance?",
    "correctAnswer": "Lifeline / rescue rope",
    "category": "Work Permit",
    "distractors": [
      "Time and reason for cancellation; issue a new permit after the issue is cleared",
      "Weekly",
      "Anyone"
    ],
    "arabicFeedback": "يتواصل المراقب الواقف بالخارج مع الداخل بواسطة حبل النجاة/الإنقاذ (Lifeline / rescue rope)."
  },
  {
    "id": "afo-52",
    "index": 52,
    "question": "At what excavation depth is it considered a confined space?",
    "correctAnswer": "1.20 m",
    "category": "Work Permit",
    "distractors": [
      "150–600 pS/m",
      "50–600 pS/m",
      "Gas cylinder, 2 feet tubing, and a valve with 0.5 LPM flow rate"
    ],
    "arabicFeedback": "يُعتبر الحفر مكاناً محصوراً (Confined space) إذا بلغ عمقه 1.20 متر (1.20 m)."
  },
  {
    "id": "afo-53",
    "index": 53,
    "question": "How long should work permits be retained?",
    "correctAnswer": "90 days",
    "category": "Work Permit",
    "distractors": [
      "One shift / 8 hours",
      "3 hours",
      "2 minutes"
    ],
    "arabicFeedback": "يجب الاحتفاظ بتصاريح العمل المغلقة لمدة 90 يوماً (90 days)."
  },
  {
    "id": "afo-54",
    "index": 54,
    "question": "How often must a local audit of work permits be conducted?",
    "correctAnswer": "Weekly",
    "category": "Work Permit",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يجب إجراء تدقيق محلي (Local audit) لتصاريح العمل أسبوعياً (Weekly)."
  },
  {
    "id": "afo-55",
    "index": 55,
    "question": "For how long can a work permit be extended?",
    "correctAnswer": "One shift / 8 hours",
    "category": "Work Permit",
    "distractors": [
      "For each 1 foot: 2 seconds + 2 minutes",
      "15 minutes",
      "30 minutes"
    ],
    "arabicFeedback": "يمكن تمديد تصريح العمل لمدة وردية واحدة / 8 ساعات (One shift / 8 hours)."
  },
  {
    "id": "afo-56",
    "index": 56,
    "question": "What should be used when work requires many locks?",
    "correctAnswer": "Multi-locks / multi-box",
    "category": "Work Permit",
    "distractors": [
      "One shift / 8 hours",
      "Time and reason for cancellation; issue a new permit after the issue is cleared",
      "Weekly"
    ],
    "arabicFeedback": "عندما يتطلب العمل استخدام أقفال متعددة، يُستخدم صندوق الأقفال المتعددة (Multi-locks / multi-box)."
  },
  {
    "id": "afo-57",
    "index": 57,
    "question": "What should be recorded if a permit is cancelled for an emergency?",
    "correctAnswer": "Time and reason for cancellation; issue a new permit after the issue is cleared",
    "category": "Work Permit",
    "distractors": [
      "1.20 m",
      "90 days",
      "One shift / 8 hours"
    ],
    "arabicFeedback": "في حال إلغاء التصريح لحالة طارئة: يُسجل وقت وسبب الإلغاء، ويصدر تصريح جديد بعد زوال الطارئ."
  },
  {
    "id": "afo-58",
    "index": 58,
    "question": "What is the color of JP-8?",
    "correctAnswer": "Colorless / water bright",
    "category": "Quality",
    "distractors": [
      "Daily",
      "Adjust the 0 reading using water",
      "Flash point"
    ],
    "arabicFeedback": "لون وقود الطائرات العسكري JP-8 هو عديم اللون وشديد النقاوة (Colorless / water bright)."
  },
  {
    "id": "afo-59",
    "index": 59,
    "question": "What is the freezing point of JP-8?",
    "correctAnswer": "−47°C",
    "category": "Quality",
    "distractors": [
      "−40°C",
      "45°C",
      "38°C"
    ],
    "arabicFeedback": "نقطة تجمد وقود JP-8 هي -47 درجة مئوية (−47°C)."
  },
  {
    "id": "afo-60",
    "index": 60,
    "question": "What is the settling time for a JP-8 tank?",
    "correctAnswer": "3 hours",
    "category": "Quality",
    "distractors": [
      "5–10 seconds",
      "For each 1 foot: 2 seconds + 2 minutes",
      "15 minutes"
    ],
    "arabicFeedback": "زمن استقرار وترسيب خزان وقود JP-8 هو 3 ساعات (3 hours)."
  },
  {
    "id": "afo-61",
    "index": 61,
    "question": "What is the JP-8 density range?",
    "correctAnswer": "775–840 kg/m³",
    "category": "Quality",
    "distractors": [
      "150–600 pS/m",
      "50–600 pS/m",
      "Gas cylinder, 2 feet tubing, and a valve with 0.5 LPM flow rate"
    ],
    "arabicFeedback": "نطاق كثافة وقود JP-8 يتراوح بين 775 إلى 840 كغم/م³ (775–840 kg/m³)."
  },
  {
    "id": "afo-62",
    "index": 62,
    "question": "What batch density variation is allowed?",
    "correctAnswer": "±3 kg/m³",
    "category": "Quality",
    "distractors": [
      "1.20 m",
      "775–840 kg/m³",
      "150–600 pS/m"
    ],
    "arabicFeedback": "التباين المسموح به في كثافة الشحنة الواحدة هو ±3 كغم/م³ (±3 kg/m³)."
  },
  {
    "id": "afo-63",
    "index": 63,
    "question": "What is the JP-8 conductivity range?",
    "correctAnswer": "150–600 pS/m",
    "category": "Quality",
    "distractors": [
      "Between 3–5 sq. m² / less than 100 BBL",
      "300 feet",
      "1.20 m"
    ],
    "arabicFeedback": "نطاق الموصلية الكهربائية لوقود JP-8 هو 150 إلى 600 pS/m."
  },
  {
    "id": "afo-64",
    "index": 64,
    "question": "What is the Jet A-1 conductivity range?",
    "correctAnswer": "50–600 pS/m",
    "category": "Quality",
    "distractors": [
      "100 feet",
      "More than 5 sq. m² / more than 10,000 BBL",
      "Between 3–5 sq. m² / less than 100 BBL"
    ],
    "arabicFeedback": "نطاق الموصلية الكهربائية لوقود Jet A-1 هو 50 إلى 600 pS/m."
  },
  {
    "id": "afo-65",
    "index": 65,
    "question": "What is the icing-inhibitor percentage?",
    "correctAnswer": "0.07–0.10%",
    "category": "Quality",
    "distractors": [
      "3 hours",
      "775–840 kg/m³",
      "±3 kg/m³"
    ],
    "arabicFeedback": "نسبة مانع التجمد (Icing inhibitor) المضافة للوقود هي 0.07–0.10%."
  },
  {
    "id": "afo-66",
    "index": 66,
    "question": "Which tests are listed under the abbreviated test?",
    "correctAnswer": "C/B, density, temperature, conductivity, anti-icing",
    "category": "Quality",
    "distractors": [
      "38°C",
      "2 minutes",
      "30 PPM"
    ],
    "arabicFeedback": "الفحص المختصر (Abbreviated test) يشمل: C/B، الكثافة، الحرارة، الموصلية، ومانع التجمد."
  },
  {
    "id": "afo-67",
    "index": 67,
    "question": "Which test is listed under the key test?",
    "correctAnswer": "Distillation",
    "category": "Quality",
    "distractors": [
      "After T&I",
      "FWS filters",
      "In the plant"
    ],
    "arabicFeedback": "الفحص الرئيسي (Key test) المعتمد للوقود هو اختبار التقطير (Distillation)."
  },
  {
    "id": "afo-68",
    "index": 68,
    "question": "What is the flash point of JP-8?",
    "correctAnswer": "38°C",
    "category": "Quality",
    "distractors": [
      "−40°C",
      "45°C",
      "−47°C"
    ],
    "arabicFeedback": "درجة وميض وقود JP-8 هي 38 درجة مئوية (38°C)."
  },
  {
    "id": "afo-69",
    "index": 69,
    "question": "How long does the Hydro Kit test take?",
    "correctAnswer": "2 minutes",
    "category": "Quality",
    "distractors": [
      "5–10 seconds",
      "For each 1 foot: 2 seconds + 2 minutes",
      "15 minutes"
    ],
    "arabicFeedback": "يستغرق اختبار كاشف الماء (Hydro Kit test) دقيقتين (2 minutes)."
  },
  {
    "id": "afo-70",
    "index": 70,
    "question": "What is the minimum Hydro Kit water reading?",
    "correctAnswer": "30 PPM",
    "category": "Quality",
    "distractors": [
      "Colorless / water bright",
      "−47°C",
      "3 hours"
    ],
    "arabicFeedback": "الحد الأدنى لقراءة الماء في فحص Hydro Kit هو 30 جزء في المليون (30 PPM)."
  },
  {
    "id": "afo-71",
    "index": 71,
    "question": "What reading is indicated when the water detector changes from yellow to pale green?",
    "correctAnswer": "5 PPM",
    "category": "Quality",
    "distractors": [
      "0.07–0.10%",
      "C/B, density, temperature, conductivity, anti-icing",
      "Distillation"
    ],
    "arabicFeedback": "عند تحول كاشف الماء من الأصفر إلى الأخضر الباهت، تشير القراءة إلى 5 PPM."
  },
  {
    "id": "afo-72",
    "index": 72,
    "question": "What reading is indicated when the water detector changes from yellow to green/blue?",
    "correctAnswer": "30 PPM",
    "category": "Quality",
    "distractors": [
      "Annually",
      "At the interface between fuel and water",
      "After T&I"
    ],
    "arabicFeedback": "عند تحول كاشف الماء من الأصفر إلى الأخضر/الأزرق، تشير القراءة إلى 30 PPM."
  },
  {
    "id": "afo-73",
    "index": 73,
    "question": "What is the water detector used to assure?",
    "correctAnswer": "That fuel is water-free",
    "category": "Quality",
    "distractors": [
      "Weight standard; double membrane",
      "Quarterly",
      "5 liters, downstream of the filter"
    ],
    "arabicFeedback": "يُستخدم كاشف الماء للتأكد من خلو الوقود تماماً من قطرات الماء المعلقة."
  },
  {
    "id": "afo-74",
    "index": 74,
    "question": "How often is microbial growth testing conducted for aviation tanks?",
    "correctAnswer": "Annually",
    "category": "Quality",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يُجرى فحص نمو الميكروبات والبكتيريا في خزانات الطيران سنوياً (Annually)."
  },
  {
    "id": "afo-75",
    "index": 75,
    "question": "Where is microbe/bacteria found in fuel tanks?",
    "correctAnswer": "At the interface between fuel and water",
    "category": "Quality",
    "distractors": [
      "Weekly",
      "Monthly",
      "Colorless / water bright"
    ],
    "arabicFeedback": "تتواجد الميكروبات والبكتيريا في خزانات الوقود عند نقطة التماس والفاصل بين الوقود والماء."
  },
  {
    "id": "afo-76",
    "index": 76,
    "question": "When is a soak test used for aviation tanks?",
    "correctAnswer": "After T&I",
    "category": "Quality",
    "distractors": [
      "150–600 pS/m",
      "50–600 pS/m",
      "0.07–0.10%"
    ],
    "arabicFeedback": "يُجرى اختبار النقع (Soak test) لخزانات الطيران بعد الانتهاء من التفتيش والإصلاح (After T&I)."
  },
  {
    "id": "afo-77",
    "index": 77,
    "question": "What is a Millipore test used for?",
    "correctAnswer": "FWS filters",
    "category": "Quality",
    "distractors": [
      "30 PPM",
      "5 PPM",
      "That fuel is water-free"
    ],
    "arabicFeedback": "يُستخدم فحص الميليبور (Millipore test) لتقييم فلاتر فصل الوقود والماء (FWS filters)."
  },
  {
    "id": "afo-78",
    "index": 78,
    "question": "Where is the colorimetric Millipore test conducted?",
    "correctAnswer": "In the plant",
    "category": "Quality",
    "distractors": [
      "Color standard; single membrane",
      "In the laboratory",
      "Weight standard; double membrane"
    ],
    "arabicFeedback": "يتم إجراء فحص الميليبور اللوني (Colorimetric) داخل المحطة (In the plant)."
  },
  {
    "id": "afo-79",
    "index": 79,
    "question": "What standard and membrane are used for the colorimetric Millipore test?",
    "correctAnswer": "Color standard; single membrane",
    "category": "Quality",
    "distractors": [
      "More than 5",
      "Daily",
      "Adjust the 0 reading using water"
    ],
    "arabicFeedback": "يستخدم فحص الميليبور اللوني معيار اللون وغشاء ترشيح أحادي مفرد (Single membrane)."
  },
  {
    "id": "afo-80",
    "index": 80,
    "question": "Where is the gravimetric Millipore test conducted?",
    "correctAnswer": "In the laboratory",
    "category": "Quality",
    "distractors": [
      "Water cut paste",
      "Abbreviated test",
      "Weekly"
    ],
    "arabicFeedback": "يتم إجراء فحص الميليبور الوزني (Gravimetric) في المختبر (In the laboratory)."
  },
  {
    "id": "afo-81",
    "index": 81,
    "question": "What standard and membrane are used for the gravimetric Millipore test?",
    "correctAnswer": "Weight standard; double membrane",
    "category": "Quality",
    "distractors": [
      "775–840 kg/m³",
      "±3 kg/m³",
      "150–600 pS/m"
    ],
    "arabicFeedback": "يستخدم فحص الميليبور الوزني معيار الوزن وغشاء ترشيح مزدوج (Double membrane)."
  },
  {
    "id": "afo-82",
    "index": 82,
    "question": "How often are mobile filters tested by Millipore?",
    "correctAnswer": "Monthly",
    "category": "Quality",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "تُفحص الفلاتر المتنقلة بواسطة الميليبور شهرياً (Monthly)."
  },
  {
    "id": "afo-83",
    "index": 83,
    "question": "How often are fixed filters tested by Millipore?",
    "correctAnswer": "Quarterly",
    "category": "Quality",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "تُفحص الفلاتر الثابتة بواسطة الميليبور ربع سنوياً (Quarterly)."
  },
  {
    "id": "afo-84",
    "index": 84,
    "question": "How often are loading/offloading filters tested by Millipore?",
    "correctAnswer": "Monthly",
    "category": "Quality",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "تُفحص فلاتر التحميل والتفريغ بواسطة الميليبور شهرياً (Monthly)."
  },
  {
    "id": "afo-85",
    "index": 85,
    "question": "What fuel quantity is required for a Millipore test, and where is it collected?",
    "correctAnswer": "5 liters, downstream of the filter",
    "category": "Quality",
    "distractors": [
      "More than 5 sq. m² / more than 10,000 BBL",
      "Between 100 and 10,000 BBL",
      "Between 3–5 sq. m² / less than 100 BBL"
    ],
    "arabicFeedback": "كمية الوقود المطلوبة لفحص الميليبور هي 5 لترات، وتؤخذ من أسفل الفلتر (Downstream)."
  },
  {
    "id": "afo-86",
    "index": 86,
    "question": "How often is the floating suction test performed?",
    "correctAnswer": "Monthly",
    "category": "Quality",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يتم فحص ذراع السحب العائم (Floating suction) شهرياً (Monthly)."
  },
  {
    "id": "afo-87",
    "index": 87,
    "question": "How often are FWS filter elements inspected?",
    "correctAnswer": "Annually",
    "category": "Quality",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "تُفحص عناصر فلاتر FWS سنوياً (Annually)."
  },
  {
    "id": "afo-88",
    "index": 88,
    "question": "When should an FWS filter element be changed according to operating time?",
    "correctAnswer": "After 3 years of operation",
    "category": "Quality",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يجب استبدال عنصر فلتر FWS بعد 3 سنوات من التشغيل الفعلي (After 3 years)."
  },
  {
    "id": "afo-89",
    "index": 89,
    "question": "At what differential pressure should an FWS filter element be changed?",
    "correctAnswer": "15 PSI",
    "category": "Quality",
    "distractors": [
      "2216 PSI",
      "500 PSI (25%)",
      "More than 90 psi"
    ],
    "arabicFeedback": "يجب استبدال عنصر الفلتر عندما يصل فرق الضغط (DP) إلى 15 PSI."
  },
  {
    "id": "afo-90",
    "index": 90,
    "question": "What DP drop is listed as a filter-element change condition?",
    "correctAnswer": "More than 5",
    "category": "Quality",
    "distractors": [
      "Flash point",
      "2 gallons",
      "At least 1 liter"
    ],
    "arabicFeedback": "يجب استبدال عنصر الفلتر عند هبوط مفاجئ في فرق الضغط بأكثر من 5 PSI."
  },
  {
    "id": "afo-91",
    "index": 91,
    "question": "How often is DP recorded until it reaches 12 psi?",
    "correctAnswer": "Weekly",
    "category": "Quality",
    "distractors": [
      "Every 5 years",
      "Monthly",
      "Yearly"
    ],
    "arabicFeedback": "يُسجل فرق الضغط أسبوعياً حتى يصل إلى 12 psi."
  },
  {
    "id": "afo-92",
    "index": 92,
    "question": "How often is DP recorded until it reaches 15 psi?",
    "correctAnswer": "Daily",
    "category": "Quality",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يُسجل فرق الضغط يومياً عندما يرتفع بين 12 إلى 15 psi."
  },
  {
    "id": "afo-93",
    "index": 93,
    "question": "How often is hydrant pit flushing performed?",
    "correctAnswer": "Monthly",
    "category": "Quality",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Yearly"
    ],
    "arabicFeedback": "يتم غسيل وتصريف حفر الهيدرنت (Hydrant pit flushing) شهرياً (Monthly)."
  },
  {
    "id": "afo-94",
    "index": 94,
    "question": "How often is low-point flushing performed?",
    "correctAnswer": "Weekly",
    "category": "Quality",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يتم غسيل النقاط المنخفضة (Low-point flushing) أسبوعياً (Weekly)."
  },
  {
    "id": "afo-95",
    "index": 95,
    "question": "How is the icing-inhibitor refractometer calibrated?",
    "correctAnswer": "Adjust the 0 reading using water",
    "category": "Quality",
    "distractors": [
      "More than 5",
      "Daily",
      "Flash point"
    ],
    "arabicFeedback": "تتم معايرة مقياس انكسار مانع التجمد بضبط قراءة الصفر باستخدام الماء النقي."
  },
  {
    "id": "afo-96",
    "index": 96,
    "question": "What is the temperature at which vapors will ignite called?",
    "correctAnswer": "Flash point",
    "category": "Quality",
    "distractors": [
      "Abbreviated test",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "درجة الحرارة التي تشتعل عندها أبخرة الوقود تُسمى درجة الوميض (Flash point)."
  },
  {
    "id": "afo-97",
    "index": 97,
    "question": "How often must all strainers be inspected?",
    "correctAnswer": "Monthly",
    "category": "Quality",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Yearly"
    ],
    "arabicFeedback": "يجب فحص جميع المصافي (Strainers) شهرياً (Monthly)."
  },
  {
    "id": "afo-98",
    "index": 98,
    "question": "What sample quantity is required for a basic/full test?",
    "correctAnswer": "2 gallons",
    "category": "Quality",
    "distractors": [
      "5 liters, downstream of the filter",
      "More than 5 sq. m² / more than 10,000 BBL",
      "Between 100 and 10,000 BBL"
    ],
    "arabicFeedback": "كمية العينة المطلوبة للاختبار الأساسي الكامل (Full test) هي جالونان (2 gallons)."
  },
  {
    "id": "afo-99",
    "index": 99,
    "question": "What is the minimum sample quantity for an abbreviated/key test?",
    "correctAnswer": "At least 1 liter",
    "category": "Quality",
    "distractors": [
      "FWS filters",
      "In the plant",
      "Color standard; single membrane"
    ],
    "arabicFeedback": "الحد الأدنى لكمية العينة للاختبار المختصر أو الرئيسي هو لتر واحد على الأقل (At least 1 liter)."
  },
  {
    "id": "afo-100",
    "index": 100,
    "question": "Which paste is used to determine product level in a tank?",
    "correctAnswer": "Color cut paste",
    "category": "Quality",
    "distractors": [
      "Water cut paste",
      "As per the manufacturer's recommendation",
      "Low battery"
    ],
    "arabicFeedback": "المعجون المستخدم لتحديد مستوى المنتج والوقود في الخزان هو (Color cut paste)."
  },
  {
    "id": "afo-101",
    "index": 101,
    "question": "Which paste is used to determine water level in a tank?",
    "correctAnswer": "Water cut paste",
    "category": "Quality",
    "distractors": [
      "Color cut paste",
      "As per the manufacturer's recommendation",
      "Low battery"
    ],
    "arabicFeedback": "المعجون المستخدم لتحديد مستوى الماء الراكد في الخزان هو (Water cut paste)."
  },
  {
    "id": "afo-102",
    "index": 102,
    "question": "When should the filter sump be drained?",
    "correctAnswer": "Daily",
    "category": "Quality",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يجب تصريف مجمع الفلتر (Filter sump) يومياً (Daily)."
  },
  {
    "id": "afo-103",
    "index": 103,
    "question": "What type of test is conducted for hauler trucks before emptying/offloading?",
    "correctAnswer": "Abbreviated test",
    "category": "Quality",
    "distractors": [
      "Distillation",
      "38°C",
      "2 minutes"
    ],
    "arabicFeedback": "الفحص المعتمد لشاحنات النقل قبل تفريغ حمولتها هو الفحص المختصر (Abbreviated test)."
  },
  {
    "id": "afo-104",
    "index": 104,
    "question": "What is the form number for an abbreviated test?",
    "correctAnswer": "AFO 100",
    "category": "Forms",
    "distractors": [
      "AFO 108",
      "AFO 700",
      "AFO 702"
    ],
    "arabicFeedback": "رقم نموذج الفحص المختصر هو AFO 100."
  },
  {
    "id": "afo-105",
    "index": 105,
    "question": "What is the form number for differential pressure?",
    "correctAnswer": "AFO 101",
    "category": "Forms",
    "distractors": [
      "AFO-2-900",
      "9505",
      "AFO 800"
    ],
    "arabicFeedback": "رقم نموذج فرق الضغط هو AFO 101."
  },
  {
    "id": "afo-106",
    "index": 106,
    "question": "What is the form number for drain forms?",
    "correctAnswer": "AFO 102",
    "category": "Forms",
    "distractors": [
      "AFO 105",
      "AFO 106",
      "AFO 107"
    ],
    "arabicFeedback": "رقم نموذج التصريف هو AFO 102."
  },
  {
    "id": "afo-107",
    "index": 107,
    "question": "What is the form number for Millipore test?",
    "correctAnswer": "AFO 103",
    "category": "Forms",
    "distractors": [
      "AFO-2-420",
      "AFO-2-100",
      "AFO-2-701"
    ],
    "arabicFeedback": "رقم نموذج فحص الميليبور هو AFO 103."
  },
  {
    "id": "afo-108",
    "index": 108,
    "question": "What is the form number for Airlines Representative Acknowledgment?",
    "correctAnswer": "AFO 104",
    "category": "Forms",
    "distractors": [
      "AFO 101",
      "AFO 102",
      "AFO 103"
    ],
    "arabicFeedback": "رقم نموذج إقرار ممثل الخطوط الجوية هو AFO 104."
  },
  {
    "id": "afo-109",
    "index": 109,
    "question": "What is the form number for Microbial Growth (Fuelstat)?",
    "correctAnswer": "AFO 105",
    "category": "Forms",
    "distractors": [
      "AFO 700",
      "AFO 702",
      "AFO 720"
    ],
    "arabicFeedback": "رقم نموذج نمو الميكروبات (Fuelstat) هو AFO 105."
  },
  {
    "id": "afo-110",
    "index": 110,
    "question": "What is the form number for mobile equipment quality?",
    "correctAnswer": "AFO 106",
    "category": "Forms",
    "distractors": [
      "9505",
      "AFO 800",
      "AFO 100"
    ],
    "arabicFeedback": "رقم نموذج جودة المعدات المتنقلة هو AFO 106."
  },
  {
    "id": "afo-111",
    "index": 111,
    "question": "What is the form number for Jet Fuel Additivities?",
    "correctAnswer": "AFO 107",
    "category": "Forms",
    "distractors": [
      "AFO 105",
      "AFO 106",
      "AFO 108"
    ],
    "arabicFeedback": "رقم نموذج إضافات وقود الطائرات هو AFO 107."
  },
  {
    "id": "afo-112",
    "index": 112,
    "question": "What is the form number for defueling quality?",
    "correctAnswer": "AFO 108",
    "category": "Forms",
    "distractors": [
      "AFO-2-100",
      "AFO-2-701",
      "AFO-2-900"
    ],
    "arabicFeedback": "رقم نموذج جودة سحب الوقود من الطائرة (Defueling) هو AFO 108."
  },
  {
    "id": "afo-113",
    "index": 113,
    "question": "What is the form number for product settling?",
    "correctAnswer": "AFO 700",
    "category": "Forms",
    "distractors": [
      "AFO 102",
      "AFO 103",
      "AFO 104"
    ],
    "arabicFeedback": "رقم نموذج استقرار وترسيب الوقود هو AFO 700."
  },
  {
    "id": "afo-114",
    "index": 114,
    "question": "What is the form number for tank status?",
    "correctAnswer": "AFO 702",
    "category": "Forms",
    "distractors": [
      "AFO 700",
      "AFO 720",
      "AFO-2-420"
    ],
    "arabicFeedback": "رقم نموذج حالة الخزان هو AFO 702."
  },
  {
    "id": "afo-115",
    "index": 115,
    "question": "What is the form number for floating suction?",
    "correctAnswer": "AFO 720",
    "category": "Forms",
    "distractors": [
      "AFO 800",
      "AFO 100",
      "AFO 101"
    ],
    "arabicFeedback": "رقم نموذج ذراع السحب العائم هو AFO 720."
  },
  {
    "id": "afo-116",
    "index": 116,
    "question": "What is the form number for sales tickets?",
    "correctAnswer": "AFO-2-420",
    "category": "Forms",
    "distractors": [
      "AFO 106",
      "AFO 107",
      "AFO 108"
    ],
    "arabicFeedback": "رقم نموذج تذاكر المبيعات هو AFO-2-420."
  },
  {
    "id": "afo-117",
    "index": 117,
    "question": "What is the form number for meter sheet?",
    "correctAnswer": "AFO-2-100",
    "category": "Forms",
    "distractors": [
      "AFO-2-701",
      "AFO-2-900",
      "9505"
    ],
    "arabicFeedback": "رقم نموذج ورقة قراءة العداد هو AFO-2-100."
  },
  {
    "id": "afo-118",
    "index": 118,
    "question": "What is the form number for manual gauge?",
    "correctAnswer": "AFO-2-701",
    "category": "Forms",
    "distractors": [
      "AFO 103",
      "AFO 104",
      "AFO 105"
    ],
    "arabicFeedback": "رقم نموذج القياس اليدوي هو AFO-2-701."
  },
  {
    "id": "afo-119",
    "index": 119,
    "question": "What is the form number for refueling checklist?",
    "correctAnswer": "AFO-2-900",
    "category": "Forms",
    "distractors": [
      "AFO 702",
      "AFO 720",
      "AFO-2-420"
    ],
    "arabicFeedback": "رقم نموذج قائمة فحص التزويد بالوقود هو AFO-2-900."
  },
  {
    "id": "afo-120",
    "index": 120,
    "question": "What is the form number for a broken hauler seal?",
    "correctAnswer": "9505",
    "category": "Forms",
    "distractors": [
      "AFO 100",
      "AFO 101",
      "AFO 102"
    ],
    "arabicFeedback": "رقم نموذج الختم المكسور لشاحنة النقل هو 9505."
  },
  {
    "id": "afo-121",
    "index": 121,
    "question": "What is the form number for a broken local seal?",
    "correctAnswer": "AFO 800",
    "category": "Forms",
    "distractors": [
      "AFO 107",
      "AFO 108",
      "AFO 700"
    ],
    "arabicFeedback": "رقم نموذج الختم المحلي المكسور هو AFO 800."
  },
  {
    "id": "afo-122",
    "index": 122,
    "question": "How often is a hydrometer calibrated?",
    "correctAnswer": "Yearly",
    "category": "Calibration",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "تتم معايرة جهاز قياس الكثافة السائلة (Hydrometer) سنوياً (Yearly)."
  },
  {
    "id": "afo-123",
    "index": 123,
    "question": "How often is conductivity calibrated?",
    "correctAnswer": "Yearly",
    "category": "Calibration",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "تتم معايرة مقياس الموصلية الكهربائية سنوياً (Yearly)."
  },
  {
    "id": "afo-124",
    "index": 124,
    "question": "How often is the thermometer calibrated?",
    "correctAnswer": "Yearly",
    "category": "Calibration",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "تتم معايرة مقياس درجة الحرارة (Thermometer) سنوياً (Yearly)."
  },
  {
    "id": "afo-125",
    "index": 125,
    "question": "How often is digital density calibrated?",
    "correctAnswer": "Yearly",
    "category": "Calibration",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "تتم معايرة مقياس الكثافة الرقمي سنوياً (Yearly)."
  },
  {
    "id": "afo-126",
    "index": 126,
    "question": "How often is distillation calibrated?",
    "correctAnswer": "Every 6 months",
    "category": "Calibration",
    "distractors": [
      "Daily",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "تتم معايرة جهاز التقطير كل 6 أشهر (Every 6 months)."
  },
  {
    "id": "afo-127",
    "index": 127,
    "question": "How often is flash point calibrated?",
    "correctAnswer": "Every 6 months",
    "category": "Calibration",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "تتم معايرة جهاز فحص نقطة الوميض كل 6 أشهر (Every 6 months)."
  },
  {
    "id": "afo-128",
    "index": 128,
    "question": "How often is the flow meter calibrated?",
    "correctAnswer": "Every 6 months",
    "category": "Calibration",
    "distractors": [
      "Daily",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "تتم معايرة عداد التدفق (Flow meter) كل 6 أشهر (Every 6 months)."
  },
  {
    "id": "afo-129",
    "index": 129,
    "question": "How often is the loading/unloading meter calibrated?",
    "correctAnswer": "Every 4 months",
    "category": "Calibration",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "تتم معايرة عداد التحميل والتفريغ كل 4 أشهر (Every 4 months)."
  },
  {
    "id": "afo-130",
    "index": 130,
    "question": "How often is a meter calibrated after exceeding 1 million liters?",
    "correctAnswer": "Every 4 months",
    "category": "Calibration",
    "distractors": [
      "Daily",
      "Every 6 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "تتم معايرة العداد بعد تجاوزه مليون لتر كل 4 أشهر (Every 4 months)."
  },
  {
    "id": "afo-131",
    "index": 131,
    "question": "How often is a repaired or new meter calibrated during the first two months?",
    "correctAnswer": "Monthly for 2 months",
    "category": "Calibration",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "تتم معايرة العداد الجديد أو الذي تم إصلاحه شهرياً لمدة شهرين متتاليين."
  },
  {
    "id": "afo-132",
    "index": 132,
    "question": "How often are hoses hydro-tested?",
    "correctAnswer": "Every 6 months",
    "category": "Calibration",
    "distractors": [
      "Daily",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يتم إجراء الفحص الهيدروستاتيكي للخراطيم كل 6 أشهر (Every 6 months)."
  },
  {
    "id": "afo-133",
    "index": 133,
    "question": "How often does Operations inspect fire extinguishers?",
    "correctAnswer": "Monthly",
    "category": "Fire",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Yearly"
    ],
    "arabicFeedback": "يقوم قسم العمليات بفحص طفايات الحريق شهرياً (Monthly)."
  },
  {
    "id": "afo-134",
    "index": 134,
    "question": "How often does the Fire Department inspect fire extinguishers?",
    "correctAnswer": "Yearly",
    "category": "Fire",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يقوم قسم الإطفاء بفحص طفايات الحريق سنوياً (Yearly)."
  },
  {
    "id": "afo-135",
    "index": 135,
    "question": "How often does Operations inspect fire hydrants and fire monitors?",
    "correctAnswer": "Monthly",
    "category": "Fire",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Yearly"
    ],
    "arabicFeedback": "يقوم قسم العمليات بفحص حنفيات ومدافع الإطفاء شهرياً (Monthly)."
  },
  {
    "id": "afo-136",
    "index": 136,
    "question": "How often does the Fire Department inspect fire hydrants and fire monitors?",
    "correctAnswer": "Yearly",
    "category": "Fire",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يقوم قسم الإطفاء بفحص حنفيات ومدافع الإطفاء سنوياً (Yearly)."
  },
  {
    "id": "afo-137",
    "index": 137,
    "question": "How often does Operations inspect the fire detection and alarm system?",
    "correctAnswer": "Monthly",
    "category": "Fire",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Yearly"
    ],
    "arabicFeedback": "يقوم قسم العمليات بفحص نظام الكشف والإنذار عن الحريق شهرياً (Monthly)."
  },
  {
    "id": "afo-138",
    "index": 138,
    "question": "How often does the Fire Department inspect the fire detection and alarm system?",
    "correctAnswer": "Yearly",
    "category": "Fire",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يقوم قسم الإطفاء بفحص نظام الكشف والإنذار عن الحريق سنوياً (Yearly)."
  },
  {
    "id": "afo-139",
    "index": 139,
    "question": "How often does Operations inspect the fire pump?",
    "correctAnswer": "Weekly",
    "category": "Fire",
    "distractors": [
      "Every 5 years",
      "Monthly",
      "Yearly"
    ],
    "arabicFeedback": "يقوم قسم العمليات بفحص مضخة الإطفاء أسبوعياً (Weekly)."
  },
  {
    "id": "afo-140",
    "index": 140,
    "question": "How often does the Fire Department inspect the fire pump?",
    "correctAnswer": "Yearly",
    "category": "Fire",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يقوم قسم الإطفاء بفحص مضخة الإطفاء سنوياً (Yearly)."
  },
  {
    "id": "afo-141",
    "index": 141,
    "question": "How often is a water fire extinguisher hydro-tested?",
    "correctAnswer": "Every 5 years",
    "category": "Fire",
    "distractors": [
      "Weekly",
      "Monthly",
      "Yearly"
    ],
    "arabicFeedback": "يُجرى الاختبار الهيدروستاتيكي لطفايات الماء كل 5 سنوات (Every 5 years)."
  },
  {
    "id": "afo-142",
    "index": 142,
    "question": "How often is a CO2 fire extinguisher hydro-tested?",
    "correctAnswer": "Every 5 years",
    "category": "Fire",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يُجرى الاختبار الهيدروستاتيكي لطفايات ثاني أكسيد الكربون CO2 كل 5 سنوات (Every 5 years)."
  },
  {
    "id": "afo-143",
    "index": 143,
    "question": "How often is a dry chemical fire extinguisher hydro-tested?",
    "correctAnswer": "Every 12 years",
    "category": "Fire",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "يُجرى الاختبار الهيدروستاتيكي لطفايات البودرة الكيميائية الجافة كل 12 سنة."
  },
  {
    "id": "afo-144",
    "index": 144,
    "question": "How often is a wheel fire extinguisher hydro-tested?",
    "correctAnswer": "Every 12 years (nitrogen cylinder: every 5 years)",
    "category": "Fire",
    "distractors": [
      "Daily",
      "Every 6 months",
      "Every 4 months"
    ],
    "arabicFeedback": "تُفحص طفايات العجلات كل 12 سنة (وأسطوانة النيتروجين كل 5 سنوات)."
  },
  {
    "id": "afo-145",
    "index": 145,
    "question": "Why is foam effective for fighting fuel fires?",
    "correctAnswer": "It isolates the air from the fuel",
    "category": "Fire",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "الرغوة فعالة في إخماد حرائق الوقود لأنها تعزل الهواء والأكسجين تماماً عن سطح الوقود."
  },
  {
    "id": "afo-146",
    "index": 146,
    "question": "What is the function of a fire monitor?",
    "correctAnswer": "To cool down equipment near a fire",
    "category": "Fire",
    "distractors": [
      "More than 90 psi",
      "At least 1600 psi",
      "Smoke detector"
    ],
    "arabicFeedback": "وظيفة مدفع الإطفاء (Fire monitor) هي تبريد المعدات والمنشآت المجاورة للنيران."
  },
  {
    "id": "afo-147",
    "index": 147,
    "question": "What is the pressure of a water fire extinguisher?",
    "correctAnswer": "More than 90 psi",
    "category": "Fire",
    "distractors": [
      "15 PSI",
      "At least 1600 psi",
      "2216 PSI"
    ],
    "arabicFeedback": "الضغط التشغيلي لطفاية الماء يزيد عن 90 psi (More than 90 psi)."
  },
  {
    "id": "afo-148",
    "index": 148,
    "question": "What is the nitrogen pressure for a wheel fire extinguisher?",
    "correctAnswer": "At least 1600 psi",
    "category": "Fire",
    "distractors": [
      "500 PSI (25%)",
      "15 PSI",
      "More than 90 psi"
    ],
    "arabicFeedback": "ضغط النيتروجين في طفاية الحريق ذات العجلات لا يقل عن 1600 psi."
  },
  {
    "id": "afo-149",
    "index": 149,
    "question": "What type of detector is located in the control room?",
    "correctAnswer": "Smoke detector",
    "category": "Fire",
    "distractors": [
      "Fresh air",
      "FM-200",
      "Nitrogen"
    ],
    "arabicFeedback": "نوع الكاشف الموجود في غرفة التحكم هو كاشف الدخان (Smoke detector)."
  },
  {
    "id": "afo-150",
    "index": 150,
    "question": "When must a fire extinguisher not be used?",
    "correctAnswer": "Broken seal, cylinder damage, or expired hydro-test",
    "category": "Fire",
    "distractors": [
      "To cool down equipment near a fire",
      "More than 90 psi",
      "At least 1600 psi"
    ],
    "arabicFeedback": "يُمنع استخدام طفاية الحريق في حال: كسر الختم، تلف الأسطوانة، أو انتهاء صلاحية الفحص الهيدروستاتيكي."
  },
  {
    "id": "afo-151",
    "index": 151,
    "question": "How many fire extinguishers should refuelers be equipped with, and what type?",
    "correctAnswer": "2 dry powder BC/ABC fire extinguishers",
    "category": "Fire",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "يجب تزويد مركبات التعبئة بطفايتي حريق من نوع البودرة الجافة BC/ABC."
  },
  {
    "id": "afo-152",
    "index": 152,
    "question": "What type of fire system is used in modules?",
    "correctAnswer": "FM-200",
    "category": "Fire",
    "distractors": [
      "Smoke detector",
      "Nitrogen",
      "Dry powder / dry chemical"
    ],
    "arabicFeedback": "نظام إخماد الحريق المستخدم داخل الوحدات النمطية (Modules) هو FM-200."
  },
  {
    "id": "afo-153",
    "index": 153,
    "question": "What type of gas is used in a wheel fire extinguisher?",
    "correctAnswer": "Nitrogen",
    "category": "Fire",
    "distractors": [
      "Dry powder / dry chemical",
      "O2 (high and low alarm)",
      "Fresh air"
    ],
    "arabicFeedback": "الغاز المستخدم لدفع طفاية الحريق ذات العجلات هو غاز النيتروجين (Nitrogen)."
  },
  {
    "id": "afo-154",
    "index": 154,
    "question": "What should you ask the representative before refueling?",
    "correctAnswer": "Product type and quantity",
    "category": "General",
    "distractors": [
      "PRC",
      "PRO",
      "SMS platform"
    ],
    "arabicFeedback": "يجب الاستفسار من ممثل الطيران قبل بدء التعبئة عن: نوع الوقود والكمية المطلوبة بدقة."
  },
  {
    "id": "afo-155",
    "index": 155,
    "question": "Which refueler capacity is listed for a Boeing 737?",
    "correctAnswer": "20,000 liters",
    "category": "General",
    "distractors": [
      "85,000 liters",
      "35,000 liters",
      "As per the manufacturer's recommendation"
    ],
    "arabicFeedback": "سعة مركبة التزويد المحددة لطائرة بوينغ 737 هي 20,000 لتر."
  },
  {
    "id": "afo-156",
    "index": 156,
    "question": "Which refueler capacity is listed for a Boeing 747?",
    "correctAnswer": "85,000 liters",
    "category": "General",
    "distractors": [
      "35,000 liters",
      "20,000 liters",
      "As per the manufacturer's recommendation"
    ],
    "arabicFeedback": "سعة مركبة التزويد المحددة لطائرة بوينغ 747 هي 85,000 لتر."
  },
  {
    "id": "afo-157",
    "index": 157,
    "question": "Which refueler capacity is listed for a C-130?",
    "correctAnswer": "35,000 liters",
    "category": "General",
    "distractors": [
      "20,000 liters",
      "85,000 liters",
      "As per the manufacturer's recommendation"
    ],
    "arabicFeedback": "سعة مركبة التزويد المحددة لطائرة C-130 هي 35,000 لتر."
  },
  {
    "id": "afo-158",
    "index": 158,
    "question": "How quickly must the deadman stop fuel delivery?",
    "correctAnswer": "3–5 seconds",
    "category": "General",
    "distractors": [
      "15 minutes",
      "30 minutes",
      "4–6 minutes"
    ],
    "arabicFeedback": "يجب أن يوقف مقبض التحكم الآمن (Deadman) تدفق الوقود خلال 3 إلى 5 ثوانٍ."
  },
  {
    "id": "afo-159",
    "index": 159,
    "question": "How quickly should the deadman give full flow rate?",
    "correctAnswer": "5–10 seconds",
    "category": "General",
    "distractors": [
      "3–5 seconds",
      "For each 1 foot: 2 seconds + 2 minutes",
      "15 minutes"
    ],
    "arabicFeedback": "يجب أن يعطي صمام Deadman التدفق الكامل خلال 5 إلى 10 ثوانٍ."
  },
  {
    "id": "afo-160",
    "index": 160,
    "question": "What is the first action if you observe a fuel leak during refueling?",
    "correctAnswer": "Release the deadman",
    "category": "General",
    "distractors": [
      "PRC",
      "PRO",
      "SMS platform"
    ],
    "arabicFeedback": "الإجراء الفوري الأول عند ملاحظة تسرب وقود أثناء التعبئة هو إفلات مقبض Deadman فوراً."
  },
  {
    "id": "afo-161",
    "index": 161,
    "question": "What is the best way to climb a ladder?",
    "correctAnswer": "Maintain 3 points of contact",
    "category": "General",
    "distractors": [
      "Location, equipment, reasons, name, contact number",
      "Hose End Pressure Control Valve (HEPCV)",
      "To open and close the flow control valve"
    ],
    "arabicFeedback": "أفضل وأسلم طريقة لصعود السلم هي الحفاظ على ثلاث نقاط اتصال دائمة (3 points of contact)."
  },
  {
    "id": "afo-162",
    "index": 162,
    "question": "How can the emergency commander be recognized?",
    "correctAnswer": "Orange vest",
    "category": "General",
    "distractors": [
      "The department head",
      "Plant proponent and area Loss Prevention division",
      "No one"
    ],
    "arabicFeedback": "يتم تمييز قائد الطوارئ بارتدائه السترة البرتقالية (Orange vest)."
  },
  {
    "id": "afo-163",
    "index": 163,
    "question": "How often must the deadman be inspected?",
    "correctAnswer": "Weekly",
    "category": "General",
    "distractors": [
      "Every 5 years",
      "Monthly",
      "Yearly"
    ],
    "arabicFeedback": "يجب فحص مقبض الأمان (Deadman) أسبوعياً (Weekly)."
  },
  {
    "id": "afo-164",
    "index": 164,
    "question": "What is used to check the refueler capacity level?",
    "correctAnswer": "Dipstick",
    "category": "General",
    "distractors": [
      "Shell Water Detector",
      "Varac / radar gauge",
      "As per the manufacturer's recommendation"
    ],
    "arabicFeedback": "تُستخدم عصا القياس (Dipstick) للتحقق من مستوى وسعة مركبة التزويد."
  },
  {
    "id": "afo-165",
    "index": 165,
    "question": "What is used to check the tank capacity level?",
    "correctAnswer": "Varac / radar gauge",
    "category": "General",
    "distractors": [
      "Dipstick",
      "Shell Water Detector",
      "As per the manufacturer's recommendation"
    ],
    "arabicFeedback": "يُستخدم جهاز Varac أو رادار القياس للتحقق من مستوى الخزان الثابت."
  },
  {
    "id": "afo-166",
    "index": 166,
    "question": "What is the meeting agenda?",
    "correctAnswer": "Topics or activities that need to be covered during the meeting",
    "category": "General",
    "distractors": [
      "PRC",
      "PRO",
      "SMS platform"
    ],
    "arabicFeedback": "جدول أعمال الاجتماع (Meeting agenda) هو قائمة المواضيع والأنشطة المطلوب تغطيتها أثناء الاجتماع."
  },
  {
    "id": "afo-167",
    "index": 167,
    "question": "How often should SMS be updated or modified if there is an update?",
    "correctAnswer": "Yearly if there is any update",
    "category": "General",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "يجب مراجعة وتحديث نظام إدارة السلامة (SMS) سنوياً في حال وجود أي تحديثات."
  },
  {
    "id": "afo-168",
    "index": 168,
    "question": "How often is the communication and safety meeting conducted?",
    "correctAnswer": "Weekly",
    "category": "General",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يُعقد اجتماع التواصل والسلامة أسبوعياً (Weekly)."
  },
  {
    "id": "afo-169",
    "index": 169,
    "question": "How many elements are in the SMS program?",
    "correctAnswer": "11 elements",
    "category": "General",
    "distractors": [
      "30 minutes",
      "Weekly",
      "Quarterly"
    ],
    "arabicFeedback": "يتكون برنامج نظام إدارة السلامة (SMS) من 11 عنصراً أساسياً."
  },
  {
    "id": "afo-170",
    "index": 170,
    "question": "Who approves the ERP?",
    "correctAnswer": "The department head",
    "category": "General",
    "distractors": [
      "Plant proponent and area Loss Prevention division",
      "No one",
      "Airfield Authority"
    ],
    "arabicFeedback": "يعتمد خطة الاستجابة للطوارئ (ERP) رئيس القسم (Department head)."
  },
  {
    "id": "afo-171",
    "index": 171,
    "question": "Who reviews scaffolding taller than 12 meters?",
    "correctAnswer": "Plant proponent and area Loss Prevention division",
    "category": "General",
    "distractors": [
      "Airfield Authority",
      "Anyone",
      "Orange vest"
    ],
    "arabicFeedback": "تتم مراجعة السقالات التي يتجاوز ارتفاعها 12 متراً من قبل مسؤول المنشأة وقسم منع الخسائر."
  },
  {
    "id": "afo-172",
    "index": 172,
    "question": "Who is allowed to take tank level by dipstick gauge during receiving?",
    "correctAnswer": "No one",
    "category": "General",
    "distractors": [
      "Orange vest",
      "The department head",
      "Plant proponent and area Loss Prevention division"
    ],
    "arabicFeedback": "لا يُسمح لأي شخص بأخذ قراءة مستوى الخزان بعصا القياس أثناء استقبال الوقود."
  },
  {
    "id": "afo-173",
    "index": 173,
    "question": "How long must the fire watch remain after welding is completed?",
    "correctAnswer": "30 minutes",
    "category": "General",
    "distractors": [
      "3–5 seconds",
      "5–10 seconds",
      "For each 1 foot: 2 seconds + 2 minutes"
    ],
    "arabicFeedback": "يجب أن يبقى مراقب الحريق (Fire watch) لمدة 30 دقيقة بعد انتهاء أعمال اللحام."
  },
  {
    "id": "afo-174",
    "index": 174,
    "question": "Where is an MMT created from?",
    "correctAnswer": "PRC",
    "category": "General",
    "distractors": [
      "EH&S",
      "PRO",
      "SMS platform"
    ],
    "arabicFeedback": "يتم إنشاء أمر نقل المواد (MMT) من خلال نظام PRC."
  },
  {
    "id": "afo-175",
    "index": 175,
    "question": "Where is the plant inventory created from?",
    "correctAnswer": "PRO",
    "category": "General",
    "distractors": [
      "PRC",
      "SMS platform",
      "EH&S"
    ],
    "arabicFeedback": "يتم إنشاء جرد ومخزون المحطة من خلال نظام PRO."
  },
  {
    "id": "afo-176",
    "index": 176,
    "question": "Where are safety suggestions submitted?",
    "correctAnswer": "SMS platform",
    "category": "General",
    "distractors": [
      "PRO",
      "EH&S",
      "PRC"
    ],
    "arabicFeedback": "تُقدم مقترحات السلامة عبر منصة نظام إدارة السلامة (SMS platform)."
  },
  {
    "id": "afo-177",
    "index": 177,
    "question": "Where is a Near Miss submitted?",
    "correctAnswer": "EH&S",
    "category": "General",
    "distractors": [
      "SMS platform",
      "PRC",
      "PRO"
    ],
    "arabicFeedback": "يتم الإبلاغ عن الحوادث الوشيكة (Near Miss) عبر نظام الصحة والسلامة والبيئة (EH&S)."
  },
  {
    "id": "afo-178",
    "index": 178,
    "question": "What gas is inside a dry fire extinguisher?",
    "correctAnswer": "Nitrogen",
    "category": "General",
    "distractors": [
      "Dry powder / dry chemical",
      "O2 (high and low alarm)",
      "Fresh air"
    ],
    "arabicFeedback": "الغاز الدافع داخل طفاية البودرة الجافة هو النيتروجين (Nitrogen)."
  },
  {
    "id": "afo-179",
    "index": 179,
    "question": "What should be done if the deadman fails during refueling?",
    "correctAnswer": "Stop operations and replace the refueller",
    "category": "General",
    "distractors": [
      "Location, equipment, reasons, name, contact number",
      "Hose End Pressure Control Valve (HEPCV)",
      "To open and close the flow control valve"
    ],
    "arabicFeedback": "إذا تعطل مقبض Deadman أثناء التزويد: يجب إيقاف العمليات واستبدال مركبة التزويد."
  },
  {
    "id": "afo-180",
    "index": 180,
    "question": "What is the purpose of SWD?",
    "correctAnswer": "Indicate the presence of free water",
    "category": "General",
    "distractors": [
      "Dry powder / dry chemical",
      "Downwind",
      "Shell Water Detector"
    ],
    "arabicFeedback": "الغرض من كاشف SWD هو إظهار والكشف عن وجود قطرات الماء الحر في الوقود."
  },
  {
    "id": "afo-181",
    "index": 181,
    "question": "What is needed to calibrate a gas tester?",
    "correctAnswer": "Gas cylinder, 2 feet tubing, and a valve with 0.5 LPM flow rate",
    "category": "General",
    "distractors": [
      "100 feet",
      "More than 5 sq. m² / more than 10,000 BBL",
      "Between 3–5 sq. m² / less than 100 BBL"
    ],
    "arabicFeedback": "لمعايرة جهاز فحص الغاز نحتاج: أسطوانة غاز، خرطوم بطول قدمين، وصمام بمعدل تدفق 0.5 لتر/دقيقة."
  },
  {
    "id": "afo-182",
    "index": 182,
    "question": "What information must be filled in on an isolation tag?",
    "correctAnswer": "Location, equipment, reasons, name, contact number",
    "category": "General",
    "distractors": [
      "85,000 liters",
      "35,000 liters",
      "3–5 seconds"
    ],
    "arabicFeedback": "المعلومات المطلوبة على بطاقة العزل تشمل: الموقع، المعدة، الأسباب، الاسم، ورقم الاتصال."
  },
  {
    "id": "afo-183",
    "index": 183,
    "question": "What is the valve at the end of the fueling hose called?",
    "correctAnswer": "Hose End Pressure Control Valve (HEPCV)",
    "category": "General",
    "distractors": [
      "Dipstick",
      "Varac / radar gauge",
      "Topics or activities that need to be covered during the meeting"
    ],
    "arabicFeedback": "الصمام الموجود في نهاية خرطوم التعبئة يُسمى صمام التحكم في الضغط بنهاية الخرطوم (HEPCV)."
  },
  {
    "id": "afo-184",
    "index": 184,
    "question": "What is the function of the deadman?",
    "correctAnswer": "To open and close the flow control valve",
    "category": "General",
    "distractors": [
      "No one",
      "PRC",
      "PRO"
    ],
    "arabicFeedback": "وظيفة صمام Deadman هي فتح وإغلاق صمام التحكم في تدفق الوقود بأمان."
  },
  {
    "id": "afo-185",
    "index": 185,
    "question": "Why is the hydrant pit flushed?",
    "correctAnswer": "To eliminate fire risks and reduce maintenance tasks",
    "category": "General",
    "distractors": [
      "Gas cylinder, 2 feet tubing, and a valve with 0.5 LPM flow rate",
      "Location, equipment, reasons, name, contact number",
      "Hose End Pressure Control Valve (HEPCV)"
    ],
    "arabicFeedback": "تُغسل حفرة الهيدرنت لإزالة مخاطر الحريق وتسهيل وتقليل مهام الصيانة."
  },
  {
    "id": "afo-186",
    "index": 186,
    "question": "How often is an unused hydrant pit flushed?",
    "correctAnswer": "Quarterly",
    "category": "General",
    "distractors": [
      "Every 6 months",
      "Every 4 months",
      "Monthly for 2 months"
    ],
    "arabicFeedback": "يتم غسيل وتصريف حفرة الهيدرنت غير المستخدمة كل 3 أشهر (Quarterly)."
  },
  {
    "id": "afo-187",
    "index": 187,
    "question": "What is the required position for the refueller static stripe?",
    "correctAnswer": "Connected to ground to discharge electricity",
    "category": "General",
    "distractors": [
      "30 minutes",
      "Weekly",
      "Quarterly"
    ],
    "arabicFeedback": "الوضع الإلزامي للشريط الساكن لمركبة التعبئة هو اتصاله بالأرض لتفريغ الشحنات الكهربائية."
  },
  {
    "id": "afo-188",
    "index": 188,
    "question": "What product is used for commercial aircraft?",
    "correctAnswer": "Jet A-1",
    "category": "General",
    "distractors": [
      "Jet A",
      "JP-4",
      "JP-8"
    ],
    "arabicFeedback": "الوقود المخصص للطائرات التجارية والمدنية هو Jet A-1."
  },
  {
    "id": "afo-189",
    "index": 189,
    "question": "What product is used for military aircraft?",
    "correctAnswer": "JP-8",
    "category": "General",
    "distractors": [
      "JP-4",
      "Jet A-1",
      "Jet A"
    ],
    "arabicFeedback": "الوقود المخصص للطائرات العسكرية هو JP-8."
  },
  {
    "id": "afo-190",
    "index": 190,
    "question": "What should be used to fight a fuel fire?",
    "correctAnswer": "Dry powder / dry chemical",
    "category": "General",
    "distractors": [
      "FM-200",
      "Nitrogen",
      "O2 (high and low alarm)"
    ],
    "arabicFeedback": "لمكافحة حرائق الوقود يجب استخدام: البودرة الجافة / المواد الكيميائية الجافة."
  },
  {
    "id": "afo-191",
    "index": 191,
    "question": "Where should you stand before opening the refueller hatch?",
    "correctAnswer": "Downwind",
    "category": "General",
    "distractors": [
      "Gas cylinder, 2 feet tubing, and a valve with 0.5 LPM flow rate",
      "Location, equipment, reasons, name, contact number",
      "Hose End Pressure Control Valve (HEPCV)"
    ],
    "arabicFeedback": "يجب الوقوف في اتجاه هبوب الريح (Downwind) قبل فتح فتحة فوهة مركبة التعبئة."
  },
  {
    "id": "afo-192",
    "index": 192,
    "question": "What does SWD stand for?",
    "correctAnswer": "Shell Water Detector",
    "category": "General",
    "distractors": [
      "Varac / radar gauge",
      "Dipstick",
      "As per the manufacturer's recommendation"
    ],
    "arabicFeedback": "اختصار SWD يرمز إلى: كاشف شل للماء (Shell Water Detector)."
  },
  {
    "id": "afo-193",
    "index": 193,
    "question": "What is the Varac device used for?",
    "correctAnswer": "Tank level",
    "category": "General",
    "distractors": [
      "30 minutes",
      "Weekly",
      "Quarterly"
    ],
    "arabicFeedback": "يُستخدم جهاز Varac لقياس مستوى الخزان (Tank level)."
  },
  {
    "id": "afo-194",
    "index": 194,
    "question": "What is the dipstick used for?",
    "correctAnswer": "Refueller level",
    "category": "General",
    "distractors": [
      "85,000 liters",
      "35,000 liters",
      "3–5 seconds"
    ],
    "arabicFeedback": "تُستخدم عصا القياس Dipstick لقياس مستوى شاحنة التعبئة (Refueller level)."
  },
  {
    "id": "afo-195",
    "index": 195,
    "question": "What should you ensure before approaching the ramp?",
    "correctAnswer": "The dump tank is empty",
    "category": "General",
    "distractors": [
      "Dipstick",
      "Varac / radar gauge",
      "Topics or activities that need to be covered during the meeting"
    ],
    "arabicFeedback": "قبل الاقتراب من المنصة/الساحة يجب التأكد من أن خزان التصريف فارغ (Dump tank is empty)."
  },
  {
    "id": "afo-196",
    "index": 196,
    "question": "How often should the override seal be checked?",
    "correctAnswer": "Per shift",
    "category": "General",
    "distractors": [
      "Daily",
      "Every 6 months",
      "Every 4 months"
    ],
    "arabicFeedback": "يجب فحص ختم التجاوز (Override seal) في كل وردية عمل (Per shift)."
  },
  {
    "id": "afo-197",
    "index": 197,
    "question": "How often should the refueller be checked?",
    "correctAnswer": "Daily",
    "category": "General",
    "distractors": [
      "Every 5 years",
      "Weekly",
      "Monthly"
    ],
    "arabicFeedback": "يجب فحص مركبة التزويد بالوقود يومياً (Daily)."
  }
];
