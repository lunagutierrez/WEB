import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const ProdImgs = ({ imageLinks }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === imageLinks.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? imageLinks.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = imageLinks.map((imageLink, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
    >
      <img src={imageLink} alt={`Slide ${index}`} className="d-block w-100" style={{ maxHeight: '350px', objectFit: 'contain' }} />
      <CarouselCaption captionText="" captionHeader="" />
    </CarouselItem>
  ));

  return (
    <div className="d-flex flex-column align-items-center"> {}
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={imageLinks} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      <div className="mt-3 text-center">
        <div className="d-flex justify-content-center">
          {imageLinks.map((imageLink, index) => (
            <img
              key={index}
              src={imageLink}
              alt={`Thumbnail ${index}`}
              className="img-thumbnail mr-2"
              style={{ cursor: 'pointer', maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProdImgs;
