function oui() {
    const svg = document.querySelectorAll(".heart")
    svg.forEach(icone => {
        icone.addEventListener("click", function() {
            if (icone.style.fill === "") {
                icone.style.fill = "#901C1C"
                icone.style.transition = "0.3s"
             }else {
                icone.style.fill = ""
                icone.style.transition = "0.3s"
             } 
        })
    })
    function addCount() {
        let count = 1
            this._likes += count

    }
    function removeCount() {
        
    }
}

//addCount
// 1.quand tu clique sur le coeur et qu'il est vide tu veux le remplir
//  1.1 tu prend la valeur initial
//  1.2 tu ajoute +1 a la valeur initial