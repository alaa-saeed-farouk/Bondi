const dropdownToggle = document.getElementById("dropdownMenuButton");
const items = document.querySelectorAll(".dropdown-menu .dropdown-item");
let language = localStorage.getItem("lang");
const translations = {
  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    login: "Login",
    mainHeading: "Taste the Creativity",
    mainParagraph: "We make awesome graphic and web design",
    started: "Get Started",
    stuffHeading: "We are Good at",
    stuffPargraph: "SOME OF THESE STUFF UNDER",
    graphicH: "Graphic Design",
    graphicP:
      "Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus",
    worksHeading: "We Make This",
    worksP: "PREPARE TO BE AMAZED",
    all: "All",
    design: "Design",
    code: "Code",
    photography: "Photography",
    app: "App",
    worksBtn: "I WANT MORE...",
    aboutH: "Some Stuff About Us",
    aboutP: "THE GREATE TEAM",
    aboutDesc:
      "Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.",
    retina: "Retina Design",
    retinaP1:
      "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    retinaP3: "OREDER ME ONE",
    teamH: "Meet the Team",
    luke: "Luke Skywalker",
    lukeQ: `"I don't understand how we got by those troops. I thought we were dead."`,
    obi: "Obi-Wan Kenobi",
    obiQ: '"Your clones are vey impressive. you must be very proud"',
    princess: "Princess Leia",
    princessQ: `"I don't Know who you are or where you came from, but from now on you'll do as I tell you, okay?"`,
    yoda: "Yoda",
    yodaQ: `"Do not assume anything Obi-Wan. Clear your mind must be if you are to discover the real villains behind this plot."`,
    projectH: "Start Your Project Now",
    projectP:
      "Leave your description and we start the engine.Don't worry,you can cancel anytime",
    projectBtn: "START PROJECT",
    blogH: "Read Our Blog",
    blogP: "NEW STORIES",
    cardDate: "January 17,2017",
    cardH: "Some Awesome Blog Title Here",
    blogBtn: "MORE STORIES",
    subscribeDiv: "Subscribe to our Newsletter:",
    copyP: "Created by <span>Graphberry</span>,Belgrade,Serbia",
    links: "Links",
    ourServices: "Our Services",
    testimonials: "Testimonials",
    support: "Support",
    terms: "Terms and Conditions",
    aboutUs: "About Us",
    signIn: "Sign In",
    register: "Register",
    blog: "Blog",
    contactUs: "Contact Us",
    contactP:
      "Get in touch with us via mail phone.We are waiting for your call or message",
    subscribe: "Subscribe",
    placeholder: "Enter Email Address",
  },
  ar: {
    home: "الصفحة الرئيسية",
    services: "خدماتنا",
    portfolio: "أعمالنا",
    about: "من نحن",
    contact: "اتصل بنا",
    login: "تسجيل الدخول",
    mainHeading: "تذوّق الإبداع",
    mainParagraph: "نُبدع في تصميم الجرافيك والمواقع الإلكترونية",
    started: "ابدأ الآن",
    stuffHeading: "نحن بارعون في",
    stuffPargraph: "بعض من أعمالنا التالية",
    graphicH: "تصميم الجرافيك",
    graphicP:
      "يُعتبر هذا النص نموذجًا لمحتوى يمكن استخدامه لتوضيح شكل التصميم قبل إدخال النصوص النهائية",
    worksHeading: "نحن نصنع هذا",
    worksP: "استعد للدهشة",
    all: "الكل",
    design: "تصميم",
    code: "برمجة",
    photography: "التصوير الفوتوغرافي",
    app: "تطبيق",
    worksBtn: "أريد المزيد...",
    aboutH: "نبذة عنا",
    aboutP: "الفريق الرائع",
    aboutDesc:
      "هذا النص هو مثال لنص يمكن أن يتم استبداله في نفس المساحة، حيث تم توليده ليشبه النصوص الحقيقية من حيث الشكل والطول. يستخدمه المصممون لعرض شكل المحتوى دون الحاجة إلى توفر النص الفعلي.",
    retina: "تصميم عالي الدقة (ريتنا)",
    retinaP1:
      "يمكنك استخدام هذا النص كنموذج لعرض شكل الفقرة داخل التصميم. تم تنسيقه ليُظهر كيف سيبدو المحتوى عند إضافته لاحقًا بشكل فعلي.",
    retinaP3: "اطلب الآن",
    teamH: "تعرّف على الفريق",
    luke: "لوك سكاي ووكر",
    lukeQ: `"لا أفهم كيف تجاوزنا أولئك الجنود. ظننت أننا قد متنا."`,
    obi: "أوبي وان كينوبي",
    obiQ: '"استنساخك مثير للإعجاب جدًا. يجب أن تكون فخورًا جدًا."',
    princess: "الأميرة ليا",
    princessQ: `"لا أعرف من أنت أو من أين أتيت، لكن من الآن فصاعدًا ستفعل كما أقول لك، حسنًا؟"`,
    yoda: "يودا",
    yodaQ: `"لا تفترض أي شيء، يا أوبى-وان. يجب أن تكون عقلك صافياً إذا كنت ستكتشف الأشرار الحقيقيين وراء هذه المؤامرة."`,
    projectH: "ابدأ مشروعك الآن",
    projectP: "اترك وصفك وسنبدأ المحرك. لا تقلق، يمكنك الإلغاء في أي وقت.",
    projectBtn: "ابدأ المشروع",
    blogH: "اقرأ مدونتنا",
    blogP: "قصص جديدة",
    cardDate: "١٧ يناير ٢٠١٧",
    cardH: "عنوان رائع للمدونة يوضع هنا",
    blogBtn: "المزيد من القصص",
    subscribeDiv: "اشترك في نشرتنا الإخبارية:",
    copyP: "تم الإنشاء بواسطة <span>Graphberry</span>، بلغراد، صربيا",
    links: "روابط",
    ourServices: "خدماتنا",
    testimonials: "آراء العملاء",
    support: "الدعم",
    terms: "الشروط والأحكام",
    aboutUs: "عنّا",
    signIn: "تسجيل الدخول",
    register: "التسجيل",
    blog: "مدونة",
    contactUs: "اتصل بنا",
    contactP:
      "تواصل معنا عبر البريد أو الهاتف. نحن في انتظار مكالمتك أو رسالتك.",
    subscribe: "إشترك",
    placeholder: "أدخل عنوان البريد الإلكتروني",
  },
};

items.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault(); //prevent link behavior
    dropdownToggle.innerHTML = ` ${this.innerHTML} `; // change button text
  });
});

if (language) {
  dropdownToggle.innerHTML = `${language.toUpperCase()}
      <img src="imgs/${language}.png">`;
  switchLanguage(language);
}

function switchLanguage(lang) {
  const html = document.documentElement;
  const styleLink = document.getElementById("direction-style");
  if (lang === "ar") {
    window.localStorage.setItem("lang", "ar");
    html.setAttribute("dir", "rtl");
    html.setAttribute("lang", "ar");
    styleLink.setAttribute("href", "css/rtl.css");
    changeLanguage("ar");
  } else {
    window.localStorage.setItem("lang", "en");
    html.setAttribute("dir", "ltr");
    html.setAttribute("lang", "en");
    styleLink.setAttribute("href", "");
    changeLanguage("en");
  }
}
function changeLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.innerHTML = translations[lang][key];
  });
  document.querySelector('[type="submit"]').value =
    translations[lang]["subscribe"];
  document.querySelector('[type="email"]').placeholder =
    translations[lang]["placeholder"];
}
