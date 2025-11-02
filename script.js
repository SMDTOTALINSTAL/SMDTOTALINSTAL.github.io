const translations = {
  ro: {
    home: "Acasă",
    contact: "Contact",
    title: "Experimentează puterea investițiilor informate",
    subtitle: "Construiește o bază solidă pentru viitorul tău financiar",
    contactBtn: "Contactează-ne",
    who: "Cine suntem?",
    aboutText:
      "Suntem dedicați să oferim rezultate investiționale excepționale. Folosim o abordare bazată pe date și o înțelegere profundă a pieței pentru a genera randamente sustenabile pentru clienții noștri.",
    services: "Serviciile Noastre",
    portfolioTitle: "Administrare Portofoliu",
    portfolioText:
      "Serviciul nostru principal implică gestionarea activă a portofoliului de investiții al clientului.",
    advisoryTitle: "Consultanță în Investiții",
    advisoryText:
      "Oferim îndrumare și recomandări clienților în luarea deciziilor investiționale.",
    wealthTitle: "Administrare a Averii",
    wealthText:
      "Oferim o gamă completă de servicii pentru persoane cu venituri ridicate.",
  },

  en: {
    home: "Home",
    contact: "Contact",
    title: "Experience the Power of Informed Investing",
    subtitle: "Build a Strong Foundation for Your Financial Future",
    contactBtn: "Contact Us",
    who: "Who Are We?",
    aboutText:
      "We are driven by a commitment to delivering exceptional investment outcomes. We leverage a data-driven approach and deep market understanding to generate sustainable returns for our clients.",
    services: "Our Services",
    portfolioTitle: "Portfolio Management",
    portfolioText:
      "Our core service involves active management of clients' investment portfolios.",
    advisoryTitle: "Investment Advisory",
    advisoryText:
      "Providing clients with insights and recommendations for better investment decisions.",
    wealthTitle: "Wealth Management",
    wealthText:
      "Offering a comprehensive suite of financial services for high-net-worth individuals.",
  },
};

let currentLang = "ro";

document.getElementById("lang-btn").addEventListener("click", () => {
  currentLang = currentLang === "ro" ? "en" : "ro";
  updateLanguage();
});

function updateLanguage() {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[currentLang][key];
  });

  document.getElementById("lang-btn").textContent = currentLang === "ro" ? "EN" : "RO";
}
