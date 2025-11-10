"use strict";

// F1 : Tableau d'étudiants (vu dans la slide 38 - Tableaux)
function f1() {
  let etudiants = ["ETUDIANT1", "ETUDIANT2", "ETUDIANT3"];

  for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]);
  }
}

// F2 : Objet étudiant (vu dans la slide 39 - Objets)
function f2() {
  let etudiant = {
    nom: "John",
    prenom: "Doe",
    age: 30,
  };

  console.log(etudiant);
}
// F3 : Tableau d'objets étudiants (vu dans la slide 40 - Tableau d'objets)
function f3() {
  // Déclaration d'un tableau contenant plusieurs objets étudiants
  let etudiants = [
    { nom: "nom1", prenom: "prénom1", age: 21 },
    { nom: "nom2", prenom: "prénom2", age: 22 },
    { nom: "nom3", prenom: "prénom3", age: 23 },
  ];

  for (let etu of etudiants) {
    console.log(etu.nom + "-" + etu.prenom + "-" + etu.age);
  }
}
