import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import OptSel from '../inputs/optSel/OptSel';
import ProdImgs from './prodImgs/ProdImgs';
import ProdChars from './prodChars/ProdChars';
import ProdQ from './prodQ/ProdQ';
import ProdBuy from './prodBuy/ProdBuy';
import { useParams } from 'react-router-dom';

const smallImageUrls = [
  'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg',
  'https://staticecp.uprinting.com/5754/700x700/UP_Stickers_and_Labels_Cut_to_Size_Gallery_1_A.jpg',
  'https://staticecp.uprinting.com/1016/700x700/Custom_Sticker_Crack_and_Peel_B_1400x1400.jpg'
];

const products = [
  {
    id: 1,
    imagelist: [
      'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg',
      'https://staticecp.uprinting.com/5754/700x700/UP_Stickers_and_Labels_Cut_to_Size_Gallery_1_A.jpg',
      'https://staticecp.uprinting.com/1016/700x700/Custom_Sticker_Crack_and_Peel_B_1400x1400.jpg'
    ], cost: 1000, name: 'Sticker 1', descrip: 'Descripción 1',
  }, 
  {
    id: 2,
    imagelist: [
      'https://staticecp.uprinting.com/9876/700x700/sticker-clear.webp',
      'https://staticecp.uprinting.com/309/700x700/Clear-Stickers_1400x1400.jpg',
      'https://staticecp.uprinting.com/1016/700x700/Custom_Sticker_Crack_and_Peel_B_1400x1400.jpg'
    ], cost: 2000, name: 'Sticker 2', descrip: 'Descripción 2',
  },
  {
    id: 3,
    imagelist: [
      'https://staticecp.uprinting.com/6808/700x700/UP_Sheet_Sticker_PDP_Image_D.jpg',
      'https://staticecp.uprinting.com/7335/700x700/Custom_Sticker_Sheets_PDP_A2.jpg',
      'https://staticecp.uprinting.com/5786/600x600/C_Boost_Sticker_Sheet_Overview_Image1.jpg'
    ], cost: 3000,  name: 'Sticker 3', descrip: 'Descripción 3',
  }]


const optionsForma = [
  { value: 'c', label: 'Círculo' },
  { value: 'r', label: 'Rectángulo' },
  { value: 'cu', label: 'Cuadrado' },
];

const optionsTamaño = [
  { value: 'l', label: 'Grande' },
  { value: 'm', label: 'Mediano' },
  { value: 's', label: 'Pequeño' },
];

const optionsMaterial = [
  { value: 'm1', label: 'Material1' },
  { value: 'm2', label: 'Material2' },
  { value: 'm3', label: 'Material3' },
];

const optionsAcabado = [
  { value: 'mate', label: 'Mate' },
  { value: 'shiny', label: 'Brillante' },
];

const Prod_desc = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleImageModal = () => {
    setShowImageModal(!showImageModal);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    console.log('File uploaded:', selectedFile);
    setSelectedFile(null);
    toggleImageModal();
  };

  const [selectedForma, setSelectedForma] = useState('');
  const [selectedTamaño, setSelectedTamaño] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedAcabado, setSelectedAcabado] = useState('');

  const handleFormaChange = (selectedValue) => {
    setSelectedForma(selectedValue);
  };

  const handleTamañoChange = (selectedValue) => {
    setSelectedTamaño(selectedValue);
  };

  const handleMaterialChange = (selectedValue) => {
    setSelectedMaterial(selectedValue);
  };

  const handleAcabadoChange = (selectedValue) => {
    setSelectedAcabado(selectedValue);
  };

  const { id } = useParams();

  return (
    <Container>

      <Row className="mb-4">
        <Col>
          <div className="text-center p-3 text-white">
            <ProdImgs imageLinks={products[id-1].imagelist} />
          </div>
        </Col>
        <Col>
          <div className="p-3">
            <h2>{products[id-1].name}</h2>
            <p> {products[id-1].descrip}</p>
            <OptSel label="Forma:" options={optionsForma} onChange={handleFormaChange} />
            <OptSel label="Tamaño:" options={optionsTamaño} onChange={handleTamañoChange} />
            <OptSel label="Material:" options={optionsMaterial} onChange={handleMaterialChange} />
            <OptSel label="Acabado:" options={optionsAcabado} onChange={handleAcabadoChange} />
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <div className="p-3">
            <ProdChars />
          </div>
        </Col>
        <Col>
          <div className="text-dark align-items-center">
            <ProdQ costo={products[id-1].cost} />
            <div className="text-center">
              <Button className="btn-pink py-1 px-2 border-0" onClick={toggleImageModal}>
                Cargar o diseñar
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Modal isOpen={showImageModal} toggle={toggleImageModal}>
        <ModalHeader toggle={toggleImageModal}>Cargar o diseñar</ModalHeader>
        <ModalBody>
          {/* Image uploading form */}
          <form>
            <div className="mb-3">
              <label htmlFor="imageInput" className="form-label">
                Selecciona una imagen:
              </label>
              <input
                type="file"
                className="form-control"
                id="imageInput"
                onChange={handleFileChange}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-pink py-1 px-2 border-0" onClick={toggleImageModal}>
            Cancelar
          </Button>
          <Button className="btn-pink py-1 px-2 border-0" onClick={handleUpload}>
            Subir imagen
          </Button>
        </ModalFooter>
      </Modal>

      <ProdBuy />
    </Container>
  );
};

export default Prod_desc;
