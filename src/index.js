const express = require('express');

const app = express();

app.use(express.json());

app.get('/course', (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(['Curso 1', 'Curso 2' , 'Curso 3']);
});

app.post('/course', (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4']);
});

app.put('/course/:id', (request, response) => {
  const params = request.params;
  console.log(id);
  return response.json(['Curso 7', 'Curso 2', 'Curso 3', 'Curso 4']);
});

app.patch('/course/:id', (request, response) => {
  return response.json(['Curso 7', 'Curso 6', 'Curso 3', 'Curso 4']);
});

app.delete('/course/:id', (request, response) => {
  return response.json(['Curso 6', 'Curso 3', 'Curso 4']);
});

app.listen(3333);