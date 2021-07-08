/**
 * Gère l'affichage et les interactions de la page des favoris
 */



 loadConfig().then(data => {
    config = data;
    
    fetch(config.host + "/api/teddies",
        {
            "method": "POST",
            headers: {
                'Accept': 'application/json', 

                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            "body": JSON.stringify({ favorites: getFavoritesId() })
        }).then(data => data.json())
        .then(jsonListTeddy => {
            for (let jsonTeddy of jsonListTeddy) {
                let teddy = new Teddy(jsonTeddy);
                document.querySelector("#cartContaineur").innerHTML += 
                                                                    `
 <article class="produit">
     <div class="imgContainer article">
         <img src=${teddy.imageUrl}alt="ours numero un" class="imgProduit">
         <button class="btnDuPanier addFavorite" data-id=${teddy._id}>
             <i class=" fas fa-shopping-cart"></i>
             ajouter au panier de merde
         </button>
     </div>
         <h3>${teddy.name}</h3>
         <h4>${teddy.price / 100}</h4>
         <h4>${teddy.description}</h4>
         <h3>${teddy.colors}</h3>


         <div class="cartFooter">
        <h3>Votre Total : € <span class="cartTotal">${teddy.price}</span></h3>
        <button class="clear-cart boutonDeLaBanniere" type= "submit">Vider le panier</button>
    </div>
 </article>`
                                                                    
                                                                    ;
            }

            document.querySelectorAll(".addFavorite").forEach(star => {
                star.addEventListener("click", function () {
                    if (this.className.indexOf("activated") != -1) {
                        this.setAttribute("class", "fas fa-shopping-cart addFavorite");
                        removeFavorites(this.dataset.id);
                    } else {
                        this.setAttribute("class", "fas fa-shopping-cart addFavorite activated");
                        addFavorites(this.dataset.id);
                    }
                });
            });
        });
    });
