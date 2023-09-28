import "./uploadbuttonStyle.css";
import React, { useState } from 'react';

function FileUploadButton({ uploadUrl }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Archivo seleccionado:", file);
      
      // Intenta cargar el archivo
      const formData = new FormData();
      formData.append('file', file);

      fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => console.log('Archivo subido con éxito:', data))
      .catch((error) => console.error('Error subiendo el archivo:', error));
    }
  };

  return (
    <div className="file-upload">
      <label htmlFor={`upload-button-${uploadUrl}`} className="custom-upload-button">
        Subir Archivo
      </label>
      <input 
        id={`upload-button-${uploadUrl}`}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {selectedFile && <p>Archivo seleccionado: {selectedFile.name}</p>}
    </div>
  );
}

export default FileUploadButton;