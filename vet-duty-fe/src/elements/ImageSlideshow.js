import React, { useState, useEffect } from 'react';
import Image1 from '../public/images/4.jpeg';
import Image2 from '../public/images/2.jpg';
import Image3 from '../public/images/3.png';
import Image4 from '../public/images/4.jpg';

function ImageSlideshow() {
  const images = [Image1, Image2, Image3,Image4]; // Substitua com os URLs das suas imagens
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 3000); // Muda a imagem a cada 4 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, [images.length]);

  return (
    <div
      className="slideshow"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    />
  );
}

export default ImageSlideshow;
