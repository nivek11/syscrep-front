import React from 'react';
import FileUploadButton from './uploadbutton';
import './multiuploadformStyle.css';

function MultiUploadForm() {
    const uploadUrls = [
      "URL_DE_SUBIDA_1", 
      "URL_DE_SUBIDA_2", 
      "URL_DE_SUBIDA_3"
    ];
  
    return (
      <form className="multi-upload-form">
        {uploadUrls.map((url, index) => (
          <div key={index} className="upload-section">
            <label>Subir</label>
            <FileUploadButton uploadUrl={url} />
          </div>
        ))}
      </form>
    );
  }
  
  export default MultiUploadForm;