/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')
appNode.addEventListener("click",(event) => {
    // Delegando un evento
    // Si el listener tiene como etiqueta un H2
    if(event.target.nodeName === "H2"){
        window.alert('Hola')
    }

} )

// Intl
//  1 . Da formato fechas
// 2  . Da formato monedas

 const formatPrice = (price) => {
    //locales es pais donde se encuentra
    const newPrice = new window.Intl.NumberFormat('es',
        {
            style: 'currency',
            currency: 'USD'
     }).format(price)
    return newPrice;
 }
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
                    tittle.className = "text-lg";
                    tittle.textContent = item.name;


                    // crear la imagen
                    const image = document.createElement('img')
                    image.className ="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
                    image.src = `${baseUrl}${item.image}`;

                    // crear el parrafo
                    const price = document.createElement('div')
                    price.className ="text-gray-600";
                    price.textContent = formatPrice(item.price);

                    // Contenedor para cada uno de los elementos
                    const container = document.createElement('div')
                    container.className = "text-center md:text-left";
                    container.append(tittle,image,price)

                    todosItems.push(container)
            });
            appNode.append(...todosItems)

    });


