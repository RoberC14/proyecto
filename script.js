function cargarDatos(done){
    const results = fetch("https://fakestoreapi.com/products")
      results
        .then(response => response.json())
        .then(data => {
            done(data)
      });
    }

    cargarDatos(data =>{
        console.log(data);
       data.forEach(products =>{
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class ="image-container">
                <img src="${products.image}" > </img>
            </div>
    
            <h2>${products.title}</h2>
    
        </article>
        `);

    const main = document.querySelector("main");
    
    main.append(article);
    
       });
    });

    
    
   