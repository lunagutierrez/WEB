import React from 'react';
import './Reviews.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const StarRow = ({ starCount, total = "0" }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < starCount) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-yellow" />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-light" />);
    }
  }

  return (
    <div className='d-flex py-1 mx-3'>
      {stars}
      <div className='ms-4'>({total})</div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div id="reviews" className="section">
      <h2>Reseñas</h2>
      <Row className='justify-content-center'>
        <Col md="3">
          <div className="d-flex bg-white">
            <div className='d-flex flex-column'>
              <div className="rating-box d-flex align-items-center justify-content-center">
                <h1 className="ov_rating m-0">4.2</h1>
              </div>
              <div className='bg-secondary text-white text-center py-2'>
                de 5.0
              </div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-start py-2'>
              <StarRow starCount={5} total='100k' />
              <StarRow starCount={4} />
              <StarRow starCount={3} />
              <StarRow starCount={2} />
              <StarRow starCount={1} />
            </div>
          </div>
        </Col>
      </Row>

      <section style={{ color: '#000', backgroundColor: '#f3f2f2' }}>
        <Container className="py-5">
          <Row className="text-center">
            <Col md="4" className="mb-4 mb-md-0">
              <div className="card">
                <div className="card-body review-card">
                  <div className="d-flex justify-content-center mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      className="rounded-circle shadow-1-strong" width="100" height="100" alt="Reviewer" />
                  </div>
                  <h5 className="font-weight-bold">Pepita Perez</h5>
                  <h6 className="font-weight-bold my-3">Diseñadora</h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                  </ul>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                    ad velit ab hic tenetur.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4" className="mb-4 mb-md-0">
              <div className="card">
                <div className="card-body review-card">
                  <div className="d-flex justify-content-center mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                      className="rounded-circle shadow-1-strong" width="100" height="100" alt="Reviewer" />
                  </div>
                  <h5 className="font-weight-bold">Pepa Pombo</h5>
                  <h6 className="font-weight-bold my-3">Fotógrafa</h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStarHalfAlt} className="star-yellow" /></li>
                  </ul>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2"></i>Autem, totam debitis suscipit saepe
                    sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis
                    labore laboriosam.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4" className="mb-0">
              <div className="card">
                <div className="card-body review-card">
                  <div className="d-flex justify-content-center mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                      className="rounded-circle shadow-1-strong" width="100" height="100" alt="Reviewer" />
                  </div>
                  <h5 className="font-weight-bold">Pepita Pombo</h5>
                  <h6 className="font-weight-bold my-3">Empresaria</h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStar} className="star-yellow" /></li>
                    <li><FontAwesomeIcon icon={faStarHalfAlt} className="star-yellow" /></li>
                  </ul>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2"></i>Cras sit amet nibh libero, in gravida
                    nulla metus scelerisque ante sollicitudin commodo cras purus odio,
                    vestibulum in tempus viverra turpis.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Reviews;
