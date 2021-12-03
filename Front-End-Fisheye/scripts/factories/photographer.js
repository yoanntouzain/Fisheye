function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;
    const picture = `assets/images/Sample_photos/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
        a.setAttribute("href", "#");
        a.setAttribute("alt", "Lien vers le photographe");
        article.appendChild(a);//Pourquoi englober que le titre et l'image? Pourquoi ne pas englober toute la vignette (image,titre,texte)?
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
        a.appendChild(pLocation);
        const pTagline = document.createElement( 'p' );
        pTagline.setAttribute("class", "tagline");
        pTagline.innerHTML = tagline;
        a.appendChild(pTagline);
        const pPrice = document.createElement( 'p' );
        pPrice.setAttribute("class", "price");
        pPrice.innerHTML = price + "€/jours";
        a.appendChild(pPrice);
        return (article);
    };
    return { data, getUserCardDOM }
}