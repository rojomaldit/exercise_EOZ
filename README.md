## Installation

```bash
npm install

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

## end-points
```bash
# Add TODO (POST)
http://localhost:3000/todo/
{
	"description": "mensaje"
}

# See all TODO (GET)
http://localhost:3000/todo/

# delete TODO (DELETE)
http://localhost:3000/todo/id/

# delete all TODOs (DELETE)
http://localhost:3000/todo/

```

