const express = require('express');
const app = express();
const port = 8000; // Puerto en el que se ejecutará el servidor
const path = require('path');
const multer = require('multer'); // Para manejar la carga de archivos
const cors = require('cors'); // Importar el middleware CORS

const fs = require('fs');

app.get('/uploads', (req, res) => {
  // Lees la carpeta 'uploads' y obtienes la lista de archivos
  fs.readdir('uploads', (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta de archivos:', err);
      res.status(500).send('Error al obtener la lista de archivos');
    } else {
      // Envías la lista de archivos como respuesta
      res.send(files);
    }
  });
});

app.use(cors({ origin: 'http://localhost:3000' }));
// Configuración de multer para guardar archivos en la carpeta 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta de destino para los archivos cargados
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Nombre del archivo se mantendrá igual
  },
});

const upload = multer({ storage: storage });

// Ruta principal para mostrar un formulario de carga
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar la carga de archivos
app.post('/uploads', upload.single('file'), (req, res) => {
  // En este punto, el archivo se ha cargado con éxito en la carpeta 'uploads'
  res.send('Archivo subido con éxito');
});

// Servir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});