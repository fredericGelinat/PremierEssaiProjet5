


/**
 * Gère l'affichage et les interactions de la page d'accueil
 */
 
    
 fetch("http://localhost:3000/api/teddies")
 .then(data => data.json())
     .then(jsonListTeddy => {
         for (let jsonTeddy of jsonListTeddy) {
             let teddy = new Teddy(jsonTeddy);
             document.querySelector(".justifyProduits").innerHTML += `


                                                                 <!--produit à l'unité-->
                                                                 <article class="produit">
                                                                    <div class="imgContainer">
                                                                      <img src="${teddy.imageUrl}" alt="${teddy.name}" class="imgProduit">
                                                                         <a href="" > 
                                                                             
                                                                             <span class="fa-stack fa-2x addFavorite" data-id=${teddy._id}>
                                                                                <i class="fas fa-star fa-stack-1x"></i>
                                                                                <i class="far fa-star fa-stack-1x"></i>
                                                                                
                                                                            </span>
                                                                            
                                                                         </a>
                                                                    </div>
                                                                    <h3>
                                                                    ${teddy.name}
                                                                    </h3>
                                                                    <h2>
                                                                         <span class="details">
                                                                                 ${teddy.description}
                                                                         </span>
                                                                    </h2>


                                                                 </article>
                                                                <!-- fin produit à l'unité-->
                                                                 `;
            }

            document.querySelectorAll(".addFavorite").forEach(star => {
                star.addEventListener("click", function() {
                    addFavorites(this.dataset.id);
                    this.setAttribute("class", "fa-stack fa-2x addFavorite activated");
                    if (this.className.indexOf("activated") != -1) {
                        this.setAttribute("class", "fa-stack fa-2x addFavorite");
                        removeFavorites(this.dataset.id);
                    } else {
                        
                        
                    }
                });
            });
        });


