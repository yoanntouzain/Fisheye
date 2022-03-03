
function actionLike() {
    const svg = document.querySelectorAll(".heart") /*Mon SVG*/
    LikesBar()
    svg.forEach(icone => {
        icone.addEventListener("click", function(){
            let valueHTML = icone.previousElementSibling.textContent /*correspond à mon contenu HTML de mon p.likes*/
            if (icone.style.fill === "") {
                icone.style.fill = "#901C1C"
                icone.style.transition = "0.3s"
                valueHTML++ /*permet de faire +1*/
                icone.previousElementSibling.innerHTML = valueHTML /*permet d'écrire la nouvelle valeur dans mon p.likes*/
                LikesBar()
            }else{
                icone.style.fill = ""
                icone.style.transition = "0.3s"
                valueHTML-- /*permet de faire -1*/
                icone.previousElementSibling.innerHTML = valueHTML
                LikesBar()
            }
        })
        icone.addEventListener('keydown', (event) => {// au press de la touche entrer sur le bouton ouvrir ma modal tu execute la fonction open
			if (event.which === 13) {/*event.which correspond au resultat de la touche actionner de la souris, du keycode, ou charcode*/
                let valueHTML = icone.previousElementSibling.textContent /*correspond à mon contenu HTML de mon p.likes*/
                if (icone.style.fill === "") {
                    icone.style.fill = "#901C1C"
                    icone.style.transition = "0.3s"
                    valueHTML++ /*permet de faire +1*/
                    icone.previousElementSibling.innerHTML = valueHTML /*permet d'écrire la nouvelle valeur dans mon p.likes*/
                    LikesBar()
                }else{
                    icone.style.fill = ""
                    icone.style.transition = "0.3s"
                    valueHTML-- /*permet de faire -1*/
                    icone.previousElementSibling.innerHTML = valueHTML
                    LikesBar()
                }
			}
		})
    })
}

//Pour afficher la somme des likes de la page
function LikesBar() {
    window.setTimeout(() => {
        let arrayLike = []
        let numberLike = document.querySelector(".numberLikes")
        let pLikes = document.querySelectorAll(".likes")
        let sum = 0

        pLikes.forEach(like => {arrayLike.push(like.textContent)})/*Récupère toutes les valeurs HTML dans la classe like et l'ajoute dans le tableau*/

        for (let i = 0; i < arrayLike.length; i++) {/*Parcours le tableau tant qu'il y a des éléments*/
            sum += Number(arrayLike[i])/*Chaque élément trouver dans le tableau seront des nombres et seront additioner à sum*/
        }
        console.log(numberLike);
        //window.setTimeout(() => {
        numberLike.innerHTML = sum/*La somme dans sum seras écrit en html dans la classe numberLikes*/
    }, 100)
}