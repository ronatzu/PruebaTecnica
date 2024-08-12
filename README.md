# API de Gestión de Usuarios

Esta API proporciona operaciones CRUD para la gestión de documentos en la colección de `users`, así como funcionalidad de autenticación para iniciar sesión.


## INSTRUCCIONES

- Ejecutar el siguiente comando para instalar todas las dependencias:

 ```json
  npm install package.json
 ```

 - Tener disponible postman y  descargar el siguiente archivo para importarlo en la aplicacion de Postman

      https://we.tl/t-3OJHblKvLM

 - Al importar el archivo se ecuentran configurado con  la direccion de railway en donde se encuentra desplegado , asi mismo con una varible global que hace referencia al token JWT generado al realizar el login . 

## DESPLIEGUE EN RAILWAY

En el siguiente boton se encuentra el link del despliegue de railway:

[![vecteezy_click-cursor-icon-with-click-here-button_21971555](https://github.com/user-attachments/assets/d23d2c7e-df46-4202-870d-06250a758ab5)](https://pruebatecnica-production-1cc7.up.railway.app)

En caso de tener algun problema  en el consumo del API en  Postman usar el siguiente link del despliegue en Railway seguido de los endpoints al que se desee acceder : 


https://pruebatecnica-production-1cc7.up.railway.app


## ENDPOINTS


### Operaciones `auth`

- **GET  /auth/login**

  Usando Postman  se puede observar que el endpoint de Login proporciona un token JWT  en base a las credenciales de de acceso , segun el requerimiento de que la password debe estar en base al email. 
  
  
  ![image](https://github.com/user-attachments/assets/7f707a7e-b72e-4032-b356-4e2e8c313dc9)

   

  En cuanto exista algun error en el apartado de contraseña , se muestan metodos HTTP de respuesta , ya que se validan los datos de entreda.

   ![imagen](https://github.com/user-attachments/assets/736b773d-23b9-41f5-94ff-2f43d5db8055)


  En caso de no raelizar el login  , no se podra acceder a los demas endpoint, ya que es necesario el token generado  el cual se configuro con una duracion maxima de 60s ,con fines de prueba.

  ![image](https://github.com/user-attachments/assets/5f7549fd-7bfe-49ca-ae31-c1f03b7d4ffc)


### Operaciones `users`

- **GET /users**

  Este metodo obtiene todos los la coleccion de datos  de usuarios.

  Para acceder a este metodo ,es necesario haberse autenticado anteriormente , considerando la estructura de datos establecida:
  
  ![imagen](https://github.com/user-attachments/assets/3e5a6751-aaa4-445a-89f3-78a8a773f1f5)

  Para acceder a este seervicio se requiere un token proporcionado al realizar el login , para este ejemplo se utilizo  el siguiente  :
  ```json
  
  {
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjM0MTQ1OTYsImV4cCI6MTcyMzQxNDY1Nn0.y6RUmrZW4xNotwfEbsKuuYpOusQSJSvnfCXyD7QBAx0"
  }
  
  ```

  Teniendo la siguiente salida :




- **GET /users/:id**

  Se obtiene un documento específico de la colección según su `_id`.

  Con el token generado  y  el id generado 66b958d504e32956d68a59a8 , se puede obtejer el usuario generado en la base de datos:
 
    ![imagen](https://github.com/user-attachments/assets/0baa1e16-5e55-4328-83b1-5cfffd46a8c6)

 

- **POST /users**
  
  Permite Inserta un nuevo documento en la colección de `users`.Para ello se envia la siguent solitud :
  
  ![image](https://github.com/user-attachments/assets/9031ad76-071c-4d5c-b400-ff0bfa75659a)


- **PUT /users/:id**
  
  Con este metodo  , se puede modificar las propiedades del usuario segun el id y el cuerpo del body.

  ![image](https://github.com/user-attachments/assets/752df8e2-63bf-40e2-a7fa-613cd5a64b8b)


- **DELETE /users/:id**
  
  Con este metodo , se iliminar a un usuario segun su id.

  ![image](https://github.com/user-attachments/assets/52d772e8-d7f7-4cb3-944c-c0250e3a77c6)
