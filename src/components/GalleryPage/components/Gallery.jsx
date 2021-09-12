import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import media from '../../../lib/media';
import shuffle from '../utils';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;

  img {
    border: 1px solid beige;
    border-radius: 4px;
    width: auto;
    height: 100%;
  }

  .label-wrapper {
    padding: 5px 0;
    display: flex;
    justify-content: space-around;
    gap: 16px;

    .label {
      text-align: center;

      ${media.smUp`
        width: 300px;
      `}
    }
  }
`;

const Gallery = ({ contentfulImages, tabs }) => {
  const [images, setImages] = useState(contentfulImages);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    setImages((prev) => shuffle(prev));
  }, []);

  const filterImages = (e) => {
    const tab = e.target.getAttribute('data-tag');
    setActiveTab(tab);
    if (tab === 'all') {
      setImages(contentfulImages);
      return;
    }
    setImages(contentfulImages.filter((image) => image.class === tab));
  };

  const handleViewImage = (e, index) => {
    e.preventDefault();
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1);
  };

  const handlePrev = () => {
    setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
  };

  return (
    <section id="galleries">
      <div className="gallery">
        <header>
          <h1>Gallery</h1>
          <ul className="tabs">
            {tabs.map(({ label, tabClass }) => (
              <li key={tabClass}>
                <a
                  tabIndex={0}
                  role="button"
                  onClick={filterImages}
                  onKeyPress={filterImages}
                  data-tag={tabClass}
                  className={`button${tabClass === activeTab ? ' active' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <div className="content">
          {images.map(({
            class: imageClass, full, thumb: thumbs,
          }, index) => (
            <div key={`${imageClass}-${full.title}`} className={`media all ${imageClass}`}>
              <a href="#" onClick={(e) => handleViewImage(e, index)}>
                <img
                  title={full.title}
                  alt={full.title}
                  src={thumbs.url}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <ReactModal
        isOpen={selectedImageIndex !== null}
        onRequestClose={handleCloseModal}
        contentLabel={images[selectedImageIndex]?.full?.title}
        ariaHideApp={false}
      >
        <ModalWrapper>
          <img
            src={images[selectedImageIndex]?.full?.url}
            alt={images[selectedImageIndex]?.full?.title}
          />
          <div className="label-wrapper">
            <span
              className="icon fa-arrow-left"
              role="button"
              tabIndex={0}
              onKeyPress={handlePrev}
              onClick={handlePrev}
            />
            <span className="label">{images[selectedImageIndex]?.full?.title}</span>
            <span
              className="icon fa-arrow-right"
              role="button"
              tabIndex={0}
              onKeyPress={handleNext}
              onClick={handleNext}
            />
          </div>
        </ModalWrapper>
      </ReactModal>
    </section>
  );
};

export default Gallery;
