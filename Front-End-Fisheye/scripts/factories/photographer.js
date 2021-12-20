function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;
    const picture = `assets/images/Sample_photos/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
            a.setAttribute("href", "photographer.html");
            a.setAttribute("alt", "Lien vers le photographe");
            article.appendChild(a);
        const img = document.createElement( 'img' );
            img.setAttribute("src", picture);
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
}

//Pour la page photographer Mimi Keel profil
function photographerPage(datas) {
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
}

        //pseudo code
//
//
//
//final: on veut avoir toutes les image avec un titre et un chiffre avec un like

//pour les images du photographe
function mediaFactory(media) {
    const { photographerId, title, image, likes, date, price } = media;
    const picture = `assets/images/Sample_photos/Mimi/${image}`;

    function getUserCardMedia() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
            a.setAttribute("href", "#");
            a.setAttribute("alt", "lien vers image");
            article.appendChild(a);
        const img = document.createElement( 'img' );
            img.setAttribute("src", picture);
            img.setAttribute("alt", " ");
            a.appendChild(img);
        const div = document.createElement('div')
            div.setAttribute("class", "description")
            article.appendChild(div)
        const div1 = document.createElement('div')
            div1.setAttribute("class", "titre")
            div.appendChild(div1)
        const p = document.createElement( 'p' );
            p.textContent = title;
            div1.appendChild(p);
        const div2 = document.createElement('div')
            div2.setAttribute("class", "numberLike")
            div.appendChild(div2)
        const pLike = document.createElement( 'p' );
            pLike.setAttribute("class", "likes");
            pLike.innerHTML = likes, " ";
            div2.appendChild(pLike);
        const i = document.createElement('i');
            i.setAttribute("class", "fas fa-heart");
            pLike.appendChild(i);
        return (article);
    };
    return { media, getUserCardMedia }
}