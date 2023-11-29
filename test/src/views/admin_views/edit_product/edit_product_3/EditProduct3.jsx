import React from 'react';
import { useState } from 'react';
import './EditProduct3.css';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialSelector from '../../../../components/admin_components/material_selector/MaterialSelector';
import ShapeSelector from '../../../../components/admin_components/shape_selector/ShapeSelector';
import SizeSelector from '../../../../components/admin_components/size_selector/SizeSelector';
import TextureSelector from '../../../../components/admin_components/texture_selector/TextureSelector';
import EditBoxBig from '../../../../components/admin_components/edit_box_big/EditBoxBig';
import DescriptionBox from '../../../../components/admin_components/description_box/DescriptionBox';
import OptSel from '../../../../components/inputs/optSel/OptSel'
import ProdImgs from '../../../../components/prod_desc/prodImgs/ProdImgs';
import ProdCharsAdmin from '../../../../components/admin_components/prod_chars_admin/ProdCharsAdmin';
import ProdQAdmin from '../../../../components/admin_components/prod_q_admin/ProdQAdmin';
import ProdBuy from '../../../../components/prod_desc/prodBuy/ProdBuy';
import { Link } from 'react-router-dom';

const smallImageUrls = [
      'https://staticecp.uprinting.com/6808/700x700/UP_Sheet_Sticker_PDP_Image_D.jpg',
      'https://staticecp.uprinting.com/7335/700x700/Custom_Sticker_Sheets_PDP_A2.jpg',
      'https://staticecp.uprinting.com/5786/600x600/C_Boost_Sticker_Sheet_Overview_Image1.jpg'
  ];

const EditProduct3 = () => {
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
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <div className="text-center p-3 text-white">
          <ProdImgs imageLinks={smallImageUrls} />
          <div class="caja-btn-carga">
            <div className="text-center">
              <Button className="btn-pink py-1 px-2 border-0" onClick={toggleImageModal}>
                Cargar archivo
              </Button>
            </div>
          </div>
          </div>
        </Col>
        <Col>
          <div className="p-3">
            <EditBoxBig/>
            <DescriptionBox/>
            <ShapeSelector/>
            <SizeSelector/>
            <MaterialSelector/>
            <TextureSelector/>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>          
          <div className="p-3">
            <ProdCharsAdmin/>
          </div>
        </Col>
        <Col>
          <div className="text-dark align-items-center">
            <ProdQAdmin/>
          </div>
        </Col>
      </Row>
      <div class="caja-btn">
          <Link to="/admin/store_admin">
            <button class = "btn-rosa">
              <span class="texto">GUARDAR</span>
            </button>
          </Link>
      </div>

      <Modal isOpen={showImageModal} toggle={toggleImageModal}>
        <ModalHeader toggle={toggleImageModal}>Cargar archivo</ModalHeader>
        <ModalBody>
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
    </Container>
  );
};

export default EditProduct3;
