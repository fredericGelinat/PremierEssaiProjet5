/**
 * Gère l'affichage et les interactions de la page des favoris
 */

 fetch("http://localhost:3000/api/teddies", {
	method: “POST”,
	headers: { 
'Accept': 'application/json', 
'Content-Type': 'application/json' 
},
	body: JSON.stringify(jsonBody)
});

 
    fetch("http://localhost:3000/api/teddies",
        {
            "method": "POST",
            headers: {
                'Accept': 'application/json', 

                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            "body": JSON.stringify({ favorites: getFavoritesId() })
        }).then(data => data.json())
        .then(jsonListTeddies => {
            for (let jsonTeddies of jsonListTeddies) {
                let teddies = new Teddies(jsonTeddies);
                document.querySelector(".cartContaineur").innerHTML += 
                                                                    `
 <article class="produit">
     <div class="imgContainer">
         <img src=${teddies.imageUrl}alt="ours numero un" class="imgProduit">
         <button class="btnDuPanier" data-id=${teddies._id}>
             <i class=" fas fa-shopping-cart"></i>
             ajouter au panier
         </button>
     </div>
         <h3>${teddies.name}</h3>
         <h4>${teddies.price / 100}</h4>
         <h4>${teddies.description}</h4>
         <h3>${teddies.colors}</h3>
 </article>`
                                                                    
                                                                    ;
            }

            document.querySelectorAll(".addFavorite").forEach(star => {
                star.addEventListener("click", function () {
                    if (this.className.indexOf("activated") != -1) {
                        this.setAttribute("class", "fa-stack fa-2x addFavorite");
                        removeFavorites(this.dataset.id);
                    } else {
                        this.setAttribute("class", "fa-stack fa-2x addFavorite activated");
                        addFavorites(this.dataset.id);
                    }
                });
            });
        });
