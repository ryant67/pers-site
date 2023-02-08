import { createServer } from "miragejs";

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/users', () => {
            return {
                users: [
                    { id: 1, firstName: 'Ryan', lastName: 'Harris' },
                    { id: 2, firstName: 'Joe', lastName: 'Schmoe' },
                    { id: 3, firstName: 'Jane', lastName: 'Doe' },
                ],
            }
        })
    },
})