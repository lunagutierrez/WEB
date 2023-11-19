import React from 'react';

const Recs = () => {
  return (
    <div id="recommendations" className="section">
      <h2>Recommendaciones</h2>
      <br />
      <h5>Ten en cuenta para tus diseños a la medida</h5>

      <ul className="charcs">
        <li>
          Te recomendamos que la resolución del archivo y las imágenes sean altas, mayor o igual a los 150 dpi, y debes enviarlas al tamaño final.
        </li>
        <li>
          Preferiblemente envía tus archivos en formatos .PDF, .TIFF, .PSD o .EPS
        </li>
        <li>
          Es importante que tengas en cuenta que las fuentes deben estar incorporadas o convertidas en trazados y las imágenes incrustadas. Te sugerimos que el tamaño de la fuente sea superior a 20 pt. para una excelente lectura.
        </li>
        <li>
          Ten en cuenta que el archivo de impresión deberá ser preparado en CMYK (cyan, magenta, amarillo y negro). Los archivos generados en RGB o con colores PANTONE, recomendamos convertirlos con un perfil de separación estándar CMYK.
        </li>
      </ul>
    </div>
  );
};

export default Recs;
