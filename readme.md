Trabajo practico integrador de Digital House : "Mercado Liebre"

El objetivo del proyecto es construir un e-commerce en Node Js usando la metodologia mobile first, este repositorio corresponde a la ultima version del proyecto

Metodo de uso: 
    
    -Clonar repositorio
    
    -En terminal (Carpeta raiz) para instalar las dependencias, ejecutar: npm i
    
    -Luego ejecutar nodemon o ir a la carpeta "src" y ejecutar en la terminal : node app.js

Las etapas de desarrollo de cada una de las fases se suben individualmente en repositorios numerados:

    Etapa 1
        descripción: Creacion de la vista Home para dispositivos móviles e instalacion de Express.

            desafio 1: crear estructuras de carpetas, configuracion de Node Js Express

            desafio 2: creacion de home.html, con las secciones header, main y footer con sus respectivos contenidos

        link del repositorio: https://github.com/nicolasR9322/mercadoLiebre1

    Etapa 2
        descripción: colocacion de estilos al header/navbar.
            
            desafio 1: subir la paleta de colores, la tipografia, tamaño tipografico e iconos

            desafio 2: estilizar el header, el navbar y el menu hamburguesa

            desafio 3: estilizar el footer

        link del repositorio: https://github.com/nicolasR9322/mercadoLiebre2

    Etapa 3
        descripción: implementacion de diseño adapatativo/responsivo.
            
            desafio 1: 
                -centrar seccion main, con un ancho del 90%
                -entre articulos separacion de 10px
                -implementar los articulos como box model
                -los articulos deben tener border superior 1px, solido, color #ebebeb
                -los articulos deben separar el contenido de sus bordes 15px
            
            desafio 2: establecer breakpoints
                -tablets: a partir de 768 px de ancho
                -desktop: a partir de 1024 px ancho
                -en mobile no se vera la descripcion del articulo
                -los articulos tienen box shadow para tablets y superiores

            desafio 3:
                -ocultar login y navbar para version mobile
                -asimismo para tablet y superiores esconder el menu hamburguesa pero mostrar el navbar y login
        
        link del repositorio:https://github.com/nicolasR9322/mercadoLiebre3
    
    Etapa 4
        descripción: posicionamiento Flexbox avanzado

            desafio 1: maquetacion del logo de envio, precio y descuento posicionamiento y espacio ocupado

            desafio 2: seccion main actualizada para que muestre un articulo en mobile, 2 en tablet y 4 en desktop

            desafio 3: arreglo del header para que ocupen el 50% del ancho de la pantalla
        
        link del repositorio: https://github.com/nicolasR9322/mercadoLiebre4

    Etapa 5
        descripción: Creacion de formularios, registro y login
        
            desafio 1: creación de formulario de registro con los datos requeridos

            desafio 2: creación de formulario de login con la informacion requerida

            desafio 3: creacion del mensaje de error

        link del repositorio: https://github.com/nicolasR9322/mercadoLiebre5

    Etapa 6
        descripción: Reorganizacion de elementos

            desafio 1: agregar los siguientes efectos cuando se pase el mouse por encima
                -visualizar la descripcion del producto
                -visualizar la sombra de la tarjeta del producto
                -rotacion del icono de envio 90°
            
            desafio 2: cambiar el fondo del boton del login cuando se pase el mouse por encima

            desafio 3: cambiar el color de los iconos del footer cuando se pase el mouse por encima
        
        link del repositorio: https://github.com/nicolasR9322/mercadoLiebre6

    Etapa 7
        descripción: parte 1 del CRUD (crear, leer, actualizar y borrar) de los productos:

            desafio 1: incorporar las siguientes rutas
                
                -/
                muestra los productos del home separados en 2 secciones
                
                -/products
                lista todos los productos presentes en la base de datos JSON

                -/products/:id
                detalle de producto, cada producto debe contar con botones de BORRAR y MODIFICAR

                -/products/create
                muestra el formulario para creacion del producto

                -/products/
                recibe datos de creacion del formulario

                -/products/edit/id:
                cuenta con un boton MODIFICAR, actualizara la informacion correspondiente ingresada

                -/products/
                recibe los datos de la actualizacion

                -/products/:id
                cuenta con un boton BORRAR, eliminara el producto de la base de datos JSON

        link del repositorio: https://github.com/nicolasR9322/MercadoLiebre7-CRUD

    Etapa 8
        descripción: parte 2 del CRUD, agregando subida de imagenes con multer

            desafio 1: se codifica el formulario de carga para ingresar productos y luego redirigirlos a la ruta /products incluyendo la posiblidad de subir una imagen

            desafio 2: se codifica la opcion de editar

            desafio 3: se codifica la opcion de eliminar
        
        link del repositorio: https://github.com/nicolasR9322/MercadoLiebre8-CRUD2-multer

