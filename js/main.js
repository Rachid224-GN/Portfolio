// Liste de Mes projets
const projects = [
  {
    title: "Mon CV",
    desc: "Mon CV personnel que j'ai fait à la base de & HTML, CSS &  --Etudiant à la recherche d'un stage--",
    img: "images/cv.png",
    link: "https://rachid224-gn.github.io/cv-web/"
  },
  {
    title: "App CHAT EN COMMMUN",
    desc: "Ce projet consistais à la création d'un chat en commun. celle-ci devrai s'authentifier auprès d'un serveur afin de récupérer un token de connexion.",
    img: "images/chat.png",
    link: "https://github.com/Rachid224-GN/Chat/"
  },
  {
    title: "Snake Game — Android / Java",
    desc: "Ce projet consiste en une application Android simple mais fonctionnelle de jeu du serpent.",
    img: "images/snake.png",
    link: "https://github.com/Rachid224-GN/mobile"
  },
  {
    title: "Stéganographie - Appli",
    desc: "La stéganographie consiste à cacher des informations secrètes dans des supports à priori classiques afin que personne ne puisse détecter la présence de l'information cachée.",
    img: "images/steganoe.png",
    link: "https://github.com/Rachid224-GN/app"
  },
  {
    title: "Appli - Client/Serveur-java",
    desc: "Ce projet consiste à implémenter une communication bidirectionnelle entre un client et un serveur utilisant le langage Java.",
    img: "images/Serveur.jpeg",
    link: "https://github.com/Rachid224-GN/serveur"
  },
  {
    title: "Projet Commerce - POO",
    desc: "ce projet consiste à gerer les relations entre le client , l'entreprise et l'entrepôt de façon à etre capable à contrôler les produits , les composants et les commandes & en C++.",
    img: "images/Poo.png",
    link: "https://github.com/Rachid224-GN/POO-commerce"
  },
  {
    title: "Azure - déploiement",
    desc: "j'ai développé un site web statique qui interagit exclusivement avec des fonctions Azure pour permettre: le telechargement, l'affichage et le redimensionnement des images vers un conteneur de stockage Azure.",
    img: "images/Azure.png",
    link: "https://github.com/Rachid224-GN/Azure"
  },
  {
    title: "Jeu du Serpent — Conception Web",
    desc: "Jeu du serpent développé en JavaScript dans un contexte de conception web. Gestion des mouvements, collisions et du score avec une interface interactive.",
    img: "images/jeu.png",
    link: "https://github.com/Rachid224-GN/jeu"
  },
  {
    title: "App signalisation - Architecture",
    desc: "Développement en C d’un système de contrôle de feu de circulation sur Raspberry Pi. Projet testé et validé sur matériel réel.",
    img: "images/feu.jpg",
    link: "https://github.com/Rachid224-GN/Arm"
  },
  {
    title: "Appli ~ Messenger Familial",
    desc: "c'est une application de chat familial que je suis entrain de réaliser en ce moment, mais reste des concepts à mettre en place",
    img: "images/photo.jpg",
    link: "https://github.com/"
  },
  {
    title: "Projet à Venir",
    desc: "En cours de realisation par Rachid.",
    img: "images/projet.jpg",
    link: "https://github.com/"
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
