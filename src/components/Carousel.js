import React from 'react';
import './Carousel.css';
import { useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import Label from './Label';
import LeftNav from './nav-buttons/LeftNav';
import RightNav from './nav-buttons/RightNav';
import { ArtistStatementPart1, ArtistStatementPart2 } from './ArtistStatement';

function Carousel() {
  const gallery = useSelector((state) => state.gallery.value);
  const items = gallery.galleryItems.map((item) => {
    return {
      original: item.image,
      thumbnail: item.image,
      originalAlt: `${item.title} (${item.model})`,
      originalHeight: "480px",
      thumbnailHeight: "480px",
      description: (
        <Label item={item}/>
      )
    }
  })

  items.unshift({
    original: "",
    thumbnail: "",
    description: (
      <ArtistStatementPart2/>
    )
  });
  items.unshift({
    original: "",
    thumbnail: "",
    description: (
      <ArtistStatementPart1/>
    )
  })

  return (
    <div className="Carousel">
      <ImageGallery 
        items={items} 
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        renderLeftNav={(onClick, disabled) => (
          <LeftNav onClick={onClick} disabled={disabled} />
        )}
        renderRightNav={(onClick, disabled) => (
          <RightNav onClick={onClick} disabled={disabled} />
        )}
      />
    </div>
  )
}

export default Carousel