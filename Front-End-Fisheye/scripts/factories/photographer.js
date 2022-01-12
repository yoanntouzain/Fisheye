/*function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
            a.setAttribute("href", "photographer.html");
            a.setAttribute("alt", "Lien vers le photographe");
            article.appendChild(a);
        const img = document.createElement( 'img' );
            img.setAttribute("src", portrait);
            img.setAttribute("alt", "image du profil du photographe");
            a.appendChild(img);
        const h2 = document.createElement( 'h2' );
            h2.textContent = name;
            a.appendChild(h2);
        const pLocation = document.createElement( 'p' );
            pLocation.setAttribute("class", "location");
            pLocation.innerHTML = city + ", " + country;
            article.appendChild(pLocation);
        const pTagline = document.createElement( 'p' );
            pTagline.setAttribute("class", "tagline");
            pTagline.innerHTML = tagline;
            article.appendChild(pTagline);
        const pPrice = document.createElement( 'p' );
            pPrice.setAttribute("class", "price");
            pPrice.innerHTML = price + "€/jours";
            article.appendChild(pPrice);
        return (article);
    };
    return { data, getUserCardDOM }
}*/

//Pour la page photographer Mimi Keel profil formulaire
/*function photographerPage(datas) {
    const { name, portrait, city, country, tagline } = datas;
    const picture = `assets/images/Sample_photos/Mimi/${portrait}`;

    function getUserPage() {
        const div0 = document.createElement('div');
        div0.setAttribute("class", "container-photograph")
        const div1 = document.createElement('div');
            div1.setAttribute("class", "presentation")
            div0.appendChild(div1);
        const h2 = document.createElement('h2');
            h2.textContent = name;
            div1.appendChild(h2);
        const pLocation = document.createElement('p');
            pLocation.setAttribute("class", "location-photographer");
            pLocation.innerHTML = city + ", " + country;
            div1.appendChild(pLocation);
        const pTagline = document.createElement('p');
            pTagline.setAttribute("class", "tagline-photographer");
            pTagline.innerHTML = tagline;
            div1.appendChild(pTagline);
        const div2 = document.createElement('div');
            div2.setAttribute("class", "button")
            div0.appendChild(div2);
        const button = document.createElement('button');
            button.setAttribute("class", "contact_button")
            button.setAttribute("onclick", "displayModal()")
            button.innerHTML = "Contactez-moi";
            div2.appendChild(button);
        const div3 = document.createElement('div');
            div0.appendChild(div3);
            div3.setAttribute("class", "photo")
        const img = document.createElement('img');
            img.setAttribute("src", picture);
            img.setAttribute("alt", "image du profil du photographe");
            div3.appendChild(img);
        return (div0);
    };
    return { datas, getUserPage }
}*/

//pour les images du photographe
/*function mediaFactory(media) {
    const { photographerId, title, image, likes, date, price } = media;
    const picture = `assets/images/Sample_photos/Mimi/${image}`;

    function getUserCardMedia() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
            a.setAttribute("href", "#")
            a.setAttribute("alt", "lien vers image");
            article.appendChild(a);
        const div = document.createElement( 'div' );
            a.appendChild(div);
        const div0 = document.createElement('div');
            div0.setAttribute("class", "containerImage")
            div.appendChild(div0)
        const img = document.createElement( 'img' );
            img.setAttribute("src", picture);
            img.setAttribute("alt", " ");
            div0.appendChild(img);
        const div1 = document.createElement('div')
            div1.setAttribute("class", "description")
            div.appendChild(div1)
        const div2 = document.createElement('div')
            div2.setAttribute("class", "titre")
            div1.appendChild(div2)
        const p = document.createElement( 'p' );
            p.textContent = title;
            div2.appendChild(p);
        const div3 = document.createElement('div')
            div3.setAttribute("class", "numberLike")
            div1.appendChild(div3)
        const pLike = document.createElement( 'p' );
            pLike.setAttribute("class", "likes");
            pLike.innerHTML = likes, " ";
            div3.appendChild(pLike);
        const i = document.createElement('i');
            i.setAttribute("class", "fas fa-heart");
            div3.appendChild(i);
        return (article);
    };*/
    //corrigé cela prix en bas a droite
    /*function Price() {
        const divLike = document.createElement('div');
            divLike.setAttribute("class", "like-price");
            main.appendChild(divLike)
        const divPriceBackground = document.createElement('div');
            divPriceBackground.setAttribute("class", "price-background");
            divLike.appendChild(divPriceBackground);
        const divLikePhotographer = document.createElement('div');
            divLikePhotographer.setAttribute("class", "like-photographer");
            divPriceBackground.appendChild(divLikePhotographer);
        const pLikeBar = document.createElement('p');
            pLikeBar.innerHTML = "297 081";
            divLikePhotographer.appendChild(pLikeBar);
        const iCoeur = document.createElement('i');
            iCoeur.setAttribute("class", "fas fa-heart");
            divLikePhotographer.appendChild(iCoeur);
        const divPriceDay = document.createElement('div');
            divPriceDay.setAttribute("class", "price-day")
            divPriceBackground.appendChild(divPriceDay);
        const pLikeDay = document.createElement('p');
            pLikeDay.innerHTML = "400€" + " / " + "jour";
            divPriceDay.appendChild(pLikeDay);
        return (divLike);
    };
    return { media, Price }*/
