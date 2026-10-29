/* ============================================================
   +970 SPOT CAFE MANSOURA - DIGITAL CAFE PLATFORM & LAB ENGINE
   Natural Egyptian Arabic Default • Complete English LTR Toggle
   Zero Emojis • Pure SVG Icons • Liquid Pour Dynamics
   Multi-Tenant SaaS Architecture • Delivery & Order Tracking
   ============================================================ */

// 1. MULTI-TENANT SAAS CONFIGURATION (Café Tenant Model)
const TENANT_CONFIG = {
  id: "970spot-mansoura",
  name: "+970 SPOT",
  nameAr: "كافيه +970 سبوت المنصورة",
  nameEn: "+970 SPOT Cafe Mansoura",
  taglineAr: "أجواء وأصالة فلسطينية في قلب المنصورة",
  taglineEn: "From Our Land To Your Cup",
  branchNameAr: "فرع حي الجامعة - المنصورة",
  branchNameEn: "University District Branch - Mansoura",
  addressAr: "حي الجامعة - بداية شارع الإيمان (ناصية هوت ميكس)، المنصورة",
  addressEn: "University District, start of Al-Iman St. (Hot Mix corner), Mansoura",
  hoursAr: "يومياً من 9:00 صباحاً حتى 1:00 بعد منتصف الليل",
  hoursEn: "Daily from 9:00 AM to 1:00 AM",
  whatsappNumber: "201000000000",
  currencyAr: "ج.م",
  currencyEn: "EGP",
  defaultDeliveryFee: 15,
  freeDeliveryThreshold: 250,
  districts: [
    { id: "univ", nameAr: "حي الجامعة ومحيط كلية الطب والتربية", nameEn: "University District & Faculties", fee: 15 },
    { id: "gehan", nameAr: "شارع جيهان وحي النور", nameEn: "Gehan St. & Al-Nour", fee: 15 },
    { id: "mashaya", nameAr: "المشاية السفلية وجزيرة الورد", nameEn: "Lower Corniche & Geziret El-Ward", fee: 20 },
    { id: "toriel", nameAr: "توريل وشارع الجمهورية والترعة", nameEn: "Toriel, Gomhouria & Teraa", fee: 20 },
    { id: "other", nameAr: "مناطق أخرى داخل المنصورة", nameEn: "Other Mansoura Areas", fee: 25 }
  ]
};

// 2. VERIFIED MENU CATALOG (Strictly No Emojis, Clean Diet Tags)
const APP_MENU = [
  {
    id: "iced-spanish-latte",
    category: "iced-coffee",
    categoryName: "مشروبات مثلجة",
    categoryNameEn: "Iced Drinks",
    name: "آيس سبانش لاتيه",
    nameEn: "Iced Spanish Latte",
    price: 85,
    desc: "المشروب الأكثر طلباً في فرع المنصورة. طبقات الحليب البارد مع الإسبريسو المركز والحلاوة الكراميلية المتوازنة.",
    descEn: "Our signature cold beverage in Mansoura. Chilled milk layered with bold espresso and balanced caramel notes.",
    badge: "الأكثر طلباً",
    badgeEn: "Most Popular",
    isSignature: true,
    tags: ["بارد", "كراميلي", "كافيين متوازن"],
    image: "images/iced_spanish.jpg"
  },
  {
    id: "spanish-latte-hot",
    category: "hot-coffee",
    categoryName: "قهوة ساخنة",
    categoryNameEn: "Hot Coffee",
    name: "سبانش لاتيه ساخن",
    nameEn: "Hot Spanish Latte",
    price: 80,
    desc: "إسبريسو غني مستخلص بعناية مع حليب مبخر مخملي ولمسة الحليب المكثف الدافئة.",
    descEn: "Rich artisanal espresso with velvety steamed milk and sweet condensed warmth.",
    badge: "دافئ ومميز",
    badgeEn: "Warm & Rich",
    isSignature: false,
    tags: ["ساخن", "حليبي غني"],
    image: "images/coffee.jpg"
  },
  {
    id: "flat-white",
    category: "hot-coffee",
    categoryName: "قهوة ساخنة",
    categoryNameEn: "Hot Coffee",
    name: "فلات وايت مختص",
    nameEn: "Specialty Flat White",
    price: 75,
    desc: "دبل شوت إسبريسو أرابيكا نقي مع طبقة مايكروفوم رقيقة لإبراز حلاوة البن الطبيعية وقوة النكهة.",
    descEn: "Double shot of pure Arabica espresso with silky microfoam highlighting bean sweetness.",
    badge: "كلاسيك مختص",
    badgeEn: "Specialty Classic",
    isSignature: false,
    tags: ["ساخن", "دبل شوت", "بدون سكر"],
    image: "images/coffee.jpg"
  },
  {
    id: "signature-cold-brew",
    category: "iced-coffee",
    categoryName: "مشروبات مثلجة",
    categoryNameEn: "Iced Drinks",
    name: "كولد برو مقطر بارد",
    nameEn: "Signature Cold Brew",
    price: 85,
    desc: "منقوع قهوة مقطرة على البارد لمدة تزيد عن 16 ساعة لنكهة ناعمة نقية قليلة الحموضة وفائقة الانتعاش.",
    descEn: "Slow cold drip steeped for 16+ hours for crisp, low-acidity smoothness and deep aroma.",
    badge: "مقطر 16 ساعة",
    badgeEn: "Slow Cold Drip",
    isSignature: true,
    tags: ["بارد", "قليل الحموضة", "كافيين عالي"],
    image: "images/cold_brew.jpg"
  },
  {
    id: "iced-matcha-latte",
    category: "matcha",
    categoryName: "ماتشا يابانية",
    categoryNameEn: "Japanese Matcha",
    name: "آيس ماتشا لاتيه ياباني",
    nameEn: "Iced Ceremonial Matcha",
    price: 90,
    desc: "مسحوق الماتشا الاحتفالي العضوي الفاخر مخفوق بحرفية مع الحليب البارد وقطع الثلج المنعشة.",
    descEn: "Authentic ceremonial grade Japanese matcha skillfully whisked with chilled milk over ice.",
    badge: "عضوي احتفالي",
    badgeEn: "Ceremonial Grade",
    isSignature: true,
    tags: ["ماتشا أصلية", "طاقة هادئة", "مضادات أكسدة"],
    image: "images/matcha.jpg"
  },
  {
    id: "signature-970-blend",
    category: "matcha",
    categoryName: "سبيشيال +970",
    categoryNameEn: "Signature Specials",
    name: "بليند سبيشال +970",
    nameEn: "Plus 970 Signature Blend",
    price: 95,
    desc: "خلطة كافيه +970 الحصرية بروح وأصالة التراث الفلسطيني مع نوتات الشوكولاتة والكراميل.",
    descEn: "House-crafted signature roast blending rich cocoa notes with the spirit of Palestinian heritage.",
    badge: "توقيع المكان",
    badgeEn: "Exclusive Blend",
    isSignature: true,
    tags: ["حصري", "بن أرابيكا محمص"],
    image: "images/logo_official.jpg"
  },
  {
    id: "turkish-cheese-pastry",
    category: "bakery",
    categoryName: "بيكري ومخبوزات",
    categoryNameEn: "Bakery & Sweets",
    name: "فطيرة الجبنة التركية الهشة",
    nameEn: "Turkish Cheese Pastry (Börek)",
    price: 45,
    desc: "عجينة مورقة مقرمشة ومخبوزة طازجة يومياً ومحشوة بمزيج غني من الأجبان الفاخرة والسمسم.",
    descEn: "Golden flaky pastry baked fresh every morning with artisan cheeses and toasted sesame.",
    badge: "طازة كل يوم",
    badgeEn: "Fresh Daily",
    isSignature: false,
    tags: ["مخبوزات", "جبنة تركية"],
    image: "images/matcha.jpg"
  },
  {
    id: "artisan-chocolate-cookies",
    category: "bakery",
    categoryName: "بيكري ومخبوزات",
    categoryNameEn: "Bakery & Sweets",
    name: "كوكيز الشوكولاتة البلجيكية",
    nameEn: "Artisan Chocolate Cookies",
    price: 40,
    desc: "كوكيز طري مخبوز يدوياً بقطع الشوكولاتة البلجيكية الغنية وحبيبات الملح البحري.",
    descEn: "Soft-baked gourmet cookies folded with molten Belgian dark chocolate and sea salt flakes.",
    badge: "شوكولاتة بلجيكي",
    badgeEn: "Artisan Belgian",
    isSignature: false,
    tags: ["حلويات", "شوكولاتة داكنة"],
    image: "images/matcha.jpg"
  },
  {
    id: "passion-fruit-mojito",
    category: "refreshers",
    categoryName: "موخيتو ومنعشات",
    categoryNameEn: "Mojitos & Refreshers",
    name: "موخيتو باشن فروت وليمون",
    nameEn: "Passion Fruit Mint Mojito",
    price: 65,
    desc: "مزيج منعش من الصودا الفوارة، النعناع البلدي الطازج، الليمون، ولب فاكهة الباشن فروت المنعشة.",
    descEn: "Sparkling soda refresher infused with crisp mint, fresh lime, and tropical passion fruit pulp.",
    badge: "انتعاش فائق",
    badgeEn: "Summer Refresh",
    isSignature: false,
    tags: ["صودا", "ليمون ونعناع", "بدون كافيين"],
    image: "images/iced_spanish.jpg"
  }
];

// 3. OFFERS & COUPONS CATALOG
const PROMO_COUPONS = {
  SABAH970: {
    code: "SABAH970",
    discountPercent: 15,
    minOrder: 0,
    descAr: "خصم 15% على قهوة الصباح والبيكري",
    descEn: "15% off morning coffee combo"
  },
  SHABAB970: {
    code: "SHABAB970",
    discountPercent: 20,
    minOrder: 250,
    descAr: "خصم 20% لطلبات شلة الجامعة فوق 250 ج.م",
    descEn: "20% off student group orders above 250 EGP"
  },
  FIRST970: {
    code: "FIRST970",
    discountPercent: 10,
    minOrder: 0,
    descAr: "خصم ترحيبي 10% على أول أوردر",
    descEn: "10% off your first cafe order"
  }
};

// 4. BILINGUAL TRANSLATIONS (Egyptian Arabic Default & English LTR)
const TRANSLATIONS = {
  ar: {
    app_name: "+970 SPOT",
    app_tagline: "FROM OUR LAND TO YOUR CUP",
    branch_badge: "حي الجامعة",
    time_morning: "صباح الورد",
    time_afternoon: "مساء الخير",
    time_evening: "مساء الجمال",
    greeting_suffix: "• قهوتك جاهزة في فرع حي الجامعة",
    welcome_title: "تحب تبدأ بإيه النهارده؟",
    welcome_desc: "منور يا غالي في +970 سبوت المنصورة! بن أرابيكا مختص، ماتشا يابانية أصلية، ومخبوزات بتنزل طازة كل يوم.",
    welcome_btn_lab: "ظبط مشروبك على مزاجك",
    welcome_btn_menu: "تصفح المنيو والأسعار",
    offers_teaser_title: "فيه عروض مستنياك النهارده",
    offers_teaser_sub: "خصومات تبدأ من 15% على قهوة الصباح وطلبات الدليفري",
    lab_teaser_badge: "مختبر القهوة التفاعلي",
    lab_teaser_title: "ظبط مشروبك على مزاجك",
    lab_teaser_desc: "ابتكر فنجانك الخاص خطوة بخطوة: صب الإسبريسو، حدد حليب الشوفان أو اللوز، وزّع الكراميل، وشوف كوبايتك وهي بتتملي قدامك لايف.",
    lab_teaser_btn: "ابدأ التجربة دلوقتي",
    spotlight_badge: "توقيع المكان • Signature",
    spotlight_title: "آيس سبانش لاتيه سبيشيال",
    spotlight_subtitle: "Iced Spanish Latte • بن أرابيكا مختص",
    spotlight_desc: "المشروب البارد المفضل لرواد الكافيه في المنصورة، مع طبقات الإسبريسو الكثيف والحليب المخملي والنكهة الكراميلية المتوازنة.",
    spotlight_btn_customize: "تخصيص وطلب الصنف",
    spotlight_btn_add: "+ أضف للطلب",
    barista_picks_title: "مختارات الباريستا اليومية",
    barista_picks_more: "عرض الكل",
    loyalty_title: "نادي رواد +970",
    loyalty_desc: "جمّع نقاط مع كل أوردر واستبدلها بمشروبات مجانية وقسائم خصم.",
    store_quick_title: "فرع المنصورة - حي الجامعة",
    store_quick_desc: "بداية شارع الإيمان (ناصية هوت ميكس) • 9:00 ص - 1:00 ص",
    store_quick_map: "الخريطة",
    menu_title: "قائمة المشروبات والبيكري",
    menu_desc: "محاصيل بن أرابيكا مختصة، ماتشا يابانية عضوية، ومخبوزات طازجة",
    menu_search_placeholder: "ابحث بالاسم العربي أو الإنجليزي (لاتيه، ماتشا...)",
    menu_sim_badge: "محاكي المشروبات التفاعلي • Drink Simulator",
    menu_sim_title: "قلّب وشوف مشروبك",
    menu_sim_desc: "مرر يمين أو شمال لتصفح تشكيلة الكافيه، أو عدل المكونات وحجم الكوباية لايف",
    swipe_hint: "قلّب واسحب يمين وشمال",
    label_cup_size: "اختار حجم الكوباية:",
    size_sm: "صغير (8oz)",
    size_std: "مظبوط (12oz)",
    size_std_badge: "الموصى به",
    size_lg: "كبير (16oz)",
    sim_btn_add_tray: "ضيفه للعربة",
    sim_btn_customize: "اصنع مشروبك على مزاجك",
    sim_btn_wa: "واتساب",
    customizer_badge: "ورشة التخصيص الحية",
    customizer_title: "ضيف اللي بتحبه لمشروبك",
    btn_undo: "تراجع",
    btn_reset: "ابدأ من جديد",
    tag_base: "1. أساس المشروب",
    hint_base: "بن أرابيكا مختص أو ماتشا يابانية",
    opt_base_espresso: "دبل إسبريسو أرابيكا",
    sub_base_espresso: "مركز وغني",
    opt_base_coldbrew: "كولد برو مقطر بارد",
    sub_base_coldbrew: "16 ساعة تقطير بطيء",
    opt_base_matcha: "ماتشا يابانية احتفالية",
    sub_base_matcha: "عضوية طاقة هادئة",
    opt_base_spanish: "خلطة السبانش سبيشيال",
    sub_base_spanish: "توقيع كافيه +970",
    opt_base_chocolate: "شوكولاتة بلجيكية فاخرة",
    sub_base_chocolate: "كاكاو مخملي ناعم",
    tag_milk: "2. نوع اللبن",
    hint_milk: "حليب طازج أو بدائل نباتية باريستا",
    opt_milk_whole: "كامل الدسم",
    sub_milk_whole: "مخملي غني ورغوة متماسكة",
    opt_milk_oat: "حليب شوفان باريستا",
    opt_milk_almond: "حليب لوز ناعم",
    opt_milk_skim: "خالي الدسم",
    sub_milk_skim: "خفيف وسعرات أقل",
    opt_milk_none: "من غير لبن (Black)",
    sub_milk_none: "نقاء البن الصافي",
    tag_sweet: "3. درجة السكر",
    hint_sweet: "محليات طبيعية متوازنة",
    opt_sweet_0: "من غير سكر (0%)",
    sub_sweet_0: "نقاء القهوة الأصلي",
    opt_sweet_25: "سكر خفيف (25%)",
    sub_sweet_25: "لمسة حلاوة هادية",
    opt_sweet_50: "مظبوط ومتوازن (50%)",
    sub_sweet_50: "الموصى به من الباريستا",
    opt_sweet_100: "حلو كراميلي (100%)",
    sub_sweet_100: "لعشاق الحلاوة الغنية",
    tag_flavor: "4. سيرب النكهات",
    hint_flavor: "سيرب طبيعي عالي الجودة",
    opt_flavor_caramel: "كراميل مملح فرنسي",
    opt_flavor_vanilla: "فانيليا مدغشقر نقية",
    opt_flavor_chocolate: "شوكولاتة داكنة بلجيكية",
    opt_flavor_none: "بدون نكهة إضافية",
    sub_flavor_none: "نقاء النكهة الأصلية",
    tag_addons: "5. الإضافات",
    hint_addons: "زود جرعة إسبريسو أو اضبط الثلج",
    btn_extra_shot_label: "زود جرعة إسبريسو (+15 ج.م)",
    btn_extra_shot_desc: "دبل شوت إضافي لنكهة أقوى وكافيين مضاعف",
    tag_toppings: "6. التوبينج ورشة التقديم",
    hint_toppings: "لمسة الباريستا الختامية",
    opt_top_seasalt: "كريمة الملح البحري",
    opt_top_cinnamon: "رشة قرفة سيلانية",
    opt_top_cocoa: "بودرة كاكاو فاخر",
    opt_top_none: "بدون رشة",
    sub_top_none: "تقديم كلاسيكي",
    label_final_price: "السعر النهائي:",
    btn_add_to_tray_final: "ضيفه للعربة",
    quick_catalog_title: "تصفح تشكيلة الكافيه والبيكري",
    cat_all: "الكل",
    cat_hot: "قهوة ساخنة",
    cat_iced: "مشروبات مثلجة",
    cat_matcha: "ماتشا يابانية",
    cat_bakery: "بيكري ومخبوزات",
    cat_refreshers: "موخيتو ومنعشات",
    ask_price: "السعر",
    no_items_found: "مفيش صنف مطابق لبحثك",
    no_items_hint: "جرب تبحث باسم تاني أو اختار تصنيف من الشرايط بالأعلى",
    lab_screen_badge: "المختبر التفاعلي • Coffee Lab",
    lab_screen_title: "ظبط مشروبك على مزاجك",
    lab_screen_desc: "كل اختيار بتحدده بيتصب قدامك في الكوباية لايف بفيزياء وسلاسة حقيقية",
    currency_egp: "ج.م",
    metric_caffeine: "الكافيين",
    metric_body: "القوام",
    metric_sweet: "الحلاوة",
    lab_btn_add_tray: "أضف لطلباتي",
    lab_btn_wa: "طلب مباشر",
    lab_btn_extra_shot: "+ شوت إسبريسو إضافي (+15 ج.م)",
    lab_btn_reset: "ابدأ من جديد",
    step_base: "القاعدة",
    step_temp: "الحجم والحرارة",
    step_milk: "الحليب",
    step_sweet: "الحلاوة",
    step_flavors: "الإضافات",
    step1_title: "اختر قاعدة المشروب الأساسية:",
    step1_desc: "بن أرابيكا مختص أو ماتشا يابانية احتفالية",
    step2_title: "طريقة التقديم والحجم:",
    step2_desc: "بارد مثلج مع مكعبات ثلج أو ساخن مبخر مع رغوة مايكروفوم",
    step3_title: "نوع الحليب المفضل:",
    step3_desc: "حليب طازج أو بدائل نباتية باريستا معدة للقهوة",
    step4_title: "درجة الحلاوة والتوازن:",
    step4_desc: "محليات وسيرب طبيعي متوازن",
    step5_title: "سيرب النكهة ورشة التقديم:",
    step5_desc: "كراميل فرنسي مملح، فانيليا مدغشقر، أو كاكاو بلجيكي",
    offers_title: "فيه عروض مستنياك",
    offers_desc: "أقوى خصومات وعروض حقيقية شغالة في فرع المنصورة والدليفري",
    btn_apply_code: "تطبيق الكود",
    profile_title: "حسابي ومكافآتي",
    profile_desc: "رصيد نقاطك، المكافآت، وبيانات فرع +970 سبوت المنصورة",
    lang_card_title: "لغة التطبيق • Language",
    lang_card_desc: "اختر لغة العرض المناسبة لك",
    loyalty_tier_gold: "الفئة الذهبية • Gold Roaster",
    loyalty_club_name: "نادي رواد +970",
    loyalty_pts_unit: "نقطة متاحة",
    loyalty_hub_desc: "جمّع نقاط مع كل فنجان تطلبه، واستبدلها بمشروبات مجانية وقسائم خصم فورية.",
    reward1_title: "كوب فلات وايت مختص مجاناً",
    reward1_cost: "استبدال 150 نقطة",
    reward2_title: "قسيمة خصم 30 ج.م على طلبك",
    reward2_cost: "استبدال 100 نقطة",
    reward3_title: "قطعة كوكيز بلجيكي طازة",
    reward3_cost: "استبدال 80 نقطة",
    btn_redeem: "استبدال الآن",
    member_title: "بيانات العميل لتسريع الطلب",
    member_desc: "سجل اسمك ورقمك لحفظهم تلقائياً في طلباتك القادمة",
    address_title: "عنوان فرع المنصورة",
    address_desc: "حي الجامعة - في بداية شارع الإيمان، على ناصية هوت ميكس، مدينة المنصورة، مصر.",
    copy_address_btn: "نسخ العنوان",
    hours_title: "ساعات العمل اليومية",
    hours_desc: "يومياً من 9:00 صباحاً حتى 1:00 بعد منتصف الليل.",
    maps_title: "خرائط Google ماب",
    maps_desc: "عرض الموقع والاتجاهات المباشرة للكافيه بنقرة واحدة.",
    maps_btn: "فتح في Google Maps",
    social_heading: "قنوات التواصل الرسمية:",
    tray_selected_text: "أصناف محددة في طلبك",
    tray_order_btn: "مراجعة الطلب والدليفري",
    checkout_title: "إتمام الطلب والدليفري",
    fulfill_delivery: "توصيل للعنوان (دليفري)",
    fulfill_pickup: "استلام من الفرع (تيك أواي)",
    label_district: "منطقة التوصيل في المنصورة:",
    label_address: "العنوان بالتفصيل (الشارع، العمارة، الشقة):",
    label_phone: "رقم الهاتف للتواصل:",
    label_coupon: "كود الخصم (اختياري):",
    label_payment: "طريقة الدفع:",
    pay_cod: "كاش عند الاستلام",
    pay_card: "فيزا / كارت في الفرع",
    summary_subtotal: "المجموع الفرعي:",
    summary_delivery_fee: "خدمة التوصيل:",
    summary_discount: "قيمة الخصم:",
    summary_total: "الإجمالي النهائي:",
    btn_confirm_order: "تأكيد الطلب وبدء التحضير لايف",
    btn_send_wa_direct: "أو إرسال الطلب عبر واتساب الكافيه",
    track_headline: "طلبك بيتحضر في الكافيه دلوقتي",
    eta_title: "الوقت المتوقع للوصول:",
    step_track1_label: "استلمنا طلبك",
    step_track1_desc: "تم تأكيد طلبك بنجاح في نظام الكافيه",
    step_track2_label: "بيتحضر في الكافيه دلوقتي",
    step_track2_desc: "الباريستا يطحن حبوب البن ويجهز المشروب بعناية",
    step_track3_label: "طلبك في الطريق إليك",
    step_track3_desc: "الكابتن استلم الأوردر وهو في الطريق لعنوانك",
    step_track4_label: "تم التسليم وبالهنا والشفا",
    step_track4_desc: "استمتع بقهوتك المختصة من +970 سبوت",
    btn_wa_track: "تواصل مع الكافيه عبر واتساب",
    btn_close_track: "إغلاق ومتابعة في الخلفية",
    toast_coupon_applied: "تم تطبيق كود الخصم بنجاح!",
    toast_coupon_invalid: "كود الخصم غير صحيح أو لا ينطبق على الطلب",
    toast_order_placed: "تم تأكيد طلبك وجارٍ تحضيره لايف!",
    toast_points_redeemed: "تم استبدال النقاط والحصول على المكافأة بنجاح!"
  },
  en: {
    app_name: "+970 SPOT",
    app_tagline: "FROM OUR LAND TO YOUR CUP",
    branch_badge: "University District",
    time_morning: "Good Morning",
    time_afternoon: "Good Afternoon",
    time_evening: "Good Evening",
    greeting_suffix: "• Your specialty coffee awaits at University District branch",
    welcome_title: "How would you like to start today?",
    welcome_desc: "Welcome to +970 SPOT Mansoura! Artisanal Arabica roasts, authentic Japanese matcha, and fresh pastries baked daily.",
    welcome_btn_lab: "Create Your Drink",
    welcome_btn_menu: "Browse Full Menu",
    offers_teaser_title: "Exclusive Offers Awaiting You",
    offers_teaser_sub: "Discounts starting at 15% on morning combos & delivery orders",
    lab_teaser_badge: "Interactive Coffee Lab",
    lab_teaser_title: "Craft Your Custom Cup",
    lab_teaser_desc: "Design your drink step-by-step: pour bold espresso, choose oat or almond milk, drizzle salted caramel, and watch your glass fill live.",
    lab_teaser_btn: "Start Crafting Now",
    spotlight_badge: "Signature Drink",
    spotlight_title: "Iced Spanish Latte Special",
    spotlight_subtitle: "Iced Spanish Latte • Specialty Arabica",
    spotlight_desc: "Mansoura's favorite chilled creation. Concentrated espresso poured over cold milk with balanced caramel sweetness.",
    spotlight_btn_customize: "Customize & Order",
    spotlight_btn_add: "+ Add to Order",
    barista_picks_title: "Daily Barista Picks",
    barista_picks_more: "View All",
    loyalty_title: "+970 Roasters Club",
    loyalty_desc: "Earn loyalty points with every cup and redeem them for free drinks and instant coupons.",
    store_quick_title: "Mansoura Branch - University District",
    store_quick_desc: "Al-Iman St. corner (by Hot Mix) • 9:00 AM - 1:00 AM",
    store_quick_map: "Map",
    menu_title: "Beverages & Bakery Menu",
    menu_desc: "Single-origin Arabica, ceremonial Japanese matcha, and oven-fresh pastries",
    menu_search_placeholder: "Search in English or Arabic (latte, matcha, cookies...)",
    menu_sim_badge: "Interactive Drink Simulator",
    menu_sim_title: "Swipe & Explore Drinks",
    menu_sim_desc: "Swipe horizontally to explore our signature drinks or customize size and recipe live",
    swipe_hint: "Swipe left or right",
    label_cup_size: "Choose cup size:",
    size_sm: "Small (8oz)",
    size_std: "Regular (12oz)",
    size_std_badge: "Recommended",
    size_lg: "Large (16oz)",
    sim_btn_add_tray: "Add to Cart",
    sim_btn_customize: "Customize Your Drink",
    sim_btn_wa: "WhatsApp",
    customizer_badge: "Live Customizer",
    customizer_title: "Customize Your Ingredients",
    btn_undo: "Undo",
    btn_reset: "Reset",
    tag_base: "1. Drink Base",
    hint_base: "Specialty Arabica or Japanese matcha",
    opt_base_espresso: "Double Arabica Espresso",
    sub_base_espresso: "Bold & Rich",
    opt_base_coldbrew: "Signature Cold Brew",
    sub_base_coldbrew: "16hr Slow Drip",
    opt_base_matcha: "Ceremonial Japanese Matcha",
    sub_base_matcha: "Organic Calm Energy",
    opt_base_spanish: "Spanish Special Blend",
    sub_base_spanish: "Plus 970 Signature",
    opt_base_chocolate: "Artisan Belgian Cocoa",
    sub_base_chocolate: "Smooth & Velvety",
    tag_milk: "2. Milk Type",
    hint_milk: "Fresh dairy or barista plant milks",
    opt_milk_whole: "Whole Milk",
    sub_milk_whole: "Velvety rich with stable foam",
    opt_milk_oat: "Barista Oat Milk",
    opt_milk_almond: "Silk Almond Milk",
    opt_milk_skim: "Skim Milk",
    sub_milk_skim: "Light and low calorie",
    opt_milk_none: "No Milk (Black)",
    sub_milk_none: "Pure espresso clarity",
    tag_sweet: "3. Sweetness Level",
    hint_sweet: "Calibrated natural sweeteners",
    opt_sweet_0: "Zero Sugar (0%)",
    sub_sweet_0: "Pure bean flavor",
    opt_sweet_25: "Light Sweet (25%)",
    sub_sweet_25: "Subtle touch of sweet",
    opt_sweet_50: "Balanced Sweet (50%)",
    sub_sweet_50: "Barista recommended",
    opt_sweet_100: "Rich Sweet (100%)",
    sub_sweet_100: "For sweet coffee lovers",
    tag_flavor: "4. Flavor Syrups",
    hint_flavor: "Premium natural syrups",
    opt_flavor_caramel: "French Salted Caramel",
    opt_flavor_vanilla: "Madagascar Vanilla",
    opt_flavor_chocolate: "Belgian Dark Chocolate",
    opt_flavor_none: "No Added Flavor",
    sub_flavor_none: "Original recipe",
    tag_addons: "5. Add-ons & Extra Shot",
    hint_addons: "Extra espresso shot or adjust ice",
    btn_extra_shot_label: "Add Extra Espresso Shot (+15 EGP)",
    btn_extra_shot_desc: "Extra double shot for richer aroma & caffeine",
    tag_toppings: "6. Toppings & Finishing",
    hint_toppings: "Barista's finishing touch",
    opt_top_seasalt: "Sea Salt Cream Cold Foam",
    opt_top_cinnamon: "Ceylon Cinnamon Dust",
    opt_top_cocoa: "Dark Belgian Cocoa",
    opt_top_none: "No Dusting",
    sub_top_none: "Classic presentation",
    label_final_price: "Final Price:",
    btn_add_to_tray_final: "Add to Cart",
    quick_catalog_title: "Browse Drinks & Fresh Bakery",
    cat_all: "All",
    cat_hot: "Hot Coffee",
    cat_iced: "Iced Drinks",
    cat_matcha: "Japanese Matcha",
    cat_bakery: "Fresh Bakery",
    cat_refreshers: "Mojitos & Sodas",
    ask_price: "Price",
    no_items_found: "No matching items found",
    no_items_hint: "Try searching with a different term or select a category pill above",
    lab_screen_badge: "Interactive Lab • Coffee Studio",
    lab_screen_title: "Craft Your Custom Cup",
    lab_screen_desc: "Every choice physically pours into the glass with real-time liquid physics",
    currency_egp: "EGP",
    metric_caffeine: "Caffeine",
    metric_body: "Body",
    metric_sweet: "Sweetness",
    lab_btn_add_tray: "Add to Order",
    lab_btn_wa: "Direct WhatsApp",
    lab_btn_extra_shot: "+ Extra Espresso Shot (+15 EGP)",
    lab_btn_reset: "Start Over",
    step_base: "Base",
    step_temp: "Size & Temp",
    step_milk: "Milk",
    step_sweet: "Sweetness",
    step_flavors: "Infusions",
    step1_title: "Select your drink base:",
    step1_desc: "Artisanal Arabica espresso, slow cold brew, or ceremonial matcha",
    step2_title: "Serving temperature & size:",
    step2_desc: "Chilled over ice cubes or steamed hot with silky microfoam",
    step3_title: "Choice of milk:",
    step3_desc: "Fresh whole dairy or artisan barista plant-based milks",
    step4_title: "Sweetness level:",
    step4_desc: "Natural sweeteners and calibrated artisanal syrups",
    step5_title: "Flavor syrup & finishing dust:",
    step5_desc: "French salted caramel, Madagascar vanilla, or Belgian cocoa",
    offers_title: "Special Offers & Coupons",
    offers_desc: "Active verified promotions for Mansoura dine-in and fast delivery",
    btn_apply_code: "Apply Code",
    profile_title: "My Account & Rewards",
    profile_desc: "Your points balance, reward vouchers, and Mansoura cafe branch details",
    lang_card_title: "App Language • اللغة",
    lang_card_desc: "Switch between Egyptian Arabic and English",
    loyalty_tier_gold: "Gold Tier • Gold Roaster",
    loyalty_club_name: "+970 Roasters Club",
    loyalty_pts_unit: "Points Available",
    loyalty_hub_desc: "Earn points with every purchase and redeem them for free drinks and instant discount vouchers.",
    reward1_title: "Free Specialty Flat White",
    reward1_cost: "Redeem 150 pts",
    reward2_title: "30 EGP Discount Voucher",
    reward2_cost: "Redeem 100 pts",
    reward3_title: "Fresh Belgian Chocolate Cookie",
    reward3_cost: "Redeem 80 pts",
    btn_redeem: "Redeem Now",
    member_title: "Customer Details for Quick Checkout",
    member_desc: "Save your name and phone number for faster future deliveries",
    address_title: "Mansoura Branch Location",
    address_desc: "University District - start of Al-Iman St., on the corner of Hot Mix, Mansoura, Egypt.",
    copy_address_btn: "Copy Address",
    hours_title: "Operating Hours",
    hours_desc: "Daily from 9:00 AM until 1:00 AM past midnight.",
    maps_title: "Google Maps Directions",
    maps_desc: "Open direct turn-by-turn directions to the cafe in one tap.",
    maps_btn: "Open in Google Maps",
    social_heading: "Official Social Channels:",
    tray_selected_text: "Items in your order",
    tray_order_btn: "Review Order & Delivery",
    checkout_title: "Review & Checkout",
    fulfill_delivery: "Home Delivery",
    fulfill_pickup: "Store Pickup",
    label_district: "Mansoura Delivery Zone:",
    label_address: "Detailed Street & Building Address:",
    label_phone: "Contact Phone Number:",
    label_coupon: "Promo Coupon Code:",
    label_payment: "Payment Method:",
    pay_cod: "Cash on Delivery",
    pay_card: "Card at Counter",
    summary_subtotal: "Items Subtotal:",
    summary_delivery_fee: "Delivery Service:",
    summary_discount: "Discount Applied:",
    summary_total: "Final Total:",
    btn_confirm_order: "Confirm Order & Track Live",
    btn_send_wa_direct: "Or Send Order via WhatsApp",
    track_headline: "Your order is being brewed now",
    eta_title: "Estimated Arrival Time:",
    step_track1_label: "Order Received",
    step_track1_desc: "Your order has been verified by the cafe branch",
    step_track2_label: "Brewing in Cafe Now",
    step_track2_desc: "Barista is grinding beans and hand-crafting your drinks",
    step_track3_label: "Out for Delivery",
    step_track3_desc: "Courier is on the way to your Mansoura address",
    step_track4_label: "Delivered & Enjoy!",
    step_track4_desc: "Enjoy your specialty coffee from +970 SPOT",
    btn_wa_track: "Chat with Cafe on WhatsApp",
    btn_close_track: "Close & Track in Background",
    toast_coupon_applied: "Promo code applied successfully!",
    toast_coupon_invalid: "Invalid coupon or minimum order not reached",
    toast_order_placed: "Order confirmed! Tracking initiated live.",
    toast_points_redeemed: "Points redeemed successfully!"
  }
};

// 5. APPLICATION STATE
let currentLang = localStorage.getItem('970spot_lang') || 'ar';
let activeTab = 'home';
let activeCategory = 'all';
let searchQuery = '';
let activeSheetProduct = null;
let selectedCustomizations = { milkKey: 'whole', sweetnessKey: 'medium' };

// Tray & Checkout State
const orderTrayItems = new Map(); // id -> { item, quantity, customNotes }
let currentFulfillment = 'delivery'; // 'delivery' | 'pickup'
let selectedDistrictFee = TENANT_CONFIG.defaultDeliveryFee;
let appliedCoupon = null;
let currentPoints = parseInt(localStorage.getItem('970spot_loyalty_pts') || '180', 10);

// Active Order Tracking Simulation State
let activeOrder = null;
let trackingInterval = null;
let etaSecondsRemaining = 22 * 60; // 22 minutes

// Coffee Lab Engine State
const labState = {
  base: 'spanish',         // espresso | coldbrew | matcha | spanish | chocolate
  temp: 'iced',            // iced | hot
  size: 'standard',        // standard | large
  milk: 'oat',             // whole | oat | almond | skim | none
  sweetness: '50',         // 0 | 25 | 50 | 100
  flavor: 'caramel',       // caramel | vanilla | chocolate | none
  topping: 'seasalt',      // seasalt | cinnamon | cocoa | none
  extraShot: false,        // boolean
  activeStep: 1
};

// ============================================================
// INITIALIZATION LIFECYCLE
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang, false);
  initAppGreeting();
  initDrinkSimulator();
  renderBaristaPicks();
  renderMenuCards();
  setupNavigationTabs();
  setupMenuControls();
  setupProfileData();
  initCoffeeLab();
  checkExistingActiveOrder();
});

// Language Switch Handler
window.setLanguage = function(lang) {
  if (lang !== 'ar' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem('970spot_lang', lang);
  applyLanguage(lang, true);
};

window.toggleLanguage = function() {
  const next = currentLang === 'ar' ? 'en' : 'ar';
  setLanguage(next);
};

function applyLanguage(lang, reRender = true) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.ar;
  const isRtl = lang === 'ar';

  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  const btnLangText = document.getElementById('btn-lang-text');
  if (btnLangText) {
    btnLangText.textContent = isRtl ? 'EN' : 'عربي';
  }

  const pillAr = document.getElementById('pill-lang-ar');
  const pillEn = document.getElementById('pill-lang-en');
  if (pillAr && pillEn) {
    pillAr.classList.toggle('active', lang === 'ar');
    pillEn.classList.toggle('active', lang === 'en');
  }

  // Update all data-i18n text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update placeholders
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) searchInput.placeholder = t.menu_search_placeholder;

  initAppGreeting();

  if (reRender) {
    renderSimulatorDrink();
    renderBaristaPicks();
    renderMenuCards();
    updateTrayDisplay();
    updateDrinkVisualizer();
    renderSavedRecipes();
    updateCheckoutPricingDisplay();
  }
}

function initAppGreeting() {
  const textEl = document.getElementById('greeting-text-span');
  if (!textEl) return;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.ar;
  const hour = new Date().getHours();
  let timeStr = t.time_morning;
  if (hour >= 12 && hour < 17) timeStr = t.time_afternoon;
  else if (hour >= 17) timeStr = t.time_evening;
  textEl.textContent = `${timeStr} ${t.greeting_suffix}`;
}

// Navigation Tabs
function setupNavigationTabs() {
  const tabs = document.querySelectorAll('.nav-tab-item');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      switchScreen(target);
    });
  });
}

window.switchScreen = function(screenId) {
  activeTab = screenId;
  document.querySelectorAll('.nav-tab-item').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-tab') === screenId);
  });
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.toggle('active', screen.id === `screen-${screenId}`);
  });
  const activeEl = document.getElementById(`screen-${screenId}`);
  if (activeEl) activeEl.scrollTop = 0;
  if (screenId === 'lab') updateDrinkVisualizer();
  if (screenId === 'menu') renderSimulatorDrink();
};

// ============================================================
// DRINK SIMULATOR & SHARED CUSTOMIZER ENGINE
// Large Persistent SVG Hero Cup • Horizontal Touch/Mouse Drag
// Size Morphing • Full Categorized Customizer • Single Truth Model
// ============================================================

const SIMULATOR_BEVERAGES = [
  {
    id: "iced-spanish-latte",
    name: "آيس سبانش لاتيه سبيشيال",
    nameEn: "Iced Spanish Latte Special",
    category: "iced-coffee",
    categoryName: "مشروبات مثلجة",
    categoryNameEn: "Iced Drinks",
    price: 85,
    base: "spanish",
    temp: "iced",
    milk: "whole",
    sweetness: "50",
    flavor: "caramel",
    topping: "cinnamon",
    extraShot: false,
    size: "standard",
    desc: "المشروب الأكثر طلباً في فرع المنصورة. طبقات الحليب البارد مع الإسبريسو المركز والحلاوة الكراميلية المتوازنة.",
    descEn: "Mansoura's favorite chilled creation. Chilled milk layered with bold espresso and balanced caramel notes.",
    tags: ["بارد", "كراميلي", "بن مختص"],
    tagsEn: ["Iced", "Caramel", "Specialty Arabica"],
    caffeine: "دبل شوت (متوازن)",
    caffeineEn: "Double Shot (Balanced)",
    body: "مخملي كريمي",
    bodyEn: "Velvety Creamy"
  },
  {
    id: "signature-cold-brew",
    name: "كولد برو مقطر بارد",
    nameEn: "Signature Cold Brew",
    category: "iced-coffee",
    categoryName: "مشروبات مثلجة",
    categoryNameEn: "Iced Drinks",
    price: 85,
    base: "coldbrew",
    temp: "iced",
    milk: "none",
    sweetness: "0",
    flavor: "none",
    topping: "none",
    extraShot: false,
    size: "standard",
    desc: "منقوع قهوة مقطرة على البارد لمدة تزيد عن 16 ساعة لنكهة ناعمة نقية قليلة الحموضة وفائقة الانتعاش.",
    descEn: "Slow cold drip steeped for 16+ hours for crisp, low-acidity smoothness and deep aroma.",
    tags: ["بارد", "مقطر 16 ساعة", "كافيين عالي"],
    tagsEn: ["Iced", "16h Drip", "High Caffeine"],
    caffeine: "مقطر 16 ساعة (عالي)",
    caffeineEn: "16hr Drip (High)",
    body: "صافي ومنعش",
    bodyEn: "Clean & Crisp"
  },
  {
    id: "iced-matcha-latte",
    name: "آيس ماتشا لاتيه ياباني",
    nameEn: "Iced Ceremonial Matcha",
    category: "matcha",
    categoryName: "ماتشا يابانية",
    categoryNameEn: "Japanese Matcha",
    price: 90,
    base: "matcha",
    temp: "iced",
    milk: "whole",
    sweetness: "50",
    flavor: "none",
    topping: "none",
    extraShot: false,
    size: "standard",
    desc: "مسحوق الماتشا الاحتفالي العضوي الفاخر مخفوق بحرفية مع الحليب البارد وقطع الثلج المنعشة.",
    descEn: "Authentic ceremonial grade Japanese matcha skillfully whisked with chilled milk over ice.",
    tags: ["ماتشا أصلية", "طاقة هادئة", "مضادات أكسدة"],
    tagsEn: ["Organic Matcha", "Calm Energy", "Antioxidants"],
    caffeine: "طاقة هادئة (L-Theanine)",
    caffeineEn: "Calm Focus (Matcha)",
    body: "ناعم غني",
    bodyEn: "Smooth & Rich"
  },
  {
    id: "spanish-latte-hot",
    name: "سبانش لاتيه ساخن ومبخر",
    nameEn: "Hot Spanish Latte",
    category: "hot-coffee",
    categoryName: "قهوة ساخنة",
    categoryNameEn: "Hot Coffee",
    price: 80,
    base: "spanish",
    temp: "hot",
    milk: "whole",
    sweetness: "50",
    flavor: "caramel",
    topping: "cinnamon",
    extraShot: false,
    size: "standard",
    desc: "إسبريسو غني مستخلص بعناية مع حليب مبخر مخملي ولمسة الحليب المكثف الدافئة.",
    descEn: "Rich artisanal espresso with velvety steamed milk and sweet condensed warmth.",
    tags: ["ساخن", "حليبي غني", "كراميلي"],
    tagsEn: ["Hot", "Rich Dairy", "Caramel"],
    caffeine: "دبل شوت (متوسط)",
    caffeineEn: "Double Shot (Medium)",
    body: "كريمي دافئ",
    bodyEn: "Warm & Creamy"
  },
  {
    id: "flat-white",
    name: "فلات وايت مختص دبل شوت",
    nameEn: "Specialty Flat White",
    category: "hot-coffee",
    categoryName: "قهوة ساخنة",
    categoryNameEn: "Hot Coffee",
    price: 75,
    base: "espresso",
    temp: "hot",
    milk: "whole",
    sweetness: "0",
    flavor: "none",
    topping: "none",
    extraShot: false,
    size: "standard",
    desc: "دبل شوت إسبريسو أرابيكا نقي مع طبقة مايكروفوم رقيقة لإبراز حلاوة البن الطبيعية وقوة النكهة.",
    descEn: "Double shot of pure Arabica espresso with silky microfoam highlighting bean sweetness.",
    tags: ["ساخن", "دبل شوت", "بدون سكر"],
    tagsEn: ["Hot", "Double Shot", "Sugar Free"],
    caffeine: "دبل شوت مركز",
    caffeineEn: "Bold Double Shot",
    body: "مايكروفوم مخملي",
    bodyEn: "Velvety Microfoam"
  },
  {
    id: "signature-970-blend",
    name: "بليند سبيشال +970",
    nameEn: "Plus 970 Signature Blend",
    category: "iced-coffee",
    categoryName: "سبيشيال +970",
    categoryNameEn: "Signature Specials",
    price: 95,
    base: "espresso",
    temp: "iced",
    milk: "oat",
    sweetness: "50",
    flavor: "caramel",
    topping: "seasalt",
    extraShot: true,
    size: "standard",
    desc: "خلطة كافيه +970 الحصرية بروح وأصالة التراث مع نوتات الشوكولاتة وحليب الشوفان ورشة ملح بحري.",
    descEn: "House-crafted signature roast blending rich cocoa notes with oat milk and sea salt cream.",
    tags: ["توقيع المكان", "حليب شوفان", "شوت إضافي"],
    tagsEn: ["Signature", "Oat Milk", "Extra Shot"],
    caffeine: "تريبل شوت (قوي)",
    caffeineEn: "Triple Shot (Bold)",
    body: "كثيف ومخملي",
    bodyEn: "Dense & Velvety"
  },
  {
    id: "passion-fruit-mojito",
    name: "موخيتو باشن فروت وليمون",
    nameEn: "Passion Fruit Mint Mojito",
    category: "refreshers",
    categoryName: "موخيتو ومنعشات",
    categoryNameEn: "Mojitos & Refreshers",
    price: 65,
    base: "refresher",
    temp: "iced",
    milk: "none",
    sweetness: "50",
    flavor: "none",
    topping: "none",
    extraShot: false,
    size: "standard",
    desc: "مزيج منعش من الصودا الفوارة، النعناع البلدي الطازج، الليمون، ولب فاكهة الباشن فروت المنعشة.",
    descEn: "Sparkling soda refresher infused with crisp mint, fresh lime, and tropical passion fruit pulp.",
    tags: ["صودا", "ليمون ونعناع", "بدون كافيين"],
    tagsEn: ["Soda", "Mint & Lime", "Zero Caffeine"],
    caffeine: "بدون كافيين",
    caffeineEn: "Caffeine Free",
    body: "فوار ومنعش",
    bodyEn: "Sparkling & Crisp"
  },
  {
    id: "belgian-hot-chocolate",
    name: "شوكولاتة بلجيكية فاخرة",
    nameEn: "Artisan Belgian Hot Cocoa",
    category: "hot-coffee",
    categoryName: "شوكولاتة ساخنة",
    categoryNameEn: "Hot Chocolate",
    price: 75,
    base: "chocolate",
    temp: "hot",
    milk: "whole",
    sweetness: "100",
    flavor: "chocolate",
    topping: "cocoa",
    extraShot: false,
    size: "standard",
    desc: "كاكاو بلجيكي داكن ناعم يذوب في الحليب الساخن المبخر مع رشة بودرة كاكاو فاخرة.",
    descEn: "Molten Belgian dark chocolate whisked into warm steamed milk with cocoa dusting.",
    tags: ["ساخن", "شوكولاتة بلجيكي", "حلو غني"],
    tagsEn: ["Hot", "Belgian Chocolate", "Rich Sweet"],
    caffeine: "خالي كافيين",
    caffeineEn: "Caffeine Free",
    body: "شوكولاتي كثيف",
    bodyEn: "Dense Chocolate"
  }
];

let currentDrinkIndex = 0;
let currentDrinkState = null;
let drinkCustomHistory = [];

function initDrinkSimulator() {
  if (!currentDrinkState) {
    currentDrinkState = JSON.parse(JSON.stringify(SIMULATOR_BEVERAGES[0]));
    currentDrinkState.history = [];
  }
  setupCupDragGestures();
  renderSimulatorDrink();
}

function calculateCurrentDrinkPrice(state) {
  if (!state) return 85;
  let p = state.basePrice || state.price || 85;
  if (state.size === 'small') p -= 10;
  else if (state.size === 'large') p += 15;

  if (state.milk === 'oat' || state.milk === 'almond') p += 15;
  if (state.flavor && state.flavor !== 'none') p += 10;
  if (state.extraShot) p += 15;
  return Math.max(20, p);
}

function renderSimulatorDrink() {
  if (!currentDrinkState) return;
  const isEn = currentLang === 'en';
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.ar;
  const bev = currentDrinkState;

  // 1. Text & Headings
  const catEl = document.getElementById('sim-drink-category');
  const titleEl = document.getElementById('sim-drink-title');
  const enTitleEl = document.getElementById('sim-drink-en-title');
  const descEl = document.getElementById('sim-drink-desc');
  const counterEl = document.getElementById('cup-drink-counter');
  const dotsEl = document.getElementById('cup-carousel-dots');

  if (catEl) catEl.textContent = isEn ? bev.categoryNameEn : bev.categoryName;
  if (titleEl) titleEl.textContent = isEn ? (bev.nameEn || bev.name) : bev.name;
  if (enTitleEl) enTitleEl.textContent = isEn ? bev.name : bev.nameEn;
  if (descEl) descEl.textContent = isEn ? (bev.descEn || bev.desc) : bev.desc;

  if (counterEl) {
    counterEl.textContent = isEn 
      ? `Drink ${currentDrinkIndex + 1} of ${SIMULATOR_BEVERAGES.length}` 
      : `مشروب ${currentDrinkIndex + 1} من ${SIMULATOR_BEVERAGES.length}`;
  }

  // Dots
  if (dotsEl) {
    dotsEl.innerHTML = SIMULATOR_BEVERAGES.map((_, idx) => `
      <span class="cup-dot ${idx === currentDrinkIndex ? 'active' : ''}" onclick="jumpToDrink(${idx})"></span>
    `).join('');
  }

  // 2. Pricing
  const finalPrice = calculateCurrentDrinkPrice(bev);
  const priceValEl = document.getElementById('sim-price-val');
  const priceInlineEl = document.getElementById('sim-btn-price-inline');
  const customizerFinalEl = document.getElementById('customizer-final-price');

  if (priceValEl) priceValEl.textContent = finalPrice;
  if (priceInlineEl) priceInlineEl.textContent = `${finalPrice} ${t.currency_egp}`;
  if (customizerFinalEl) customizerFinalEl.textContent = `${finalPrice} ${t.currency_egp}`;

  // 3. Metrics radar
  const caffEl = document.getElementById('sim-caffeine-val');
  const bodyEl = document.getElementById('sim-body-val');
  const sweetEl = document.getElementById('sim-sweet-val');

  if (caffEl) {
    let caff = bev.caffeine || 'دبل شوت';
    if (bev.extraShot) caff = isEn ? 'Triple Shot (Extra Bold)' : 'تريبل شوت (فائق القوة)';
    caffEl.textContent = isEn ? (bev.caffeineEn || caff) : caff;
  }
  if (bodyEl) {
    let body = bev.milk === 'none' ? (isEn ? 'Clean & Crisp' : 'صافي وخفيف') : (isEn ? 'Velvety Smooth' : 'مخملي كريمي');
    bodyEl.textContent = body;
  }
  if (sweetEl) {
    sweetEl.textContent = `${bev.sweetness}%`;
  }

  // 4. Tags
  const tagsEl = document.getElementById('sim-tags-strip');
  if (tagsEl) {
    const tagsList = isEn ? (bev.tagsEn || bev.tags || []) : (bev.tags || []);
    tagsEl.innerHTML = tagsList.map(tag => `<span class="sim-tag-pill">${tag}</span>`).join('');
  }

  // 5. Cup Size Buttons
  document.querySelectorAll('.size-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-size') === bev.size);
  });

  // 6. Customizer Workspace Control States
  syncCustomizerUI();

  // 7. Render Layered SVG Cup
  renderHeroCupSVG(bev);

  // 8. Undo state button
  const undoBtn = document.getElementById('btn-undo-action');
  if (undoBtn) undoBtn.disabled = (drinkCustomHistory.length === 0);
}

function syncCustomizerUI() {
  if (!currentDrinkState) return;
  const bev = currentDrinkState;

  // Base chips
  document.querySelectorAll('.customizer-option-card[data-field="base"]').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('data-val') === bev.base);
  });
  // Milk chips
  document.querySelectorAll('.customizer-option-card[data-field="milk"]').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('data-val') === bev.milk);
  });
  // Sweetness chips
  document.querySelectorAll('.customizer-option-card[data-field="sweetness"]').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('data-val') === String(bev.sweetness));
  });
  // Flavor chips
  document.querySelectorAll('.customizer-option-card[data-field="flavor"]').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('data-val') === bev.flavor);
  });
  // Topping chips
  document.querySelectorAll('.customizer-option-card[data-field="topping"]').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('data-val') === bev.topping);
  });

  // Extra shot toggle
  const shotBtn = document.getElementById('btn-extra-shot-sim');
  const shotBadge = document.getElementById('addon-shot-badge');
  if (shotBtn) shotBtn.classList.toggle('active', bev.extraShot);
  if (shotBadge) {
    shotBadge.textContent = bev.extraShot 
      ? (currentLang === 'en' ? 'Added' : 'تمت الإضافة') 
      : (currentLang === 'en' ? '+ Add' : '+ إضافة');
  }
}

function renderHeroCupSVG(bev) {
  const svg = document.getElementById('hero-cup-svg');
  if (!svg) return;
  const isEn = currentLang === 'en';

  // 1. Sizing classes on SVG
  svg.classList.remove('size-small', 'size-standard', 'size-large');
  if (bev.size === 'small') svg.classList.add('size-small');
  else if (bev.size === 'large') svg.classList.add('size-large');
  else svg.classList.add('size-standard');

  // Temperature classes
  svg.classList.toggle('temp-hot', bev.temp === 'hot');
  svg.classList.toggle('temp-iced', bev.temp === 'iced');

  // 2. Base liquid gradient stops
  const stopBase1 = document.getElementById('svg-stop-base-1');
  const stopBase2 = document.getElementById('svg-stop-base-2');
  if (stopBase1 && stopBase2) {
    let c1 = '#43220f';
    let c2 = '#1e0d04';

    if (bev.base === 'espresso') {
      c1 = bev.extraShot ? '#180702' : '#3d1b09';
      c2 = bev.extraShot ? '#050201' : '#1a0903';
    } else if (bev.base === 'coldbrew') {
      c1 = '#281308';
      c2 = '#080301';
    } else if (bev.base === 'matcha') {
      c1 = '#478c4e';
      c2 = '#1e4b23';
    } else if (bev.base === 'spanish') {
      c1 = '#c8a251';
      c2 = '#3e2210';
    } else if (bev.base === 'chocolate') {
      c1 = '#3a1b0b';
      c2 = '#150602';
    } else if (bev.base === 'refresher') {
      c1 = '#e48a27';
      c2 = '#9a3c0d';
    }

    stopBase1.setAttribute('stop-color', c1);
    stopBase2.setAttribute('stop-color', c2);
  }

  // 3. Milk Swirl Layer
  const milkPath = document.getElementById('svg-liquid-milk');
  const stopMilk1 = document.getElementById('svg-stop-milk-1');
  if (milkPath) {
    if (bev.milk === 'none') {
      milkPath.setAttribute('opacity', '0');
    } else {
      let milkTint = '#fff7eb';
      if (bev.milk === 'oat') milkTint = '#f4e7cd';
      else if (bev.milk === 'almond') milkTint = '#fcf3e2';
      else if (bev.milk === 'skim') milkTint = '#f5f7f8';

      if (stopMilk1) stopMilk1.setAttribute('stop-color', milkTint);
      milkPath.setAttribute('opacity', '0.92');
    }
  }

  // 4. Wall streaks (Caramel / Chocolate)
  const wallStreaks = document.getElementById('svg-wall-streaks');
  if (wallStreaks) {
    const hasStreaks = (bev.flavor === 'caramel' || bev.base === 'spanish' || bev.flavor === 'chocolate');
    wallStreaks.classList.toggle('inactive', !hasStreaks);
    wallStreaks.setAttribute('opacity', hasStreaks ? '0.85' : '0');
    const color = (bev.flavor === 'chocolate') ? '#3c1c0d' : '#dca34b';
    wallStreaks.querySelectorAll('.streak-line').forEach(line => {
      line.setAttribute('stroke', color);
    });
  }

  // 5. Ice Cubes (Only for iced drinks)
  const iceGroup = document.getElementById('svg-ice-group');
  if (iceGroup) {
    iceGroup.style.opacity = (bev.temp === 'iced') ? '1' : '0';
  }

  // 6. Steam Group (Only for hot drinks)
  const steamGroup = document.getElementById('svg-steam-group');
  if (steamGroup) {
    steamGroup.classList.toggle('active', bev.temp === 'hot');
    steamGroup.setAttribute('opacity', bev.temp === 'hot' ? '1' : '0');
  }

  // 7. Foam and Latte Art
  const foamLayer = document.getElementById('svg-foam-layer');
  const latteArt = document.getElementById('svg-latte-art');
  if (foamLayer) {
    if (bev.base === 'matcha') {
      foamLayer.setAttribute('fill', '#97c79e');
    } else {
      foamLayer.setAttribute('fill', '#fff9f0');
    }
  }
  if (latteArt) {
    latteArt.style.display = (bev.temp === 'hot' && bev.milk !== 'none') ? 'block' : 'none';
  }

  // 8. Drizzle Ribbon
  const drizzle = document.getElementById('svg-drizzle-ribbon');
  if (drizzle) {
    if (bev.flavor === 'caramel') {
      drizzle.style.display = 'block';
      drizzle.setAttribute('stroke', '#dca34b');
    } else if (bev.flavor === 'chocolate') {
      drizzle.style.display = 'block';
      drizzle.setAttribute('stroke', '#3d1c08');
    } else {
      drizzle.style.display = 'none';
    }
  }

  // 9. Toppings Dust
  const toppingsGroup = document.getElementById('svg-toppings-group');
  if (toppingsGroup) {
    if (bev.topping === 'none') {
      toppingsGroup.style.display = 'none';
    } else {
      toppingsGroup.style.display = 'block';
      let dotColor = '#5c2e0b';
      if (bev.topping === 'seasalt') dotColor = '#ffffff';
      else if (bev.topping === 'cocoa') dotColor = '#2b1204';
      toppingsGroup.querySelectorAll('circle').forEach(c => c.setAttribute('fill', dotColor));
    }
  }

  // 10. Temperature Badge Overlay
  const tempDot = document.getElementById('sim-temp-dot');
  const tempText = document.getElementById('sim-temp-text');
  if (tempDot && tempText) {
    tempDot.classList.toggle('hot', bev.temp === 'hot');
    tempText.textContent = bev.temp === 'iced'
      ? (isEn ? 'Chilled • 4°C' : 'بارد مثلج • 4°C')
      : (isEn ? 'Steamed • 65°C' : 'ساخن ومبخر • 65°C');
  }
}

// Carousel Navigation
window.navigateDrinkCarousel = function(direction) {
  currentDrinkIndex = (currentDrinkIndex + direction + SIMULATOR_BEVERAGES.length) % SIMULATOR_BEVERAGES.length;
  drinkCustomHistory = [];
  currentDrinkState = JSON.parse(JSON.stringify(SIMULATOR_BEVERAGES[currentDrinkIndex]));
  currentDrinkState.history = [];

  const box = document.getElementById('cup-interactive-box');
  if (box) {
    box.classList.remove('snap-next', 'snap-prev');
    void box.offsetWidth;
    box.classList.add(direction > 0 ? 'snap-next' : 'snap-prev');
    setTimeout(() => { box.classList.remove('snap-next', 'snap-prev'); }, 350);
  }

  renderSimulatorDrink();
};

window.jumpToDrink = function(idx) {
  if (idx < 0 || idx >= SIMULATOR_BEVERAGES.length) return;
  const dir = idx >= currentDrinkIndex ? 1 : -1;
  currentDrinkIndex = idx;
  drinkCustomHistory = [];
  currentDrinkState = JSON.parse(JSON.stringify(SIMULATOR_BEVERAGES[currentDrinkIndex]));
  currentDrinkState.history = [];
  renderSimulatorDrink();
};

// Physical Swipe / Drag Gestures on Cup Viewport
function setupCupDragGestures() {
  const viewport = document.getElementById('hero-cup-viewport');
  const box = document.getElementById('cup-interactive-box');
  if (!viewport || !box) return;

  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  const onStart = (e) => {
    isDragging = true;
    startX = (e.touches && e.touches[0]) ? e.touches[0].clientX : e.clientX;
    currentX = startX;
    box.classList.add('dragging');
  };

  const onMove = (e) => {
    if (!isDragging) return;
    currentX = (e.touches && e.touches[0]) ? e.touches[0].clientX : e.clientX;
    const deltaX = currentX - startX;
    // Physical drag resistance
    const damp = deltaX * 0.42;
    const rot = deltaX * 0.035;
    box.style.transform = `translateX(${damp}px) rotate(${rot}deg)`;
  };

  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    box.classList.remove('dragging');
    const deltaX = currentX - startX;
    box.style.transform = '';

    const threshold = 40;
    const isRtl = document.documentElement.dir === 'rtl';

    if (Math.abs(deltaX) > threshold) {
      if (isRtl) {
        if (deltaX < 0) navigateDrinkCarousel(1);
        else navigateDrinkCarousel(-1);
      } else {
        if (deltaX < 0) navigateDrinkCarousel(1);
        else navigateDrinkCarousel(-1);
      }
    }
  };

  viewport.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);

  viewport.addEventListener('touchstart', onStart, { passive: true });
  viewport.addEventListener('touchmove', onMove, { passive: true });
  viewport.addEventListener('touchend', onEnd);
  viewport.addEventListener('touchcancel', onEnd);
}

// Cup Size Controls
window.selectSimulatorSize = function(size) {
  if (!currentDrinkState) return;
  pushDrinkHistory();
  currentDrinkState.size = size;
  renderSimulatorDrink();
};

// Customizer Workspace Toggle
window.toggleCustomizerWorkspace = function() {
  const workspace = document.getElementById('customizer-workspace');
  if (!workspace) return;
  const isOpen = workspace.classList.toggle('open');
  const btn = document.getElementById('btn-toggle-customizer');
  if (btn) {
    btn.classList.toggle('active', isOpen);
    btn.querySelector('span').textContent = isOpen
      ? (currentLang === 'en' ? 'Close Customizer' : 'إغلاق ورشة التخصيص')
      : (currentLang === 'en' ? 'Customize Your Drink' : 'اصنع مشروبك على مزاجك');
  }
  if (isOpen) {
    workspace.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};

// Apply Option from Customizer
window.applyCustomOption = function(field, val, el) {
  if (!currentDrinkState) return;
  pushDrinkHistory();
  currentDrinkState[field] = val;

  // Smart defaults when base changes
  if (field === 'base') {
    if (val === 'coldbrew') {
      currentDrinkState.temp = 'iced';
      currentDrinkState.milk = 'none';
    } else if (val === 'matcha') {
      currentDrinkState.temp = 'iced';
      currentDrinkState.milk = 'whole';
    }
  }

  renderSimulatorDrink();
};

// Extra Shot Toggle
window.toggleSimulatorExtraShot = function() {
  if (!currentDrinkState) return;
  pushDrinkHistory();
  currentDrinkState.extraShot = !currentDrinkState.extraShot;
  renderSimulatorDrink();
  showAppToast(currentDrinkState.extraShot
    ? (currentLang === 'en' ? 'Extra espresso shot added (+15 EGP)' : 'تمت إضافة شوت إسبريسو إضافي (+15 ج.م)')
    : (currentLang === 'en' ? 'Extra shot removed' : 'تم إلغاء الشوت الإضافي'));
};

// Undo / Reset Engine
function pushDrinkHistory() {
  if (!currentDrinkState) return;
  const snapshot = JSON.parse(JSON.stringify(currentDrinkState));
  delete snapshot.history;
  drinkCustomHistory.push(snapshot);
  if (drinkCustomHistory.length > 20) drinkCustomHistory.shift();
}

window.undoDrinkCustomization = function() {
  if (drinkCustomHistory.length === 0) return;
  const prev = drinkCustomHistory.pop();
  currentDrinkState = prev;
  renderSimulatorDrink();
  showAppToast(currentLang === 'en' ? 'Change undone' : 'تم التراجع عن التعديل الأخير');
};

window.resetDrinkCustomization = function() {
  drinkCustomHistory = [];
  currentDrinkState = JSON.parse(JSON.stringify(SIMULATOR_BEVERAGES[currentDrinkIndex]));
  currentDrinkState.history = [];
  renderSimulatorDrink();
  showAppToast(currentLang === 'en' ? 'Recipe reset to default' : 'تمت إعادة ضبط الوصفة للحالة الأصلية');
};

// Add Current Simulator Drink to Tray
window.addCurrentSimulatorDrinkToTray = function() {
  if (!currentDrinkState) return;
  const isEn = currentLang === 'en';
  const bev = currentDrinkState;
  const price = calculateCurrentDrinkPrice(bev);

  const customId = `sim-${bev.id}-${Date.now()}`;
  const sizeLabel = bev.size === 'small' ? '8oz' : (bev.size === 'large' ? '16oz' : '12oz');
  
  const customItem = {
    id: customId,
    name: `${bev.name} (${sizeLabel})`,
    nameEn: `${bev.nameEn} (${sizeLabel})`,
    price: price,
    isCustomized: true,
    size: bev.size,
    customRecipe: { ...bev }
  };

  const detailsAr = `${bev.temp === 'iced' ? 'بارد' : 'ساخن'} • حليب ${bev.milk} • سكر ${bev.sweetness}%${bev.extraShot ? ' • شوت إضافي' : ''}`;
  orderTrayItems.set(customId, { item: customItem, quantity: 1, notes: detailsAr });

  updateTrayDisplay();
  renderMenuCards();
  renderBaristaPicks();
  showAppToast(isEn ? `Added ${customItem.nameEn} to your order tray!` : `تمت إضافة ${customItem.name} للعربة بنجاح!`);
};

// WhatsApp Direct Order for Simulator Drink
window.orderCurrentDrinkWhatsApp = function() {
  if (!currentDrinkState) return;
  const isEn = currentLang === 'en';
  const bev = currentDrinkState;
  const price = calculateCurrentDrinkPrice(bev);
  const sizeLabel = bev.size === 'small' ? '8oz' : (bev.size === 'large' ? '16oz' : '12oz');

  let msg = '';
  if (isEn) {
    msg = `Hello +970 SPOT Cafe Mansoura!\nI would like to order this customized drink:\n• Drink: ${bev.nameEn} (${sizeLabel})\n• Temperature: ${bev.temp}\n• Milk: ${bev.milk}\n• Sweetness: ${bev.sweetness}%\n• Flavor: ${bev.flavor}\n• Extra Shot: ${bev.extraShot ? 'Yes' : 'No'}\n• Final Price: ${price} EGP\n\nPlease confirm availability and delivery status. Thank you!`;
  } else {
    msg = `مرحباً كافيه +970 SPOT المنصورة!\nأود طلب هذا المشروب المخصص:\n• المشروب: ${bev.name} (حجم ${sizeLabel})\n• درجة الحرارة: ${bev.temp === 'iced' ? 'بارد مثلج' : 'ساخن مبخر'}\n• نوع اللبن: ${bev.milk}\n• درجة السكر: ${bev.sweetness}%\n• النكهة: ${bev.flavor}\n• شوت إضافي: ${bev.extraShot ? 'نعم' : 'لا'}\n• السعر الإجمالي: ${price} ج.م\n\nيرجى تأكيد الاستلام والتجهيز. شكراً لكم!`;
  }

  const encoded = encodeURIComponent(msg);
  window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  showAppToast(isEn ? 'Opening WhatsApp...' : 'جارٍ فتح واتساب الكافيه...');
};

// Catalog Category Filtering and Quick Jump
window.filterCatalogCategory = function(cat, el) {
  activeCategory = cat;
  document.querySelectorAll('.category-touch-strip .touch-pill').forEach(pill => {
    pill.classList.remove('active');
  });
  if (el) el.classList.add('active');

  if (cat !== 'all' && cat !== 'bakery') {
    const foundIdx = SIMULATOR_BEVERAGES.findIndex(b => b.category === cat);
    if (foundIdx !== -1) {
      jumpToDrink(foundIdx);
    }
  }

  renderMenuCards();
};

// ============================================================
// MENU & BARISTA PICKS RENDERING
// ============================================================
function renderBaristaPicks() {
  const grid = document.getElementById('barista-picks-grid');
  if (!grid) return;

  const isEn = currentLang === 'en';
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.ar;
  const picks = APP_MENU.filter(i => i.isSignature).slice(0, 4);

  grid.innerHTML = picks.map(item => {
    const title = isEn ? item.nameEn : item.name;
    const sub = isEn ? item.name : item.nameEn;
    const isInTray = orderTrayItems.has(item.id);
    return `
      <div class="compact-product-card" onclick="openProductSheet('${item.id}')">
        <img src="${item.image}" alt="${title}" class="compact-card-thumb" loading="lazy">
        <div class="compact-card-name">${title}</div>
        <div class="compact-card-sub">${sub}</div>
        <div class="compact-card-footer">
          <span style="font-size:0.8rem;color:var(--gold-accent);font-weight:800;">${item.price} ${t.currency_egp}</span>
          <button type="button" class="btn-add-circle" onclick="event.stopPropagation(); quickAddMenuItem('${item.id}')" title="${isInTray ? 'Added' : 'Add'}">
            ${isInTray ? '✓' : '+'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderMenuCards() {
  const feed = document.getElementById('menu-cards-feed');
  if (!feed) return;

  const isEn = currentLang === 'en';
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.ar;

  const filtered = APP_MENU.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q ||
      item.name.toLowerCase().includes(q) ||
      item.nameEn.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.descEn.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    feed.innerHTML = `
      <div style="text-align:center;padding:40px 20px;background:var(--bg-card);border:1px dashed var(--border-subtle);border-radius:var(--radius-lg);">
        <h4 style="font-size:1.05rem;color:#fff;margin-bottom:6px;">${t.no_items_found}</h4>
        <p style="font-size:0.82rem;color:var(--text-muted);">${t.no_items_hint}</p>
      </div>
    `;
    return;
  }

  feed.innerHTML = filtered.map(item => {
    const title = isEn ? item.nameEn : item.name;
    const sub = isEn ? item.name : item.nameEn;
    const desc = isEn ? item.descEn : item.desc;
    const catName = isEn ? item.categoryNameEn : item.categoryName;
    const isInTray = orderTrayItems.has(item.id);

    return `
      <div class="feed-product-item" onclick="openProductSheet('${item.id}')">
        <img src="${item.image}" alt="${title}" class="feed-thumb" loading="lazy">
        <div class="feed-info">
          <div class="feed-category-tag">${catName} • ${item.badge}</div>
          <div class="feed-title">${title}</div>
          <div class="feed-en-title">${sub}</div>
          <div class="feed-desc">${desc}</div>
        </div>
        <div class="feed-price-action">
          <span style="font-size:0.92rem;font-weight:900;color:var(--gold-accent);">${item.price} ${t.currency_egp}</span>
          <button type="button" class="feed-action-btn" onclick="event.stopPropagation(); quickAddMenuItem('${item.id}')" title="أضف للطلب">
            ${isInTray ? '✓' : '+'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function setupMenuControls() {
  const pills = document.querySelectorAll('.touch-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-cat') || 'all';
      renderMenuCards();
    });
  });

  const searchInput = document.getElementById('menu-search-input');
  const clearBtn = document.getElementById('search-clear-app');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = searchQuery ? 'block' : 'none';
      renderMenuCards();
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      renderMenuCards();
    });
  }
}

// Quick Add / Tray Logic
window.quickAddMenuItem = function(id) {
  const item = APP_MENU.find(m => m.id === id);
  if (!item) return;

  if (orderTrayItems.has(id)) {
    const current = orderTrayItems.get(id);
    current.quantity += 1;
    orderTrayItems.set(id, current);
  } else {
    orderTrayItems.set(id, { item, quantity: 1, notes: "" });
  }

  updateTrayDisplay();
  renderMenuCards();
  renderBaristaPicks();
  showAppToast(currentLang === 'en' ? `Added ${item.nameEn} to your tray` : `تمت إضافة ${item.name} لطلبك`);
};

function updateTrayDisplay() {
  const tray = document.getElementById('floating-order-tray');
  const bubble = document.getElementById('tray-count-bubble');
  if (!tray || !bubble) return;

  let totalCount = 0;
  orderTrayItems.forEach(entry => { totalCount += entry.quantity; });

  bubble.textContent = totalCount;
  tray.classList.toggle('visible', totalCount > 0);
}

// ============================================================
// COFFEE LAB & DYNAMIC PHYSICAL POUR SIMULATION
// ============================================================
function initCoffeeLab() {
  updateDrinkVisualizer();
  renderSavedRecipes();
}

window.selectLabBase = function(base, el) {
  labState.base = base;
  updateOptionSelection('base', el);
  triggerPourAnimation('base');
  updateDrinkVisualizer();
};

window.selectLabTemp = function(temp) {
  labState.temp = temp;
  document.getElementById('seg-temp-iced').classList.toggle('active', temp === 'iced');
  document.getElementById('seg-temp-hot').classList.toggle('active', temp === 'hot');
  updateDrinkVisualizer();
};

window.selectLabSize = function(size, el) {
  labState.size = size;
  updateOptionSelection('size', el);
  updateDrinkVisualizer();
};

window.selectLabMilk = function(milk, el) {
  labState.milk = milk;
  updateOptionSelection('milk', el);
  if (milk !== 'none') triggerPourAnimation('milk');
  updateDrinkVisualizer();
};

window.selectLabSweetness = function(val, el) {
  labState.sweetness = val;
  updateOptionSelection('sweetness', el);
  const fill = document.getElementById('sweetness-fill');
  if (fill) fill.style.width = `${val}%`;
  updateDrinkVisualizer();
};

window.selectLabFlavor = function(flavor, el) {
  labState.flavor = flavor;
  updateOptionSelection('flavor', el);
  if (flavor === 'caramel' || flavor === 'chocolate') {
    triggerPourAnimation(flavor);
  }
  updateDrinkVisualizer();
};

window.selectLabTopping = function(topping, el) {
  labState.topping = topping;
  updateOptionSelection('topping', el);
  updateDrinkVisualizer();
};

window.toggleExtraShot = function() {
  labState.extraShot = !labState.extraShot;
  const btn = document.getElementById('btn-extra-shot');
  if (btn) btn.classList.toggle('active', labState.extraShot);
  triggerPourAnimation('shot');
  updateDrinkVisualizer();
  showAppToast(labState.extraShot
    ? (currentLang === 'en' ? 'Extra double espresso shot added!' : 'تمت إضافة دبل شوت إسبريسو إضافي!')
    : (currentLang === 'en' ? 'Extra shot removed' : 'تم إلغاء الشوت الإضافي'));
};

window.resetLabDrink = function() {
  labState.base = 'espresso';
  labState.temp = 'iced';
  labState.size = 'standard';
  labState.milk = 'whole';
  labState.sweetness = '50';
  labState.flavor = 'none';
  labState.topping = 'none';
  labState.extraShot = false;
  labState.activeStep = 1;

  const btnShot = document.getElementById('btn-extra-shot');
  if (btnShot) btnShot.classList.remove('active');

  goToLabStep(1);
  updateDrinkVisualizer();
  showAppToast(currentLang === 'en' ? 'Recipe reset to default' : 'تمت إعادة ضبط الوصفة من البداية');
};

function triggerPourAnimation(type) {
  const jet = document.getElementById('pour-stream-jet');
  const splash = document.getElementById('pour-splash-ring');
  if (!jet) return;

  // Color mapping for physical streams
  let streamColor = 'linear-gradient(180deg, #dca34b 0%, #3e1e0a 100%)';
  if (type === 'milk') streamColor = 'linear-gradient(180deg, #ffffff 0%, #f4e8d3 100%)';
  else if (type === 'caramel') streamColor = 'linear-gradient(180deg, #e49f38 0%, #995c10 100%)';
  else if (type === 'chocolate') streamColor = 'linear-gradient(180deg, #431f0c 0%, #170701 100%)';
  else if (type === 'shot') streamColor = 'linear-gradient(180deg, #2b1103 0%, #100601 100%)';

  jet.style.background = streamColor;
  jet.classList.remove('pouring');
  if (splash) splash.classList.remove('splashing');

  // Trigger reflow
  void jet.offsetWidth;

  jet.classList.add('pouring');
  if (splash) {
    setTimeout(() => { splash.classList.add('splashing'); }, 180);
  }
}

function updateOptionSelection(type, selectedEl) {
  document.querySelectorAll(`.lab-option-card[data-type="${type}"]`).forEach(card => {
    card.classList.toggle('selected', card === selectedEl);
  });
}

window.goToLabStep = function(stepNum) {
  labState.activeStep = stepNum;
  document.querySelectorAll('.step-nav-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.getAttribute('data-step')) === stepNum);
  });
  for (let s = 1; s <= 5; s++) {
    const el = document.getElementById(`lab-step-${s}`);
    if (el) el.classList.toggle('active', s === stepNum);
  }
  const prevBtn = document.getElementById('btn-lab-prev');
  const nextBtn = document.getElementById('btn-lab-next');
  if (prevBtn) prevBtn.disabled = (stepNum === 1);
  if (nextBtn) {
    const isLast = (stepNum === 5);
    nextBtn.querySelector('span').textContent = isLast 
      ? (currentLang === 'en' ? 'Review & Order' : 'مراجعة والطلب')
      : (currentLang === 'en' ? 'Next' : 'التالي');
  }
};

window.navLabStep = function(delta) {
  let next = labState.activeStep + delta;
  if (next < 1) next = 1;
  if (next > 5) {
    addLabDrinkToTray();
    openCheckoutModal();
    return;
  }
  goToLabStep(next);
};

// Live Dynamic Drink Visualizer
function updateDrinkVisualizer() {
  const cup = document.getElementById('cup-silhouette');
  const steam = document.getElementById('drink-steam');
  const layerBase = document.getElementById('layer-base');
  const layerMilk = document.getElementById('layer-milk');
  const layerSweet = document.getElementById('layer-sweetness');
  const layerIce = document.getElementById('layer-ice');
  const layerDrizzle = document.getElementById('layer-drizzle');
  const layerToppings = document.getElementById('layer-toppings');
  const caramelWall = document.getElementById('caramel-streaks-wall');
  const chocolateRibbons = document.getElementById('chocolate-ribbons');
  const tempBadge = document.getElementById('live-temp-badge');
  const tempText = document.getElementById('live-temp-text');

  if (!cup || !layerBase) return;
  const isEn = currentLang === 'en';

  // 1. Cup Size & Temp
  cup.classList.toggle('size-large', labState.size === 'large');
  cup.classList.toggle('size-standard', labState.size === 'standard');
  cup.classList.toggle('temp-hot', labState.temp === 'hot');
  cup.classList.toggle('temp-iced', labState.temp === 'iced');

  if (steam) steam.classList.toggle('active', labState.temp === 'hot');
  if (layerIce) layerIce.style.opacity = (labState.temp === 'iced') ? '1' : '0';

  if (tempBadge && tempText) {
    const dot = tempBadge.querySelector('.temp-indicator-dot');
    if (dot) dot.classList.toggle('hot', labState.temp === 'hot');
    tempText.textContent = labState.temp === 'iced' 
      ? (isEn ? 'Chilled • 4°C' : 'بارد مثلج • 4°C')
      : (isEn ? 'Steamed • 65°C' : 'ساخن ومبخر • 65°C');
  }

  // 2. Base Liquid Colors & Extra Shot Darkening
  let baseColor = 'linear-gradient(180deg, #3d1c08 0%, #1a0a03 100%)';
  let caffeineTextAr = 'دبل شوت (متوسط)';
  let caffeineTextEn = 'Double Shot (Med)';
  let basePrice = 75;

  switch (labState.base) {
    case 'espresso':
      baseColor = labState.extraShot 
        ? 'linear-gradient(180deg, #200d04 0%, #080301 100%)' 
        : 'linear-gradient(180deg, #43220f 0%, #1e0d04 100%)';
      caffeineTextAr = labState.extraShot ? 'تريبل شوت (فائق القوة)' : 'دبل شوت (قوي)';
      caffeineTextEn = labState.extraShot ? 'Triple Shot (Ultra Bold)' : 'Double Shot (Bold)';
      basePrice = 75;
      break;
    case 'coldbrew':
      baseColor = labState.extraShot 
        ? 'linear-gradient(180deg, #150903 0%, #000000 100%)' 
        : 'linear-gradient(180deg, #2b170c 0%, #0c0603 100%)';
      caffeineTextAr = 'مقطر 16 ساعة (عالي جداً)';
      caffeineTextEn = '16hr Slow Drip (High)';
      basePrice = 80;
      break;
    case 'matcha':
      baseColor = 'linear-gradient(180deg, #448b4b 0%, #1e4b23 100%)';
      caffeineTextAr = 'طبيعي هادئ (L-Theanine)';
      caffeineTextEn = 'Calm Focus (Matcha)';
      basePrice = 85;
      break;
    case 'spanish':
      baseColor = labState.extraShot 
        ? 'linear-gradient(180deg, #96702c 0%, #1c0f05 100%)' 
        : 'linear-gradient(180deg, #c8a251 0%, #3e2210 100%)';
      caffeineTextAr = labState.extraShot ? 'إسبريسو مركز مكثف' : 'إسبريسو كراميلي متوازن';
      caffeineTextEn = labState.extraShot ? 'Intense Condensed Espresso' : 'Balanced Caramel Espresso';
      basePrice = 85;
      break;
    case 'chocolate':
      baseColor = 'linear-gradient(180deg, #371b0b 0%, #160702 100%)';
      caffeineTextAr = 'خالي كافيين (كاكاو)';
      caffeineTextEn = 'Caffeine Free (Cocoa)';
      basePrice = 75;
      break;
  }
  layerBase.style.background = baseColor;

  // 3. Milk Swirl
  if (layerMilk) {
    if (labState.milk === 'none') {
      layerMilk.style.opacity = '0';
      layerMilk.style.height = '0%';
    } else {
      let milkColor = '#fff7eb';
      if (labState.milk === 'oat') milkColor = '#f3e5c8';
      else if (labState.milk === 'almond') milkColor = '#fbf1df';
      else if (labState.milk === 'skim') milkColor = '#f4f6f7';

      layerMilk.style.opacity = '0.92';
      layerMilk.style.height = '64%';
      layerMilk.style.background = `linear-gradient(180deg, ${milkColor} 0%, rgba(255, 247, 235, 0.4) 75%, transparent 100%)`;
    }
  }

  // 4. Sweetness & Wall Streaks
  if (layerSweet) {
    const swNum = parseInt(labState.sweetness, 10);
    layerSweet.style.opacity = (swNum / 100 * 0.85).toString();
    layerSweet.style.height = `${Math.max(10, swNum * 0.4)}%`;
  }

  if (caramelWall) {
    caramelWall.classList.toggle('active', labState.flavor === 'caramel' || labState.base === 'spanish');
  }
  if (chocolateRibbons) {
    chocolateRibbons.classList.toggle('active', labState.flavor === 'chocolate' || labState.base === 'chocolate');
  }

  // 5. Drizzle Ribbons
  if (layerDrizzle) {
    if (labState.flavor === 'none') {
      layerDrizzle.style.opacity = '0';
    } else if (labState.flavor === 'caramel') {
      layerDrizzle.style.opacity = '0.92';
      layerDrizzle.style.background = 'radial-gradient(ellipse at 50% 10%, #dca34b 0%, transparent 70%), repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(220,163,75,0.4) 10px, rgba(220,163,75,0.4) 14px)';
    } else if (labState.flavor === 'chocolate') {
      layerDrizzle.style.opacity = '0.92';
      layerDrizzle.style.background = 'radial-gradient(ellipse at 50% 10%, #371d0e 0%, transparent 70%), repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(55,29,14,0.5) 10px, rgba(55,29,14,0.5) 15px)';
    } else if (labState.flavor === 'vanilla') {
      layerDrizzle.style.opacity = '0.8';
      layerDrizzle.style.background = 'radial-gradient(ellipse at 50% 10%, #fff0d4 0%, transparent 60%)';
    }
  }

  // 6. Toppings Dusting
  if (layerToppings) {
    if (labState.topping === 'none') {
      layerToppings.style.opacity = '0';
    } else if (labState.topping === 'cinnamon') {
      layerToppings.style.opacity = '1';
      layerToppings.style.background = 'radial-gradient(circle, #8a4825 1.5px, transparent 1.5px)';
      layerToppings.style.backgroundSize = '6px 6px';
    } else if (labState.topping === 'cocoa') {
      layerToppings.style.opacity = '1';
      layerToppings.style.background = 'radial-gradient(circle, #3d1c08 1.5px, transparent 1.5px)';
      layerToppings.style.backgroundSize = '5px 5px';
    } else if (labState.topping === 'seasalt') {
      layerToppings.style.opacity = '1';
      layerToppings.style.background = 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)';
      layerToppings.style.backgroundSize = '8px 8px';
    }
  }

  // 7. Dynamic Recipe Name & Price Calculation
  let price = basePrice;
  if (labState.size === 'large') price += 15;
  if (labState.milk === 'oat' || labState.milk === 'almond') price += 15;
  if (labState.flavor !== 'none') price += 10;
  if (labState.extraShot) price += 15;

  const tempPrefixAr = labState.temp === 'iced' ? 'آيس' : 'ساخن';
  const tempPrefixEn = labState.temp === 'iced' ? 'Iced' : 'Hot';

  const baseNames = {
    espresso: { ar: 'لاتيه أرابيكا', en: 'Arabica Latte' },
    coldbrew: { ar: 'كولد برو مختص', en: 'Specialty Cold Brew' },
    matcha: { ar: 'ماتشا لاتيه ياباني', en: 'Ceremonial Matcha Latte' },
    spanish: { ar: 'سبانش سبيشيال', en: 'Spanish Latte Special' },
    chocolate: { ar: 'شوكولاتة بلجيكية', en: 'Belgian Hot Cocoa' }
  };

  const milkNames = {
    whole: { ar: 'حليب كامل الدسم', en: 'Whole Milk' },
    oat: { ar: 'حليب شوفان', en: 'Oat Milk' },
    almond: { ar: 'حليب لوز', en: 'Almond Milk' },
    skim: { ar: 'حليب خفيف', en: 'Skim Milk' },
    none: { ar: 'بدون حليب', en: 'Black' }
  };

  const flavorNames = {
    caramel: { ar: 'كراميل', en: 'Salted Caramel' },
    vanilla: { ar: 'فانيليا', en: 'Vanilla' },
    chocolate: { ar: 'شوكولاتة', en: 'Dark Choc' },
    none: { ar: '', en: '' }
  };

  let generatedAr = `${tempPrefixAr} ${baseNames[labState.base].ar}`;
  if (flavorNames[labState.flavor].ar) generatedAr += ` بالـ${flavorNames[labState.flavor].ar}`;
  if (labState.milk !== 'none') generatedAr += ` و${milkNames[labState.milk].ar}`;
  if (labState.extraShot) generatedAr += ` (إكسترا شوت)`;

  let generatedEn = `${tempPrefixEn} ${flavorNames[labState.flavor].en ? flavorNames[labState.flavor].en + ' ' : ''}${baseNames[labState.base].en}`;
  if (labState.milk !== 'none') generatedEn += ` (${milkNames[labState.milk].en})`;
  if (labState.extraShot) generatedEn += ` [Extra Shot]`;

  const nameEl = document.getElementById('specs-drink-name');
  const nameEnEl = document.getElementById('specs-drink-name-en');
  const priceEl = document.getElementById('specs-price-val');
  const metricCaffeineEl = document.getElementById('metric-caffeine-val');
  const metricBodyEl = document.getElementById('metric-body-val');
  const metricSweetEl = document.getElementById('metric-sweet-val');

  if (nameEl) nameEl.textContent = generatedAr;
  if (nameEnEl) nameEnEl.textContent = generatedEn;
  if (priceEl) priceEl.textContent = price;

  if (metricCaffeineEl) metricCaffeineEl.textContent = isEn ? caffeineTextEn : caffeineTextAr;
  if (metricBodyEl) {
    const bodyAr = labState.milk === 'none' ? 'صافي وخفيف' : 'مخملي كريمي';
    const bodyEn = labState.milk === 'none' ? 'Clean & Crisp' : 'Velvety Smooth';
    metricBodyEl.textContent = isEn ? bodyEn : bodyAr;
  }
  if (metricSweetEl) metricSweetEl.textContent = `${labState.sweetness}%`;
}

window.addLabDrinkToTray = function() {
  const isEn = currentLang === 'en';
  const nameEl = document.getElementById('specs-drink-name');
  const nameEnEl = document.getElementById('specs-drink-name-en');
  const priceEl = document.getElementById('specs-price-val');

  const customId = `lab-${Date.now()}`;
  const customItem = {
    id: customId,
    name: nameEl ? nameEl.textContent : 'مشروب مخصص من مختبر القهوة',
    nameEn: nameEnEl ? nameEnEl.textContent : 'Custom Lab Creation',
    price: parseInt(priceEl ? priceEl.textContent : '95', 10),
    isCustomLab: true,
    customDetailsAr: `${labState.temp === 'iced' ? 'مثلج' : 'ساخن'} • سعة ${labState.size === 'large' ? '16oz' : '12oz'} • حلاوة ${labState.sweetness}%`
  };

  orderTrayItems.set(customId, { item: customItem, quantity: 1, notes: customItem.customDetailsAr });
  updateTrayDisplay();
  showAppToast(isEn ? 'Crafted drink added to your order tray!' : 'تمت إضافة ابتكارك لسلة الطلب بنجاح!');
};

// ============================================================
// CHECKOUT & DELIVERY FULFILLMENT MODAL
// ============================================================
window.openCheckoutModal = function() {
  if (orderTrayItems.size === 0) {
    showAppToast(currentLang === 'en' ? 'Your order tray is empty' : 'سلة الطلب فارغة، اختر مشروبك أولاً');
    return;
  }
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('open');
    updateCheckoutPricingDisplay();
  }
};

window.closeCheckoutModal = function() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('open');
};

window.setFulfillment = function(type) {
  currentFulfillment = type;
  const isDel = type === 'delivery';

  document.getElementById('btn-fulfill-delivery').classList.toggle('active', isDel);
  document.getElementById('btn-fulfill-pickup').classList.toggle('active', !isDel);

  document.getElementById('delivery-address-section').style.display = isDel ? 'block' : 'none';
  document.getElementById('delivery-info-section')?.classList.toggle('hidden', !isDel);
  document.getElementById('pickup-info-section').style.display = isDel ? 'none' : 'block';

  const delRow = document.getElementById('summary-delivery-row');
  if (delRow) delRow.style.display = isDel ? 'flex' : 'none';

  updateCheckoutPricingDisplay();
};

window.handleDistrictChange = function(districtId) {
  const d = TENANT_CONFIG.districts.find(item => item.id === districtId);
  selectedDistrictFee = d ? d.fee : TENANT_CONFIG.defaultDeliveryFee;
  updateCheckoutPricingDisplay();
};

window.applyCouponCode = function(code) {
  const input = document.getElementById('checkout-coupon-input');
  if (input) input.value = code;
  applyCouponInput();
  openCheckoutModal();
};

window.applyCouponInput = function() {
  const input = document.getElementById('checkout-coupon-input');
  const code = input ? input.value.trim().toUpperCase() : '';
  const feedback = document.getElementById('coupon-applied-feedback');

  if (PROMO_COUPONS[code]) {
    appliedCoupon = PROMO_COUPONS[code];
    if (feedback) {
      feedback.style.display = 'block';
      feedback.style.color = '#25d366';
      feedback.textContent = currentLang === 'en'
        ? `Coupon applied: ${appliedCoupon.descEn}`
        : `تم تطبيق الكوبون: ${appliedCoupon.descAr}`;
    }
    showAppToast(TRANSLATIONS[currentLang].toast_coupon_applied);
  } else {
    appliedCoupon = null;
    if (feedback) {
      feedback.style.display = 'block';
      feedback.style.color = '#ff6b6b';
      feedback.textContent = TRANSLATIONS[currentLang].toast_coupon_invalid;
    }
    showAppToast(TRANSLATIONS[currentLang].toast_coupon_invalid);
  }
  updateCheckoutPricingDisplay();
};

function updateCheckoutPricingDisplay() {
  const listEl = document.getElementById('checkout-items-list');
  const subtotalEl = document.getElementById('summary-subtotal-val');
  const deliveryEl = document.getElementById('summary-delivery-val');
  const discountRow = document.getElementById('summary-discount-row');
  const discountEl = document.getElementById('summary-discount-val');
  const totalEl = document.getElementById('summary-total-val');

  let subtotal = 0;
  let itemsHtml = '';

  orderTrayItems.forEach((entry, id) => {
    const itemTotal = entry.item.price * entry.quantity;
    subtotal += itemTotal;
    const title = currentLang === 'en' ? (entry.item.nameEn || entry.item.name) : entry.item.name;

    itemsHtml += `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;font-size:0.86rem;">
        <div>
          <span style="font-weight:800;color:#fff;">${title}</span>
          <span style="color:var(--text-muted);font-size:0.75rem;"> × ${entry.quantity}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-weight:800;color:var(--gold-accent);">${itemTotal} ${TRANSLATIONS[currentLang].currency_egp}</span>
          <button type="button" onclick="removeTrayItem('${id}')" style="background:transparent;border:none;color:#ff6b6b;cursor:pointer;font-size:0.85rem;">✕</button>
        </div>
      </div>
    `;
  });

  if (listEl) listEl.innerHTML = itemsHtml || '<div style="color:var(--text-muted);font-size:0.8rem;">سلتك فارغة</div>';

  let deliveryFee = currentFulfillment === 'delivery' ? selectedDistrictFee : 0;
  if (subtotal >= TENANT_CONFIG.freeDeliveryThreshold && currentFulfillment === 'delivery') {
    deliveryFee = 0;
  }

  let discount = 0;
  if (appliedCoupon) {
    if (subtotal >= appliedCoupon.minOrder) {
      discount = Math.round((subtotal * appliedCoupon.discountPercent) / 100);
    }
  }

  const finalTotal = Math.max(0, subtotal + deliveryFee - discount);

  if (subtotalEl) subtotalEl.textContent = `${subtotal} ${TRANSLATIONS[currentLang].currency_egp}`;
  if (deliveryEl) {
    deliveryEl.textContent = deliveryFee === 0 
      ? (currentLang === 'en' ? 'Free (Promo)' : 'مجاناً (عرض)') 
      : `${deliveryFee} ${TRANSLATIONS[currentLang].currency_egp}`;
  }
  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `-${discount} ${TRANSLATIONS[currentLang].currency_egp}`;
    } else {
      discountRow.style.display = 'none';
    }
  }
  if (totalEl) totalEl.textContent = `${finalTotal} ${TRANSLATIONS[currentLang].currency_egp}`;
}

window.removeTrayItem = function(id) {
  orderTrayItems.delete(id);
  updateTrayDisplay();
  renderMenuCards();
  renderBaristaPicks();
  updateCheckoutPricingDisplay();
  if (orderTrayItems.size === 0) closeCheckoutModal();
};

window.selectPaymentMethod = function(method) {
  document.getElementById('pay-cod-btn')?.classList.toggle('selected', method === 'cod');
  document.getElementById('pay-card-btn')?.classList.toggle('selected', method === 'card');
};

// ============================================================
// SIMULATED ORDER CONFIRMATION & LIVE TRACKING ENGINE
// ============================================================
window.confirmAndPlaceOrder = function() {
  if (orderTrayItems.size === 0) return;

  const phoneInput = document.getElementById('checkout-phone-input');
  const addressInput = document.getElementById('checkout-address-input');
  const custName = localStorage.getItem('970spot_cust_name') || 'عميل كافيه +970';

  const orderNum = `#SPOT-${Math.floor(1000 + Math.random() * 9000)}`;
  const items = Array.from(orderTrayItems.values());

  activeOrder = {
    id: orderNum,
    fulfillment: currentFulfillment,
    items: items,
    phone: phoneInput ? phoneInput.value : '',
    address: addressInput ? addressInput.value : '',
    customer: custName,
    statusStep: 1, // 1: received, 2: preparing, 3: out/ready, 4: delivered
    placedAt: Date.now()
  };

  // Award loyalty points (+10% of subtotal)
  const earnedPoints = 25;
  currentPoints += earnedPoints;
  localStorage.setItem('970spot_loyalty_pts', currentPoints.toString());
  updateLoyaltyPointsDisplay();

  // Clear cart
  orderTrayItems.clear();
  updateTrayDisplay();
  renderMenuCards();
  renderBaristaPicks();
  closeCheckoutModal();

  // Show active order banner on Home screen
  const banner = document.getElementById('home-active-order-banner');
  if (banner) banner.style.display = 'flex';

  openOrderTracker();
  showAppToast(TRANSLATIONS[currentLang].toast_order_placed);
};

window.openOrderTracker = function() {
  if (!activeOrder) return;
  const modal = document.getElementById('tracking-modal');
  if (modal) modal.classList.add('open');
  startOrderTrackingSimulation();
};

window.closeOrderTracker = function() {
  const modal = document.getElementById('tracking-modal');
  if (modal) modal.classList.remove('open');
};

function startOrderTrackingSimulation() {
  if (trackingInterval) clearInterval(trackingInterval);

  etaSecondsRemaining = 24 * 60; // 24 minutes

  const idBadge = document.getElementById('tracking-order-id-badge');
  if (idBadge && activeOrder) idBadge.textContent = `طلب ${activeOrder.id}`;

  const modeIndicator = document.getElementById('tracking-mode-indicator');
  if (modeIndicator) {
    modeIndicator.textContent = activeOrder.fulfillment === 'delivery'
      ? (currentLang === 'en' ? 'Delivery to Mansoura Address' : 'توصيل لعنوانك في المنصورة')
      : (currentLang === 'en' ? 'Pickup from University Branch' : 'استلام من فرع حي الجامعة');
  }

  updateTrackingUI();

  trackingInterval = setInterval(() => {
    if (etaSecondsRemaining > 0) etaSecondsRemaining -= 3;
    const mins = Math.floor(etaSecondsRemaining / 60);
    const secs = etaSecondsRemaining % 60;
    const timerEl = document.getElementById('tracking-eta-timer');
    if (timerEl) {
      timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Step state machine simulation
    const elapsed = (24 * 60) - etaSecondsRemaining;
    if (elapsed > 4 && activeOrder.statusStep < 2) {
      activeOrder.statusStep = 2;
      updateTrackingUI();
    } else if (elapsed > 18 && activeOrder.statusStep < 3) {
      activeOrder.statusStep = 3;
      updateTrackingUI();
    } else if (elapsed > 36 && activeOrder.statusStep < 4) {
      activeOrder.statusStep = 4;
      updateTrackingUI();
      clearInterval(trackingInterval);
    }
  }, 1000);
}

function updateTrackingUI() {
  if (!activeOrder) return;
  const isEn = currentLang === 'en';
  const step = activeOrder.statusStep;

  // Step 1
  const s1 = document.getElementById('step-track-1');
  if (s1) {
    s1.className = `timeline-step ${step > 1 ? 'completed' : 'current'}`;
  }

  // Step 2
  const s2 = document.getElementById('step-track-2');
  if (s2) {
    s2.className = `timeline-step ${step > 2 ? 'completed' : (step === 2 ? 'current' : '')}`;
  }

  // Step 3
  const s3 = document.getElementById('step-track-3');
  const s3Label = document.getElementById('step-track3-label');
  const s3Desc = document.getElementById('step-track3-desc');
  if (s3) {
    s3.className = `timeline-step ${step > 3 ? 'completed' : (step === 3 ? 'current' : '')}`;
    if (activeOrder.fulfillment === 'pickup') {
      if (s3Label) s3Label.textContent = isEn ? 'Ready for Pickup at Counter' : 'جاهز للاستلام من الباريستا';
      if (s3Desc) s3Desc.textContent = isEn ? 'Your drinks are freshly packed and waiting for you' : 'مشروباتك طازة ومغلفة بانتظار تشريفك بالفرع';
    }
  }

  // Step 4
  const s4 = document.getElementById('step-track-4');
  if (s4) {
    s4.className = `timeline-step ${step === 4 ? 'completed' : ''}`;
  }

  // Headline
  const headEl = document.getElementById('tracking-status-headline');
  const subEl = document.getElementById('tracking-status-subline');
  const bannerTitle = document.getElementById('home-order-status-title');

  if (step === 1) {
    if (headEl) headEl.textContent = isEn ? 'Order Received' : 'استلمنا طلبك في الكافيه';
    if (subEl) subEl.textContent = isEn ? 'Order verified and queued' : 'تم استلام الأوردر بنجاح';
    if (bannerTitle) bannerTitle.textContent = isEn ? 'Order received at cafe' : 'استلمنا طلبك في الكافيه';
  } else if (step === 2) {
    if (headEl) headEl.textContent = isEn ? 'Brewing in Progress' : 'طلبك بيتحضر في الكافيه دلوقتي';
    if (subEl) subEl.textContent = isEn ? 'Barista is grinding beans and steaming milk' : 'الباريستا يجهز المشروبات والمخبوزات الطازجة';
    if (bannerTitle) bannerTitle.textContent = isEn ? 'Brewing in cafe now' : 'طلبك بيتحضر في الكافيه دلوقتي';
  } else if (step === 3) {
    const isPickup = activeOrder.fulfillment === 'pickup';
    if (headEl) headEl.textContent = isPickup 
      ? (isEn ? 'Ready at Counter!' : 'طلبك جاهز للاستلام!') 
      : (isEn ? 'Out for Delivery!' : 'طلبك في الطريق إليك');
    if (subEl) subEl.textContent = isPickup 
      ? (isEn ? 'Visit University District branch' : 'تفضل بزيارة فرع حي الجامعة للاستلام') 
      : (isEn ? 'Courier is navigating to your address' : 'الكابتن استلم الطلب وهو في الطريق لعنوانك بالمنصورة');
    if (bannerTitle) bannerTitle.textContent = isPickup 
      ? (isEn ? 'Ready for pickup' : 'طلبك جاهز للاستلام بالفرع') 
      : (isEn ? 'Out for delivery' : 'طلبك في الطريق إليك');
  } else if (step === 4) {
    if (headEl) headEl.textContent = isEn ? 'Delivered & Completed!' : 'تم التسليم وبالهنا والشفا!';
    if (subEl) subEl.textContent = isEn ? 'Thank you for choosing +970 SPOT' : 'شكراً لثقتك في +970 سبوت المنصورة';
    if (bannerTitle) bannerTitle.textContent = isEn ? 'Delivered successfully' : 'تم التسليم وبالهنا والشفا';
  }
}

function checkExistingActiveOrder() {
  if (activeOrder) {
    const banner = document.getElementById('home-active-order-banner');
    if (banner) banner.style.display = 'flex';
  }
}

// ============================================================
// CUSTOMER LOYALTY & REWARDS HUB
// ============================================================
function updateLoyaltyPointsDisplay() {
  const ptsEl = document.getElementById('profile-points-val');
  if (ptsEl) ptsEl.textContent = currentPoints;
}

window.redeemRewardPoints = function(cost, rewardName) {
  if (currentPoints < cost) {
    showAppToast(currentLang === 'en' ? 'Not enough points for this reward' : 'رصيد نقاطك غير كافٍ لاستبدال هذه المكافأة');
    return;
  }

  currentPoints -= cost;
  localStorage.setItem('970spot_loyalty_pts', currentPoints.toString());
  updateLoyaltyPointsDisplay();

  showAppToast(currentLang === 'en' 
    ? `Redeemed ${cost} points for ${rewardName}!` 
    : `مبروك! تم استبدال ${cost} نقطة بنجاح للحصول على ${rewardName}`);
};

// ============================================================
// PROFILE & STORE DATA HANDLERS
// ============================================================
function setupProfileData() {
  updateLoyaltyPointsDisplay();

  const nameInput = document.getElementById('profile-name-input');
  const phoneInput = document.getElementById('profile-phone-input');

  const savedName = localStorage.getItem('970spot_cust_name') || '';
  const savedPhone = localStorage.getItem('970spot_cust_phone') || '';

  if (nameInput) {
    nameInput.value = savedName;
    nameInput.addEventListener('change', (e) => {
      localStorage.setItem('970spot_cust_name', e.target.value.trim());
    });
  }

  if (phoneInput) {
    phoneInput.value = savedPhone;
    phoneInput.addEventListener('change', (e) => {
      localStorage.setItem('970spot_cust_phone', e.target.value.trim());
    });
  }
}

window.copyStoreAddress = function() {
  const addr = TENANT_CONFIG.addressAr;
  navigator.clipboard?.writeText(addr).then(() => {
    showAppToast(currentLang === 'en' ? 'Branch address copied!' : 'تم نسخ عنوان فرع المنصورة بنجاح!');
  }).catch(() => {
    showAppToast(addr);
  });
};

// ============================================================
// PRODUCT DETAIL BOTTOM SHEET
// ============================================================
window.openProductSheet = function(productId) {
  const product = APP_MENU.find(p => p.id === productId);
  if (!product) return;
  activeSheetProduct = product;

  const sheet = document.getElementById('product-bottom-sheet');
  const imgEl = document.getElementById('sheet-img');
  const titleEl = document.getElementById('sheet-title');
  const subEl = document.getElementById('sheet-subtitle');
  const descEl = document.getElementById('sheet-desc');

  const isEn = currentLang === 'en';
  if (imgEl) imgEl.src = product.image;
  if (titleEl) titleEl.textContent = isEn ? product.nameEn : product.name;
  if (subEl) subEl.textContent = `${isEn ? product.categoryNameEn : product.categoryName} • ${product.price} ${TRANSLATIONS[currentLang].currency_egp}`;
  if (descEl) descEl.textContent = isEn ? product.descEn : product.desc;

  if (sheet) sheet.classList.add('open');
};

window.closeProductSheet = function() {
  const sheet = document.getElementById('product-bottom-sheet');
  if (sheet) sheet.classList.remove('open');
  activeSheetProduct = null;
};

window.selectMilk = function(val, el) {
  selectedCustomizations.milkKey = val;
  el.parentElement.querySelectorAll('.sheet-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
};

window.selectSweetness = function(val, el) {
  selectedCustomizations.sweetnessKey = val;
  el.parentElement.querySelectorAll('.sheet-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
};

window.orderActiveProductViaWhatsApp = function() {
  if (!activeSheetProduct) return;
  quickAddMenuItem(activeSheetProduct.id);
  closeProductSheet();
  openCheckoutModal();
};

// Combined Tray WhatsApp Dispatch
window.sendCombinedTrayWhatsApp = function() {
  if (orderTrayItems.size === 0) return;
  const isEn = currentLang === 'en';
  const custName = localStorage.getItem('970spot_cust_name') || '';

  let msg = '';
  if (isEn) {
    msg += `Hello +970 SPOT Cafe Mansoura (University District branch)!\nI would like to place an order:\n`;
    let i = 1;
    orderTrayItems.forEach(entry => {
      const name = entry.item.nameEn || entry.item.name;
      msg += `${i++}. ${name} × ${entry.quantity} (${entry.item.price * entry.quantity} EGP)\n`;
    });
    if (custName) msg += `• Customer Name: ${custName}\n`;
    msg += `\nPlease confirm preparation and delivery status. Thank you!`;
  } else {
    msg += `مرحباً كافيه +970 SPOT المنصورة (فرع حي الجامعة)!\nأود الاستفسار والطلب للأصناف التالية:\n`;
    let i = 1;
    orderTrayItems.forEach(entry => {
      const name = entry.item.name;
      msg += `${i++}. ${name} × ${entry.quantity} (${entry.item.price * entry.quantity} ج.م)\n`;
    });
    if (custName) msg += `• اسم العميل: ${custName}\n`;
    msg += `\nيرجى تأكيد الاستلام والتجهيز. شكراً لكم!`;
  }

  const encoded = encodeURIComponent(msg);
  window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  showAppToast(isEn ? 'Opening WhatsApp...' : 'جارٍ فتح واتساب الكافيه...');
};

// Toast Notifications
function showAppToast(message) {
  const toast = document.getElementById('mobile-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => { toast.classList.remove('show'); }, 2800);
}

// Preset Recipes
window.applyPresetRecipe = function(presetId) {
  if (presetId === 'signature-970') {
    labState.base = 'spanish';
    labState.temp = 'iced';
    labState.size = 'large';
    labState.milk = 'oat';
    labState.sweetness = '50';
    labState.flavor = 'caramel';
    labState.topping = 'seasalt';
    labState.extraShot = true;
  } else if (presetId === 'matcha-cloud') {
    labState.base = 'matcha';
    labState.temp = 'iced';
    labState.size = 'standard';
    labState.milk = 'oat';
    labState.sweetness = '25';
    labState.flavor = 'vanilla';
    labState.topping = 'none';
    labState.extraShot = false;
  } else if (presetId === 'salted-caramel-coldbrew') {
    labState.base = 'coldbrew';
    labState.temp = 'iced';
    labState.size = 'large';
    labState.milk = 'none';
    labState.sweetness = '50';
    labState.flavor = 'caramel';
    labState.topping = 'seasalt';
    labState.extraShot = false;
  }
  triggerPourAnimation(labState.base);
  updateDrinkVisualizer();
  showAppToast(currentLang === 'en' ? 'Preset recipe applied!' : 'تم تطبيق الخلطة المقترحة بنجاح!');
};

function renderSavedRecipes() {
  const box = document.getElementById('saved-recipes-box');
  if (!box) return;
  box.innerHTML = '';
}
