//Se toma las imágenes de esta tienda de licores https://www.magicovino.com
const licores = [{
  id: 1,
  name: "Campari",
  description: "Esta es la descripción de producto de vinos, lea detenidamente las condiciones",
  img: "https://www.magicovino.com/wp-content/uploads/2020/06/campari-1024x1024.jpg",
  price: 120,
  category: "Aperitivos",
  stock: 5
},
{
  id: 2,
  name: "Fernet",
  description: "Esta es la descripción de producto de vinos, lea detenidamente las condiciones",
  img: "https://www.magicovino.com/wp-content/uploads/2020/06/fernet-1024x1024.jpg",
  price: 34,
  category: "Aperitivos",
  stock: 25
},
{
  id: 3,
  name: "Ambar",
  description: "Esta es la descripción de producto de vinos, lea detenidamente las condiciones",
  img: "https://www.magicovino.com/wp-content/uploads/2020/10/ambar.jpg",
  price: 38,
  category: "Vinos",
  stock: 11
},
{
  id: 4,
  name: "Amarone",
  description: "Esta es la descripción de producto de vinos, lea detenidamente las condiciones",
  img: "https://www.magicovino.com/wp-content/uploads/2020/09/amarone_zenato.jpg",
  price: 34,
  category: "Vinos",
  stock: 100
},
{
  id: 5,
  name: "Altemasi Brut",
  description: "Esta es la descripción de producto de vinos, lea detenidamente las condiciones",
  img: "https://www.magicovino.com/wp-content/uploads/2020/05/altemasi-1-1024x1024.jpg",
  price: 12,
  category: "Espumantes",
  stock: 80
},
{
  id: 6,
  name: "Bollinger",
  description: "Esta es la descripción de producto de vinos, lea detenidamente las condiciones",
  img: "https://www.magicovino.com/wp-content/uploads/2020/06/bollinger-2-1024x1024.jpg",
  price: 56,
  category: "Espumantes",
  stock: 23
},
{
  id: 7,
  name: "Bulldog London Dry",
  description: "Esta es la descripción de producto de vinos, lea detenidamente las condiciones",
  img: 'https://www.magicovino.com/wp-content/uploads/2020/06/bulldog-1024x1024.jpg',
  price: 13,
  category: "Aperitivos",
  stock: 21
},
{
  id: 8,
  name: "Cerveza Corona",
  description: "Esta es la descripción de producto de vinos, lea detenidamente las condiciones",
  img: "https://ecuaviche.com.ec/wp-content/uploads/2020/12/corona.jpg",
  price: 7,
  category: "Cervezas",
  stock: 120
},
{
  id: 9,
  name: "Cerveza Spencer",
  description: "Esta es la descripción de producto de vinos, lea detenidamente las condiciones",
  img: "https://assets.holyart.it/images/BB000014/es/500/A/SN061443/CLOSEUP01_HD/h-1bf50ce2/cerveza-spencer-quadrupel-monks-reserve-ale-quadrupel-33-cl.jpg",
  price: 5,
  category: "Cervezas",
  stock: 20
}]


export const myPromise = () => {
  return new Promise((res, rej) => {
    if (licores.length > 0) {
      setTimeout(() => {
        res(licores)
      }, 2000)
    } else {
      rej("Error en la promesa")
    }
  })
}