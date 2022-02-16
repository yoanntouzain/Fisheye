
function actionLike() {
    const svg = document.querySelectorAll(".heart")/*Mon SVG*/
    svg.forEach(icone => {
        icone.addEventListener("click", function(){
            if (icone.style.fill === "") {
                let valueHTML = icone.previousElementSibling.textContent
                icone.style.fill = "#901C1C"
                icone.style.transition = "0.3s"
                valueHTML++
                icone.previousElementSibling.innerHTML = valueHTML
            }else{
                let valueHTML = icone.previousElementSibling.textContent
                icone.style.fill = ""
                icone.style.transition = "0.3s"
                valueHTML--
                icone.previousElementSibling.innerHTML = valueHTML
            }
        })
    })
}