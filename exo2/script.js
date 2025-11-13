"use strict"; // Mode strict, vu dans le slide 51

// Déclaration d'un tableau (array), vu dans le slide 38
let tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Déclaration d'un objet, vu dans le slide 39
let objetEtudiant = {
    nom: "John",
    prenom: "DOE",
    age: 38
};

// Déclaration d'un tableau d'objets, vu dans le slide 40
let tableauObjetsEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

// Définition de fonctions, vu dans le slide 45
function f1() {
    // Affichage des éléments d'un tableau un par un (sans boucle pour simplicité), vu dans le slide 38
    console.log(tableauEtudiants[0]);
    console.log(tableauEtudiants[1]);
    console.log(tableauEtudiants[2]);
}

function f2() {
    // Affichage d'un objet, vu dans le slide 39
    console.log(objetEtudiant);
}

function f3() {
    // Boucle for pour parcourir un tableau d'objets, vu dans le slide 44
    for (let i = 0; i < tableauObjetsEtudiants.length; i++) { // Boucle for, vu dans le slide 44
        // Accès aux propriétés d'un objet et concaténation, vu dans les slides 39 et 36
        console.log(tableauObjetsEtudiants[i].nom + "-" + tableauObjetsEtudiants[i].prenom + "-" + tableauObjetsEtudiants[i].age);
    }
}