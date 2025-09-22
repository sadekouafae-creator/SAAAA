const citations = [
  {
    texte: "Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme.",
    auteur: "Winston Churchill"
  },
  {
    texte: "Ils ne savaient pas que c’était impossible, alors ils l’ont fait.",
    auteur: "Mark Twain"
  },
  {
    texte: "Fais de ta vie un rêve, et d’un rêve, une réalité.",
    auteur: "Antoine de Saint-Exupéry"
  },
  {
    texte: "La vie est un mystère qu’il faut vivre, et non un problème à résoudre.",
    auteur: "Gandhi"
  },
  {
    texte: "Choisis un travail que tu aimes, et tu n’auras pas à travailler un seul jour de ta vie.",
    auteur: "Confucius"
  }
];

const bouton = document.getElementById("nouvelle-citation");
const copierBtn = document.getElementById("copier");
const texte = document.getElementById("texte");
const auteur = document.getElementById("auteur");

bouton.addEventListener("click", () => {
  const index = Math.floor(Math.random() * citations.length);
  texte.textContent = `"${citations[index].texte}"`;
  auteur.textContent = `— ${citations[index].auteur}`;
});

copierBtn.addEventListener("click", () => {
  const citationComplete = `${texte.textContent} ${auteur.textContent}`;
  navigator.clipboard.writeText(citationComplete)
    .then(() => {
      copierBtn.textContent = "Copié ✅";
      setTimeout(() => {
        copierBtn.textContent = "Copier la citation";
      }, 2000);
    })
    .catch(err => {
      alert("Erreur lors de la copie !");
    });
});
const toggleModeBtn = document.getElementById("toggle-mode");

toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleModeBtn.textContent = document.body.classList.contains("light-mode")
    ? "Changer de mode 🌙"
    : "Changer de mode ☀️";
});
const partagerBtn = document.getElementById("partager");

partagerBtn.addEventListener("click", () => {
  const citationComplete = `${texte.textContent} ${auteur.textContent}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(citationComplete)}`;
  window.open(url, '_blank');
});
