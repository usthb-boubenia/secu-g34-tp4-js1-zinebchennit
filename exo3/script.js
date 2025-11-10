"use strict"; // (slide 12) Active le mode strict pour de bonnes pratiques

// Fonction B (slide 30) : prend une note (float) et retourne un booléen (slide 31)
function B(note) {
  // Si la note est >= 10 → admis (true), sinon ajourné (false) (slide 18)
  return note >= 10.0; // true ou false (slide 17)
}

// Fonction A (slide 33) : appelle B() et affiche les résultats
function A() {
  // Tableau d’objets Students (slides 38–40)
  let students = [
    { matricule: 1000, nom: "JOHN", prenom: "DOE", note1: 14, note2: 5 },
    { matricule: 2000, nom: "BOB", prenom: "CARLTON", note1: 7, note2: 1 },
    { matricule: 3000, nom: "RAYANE", prenom: "SMITH", note1: 13, note2: 3 },
  ];

  // Boucle for...of (slide 44) pour parcourir le tableau
  for (let etu of students) {
    // Calcul de la moyenne demandée : (note1 + note2)/2 + 5
    let moyenne = (parseFloat(etu.note1) + parseFloat(etu.note2)) / 2 + 5;

    if (B(moyenne)) {
      console.log(etu.matricule + " : ADMIS");
    } else {
      console.log(etu.matricule + " : AJOURNE");
    }
  }
}

// Appel de la fonction A() pour vérifier l'exécution
A();
