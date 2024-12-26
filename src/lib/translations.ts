export const workExperienceTranslations: Record<string, string> = {
  eng: "Work experience",
  heb: "ניסיון תעסוקתי",
  cmn: "工作经验", // Mandarin Chinese
  spa: "Experiencia laboral", // Spanish
  rus: "Опыт работы", // Russian
  arb: "الخبرة المهنية", // Standard Arabic
  ben: "কাজের অভিজ্ঞতা", // Bengali
  hin: "कार्य अनुभव", // Hindi
  por: "Experiência de trabalho", // Portuguese
  ind: "Pengalaman kerja", // Indonesian
  jpn: "職務経験", // Japanese
  fra: "Expérience professionnelle", // French
  deu: "Berufserfahrung", // German
  jav: "Pengalaman kerja", // Javanese (applies to both scripts)
  kor: "경력", // Korean
  tel: "పని అనుభవం", // Telugu
  vie: "Kinh nghiệm làm việc", // Vietnamese
  mar: "कामाचा अनुभव", // Marathi
  ita: "Esperienza lavorativa", // Italian
  tam: "வேலை அனுபவம்", // Tamil
  tur: "İş deneyimi", // Turkish
  urd: "کام کا تجربہ", // Urdu
  guj: "કામનો અનુભવ", // Gujarati
  pol: "Doświadczenie zawodowe", // Polish
  ukr: "Досвід роботи", // Ukrainian
  kan: "ಕೆಲಸದ ಅನುಭವ", // Kannada
  mai: "कामक अनुभव", // Maithili
  mal: "ജോലിയുടെ അനുഭവം", // Malayalam
  pes: "تجربه کاری", // Iranian Persian
  mya: "အလုပ်အတွေ့အကြုံ", // Burmese
  swh: "Uzoefu wa kazi", // Swahili
  sun: "Pengalaman kerja", // Sundanese
  ron: "Experiență de muncă", // Romanian
  pan: "ਕੰਮ ਦਾ ਤਜਰਬਾ", // Panjabi
  bho: "काम के अनुभव", // Bhojpuri
  amh: "የሥራ ተሞክሮ", // Amharic
  hau: "Kwarewar aiki", // Hausa
  fuv: "Kwarewar aiki", // Nigerian Fulfulde
  bos: "Radno iskustvo", // Bosnian (applies to both scripts)
  hrv: "Radno iskustvo", // Croatian
  nld: "Werkervaring", // Dutch
  srp: "Радно искуство", // Serbian (Cyrillic)
  tha: "ประสบการณ์การทำงาน", // Thai
  ckb: "تجربەی کار", // Central Kurdish
  yor: "Iriri iṣẹ", // Yoruba
  uzn: "Ish tajribasi", // Northern Uzbek (applies to both scripts)
  zlm: "Pengalaman kerja", // Malay (applies to both scripts)
  ibo: "Ahụmahụ ọrụ", // Igbo
  npi: "कामको अनुभव", // Nepali
  ceb: "Kasinatian sa trabaho", // Cebuano
  skr: "کام کا تجربہ", // Saraiki
  tgl: "Karaniwang gawain", // Tagalog
  hun: "Munkatapasztalat", // Hungarian
  azj: "İş təcrübəsi", // North Azerbaijani (applies to both scripts)
  sin: "රැකියා පළපුරුද්ද", // Sinhala
  ell: "Επαγγελματική εμπειρία", // Modern Greek
  ces: "Pracovní zkušenosti", // Czech
  mag: "कामक अनुभव", // Magahi
  run: "Ubushobozi bw'akazi", // Rundi
  bel: "Працоўны вопыт", // Belarusian
  plt: "Traikefa amin'ny asa", // Plateau Malagasy
  nya: "Zochitika pantchito", // Nyanja
  pbu: "د کار تجربه", // Northern Pashto
  kin: "Uburambe mu kazi", // Kinyarwanda
  zul: "Ulwazi ngomsebenzi", // Zulu
  bul: "Трудов опит", // Bulgarian
  swe: "Arbetserfarenhet", // Swedish
  lin: "Lisolo ya mosala", // Lingala
  som: "Khibradda shaqada", // Somali
  ilo: "Naipateg nga trabaho", // Iloko
  kaz: "Жұмыс тәжірибесі", // Kazakh
};

export function getWorkExperienceTranslation(lang: string): string {
  // Fallback to English if no translation found
  return workExperienceTranslations[lang] || workExperienceTranslations["eng"];
}

export function getTimeTranslation(lang: string): string {
  return timeTranslation[lang] || timeTranslation["eng"];
}

export const timeTranslation: Record<string, string> = {
  eng: "Present",
  heb: "הווה",
  cmn: "现在", // Mandarin Chinese
  spa: "Presente", // Spanish
  rus: "Настоящее время", // Russian
  arb: "الحاضر", // Standard Arabic
  ben: "বর্তমান", // Bengali
  hin: "वर्तमान", // Hindi
  por: "Presente", // Portuguese
  ind: "Saat ini", // Indonesian
  jpn: "現在", // Japanese
  fra: "Présent", // French
  deu: "Gegenwart", // German
  jav: "Saiki", // Javanese
  kor: "현재", // Korean
  tel: "ప్రస్తుతం", // Telugu
  vie: "Hiện tại", // Vietnamese
  mar: "सध्याचा", // Marathi
  ita: "Presente", // Italian
  tam: "தற்போது", // Tamil
  tur: "Şu an", // Turkish
  urd: "موجودہ", // Urdu
  guj: "વર્તમાન", // Gujarati
  pol: "Obecnie", // Polish
  ukr: "Тепер", // Ukrainian
  kan: "ಪ್ರಸ್ತುತ", // Kannada
  mai: "वर्तमान", // Maithili
  mal: "ഇപ്പോഴത്തെ", // Malayalam
  pes: "حال", // Iranian Persian
  mya: "လက်ရှိ", // Burmese
  swh: "Sasa", // Swahili
  sun: "Ayeuna", // Sundanese
  ron: "Prezent", // Romanian
  pan: "ਵਰਤਮਾਨ", // Panjabi
  bho: "वर्तमान", // Bhojpuri
  amh: "አሁን", // Amharic
  hau: "Yanzu", // Hausa
  fuv: "Yanzu", // Nigerian Fulfulde
  bos: "Sadašnjost", // Bosnian
  hrv: "Sadašnjost", // Croatian
  nld: "Heden", // Dutch
  srp: "Садашњост", // Serbian (Cyrillic)
  tha: "ปัจจุบัน", // Thai
  ckb: "ئێستا", // Central Kurdish
  yor: "Bayi", // Yoruba
  uzn: "Hozirgi", // Northern Uzbek
  zlm: "Sekarang", // Malay
  ibo: "Ugbu a", // Igbo
  npi: "वर्तमान", // Nepali
  ceb: "Karon", // Cebuano
  skr: "موجودہ", // Saraiki
  tgl: "Kasalukuyan", // Tagalog
  hun: "Jelenlegi", // Hungarian
  azj: "Hazırda", // North Azerbaijani
  sin: "වර්තමානය", // Sinhala
  ell: "Παρόν", // Modern Greek
  ces: "Současnost", // Czech
  mag: "वर्तमान", // Magahi
  run: "Ubwo bw'ubu", // Rundi
  bel: "Сучаснасць", // Belarusian
  plt: "Ankehitriny", // Plateau Malagasy
  nya: "Pano", // Nyanja
  pbu: "اوس", // Northern Pashto
  kin: "Ubu", // Kinyarwanda
  zul: "Manje", // Zulu
  bul: "Настояще", // Bulgarian
  swe: "Nuvarande", // Swedish
  lin: "Sikoyo", // Lingala
  som: "Hadda", // Somali
  ilo: "Ita nga", // Iloko
  kaz: "Қазіргі", // Kazakh
};

export const educationTranslations: Record<string, string> = {
  eng: "Education",
  heb: "השכלה",
  cmn: "教育背景", // Mandarin Chinese
  spa: "Formación académica", // Spanish
  rus: "Образование", // Russian
  arb: "المؤهلات العلمية", // Standard Arabic
  ben: "শিক্ষাগত যোগ্যতা", // Bengali
  hin: "शैक्षिक योग्यता", // Hindi
  por: "Formação acadêmica", // Portuguese
  ind: "Riwayat pendidikan", // Indonesian
  jpn: "学歴", // Japanese
  fra: "Formation", // French
  deu: "Ausbildung", // German
  jav: "Riwayat pendidikan", // Javanese
  kor: "학력", // Korean
  tel: "విద్యార్హతలు", // Telugu
  vie: "Quá trình học vấn", // Vietnamese
  mar: "शैक्षणिक पात्रता", // Marathi
  ita: "Istruzione", // Italian
  tam: "கல்வி விவரங்கள்", // Tamil
  tur: "Eğitim Bilgileri", // Turkish
  urd: "تعلیمی قابلیت", // Urdu
  guj: "શૈક્ષણિક લાયકાત", // Gujarati
  pol: "Wykształcenie", // Polish
  ukr: "Освіта", // Ukrainian
  kan: "ಶೈಕ್ಷಣಿಕ ಅರ್ಹತೆ", // Kannada
  mai: "शिक्षा योग्यता", // Maithili
  mal: "വിദ്യാഭ്യാസ യോഗ്യത", // Malayalam
  pes: "سوابق تحصیلی", // Iranian Persian
  mya: "ပညာရေးမှတ်တမ်း", // Burmese
  swh: "Elimu na Kazi", // Swahili
  sun: "Riwayat pendidikan", // Sundanese
  ron: "Educație", // Romanian
  pan: "ਸਿੱਖਿਆ ਦੀ ਯੋਗਤਾ", // Panjabi
  bho: "शैक्षणिक योग्यता", // Bhojpuri
  amh: "የትምህርት ዝርዝር", // Amharic
  hau: "Bayanan ilimi", // Hausa
  fuv: "Bayanan ilimi", // Nigerian Fulfulde
  bos: "Obrazovanje", // Bosnian
  hrv: "Obrazovanje", // Croatian
  nld: "Opleiding", // Dutch
  srp: "Образовање", // Serbian (Cyrillic)
  tha: "ประวัติการศึกษา", // Thai
  ckb: "تاریخی خوێندن", // Central Kurdish
  yor: "Itan-ẹkọ", // Yoruba
  uzn: "Ta'lim ma'lumotlari", // Northern Uzbek
  zlm: "Riwayat pendidikan", // Malay
  ibo: "Ihe ọmụmụ", // Igbo
  npi: "शैक्षिक योग्यता", // Nepali
  ceb: "Kasaysayan sa edukasyon", // Cebuano
  skr: "تعلیمی قابلیت", // Saraiki
  tgl: "Edukasyon", // Tagalog
  hun: "Tanulmányok", // Hungarian
  azj: "Təhsil haqqında məlumat", // North Azerbaijani
  sin: "අධ්‍යාපන තොරතුරු", // Sinhala
  ell: "Εκπαίδευση", // Modern Greek
  ces: "Vzdělání", // Czech
  mag: "शिक्षा योग्यता", // Magahi
  run: "Uburezi", // Rundi
  bel: "Адукацыя", // Belarusian
  plt: "Traikefa ara-pampianarana", // Plateau Malagasy
  nya: "Mbiri ya maphunziro", // Nyanja
  pbu: "تعلیمی اسناد", // Northern Pashto
  kin: "Uburezi", // Kinyarwanda
  zul: "Ulwazi lwemfundo", // Zulu
  bul: "Образование", // Bulgarian
  swe: "Utbildning", // Swedish
  lin: "Lisolo ya kelasi", // Lingala
  som: "Taariikh waxbarasho", // Somali
  ilo: "Edukasyon", // Iloko
  kaz: "Білім беру туралы мәліметтер", // Kazakh
};

export function getEducationTranslation(lang: string): string {
  return educationTranslations[lang] || educationTranslations["eng"];
}

export const projectsTranslations: Record<string, string> = {
  eng: "Projects",
  heb: "פרויקטים",
  cmn: "项目", // Mandarin Chinese
  spa: "Proyectos", // Spanish
  rus: "Проекты", // Russian
  arb: "مشاريع", // Standard Arabic
  ben: "প্রকল্প", // Bengali
  hin: "प्रोजेक्ट्स", // Hindi
  por: "Projetos", // Portuguese
  ind: "Proyek", // Indonesian
  jpn: "プロジェクト", // Japanese
  fra: "Projets", // French
  deu: "Projekte", // German
  jav: "Proyek", // Javanese
  kor: "프로젝트", // Korean
  tel: "ప్రాజెక్టులు", // Telugu
  vie: "Dự án", // Vietnamese
  mar: "प्रकल्प", // Marathi
  ita: "Progetti", // Italian
  tam: "திட்டங்கள்", // Tamil
  tur: "Projeler", // Turkish
  urd: "پروجیکٹس", // Urdu
  guj: "પ્રોજેક્ટ્સ", // Gujarati
  pol: "Projekty", // Polish
  ukr: "Проекти", // Ukrainian
  kan: "ಪ್ರಾಜೆಕ್ಟ್ಸ್", // Kannada
  mai: "परियोजनाएँ", // Maithili
  mal: "പ്രൊജക്ടുകൾ", // Malayalam
  pes: "پروژه‌ها", // Iranian Persian
  mya: "ပရောဂျက်များ", // Burmese
  swh: "Miradi", // Swahili
  sun: "Proyek", // Sundanese
  ron: "Proiecte", // Romanian
  pan: "ਪ੍ਰੋਜੈਕਟ", // Panjabi
  bho: "परियोजनाएं", // Bhojpuri
  amh: "ፕሮጀክቶች", // Amharic
  hau: "Ayyukan", // Hausa
  fuv: "Ayyukan", // Nigerian Fulfulde
  bos: "Projekti", // Bosnian
  hrv: "Projekti", // Croatian
  nld: "Projecten", // Dutch
  srp: "Пројекти", // Serbian (Cyrillic)
  tha: "โครงการ", // Thai
  ckb: "پڕۆژەکان", // Central Kurdish
  yor: "Ise", // Yoruba
  uzn: "Loyihalar", // Northern Uzbek
  zlm: "Proyek", // Malay
  ibo: "Ọrụ", // Igbo
  npi: "परियोजनाहरू", // Nepali
  ceb: "Mga Proyekto", // Cebuano
  skr: "پروجیکٹس", // Saraiki
  tgl: "Mga Proyekto", // Tagalog
  hun: "Projektek", // Hungarian
  azj: "Layihələr", // North Azerbaijani
  sin: "ප්‍රජෙක්ට්", // Sinhala
  ell: "Έργα", // Modern Greek
  ces: "Projekty", // Czech
  mag: "परियोजनाएँ", // Magahi
  run: "Imishinga", // Rundi
  bel: "Праекты", // Belarusian
  plt: "Tetika amin'ny tetikasa", // Plateau Malagasy
  nya: "Maphunziro a mapulojekiti", // Nyanja
  pbu: "پروژه‌ها", // Northern Pashto
  kin: "Imishinga", // Kinyarwanda
  zul: "Izinhlelo", // Zulu
  bul: "Проекти", // Bulgarian
  swe: "Projekt", // Swedish
  lin: "Mikano ya misala", // Lingala
  som: "Mashaariicda", // Somali
  ilo: "Proyekto", // Iloko
  kaz: "Жобалар", // Kazakh
};

export function getProjectsTranslation(lang: string): string {
  return projectsTranslations[lang] || projectsTranslations["eng"];
}

export const technologiesTranslations: Record<string, string> = {
  eng: "Technologies",
  heb: "טכנולוגיות",
  cmn: "技术", // Mandarin Chinese
  spa: "Tecnologías", // Spanish
  rus: "Технологии", // Russian
  arb: "التقنيات", // Standard Arabic
  ben: "প্রযুক্তি", // Bengali
  hin: "प्रौद्योगिकियां", // Hindi
  por: "Tecnologias", // Portuguese
  ind: "Teknologi", // Indonesian
  jpn: "テクノロジー", // Japanese
  fra: "Technologies", // French
  deu: "Technologien", // German
  jav: "Teknologi", // Javanese
  kor: "기술", // Korean
  tel: "సాంకేతికతలు", // Telugu
  vie: "Công nghệ", // Vietnamese
  mar: "तंत्रज्ञान", // Marathi
  ita: "Tecnologie", // Italian
  tam: "தொழில்நுட்பங்கள்", // Tamil
  tur: "Teknolojiler", // Turkish
  urd: "ٹیکنالوجیز", // Urdu
  guj: "ટેક્નોલોજી", // Gujarati
  pol: "Technologie", // Polish
  ukr: "Технології", // Ukrainian
  kan: "ತಂತ್ರಜ್ಞಾನಗಳು", // Kannada
  mai: "प्रौद्योगिकियां", // Maithili
  mal: "സാങ്കേതികവിദ്യകൾ", // Malayalam
  pes: "فناوری‌ها", // Iranian Persian
  mya: "နည်းပညာများ", // Burmese
  swh: "Teknolojia", // Swahili
  sun: "Teknologi", // Sundanese
  ron: "Tehnologii", // Romanian
  pan: "ਤਕਨਾਲੋਜੀ", // Panjabi
  bho: "प्रौद्योगिकियां", // Bhojpuri
  amh: "ቴክኖሎጂዎች", // Amharic
  hau: "Fasahar zamani", // Hausa
  fuv: "Fasahar zamani", // Nigerian Fulfulde
  bos: "Tehnologije", // Bosnian
  hrv: "Tehnologije", // Croatian
  nld: "Technologieën", // Dutch
  srp: "Технологије", // Serbian (Cyrillic)
  tha: "เทคโนโลยี", // Thai
  ckb: "تێکنەلۆژیاکان", // Central Kurdish
  yor: "Awọn imọ-ẹrọ", // Yoruba
  uzn: "Texnologiyalar", // Northern Uzbek
  zlm: "Teknologi", // Malay
  ibo: "Teknụzụ", // Igbo
  npi: "प्रविधिहरू", // Nepali
  ceb: "Teknolohiya", // Cebuano
  skr: "ٹیکنالوجیز", // Saraiki
  tgl: "Teknolohiya", // Tagalog
  hun: "Technológiák", // Hungarian
  azj: "Texnologiyalar", // North Azerbaijani
  sin: "තාක්ෂණ", // Sinhala
  ell: "Τεχνολογίες", // Modern Greek
  ces: "Technologie", // Czech
  mag: "प्रौद्योगिकी", // Magahi
  run: "Ikoranabuhanga", // Rundi
  bel: "Тэхналогіі", // Belarusian
  plt: "Teknolojia", // Plateau Malagasy
  nya: "Zaukadaulo", // Nyanja
  pbu: "ټکنالوژۍ", // Northern Pashto
  kin: "Ikoranabuhanga", // Kinyarwanda
  zul: "Ubuchwepheshe", // Zulu
  bul: "Технологии", // Bulgarian
  swe: "Teknologier", // Swedish
  lin: "Bilanga ya teknoloji", // Lingala
  som: "Tiknoolajiyada", // Somali
  ilo: "Teknolohiya", // Iloko
  kaz: "Технологиялар", // Kazakh
};

export function getTechnologies(lang: string): string {
  return technologiesTranslations[lang] || technologiesTranslations["eng"];
}

export const skillsTranslations: Record<string, string> = {
  eng: "Skills",
  heb: "כישורים",
  cmn: "技能", // Mandarin Chinese
  spa: "Habilidades", // Spanish
  rus: "Навыки", // Russian
  arb: "مهارات", // Standard Arabic
  ben: "দক্ষতা", // Bengali
  hin: "कौशल", // Hindi
  por: "Habilidades", // Portuguese
  ind: "Keterampilan", // Indonesian
  jpn: "スキル", // Japanese
  fra: "Compétences", // French
  deu: "Fähigkeiten", // German
  jav: "Kaahlian", // Javanese
  kor: "기술", // Korean
  tel: "నైపుణ్యాలు", // Telugu
  vie: "Kỹ năng", // Vietnamese
  mar: "कौशल्य", // Marathi
  ita: "Competenze", // Italian
  tam: "திறன்கள்", // Tamil
  tur: "Beceriler", // Turkish
  urd: "مہارتیں", // Urdu
  guj: "કૌશલ્ય", // Gujarati
  pol: "Umiejętności", // Polish
  ukr: "Навички", // Ukrainian
  kan: "ಹುಣರ್", // Kannada
  mai: "कौशल", // Maithili
  mal: "നൈപുണ്യം", // Malayalam
  pes: "مهارت‌ها", // Iranian Persian
  mya: "ကျွမ်းကျင်မှုများ", // Burmese
  swh: "Ujuzi", // Swahili
  sun: "Kaahlian", // Sundanese
  ron: "Abilități", // Romanian
  pan: "ਕੌਸ਼ਲ", // Panjabi
  bho: "कौशल", // Bhojpuri
  amh: "ክህሎቶች", // Amharic
  hau: "Kwarewa", // Hausa
  fuv: "Kwarewa", // Nigerian Fulfulde
  bos: "Vještine", // Bosnian
  hrv: "Vještine", // Croatian
  nld: "Vaardigheden", // Dutch
  srp: "Вештине", // Serbian (Cyrillic)
  tha: "ทักษะ", // Thai
  ckb: "تواناییەکان", // Central Kurdish
  yor: "Ọgbọn", // Yoruba
  uzn: "Ko'nikmalar", // Northern Uzbek
  zlm: "Kemahiran", // Malay
  ibo: "Nkà", // Igbo
  npi: "कौशलहरू", // Nepali
  ceb: "Mga Kasanayan", // Cebuano
  skr: "مہارتیں", // Saraiki
  tgl: "Mga Kasanayan", // Tagalog
  hun: "Készségek", // Hungarian
  azj: "Bacarıqlar", // North Azerbaijani
  sin: "හුනර", // Sinhala
  ell: "Δεξιότητες", // Modern Greek
  ces: "Dovednosti", // Czech
  mag: "कौशल", // Magahi
  run: "Ubumenyi", // Rundi
  bel: "Навыкі", // Belarusian
  plt: "Fahaiza-manao", // Plateau Malagasy
  nya: "Luso", // Nyanja
  pbu: "مهارت‌ها", // Northern Pashto
  kin: "Ubumenyi", // Kinyarwanda
  zul: "Amakhono", // Zulu
  bul: "Умения", // Bulgarian
  swe: "Färdigheter", // Swedish
  lin: "Bato ya misala", // Lingala
  som: "Xirfadaha", // Somali
  ilo: "Abilidad", // Iloko
  kaz: "Дағдылар", // Kazakh
};

export function getSkillsTranslation(lang: string): string {
  return skillsTranslations[lang] || skillsTranslations["eng"];
}

export const languagesTranslations: Record<string, string> = {
  eng: "Languages",
  heb: "שפות",
  cmn: "语言", // Mandarin Chinese
  spa: "Idiomas", // Spanish
  rus: "Языки", // Russian
  arb: "اللغات", // Standard Arabic
  ben: "ভাষাসমূহ", // Bengali
  hin: "भाषाएँ", // Hindi
  por: "Idiomas", // Portuguese
  ind: "Bahasa", // Indonesian
  jpn: "言語", // Japanese
  fra: "Langues", // French
  deu: "Sprachen", // German
  jav: "Basa", // Javanese
  kor: "언어", // Korean
  tel: "భాషలు", // Telugu
  vie: "Ngôn ngữ", // Vietnamese
  mar: "भाषा", // Marathi
  ita: "Lingue", // Italian
  tam: "மொழிகள்", // Tamil
  tur: "Diller", // Turkish
  urd: "زبانیں", // Urdu
  guj: "ભાષાઓ", // Gujarati
  pol: "Języki", // Polish
  ukr: "Мови", // Ukrainian
  kan: "ಭಾಷೆಗಳು", // Kannada
  mai: "भाषाहरू", // Maithili
  mal: "ഭാഷകൾ", // Malayalam
  pes: "زبان‌ها", // Iranian Persian
  mya: "ဘာသာစကားများ", // Burmese
  swh: "Lugha", // Swahili
  sun: "Basa", // Sundanese
  ron: "Limbaje", // Romanian
  pan: "ਭਾਸ਼ਾਵਾਂ", // Panjabi
  bho: "भाषाएँ", // Bhojpuri
  amh: "ቋንቋዎች", // Amharic
  hau: "Harshe", // Hausa
  fuv: "Harshe", // Nigerian Fulfulde
  bos: "Jezici", // Bosnian
  hrv: "Jezici", // Croatian
  nld: "Talen", // Dutch
  srp: "Језици", // Serbian (Cyrillic)
  tha: "ภาษา", // Thai
  ckb: "زمانەکان", // Central Kurdish
  yor: "Ede", // Yoruba
  uzn: "Tillar", // Northern Uzbek
  zlm: "Bahasa", // Malay
  ibo: "Asụsụ", // Igbo
  npi: "भाषाहरू", // Nepali
  ceb: "Mga Wika", // Cebuano
  skr: "زبانیں", // Saraiki
  tgl: "Mga Wika", // Tagalog
  hun: "Nyelvek", // Hungarian
  azj: "Dillər", // North Azerbaijani
  sin: "භාෂා", // Sinhala
  ell: "Γλώσσες", // Modern Greek
  ces: "Jazyky", // Czech
  mag: "भाषाहरू", // Magahi
  run: "Indimi z'ururimi", // Rundi
  bel: "Мовы", // Belarusian
  plt: "Fiteny", // Plateau Malagasy
  nya: "Chilankhulo", // Nyanja
  pbu: "ژبانې", // Northern Pashto
  kin: "Indimi", // Kinyarwanda
  zul: "Izilimi", // Zulu
  bul: "Езици", // Bulgarian
  swe: "Språk", // Swedish
  lin: "Lémbá ya misala", // Lingala
  som: "Lugho", // Somali
  ilo: "Lengguahe", // Iloko
  kaz: "Тілдер", // Kazakh
};

export function getLanguages(lang: string): string {
  return languagesTranslations[lang] || languagesTranslations["eng"];
}

export function getLanguagesProficiency(
  lang: string,
  proficiency: string,
): string {
  return (
    languageProficiencyTranslations[proficiency]?.[lang] ||
    languageProficiencyTranslations[proficiency]?.["eng"]
  );
}

export const languageProficiencyTranslations: Record<
  string,
  Record<string, string>
> = {
  native: {
    eng: "(Native)",
    heb: "(שפת אם)",
    cmn: "(母语)", // Mandarin Chinese
    spa: "(Nativo)", // Spanish
    rus: "(Родной)", // Russian
    arb: "(اللغة الأم)", // Standard Arabic
    ben: "(মাতৃভাষা)", // Bengali
    hin: "(मूल भाषा)", // Hindi
    por: "(Nativo)", // Portuguese
    ind: "(Asli)", // Indonesian
    jpn: "(母国語)", // Japanese
    fra: "(Langue maternelle)", // French
    deu: "(Muttersprache)", // German
    jav: "(Basa ibu)", // Javanese
    kor: "(모국어)", // Korean
    tel: "(మాతృభాష)", // Telugu
    vie: "(Ngôn ngữ mẹ đẻ)", // Vietnamese
    mar: "(मूल भाषा)", // Marathi
    ita: "(Madrelingua)", // Italian
    tam: "(தாய்மொழி)", // Tamil
    tur: "(Ana dil)", // Turkish
    urd: "(مادری زبان)", // Urdu
    guj: "(જન્મભાષા)", // Gujarati
    pol: "(Język ojczysty)", // Polish
    ukr: "(Рідна мова)", // Ukrainian
    kan: "(ಮಾತೃಭಾಷೆ)", // Kannada
    mai: "(मातृभाषा)", // Maithili
    mal: "(മാതൃഭാഷ)", // Malayalam
    pes: "(زبان مادری)", // Iranian Persian
    mya: "(မိခင်ဘာသာစကား)", // Burmese
    swh: "(Lugha ya asili)", // Swahili
    sun: "(Basa indung)", // Sundanese
    ron: "(Limba maternă)", // Romanian
    pan: "(ਮਾਤਰੀ ਭਾਸ਼ਾ)", // Panjabi
    bho: "(मूल भाषा)", // Bhojpuri
    amh: "(ትውልድ ቋንቋ)", // Amharic
    hau: "(Harshe na haihuwa)", // Hausa
    fuv: "(Harshe na haɓaka)", // Nigerian Fulfulde
    bos: "(Materinji jezik)", // Bosnian
    hrv: "(Materinji jezik)", // Croatian
    nld: "(Moedertaal)", // Dutch
    srp: "(Мајчин језик)", // Serbian (Cyrillic)
    tha: "(ภาษาแม่)", // Thai
    ckb: "(زبانى ژەنەرە)", // Central Kurdish
    yor: "(Ede ibile)", // Yoruba
    uzn: "(Ona tili)", // Northern Uzbek
    zlm: "(Bahasa ibu)", // Malay
    ibo: "(Asụsụ nne)", // Igbo
    npi: "(मातृभाषा)", // Nepali
    ceb: "(Inahan nga sinultian)", // Cebuano
    skr: "(مادری زبان)", // Saraiki
    tgl: "(Inang wika)", // Tagalog
    hun: "(Anyanyelv)", // Hungarian
    azj: "(Ana dili)", // North Azerbaijani
    sin: "(පාරිභෝගික භාෂාව)", // Sinhala
    ell: "(Μητρική γλώσσα)", // Modern Greek
    ces: "(Mateřský jazyk)", // Czech
    mag: "(मातृभाषा)", // Magahi
    run: "(Ururimi rw'amavuko)", // Rundi
    bel: "(Родная мова)", // Belarusian
    plt: "(Fiteny natoraly)", // Plateau Malagasy
    nya: "(Chilankhulo chachibale)", // Nyanja
    pbu: "(ژبەی زەهەری)", // Northern Pashto
    kin: "(Ururimi rw'ikirundi)", // Kinyarwanda
    zul: "(Izilimi zomdabu)", // Zulu
    bul: "(Роден език)", // Bulgarian
    swe: "(Modersmål)", // Swedish
    lin: "(Língua ya mibu)", // Lingala
    som: "(Lugha ya asili)", // Somali
    ilo: "(Inang a lengguahe)", // Iloko
    kaz: "(Туған тіл)", // Kazakh
  },
  fluent: {
    eng: "(Fluent)",
    heb: "(חלק)",
    cmn: "(流利)",
    spa: "(Fluido)",
    rus: "(Свободно)",
    arb: "(بطلاقة)",
    ben: "(সুসম্বদ্ধ)",
    hin: "(धाराप्रवाह)",
    por: "(Fluente)",
    ind: "(Lancar)",
    jpn: "(流暢)",
    fra: "(Courant)",
    deu: "(Fließend)",
    jav: "(Lancar)",
    kor: "(유창한)",
    tel: "(నిష్ణాత)",
    vie: "(Lưu loát)",
    mar: "(धाराप्रवाह)",
    ita: "(Fluente)",
    tam: "(பாராட்டத்திற்குரிய)",
    tur: "(Akıcı)",
    urd: "(مفصل)",
    guj: "(પ્રવાહિત)",
    pol: "(Biegły)",
    ukr: "(Свободно)",
    kan: "(ನಿಭಾಯಿಸಿದ)",
    mai: "(धाराप्रवाह)",
    mal: "(സൂക്ഷ്മമായ)",
    pes: "(جاری)",
    mya: "(ကျွမ်းကျင်)",
    swh: "(Ufanisi)",
    sun: "(Lancar)",
    ron: "(Fluent)",
    pan: "(ਧਾਰਾਵਾਹਿਕ)",
    bho: "(धाराप्रवाह)",
    amh: "(በሚሰማው)",
    hau: "(Harshe mai launin)",
    fuv: "(Harshe mai haske)",
    bos: "(Tečan)",
    hrv: "(Tečan)",
    nld: "(Vloeiend)",
    srp: "(Течан)",
    tha: "(คล่องแคล่ว)",
    ckb: "(بەختیارە)",
    yor: "(Alakalẹ)",
    uzn: "(Oqil)",
    zlm: "(Lancar)",
    ibo: "(Ọlụrụọma)",
    npi: "(धाराप्रवाह)",
    ceb: "(Daghang Sinultian)",
    skr: "(مفصل)",
    tgl: "(Matatas)",
    hun: "(Folyékony)",
    azj: "(Səlis)",
    sin: "(චුටි)",
    ell: "(Ροή)",
    ces: "(Plynulý)",
    mag: "(धाराप्रवाह)",
    run: "(Izoboka)",
    bel: "(Свободны)",
    plt: "(Fluent)",
    nya: "(Wopanga)",
    pbu: "(روان)",
    kin: "(Izwi)",
    zul: "(Olungele)",
    bul: "(Свободен език)",
    swe: "(Flytande)",
    lin: "(Mibengaleli)",
    som: "(Lugha isixhumi)",
    ilo: "(Adalinga)",
  },
  intermediate: {
    eng: "(Intermediate)",
    heb: "(בינוני)",
    cmn: "(中级)",
    spa: "(Intermedio)",
    rus: "(Средний)",
    arb: "(متوسط)",
    ben: "(মাঝারি)",
    hin: "(मध्यम)",
    por: "(Intermediário)",
    ind: "(Menengah)",
    jpn: "(中級)",
    fra: "(Intermédiaire)",
    deu: "(Mittelstufe)",
    jav: "(Sedheng)",
    kor: "(중급)",
    tel: "(మధ్యస్థాయిగా)",
    vie: "(Trung cấp)",
    mar: "(मध्यम)",
    ita: "(Intermedio)",
    tam: "(மத்திய)",
    tur: "(Orta)",
    urd: "(درمیانہ)",
    guj: "(મધ્યમ)",
    pol: "(Średni)",
    ukr: "(Середній)",
    kan: "(ಮಧ್ಯಮ)",
    mai: "(मध्यम)",
    mal: "(മദ്ധ്യസ്ഥ)",
    pes: "(میانه)",
    mya: "(အလယ်)",
    swh: "(Kati)",
    sun: "(Sedheng)",
    ron: "(Intermediar)",
    pan: "(ਮੱਧਮ)",
    bho: "(मध्यम)",
    amh: "(በእንቆቅልሽ)",
    hau: "(Matsakaici)",
    fuv: "(Harshe mai canje)",
    bos: "(Srednji)",
    hrv: "(Srednji)",
    nld: "(Gemiddeld)",
    srp: "(Средњи)",
    tha: "(ระดับกลาง)",
    ckb: "(وەسطی)",
    yor: "(Ipele)",
    uzn: "(Orta)",
    zlm: "(Tengah)",
    ibo: "(Ọdịnala)",
    npi: "(मध्यम)",
    ceb: "(Kabanayong)",
    skr: "(درمیانہ)",
    tgl: "(Katamtaman)",
    hun: "(Közepes)",
    azj: "(Orta)",
    sin: "(මාධ්‍ය)",
    ell: "(Μέσος)",
    ces: "(Střední)",
    mag: "(मध्यम)",
    run: "(Koresha)",
    bel: "(Сярэдні)",
    plt: "(Amin'ny ankapobeny)",
    nya: "(Kuswana)",
    pbu: "(ځاني)",
    kin: "(Gukoresha)",
    zul: "(Ophakathi)",
    bul: "(Среден език)",
    swe: "(Mellan)",
    lin: "(Kopana)",
    som: "(Lugha ya kati)",
    ilo: "(Pangunahing)",
  },
  basic: {
    eng: "(Basic)",
    heb: "(בסיסי)",
    cmn: "(基础)",
    spa: "(Básico)",
    rus: "(Базовый)",
    arb: "(أساسي)",
    ben: "(মৌলিক)",
    hin: "(मूल)",
    por: "(Básico)",
    ind: "(Dasar)",
    jpn: "(基本)",
    fra: "(De base)",
    deu: "(Grundlegend)",
    jav: "(Dasar)",
    kor: "(기본)",
    tel: "(మూల)",
    vie: "(Cơ bản)",
    mar: "(मूलभूत)",
    ita: "(Base)",
    tam: "(மூல)",
    tur: "(Temel)",
    urd: "(بنیادی)",
    guj: "(મૂળભૂત)",
    pol: "(Podstawowy)",
    ukr: "(Базовий)",
    kan: "(ಮೂಲ)",
    mai: "(मूल)",
    mal: "(ആധാരം)",
    pes: "(پایه)",
    mya: "(အခြေခံ)",
    swh: "(Msingi)",
    sun: "(Dasar)",
    ron: "(De bază)",
    pan: "(ਮੂਲ)",
    bho: "(मूलभूत)",
    amh: "(መሠረታዊ)",
    hau: "(Asasi)",
    fuv: "(Harshe mai asali)",
    bos: "(Osnovni)",
    hrv: "(Osnovni)",
    nld: "(Basis)",
    srp: "(Основни)",
    tha: "(ขั้นพื้นฐาน)",
    ckb: "(بەسەری)",
    yor: "(Ipele)",
    uzn: "(Asosiy)",
    zlm: "(Asas)",
    ibo: "(Mepụta)",
    npi: "(मूल)",
    ceb: "(Pangunahing)",
    skr: "(بنیادی)",
    tgl: "(Pangunahing)",
    hun: "(Alap)",
    azj: "(Əsas)",
    sin: "(මූලික)",
    ell: "(Βασικός)",
    ces: "(Základní)",
    mag: "(मूलभूत)",
    run: "(Amin'ny voalohany)",
    bel: "(Асноўны)",
    plt: "(Fototra)",
    nya: "(Chinsolo)",
    pbu: "(اساسی)",
    kin: "(Icyambere)",
    zul: "(Izinyathelo eziyisisekelo)",
    bul: "(Базов език)",
    swe: "(Grundläggande)",
    lin: "(Basile)",
    som: "(Aasaasiga)",
    ilo: "(Batay)",
  },
};
