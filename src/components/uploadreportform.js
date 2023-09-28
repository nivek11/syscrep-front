import React, { useState } from 'react';
import './uploadreportformStyle.css';
import FileUploadButton from './uploadbutton';

function ReportUploadForm({ uploadUrl }) {
  const [status, setStatus] = useState('No se ha subido ningún archivo');

  const handleFileSelect = (file) => {
    console.log("Archivo seleccionado en ReportUploadForm:", file);
    setStatus('Archivo seleccionado: ' + file.name);
    // Aquí también puedes manejar la lógica de subida si es necesario
  };

  return (
    <div className="report-upload-form">
      <div className="header">
        <h2>Subir reporte preliminar</h2>
      </div>
      <FileUploadButton uploadUrl={uploadUrl} />
      <div className="status">
        <p>Estatus: </p>
      </div>
    </div>
  );
}

export default ReportUploadForm;