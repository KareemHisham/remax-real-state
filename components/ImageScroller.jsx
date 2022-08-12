import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const ImageScroller = ({ photos }) => {
  return (
    <Carousel>
      {photos.map((photo) => {
        return (
          <Image
            key={photo.id}
            width={1000}
            height={500}
            placeholder="blur"
            src={photo.url}
            blurDataURL={photo.url}
            alt={photo.title}
            loading="lazy"
          />
        );
      })}
    </Carousel>
  );
};

export default ImageScroller;
