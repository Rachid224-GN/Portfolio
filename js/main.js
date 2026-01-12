// Liste de tes projets
const projects = [
  {
    title: "SecureShare",
    desc: "Application web de transfert de fichiers chiffrés (Flask + JS).",
    img: "images/project-secureshare.png",
    link: "https://github.com/tonpseudo/SecureShare"
  },
  {
    title: "Firewall Analyzer",
    desc: "Outil d'analyse de logs de pare-feu avec visualisation.",
    img: "images/project2.png",
    link: "https://github.com/tonpseudo/firewall-analyzer"
  },
  {
    title: "Password Strength Checker",
    desc: "Application web qui évalue la robustesse des mots de passe.",
    img: "images/project3.png",
    link: "https://github.com/tonpseudo/password-checker"
  },
  {
    title: "PhishDetect",
    desc: "Détecteur d'emails de phishing via analyse de texte et DNS.",
    img: "images/project4.png",
    link: "https://github.com/tonpseudo/phishdetect"
  },
  {
    title: "Log Inspector",
    desc: "Analyseur de logs Apache pour détecter des attaques XSS/SQLi.",
    img: "images/project5.png",
    link: "https://github.com/tonpseudo/log-inspector"
  },
  {
    title: "Network Mapper",
    desc: "Scanner réseau en Python utilisant sockets et multithreading.",
    img: "images/project6.png",
    link: "https://github.com/tonpseudo/network-mapper"
  },
  {
    title: "File Integrity Monitor",
    desc: "Surveille les modifications de fichiers système sensibles.",
    img: "images/project7.png",
    link: "https://github.com/tonpseudo/file-integrity-monitor"
  },
  {
    title: "Security Dashboard",
    desc: "Dashboard de supervision avec alertes Wazuh personnalisées.",
    img: "images/project8.png",
    link: "https://github.com/tonpseudo/security-dashboard"
  },
  {
    title: "SecureChat",
    desc: "Messagerie chiffrée de bout en bout (WebSocket + AES).",
    img: "images/project9.png",
    link: "https://github.com/tonpseudo/securechat"
  },
];

// Injection dynamique des cartes projets
const container = document.getElementById("project-list");

projects.forEach(p => {
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4 mb-4";
  col.innerHTML = `
    <div class="card project-card h-100 shadow-sm">
      <img src="${p.img}" class="card-img-top" alt="${p.title}">
      <div class="card-body">
        <h5 class="card-title">${p.title}</h5>
        <p class="card-text">${p.desc}</p>
        <a href="${p.link}" target="_blank" class="btn btn-info text-white">Voir sur GitHub</a>
      </div>
    </div>
  `;
  container.appendChild(col);
});
