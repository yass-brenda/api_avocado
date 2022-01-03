/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')

// web api
// Conectarnos al servidor
// Promise => async/await
window
    .fetch( `${baseUrl}/api/avo`)
    // Procesar la respuesta y  convertirla en JSON
    .then(res => res.json())
    // JSON -> Data -> Renderizar info en el browser
    .then(responseJSON => {
            const todosItems = []
            responseJSON.data.forEach(item => {
                    // crear el titulo
                    const tittle = document.createElement('h2')
                    tittle.textContent = item.name;
                    // crear la imagen
                    const image = document.createElement('img')
                    image.src = `${baseUrl}${item.image}`;
                    // crear el parrafo
                    const price = document.createElement('div')
                    price.textContent = item.price

                    // Contenedor para cada uno de los elementos
                    const container = document.createElement('div')
                    container.append(tittle,image,price)

                    todosItems.push(container)
            });
            appNode.append(...todosItems)

    });


