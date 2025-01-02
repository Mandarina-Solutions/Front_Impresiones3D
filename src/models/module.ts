export const aboutMe = `
Acerca de mi, me llamo valentin, soy diseñador
industrial especialista en el sector automotor
y transportista.
Elaboro productos regidos por el diseño
aleman como bauhaus, Werkbound y ulm.
Vanguardismo, innovacion y pulcritud son
principios de esta marca para la elaboracion
de nuestros productos` 

export type product = {
    id:number,
    title:string,
    img:string,
    info:string,
    price:number
}

const product_1:product = {
    'id': 1,
    'title':'Producto A',
    'img':'./blabla',
    'info':'Palanca super mecanica',
    'price': 25
}

const product_2:product = {
    'id': 2,
    'title':'Producto B',
    'img':'./blabla',
    'info':'Palanca media mecanica',
    'price': 25
}

const product_3:product = {
    'id': 3,
    'title':'Producto C',
    'img':'./blabla',
    'info':'Palanca no tan mecanica',
    'price': 25
}

export const products = [product_1, product_2, product_3]
