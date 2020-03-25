# CRUD Template

Este repositorio contiene un template para comenzar a realizar un CRUD (Operaciones de Inserción, Actualización, Lectura y Borrado) sobre una base
de datos relacional MYSQL. Esta base de datos se levanta utilizando `docker-compose`.

# Instrucciones:

- Clone el repositorio:

```
git clone https://github.com/xkiver/crud_template_node.git
```

- Levante su BD usando `docker-compose`(Previa instalación):

```
docker-compose up -d
```

- Corra la migración (Proceso de creación de tablas):

```
# cd src/db/migrations
# node ../migration.js run up
```

Si tiene problemas en este paso, pruebe poniendo las variables de entorno descritas en el archivo `.env` directamente en el archivo `src/db/migration.js`y vuelva
a ejecutar el comando anterior

- Corra la aplicación:

```
# node src/index.js
```