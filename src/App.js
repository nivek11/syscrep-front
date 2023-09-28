import React from "react";
import Navbar from "./components/navbar";
import FileUploadButton from './components/uploadbutton';
import MultiUploadForm from './components/multiuploadform';
import ReportUploadForm from "./components/uploadreportform";

function App() {
  const uploadUrl = 'http://localhost:8000/uploads'; // Reemplaza con la URL de tu servidor local y la ruta adecuada
  return (
    <div className="App">
      <Navbar/>

      <ReportUploadForm uploadUrl={uploadUrl}/>

      <MultiUploadForm />
      
    </div>
    
    
  );
}

export default App;
