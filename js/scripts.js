$(document).ready(function () {

    'use strict';

    for (let i = 0; i < productos.length; i++) {

        $('#productos').append(
            '<div class="col-6 col-md-4">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" data-name="product_image" src="img/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="monarchat25">'+ productos[i]['Nombre'] +'</h4>' +
                    '<h5 data-name="product_desc" class="monarchat20">'+ productos[i]['Intensidad'] +'</h5>' + '<p data-name="product_desc" class="t18">'+ productos[i]['Descripcion'] +'</p>' + 
                    '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                    '<div>$ '+ productos[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn boton_2">Agregar</button>' +
                '</div>' +
            '</div>'
        );
    }


    $('#smartcart').smartCart({

        cartItemTemplate: '<div class="d-flex">'+
            '<img class="img-fluid" src="{product_image}" />' +
            '<h3 class="h5 list-group-item-heading">{product_name}</h3>' +
        '</div>',

        lang: {
            cartTitle: 'Mis productos',
            checkout: 'Hacer pedido',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove:'×',
            cartEmpty: '¡Sin productos aún!<br />Comenzá a elegir'
        }
    });

    'use strict';
    for (let i = 0; i < accesorios.length; i++) {

        $('#accesorios').append(
            '<div class="col-6 col-md-4">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" data-name="product_image" src="img/'+ accesorios[i]['Imagen'] +'" alt="'+ accesorios[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="monarchat25">'+ accesorios[i]['Nombre'] +'</h4>' + 
                    '<input name="product_price" value="'+ accesorios[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ accesorios[i] +'" type="hidden" >' +
                    '<div>$ '+ accesorios[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn boton_2">Agregar</button>' +
                '</div>' +
            '</div>'
        );
    }


    $('#smartcartacc').smartCart({

        cartItemTemplate: '<div class="d-flex">'+
            '<img class="img-fluid" src="{product_image}" />' +
            '<h3 class="h5 list-group-item-heading">{product_name}</h3>' +
        '</div>',

        lang: {
            cartTitle: 'Mis accesorios',
            checkout: 'Hacer pedido',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove:'×',
            cartEmpty: '¡Sin accesorios aún!<br />Comenzá a elegir'
        }
    });
});