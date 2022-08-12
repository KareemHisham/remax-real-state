import Link from "next/link";
import Image from "next/image";
import millify from "millify";
import HomeStyle from "../styles/Home.module.css";
import defaultPhoto from "../assets/images/house.jpg";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    id,
  },
}) => {
  return (
    <div className="col-12 col-md-4">
      <Link href={`/property/${id}`} passHref>
        <a className="property-section text-decoration-none d-block mb-3">
          <div className="image">
            <Image
              src={coverPhoto ? coverPhoto.url : defaultPhoto}
              alt={title}
              width={400}
              height={260}
            />
          </div>
          <div className="property-content">
            <div className={HomeStyle.head}>
              <div className="d-flex">
                {isVerified && (
                  <span className="icon me-2 text-success">
                    <GoVerified />
                  </span>
                )}
                <span className={HomeStyle.price}>
                  AED {millify(price)}
                  {rentFrequency && `/${rentFrequency}`}
                </span>
              </div>
              <Image
                src={agency?.logo?.url}
                alt={agency.name}
                width={50}
                height={50}
                className={HomeStyle.logoImage}
                loading="lazy"
              />
            </div>
            <div className="specs">
              {rooms} <FaBed className="me-3" /> | {baths} <FaBath className="me-3" /> | {millify(area)} sqfr
              <BsFillGridFill />
            </div>
            <div className={`${HomeStyle.title} mt-3`}>
              {title.length > 50 ? `${title.substring(0, 30)}...` : title}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Property;
