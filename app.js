const express = require('express');
const app = express();
const port = 8080;

// Sevir contenido estático
app.use(express.static('public'));

// app.get('/hola-mundo', (req, res) => {
// 	res.send('Hola mundo en su respectiva ruta');
// });

// app.get('*', (req, res) => {
// 	res.sendFile(__dirname + '/public/404.html');
// });

app.get('/generic', (req, res) => {
	res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
	res.sendFile(__dirname + '/public/elements.html');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
