import express from 'express'

const app = express()
app.get('/', (request, response) => {
    return response.status(200).json({ message : "Hello, World!"});
});
app.listen(3000);