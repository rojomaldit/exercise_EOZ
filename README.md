## Installation

```bash
npm install
npm install --save @nestjs/typeorm typeorm mysql
npm install bootstrap
```

## Default database
"username": "root",
"password": "Root123//",
"database": "todo",

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## end-points for Postman
```bash
# Add todo (POST)
http://localhost:3000/todo/

# See all TODOs (GET)
http://localhost:3000/todo/

# delete one TODO (DELETE)
http://localhost:3000/todo/id/

# delete all TODOs (DELETE)
http://localhost:3000/todo/

```

