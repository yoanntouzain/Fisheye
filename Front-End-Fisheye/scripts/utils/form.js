//DOM Elements
const btnSubmit = document.querySelector(".btn-submit");
const dialogs = document.querySelector("#dialog");
const docs = document.querySelector(".contact_button")/*La div qui contient le bouton haut dessus*/

//variable champs
const myForm = document.getElementById("myForm");
const myName = document.getElementById("first");
const mySecond = document.getElementById("last");
const myEmail = document.getElementById("email");
const myMessage = document.getElementById("message");

//Constante erreur formulaire
const errorFirst = document.getElementById("errorFirst");
const errorSecond = document.getElementById("errorSecond");
const errorEmail = document.getElementById("errorEmail");
const errorMessage = document.getElementById("errorMessage");

//Mes RegExp
const textRegExp = /^[a-zA-Z-\s]{2,}$/;
const textMsgRegExp = /^[a-zA-Z0-9@.€-\s]{2,}$/;
const RegExpEmail = /[a-zA-Z0-9-]{3,}@[a-z]{4,}.[a-z]{2,}/;


//Mon objet contenant tous mes champs de mon formulaire

const FORMULAIRE = {
    myName: undefined,
    mySecond: undefined,
    myEmail: undefined,
    myMessage: undefined,
}


//Mon objet contenant mes emplacements d'erreurs

const FORMULAIREeRROR = {
    myName: errorFirst,
    mySecond: errorSecond,
    myEmail: errorEmail,
    myMessage: errorMessage,
}


//Mon objet contenant mes messages d'erreurs

const FORMULAIREmSG = {
    myName: "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.",
    mySecond: "Veuillez entrer 2 caractères ou plus pour le champ du Nom.",
    myEmail: "Vous devez entrer une adresse mail.",
    myMessage: "Vous devez écrire un message.",
}

//Ma fonction qui s'éxécute lors de la soumission du formulaire
document.forms["reserve"].addEventListener("submit", function(e) {
    e.preventDefault();//ce qui empêche le rechargement de la page
        
   prenom();
    FORMULAIRE.myName = prenom(myName);

    nom();
    FORMULAIRE.mySecond = nom(mySecond);

    email();
    FORMULAIRE.myEmail = email(myEmail);

    message();
    FORMULAIRE.myMessage = message(myMessage)

    checkAllValue()
    scrollForm()
});

//Ma fonction vérifie la valeur dans le champ et la compare à ma RegExp, si la valeur correspond, ma fonction retournera true, sinon elle retourne false
function prenom(){
    if(textRegExp.test(myName.value) === true){
        return true;
    }
    return false;
}

//Ma fonction vérifie la valeur dans le champ et la compare à ma RegExp, si la valeur correspond, ma fonction retournera true, sinon elle retourne false
function nom(){
    if(textRegExp.test(mySecond.value) === true){
        return true;
    }
    return false;
}

//Ma fonction vérifie la valeur dans le champ et la compare à ma RegExp, si la valeur correspond, ma fonction retournera true, sinon elle retourne false
function email(){
    if(RegExpEmail.test(myEmail.value) === true){
        return true;
    }
    return false;
}

//Ma fonction vérifie la valeur dans le champ et la compare à ma RegExp, si la valeur correspond, ma fonction retournera true, sinon elle retourne false
function message(){
    if(textMsgRegExp.test(myMessage.value) === true){
        return true;
    }
    return false;
}

//Ma fonction va ressortir toute les clés qui sont dans mon objet FORMULAIRE. Elle execute la fonction Formulaire avec comme parametre key
function checkAllValue() {
    Object.keys(FORMULAIRE).forEach(function(key) {
        messageError(FORMULAIRE[key],FORMULAIREeRROR[key], FORMULAIREmSG[key])
    })
}

//Ma fonction regarde chaque champs, si ils sont tous true alors il feras disparaître le formulaire et feras appraître le message de confirmation d'envoi
function scrollForm() {
    if (FORMULAIRE.myName 
        && FORMULAIRE.mySecond 
        && FORMULAIRE.myEmail
        && FORMULAIRE.myMessage === true
        ) {
		docs.setAttribute('aria-hidden', false)
		dialogs.setAttribute('aria-hidden', true)
    }
};

//Ma fonction utilisant 3 parametres, condition, emplacement, message qui eux mêmes correspondent aux parametre de ma fonction messageError(FORMULAIRE[key],FORMULAIREeRROR[key], FORMULAIREmSG[key])
//Cette fonction permet de vérifier chaque champs, si ça valeur est different de true, alors il insera du html. Si la la valeur est true, le message d'erreur disparaîtra
function messageError(condition, emplacements, message) {
    if (!condition === true) {
        emplacements.innerHTML  = message;
        emplacements.style.display = "block"
    }else if (condition === true) {
        emplacements.style.display = "none"
    }
}