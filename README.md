# ExpressJavascript
Este proyecto es un negocio familiar de un abasto de comida que se ha desarrollado utilizando Express y Node.js. Donde se pueda checar la lista de clientes y ver las cuentas disponibles, productos disponibles.

# Como instalar
1. Clona el repositorio de GitHub en tu máquina local utilizando el comando `**git clone**` seguido de la URL del repositorio.

2. Asegúrate de tener Node.js instalado en tu máquina. Puedes verificar esto ejecutando el comando `node -v` en tu terminal. Si no tienes Node.js, puedes descargarlo desde su sitio web oficial.

3. Abre una terminal en la carpeta raíz de tu proyecto y ejecuta el comando `npm install`. Esto instalará todas las dependencias necesarias para tu proyecto, incluyendo Express.

4. Una vez que se hayan instalado todas las dependencias, puedes ejecutar tu aplicación utilizando el comando `npm start`. Esto iniciará tu servidor y lo hará accesible en tu navegador en la dirección **_http://localhost:2000._**

# Views
### La principal view fue index hecha con EJS y otra basica para mostrar los productos disponibles
## Por supuesto, puedo mencionar que para realizar consultas HTTP (POST, PUT, GET, DELETE) a través de una interfaz gráfica de usuario, puedes usar una extensión de Visual Studio Code llamada Thunder Client. Esta extensión te permite enviar solicitudes HTTP y ver las respuestas en una interfaz fácil de usar dentro de tu editor de código. 

# Para instalar ThunderClient
1.Abre Visual Studio Code y haz clic en la pestaña de extensiones en la barra lateral izquierda.

2. Busca "Thunder Client" en la barra de búsqueda y haz clic en "Instalar".

3. Una vez que se haya instalado, abre Thunder Client haciendo clic en el icono en la barra de herramientas de Visual Studio Code o presionando Ctrl+Alt+T (o Cmd+Alt+T en Mac).

4.Para enviar una solicitud HTTP, haz clic en el botón "New Request" y completa los campos requeridos, como la URL, el método HTTP y los parámetros de la solicitud.
Haz clic en "Send" para enviar la solicitud y ver la respuesta en la pestaña de respuesta.

### URL Disponibles
La interfaz cuenta con 4 urls disponibles como
-- http://localhost:2000/clientes
-- http://localhost:2000/cuentas
-- http://localhost:2000/productos
-- http://localhost:2000/facturas

Donde se podra visualizar en raw js todos los valores que tienen estos.

### Parametros Disponibles
***Consultas*** **GET** simplemente colocar la **URL** a la que se desea acceder y añadirle `/`+ la id a la que se desea acceder y este mostrara a quien pertenece

***Consultas*** **POST** teniendo en cuenta en que **URL** se tiene que cambiar del metodo de **GET** a **POST** en el thunderclient situandonos en **BODY** escribimos en formato **JSON** nuestro nuevo input luego de esto se nos mostrara en el panel de la derecha todo valores disponibles mas el nuevo creado manualmente, tambien en consola se nos mostrar un mensaje como por ejemplo en la siguiente imagen:

![image](https://github.com/JustKillu/ExpressJavascript/assets/60795569/92dc6d42-6f62-46ee-9b9b-b9c17c579e2a)

***Consultas*** **PUT** Con este metodo podremos actualizar un valor de nuestra lista, siguiendo el metodo get para seleccionar un valor(utlizando su id) y ya podremos actualizar el valor a nuestro gusto como por ejemplo: 
![image](https://github.com/JustKillu/ExpressJavascript/assets/60795569/6c264696-0314-4cf0-b35e-91b9455e0015)

***Consultas*** **DELETE** Para utilizar este metodo tambien deberemos seguir el metodo **GET** para seleccionar el valor a eliminar hacer la peticion ejemplo:
![image](https://github.com/JustKillu/ExpressJavascript/assets/60795569/1dd4b2f9-f254-45b4-93a8-344a7c59ee02)


***Consultas de Facturas*** **GET** Para consultar facturas especificas deberemos envez de utilizar el **id** como veniamos haciendo tendremos que utilizar la fecha de la factura para poder checar a quien o quienes pertenecen como por ejemplo:
![image](https://github.com/JustKillu/ExpressJavascript/assets/60795569/deabb639-cf28-402a-a059-b55e06b202cf)



