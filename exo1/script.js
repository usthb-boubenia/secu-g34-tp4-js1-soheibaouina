"use strict"; // Activation du mode strict (slide 51)

// Déclaration de variables primitives (slide 37)
let nom = "John";           // String - slide 37
let prenom = "Doe";         // String - slide 37
let fullName = nom + "-" + prenom; // Concaténation de chaînes (opérateur +) - slide 36
let age = 38;               // Number - slide 37
let note = 15;              // Number - slide 37
let pi = 3.14;              // Number - slide 37

// Fonction f1 - affiche le nom (slide 45 - déclaration de fonction)
function f1() {
    console.log(nom); // Affichage dans la console - slide 33
}

// Fonction f2 - affiche le prénom
function f2() {
    console.log(prenom); // slide 33
}

// Fonction f3 - affiche nom-prénom concaténé
function f3() {
    console.log(fullName); // Utilisation de variable dérivée - slide 36
}

// Fonction f4 - affiche l'âge
function f4() {
    console.log(age); // slide 37
}

// Fonction f5 - affiche la note
function f5() {
    console.log(note); // slide 37
}

// Fonction f6 - affiche la constante Pi
function f6() {
    console.log(pi); // slide 37
}
console.log("Script chargé !");