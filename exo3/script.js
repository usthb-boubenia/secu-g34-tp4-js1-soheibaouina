"use strict"; // Mode strict, vu dans le slide 51

// Déclaration d'un tableau d'objets pour les étudiants, vu dans le slide 40
let students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14, autre: 5 }, // Objet, vu dans le slide 39
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7, autre: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13, autre: 3 }
];

// Fonction B qui prend un paramètre float (note) et retourne un booléen, vu dans le slide 45
function B(note) { // Définition de fonction avec paramètre, vu dans le slide 45
    // Condition if pour vérifier si note >= 10, vu dans le slide 42
    if (note >= 10) { // Structure if, vu dans le slide 42
        return true;
    } else {
        return false;
    }
}

// Fonction A qui appelle B, vu dans le slide 45
function A() {
    // Boucle for pour parcourir le tableau, vu dans le slide 44
    for (let i = 0; i < students.length; i++) { // Boucle for, vu dans le slide 44
        // Appel à la fonction B, vu dans le slide 45
        let estAdmis = B(students[i].note); // Appel de fonction avec paramètre, vu dans le slide 45
        // Condition ternaire (alternative à if), vu dans le slide 42
        console.log(students[i].id + ": " + (estAdmis ? "ADMIS" : "AJOURNE")); // Condition ternaire, vu dans le slide 42
    }
}