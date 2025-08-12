const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.get('/menu', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'menu.html'))
);

app.get('/carrito', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'carrito.html'));
});

app.get('/pago', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'pago.html'))
);

app.get('/confirmacion', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'confirmacion.html'))
);

app.listen(port, () =>
  console.log(`Servidor corriendo en http://localhost:${port}`)
);
