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
