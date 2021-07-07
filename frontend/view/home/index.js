


/**
 * Gère l'affichage et les interactions de la page d'accueil
 */
 
 fetch("http://localhost:3000/api/teddies")
 .then(data => data.json())
     .then(jsonListTeddies => {
         for (let jsonTeddies of jsonListTeddies) {
             let teddies = new Teddies(jsonTeddies);
             document.querySelector(".justifyProduits").innerHTML += `


                                                                 <!--produit à l'unité-->
                                                                 <article class="produit">
                                                                    <div class="imgContainer">
                                                                      <img src="${teddies.imageUrl}" alt="product" class="imgProduit">
                                                                         <a href="" > 
                                                                             <button class="boutonDetails " data-id="${teddies._id}">
                                                                                 <span class="addFavorite"> 
                                                                                     <i class="fas fa-cart-arrow-down">
                                                                                     </i>                                                                             
                                                                                     <h3>
                                                                                         ${teddies.name}
                                                                                     </h3>
                                                                                 </span>
                                                                             </button>
                                                                         </a>
                                                                    </div>
                                                                    
                                                                    <h2>
                                                                         <span class="details">
                                                                                 ${teddies.description}
                                                                         </span>
                                                                    </h2>


                                                                 </article>
                                                                <!-- fin produit à l'unité-->
                                                                 `;
            }

            document.querySelectorAll(".addFavorite").forEach(star => {
                star.addEventListener("click", function() {
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
