# API de Gestión de Usuarios

Esta API proporciona operaciones CRUD para la gestión de documentos en la colección de `users`, así como funcionalidad de autenticación para iniciar sesión.

## Endpoints

### Operaciones CRUD para `users`

- **GET /auth/login**
  -Usando Postman  se puede observar que el endpoint de Login proporciona un token JWT  en base a las credenciales de de acceso , segun el requerimiento de que la password debe estar en base al email.

   ![imagen](https://github.com/user-attachments/assets/f0e82faa-7875-4a48-9ee6-cd4ac4a70025)
  -En cuanto exista algun error en el apartado de contraseña , se muestan metodos HTTP de respuesta , ya que se validan los datos de entreda.
   ![imagen](https://github.com/user-attachments/assets/736b773d-23b9-41f5-94ff-2f43d5db8055)


  -En caso de no raelizar el login  , no se podra acceder a los demas endpoint, ya que es necesario el token generado  el cual se configuro con una duracion maxima de 60s ,con fines de prueba.

  ![imagen](https://github.com/user-attachments/assets/64050c33-fb8b-45a6-808d-8c6c4980b0cd)

- **GET /users**

  - *Descripción*: Obtiene todos los la coleccion de datos  de usuarios.
  - Para acceder a este metodo ,es necesario haberse autenticado anteriormente , considerando la estructura de datos establecida:
  
  ![imagen](https://github.com/user-attachments/assets/3e5a6751-aaa4-445a-89f3-78a8a773f1f5)

  -Para acceder a este seervicio se requiere un token proporcionado al realizar el login , para este ejemplo se utilizo  el siguiente  :
  ```json
  
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjMyNDA5MTksImV4cCI6MTcyMzI0MDk3OX0.tvbrI8L2TyAQKMYSCAJnTpk2j-fLhF-Az2XeJVYeV6M"
  }
  
  ```

  -Teniendo la siguiente salida al aplicar el token:
    ![imagen](https://github.com/user-attachments/assets/b9035a02-6a05-4b4e-b9bc-2c65478a5638)




  - **GET /users/:id**

  - *Descripción*: Obtiene un documento específico de la colección según su `_id`.
  - Con el token generado  y  el id generado 66b6742310c3bea082a9fd8a , se puede obtejer el usuario generado en la base de datos:
 
    ![imagen](https://github.com/user-attachments/assets/0baa1e16-5e55-4328-83b1-5cfffd46a8c6)

 

- **POST /users**
  - *Descripción*: Inserta un nuevo documento en la colección de `users`.
   -Para ello se envia la siguent solitud :
    
  ```json
  {   
    "name":"Test1",
	  "email":"Test1@example.com",
    "age":49
  }
  ```
 
-Se obtiene la siguietne respuesta :

  ```json
    {
    "name": "Test1",
    "email": "Test1@example.com",
    "age": 49,
    "_id": "66b681f2336d23550e64c425",
    "password": "$2b$10$8ydGv1b.fMHAHB8JiM9D4uBwpr7wTjC9u1w3g5jtrhjzGbN0BykWG"
    }
  - **Respuesta**: Documento del usuario recién creado.
  ```
