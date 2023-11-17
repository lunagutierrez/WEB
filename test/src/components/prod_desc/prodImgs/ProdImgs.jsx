import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProdImg from '../prodImg/ProdImg';

const ProdImgs = () => {
  return (
    <Container>
        <Row>
            <ProdImg imgUrl={"https://staticecp.uprinting.com/6981/700x700/UP_Custom_Stickers_PDP_Promotional_B.jpg"}/>
        </Row>
        <Row>
        <ProdImg imgUrl={"https://staticecp.uprinting.com/6981/700x700/UP_Custom_Stickers_PDP_Promotional_B.jpg"}/>
        </Row>
        
    </Container>
  );
};

export default ProdImgs;
