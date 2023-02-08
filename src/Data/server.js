import { createServer, Model } from "miragejs";

createServer({
    models: {
        user: Model,
    },
    seeds(server) {
        server.create('user', {
            firstName: 'Ryan',
            lastName: 'Harris',
            age: '28',
            email: 'ryan.t.harris67@gmail.com',
            userName: 'OlboyReginald',
            password: 'Pass123'
        })
    },

    routes() {
        this.namespace = 'api';

        // Mocked GET Request for all users
        this.get('/users', (schema, request) => {
            return schema.users.all();
        })

        // Mocked GET Request for user by ID
        this.get('/users/:id', (schema, request) => {
            let id = request.params.id;

            return schema.users.find(id);
        })

        // Mocked POST Request to create a new user
        this.post('/users', (schema, request) => {
            let attribute = JSON.parse(request.requestBody);

            return schema.users.create(attribute);
        })

        // Mocked PATCH Request for user edit
        this.patch('/users/:id', (schema, request) => {
            let newAttribute = JSON.parse(request.requestBody);
            let id = request.params.id;
            let user = schema.users.find(id);

            return user.update(newAttribute);
        })

        // Mocked DELETE Request to delete a user
        this.delete('/users/:id', (schema, request) => {
            let id = request.params.id;

            return schema.users.find(id).destroy();
        })
    }
})