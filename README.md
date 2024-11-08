# Descripción



## Correr en dev


1. Clonar el repositorio.
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias ```npm install```
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Prisma ```npx prisma migrate dev```
6. Ejecutar seed ```npm run seed```
7. Correr el proyecto ```npm run dev```

Crear
npx prisma init --datasource-provider PostgreSQL

Si cambio el esquema
5. Correr las migraciones de Prisma ```npx prisma migrate dev --name user-role```
6. Ejecutar seed ```npm run seed```


## Correr en prod

## Usar URL
https://dashboard.ngrok.com/get-started/setup/linux
https://www.opengraph.xyz/
ngrok http http://localhost:3000

https://www.opengraph.xyz/

https://2cff-186-116-85-228.ngrok-free.app