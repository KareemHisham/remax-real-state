import millify from "millify";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { BaseURL, FetchData, options } from "../../Data/FetchAPI";
import { ImageScroller } from "../../components/CompContainer";
import Image from "next/image";
const PropertyID = ({
  propertyData: {
    id,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  console.log(photos);
  return (
    <section className="propertyDetails py-4">
      <div className="container">
        {photos && <ImageScroller photos={photos} />}
        <div className="detailsWrapper">
          <div className="propertyPrice d-flex align-items-center justify-content-between">
            <div>
              {isVerified && (
                <span className="icon text-success">
                  <GoVerified />
                </span>
              )}
              <span className="fw-bold">
                AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
              </span>
            </div>

            <Image
              src={agency?.logo?.url}
              alt="agency"
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="propertOptions text-info">
            {rooms}
            <FaBed className="me-2 ms-1" /> | {baths}{" "}
            <FaBath className="me-2 ms-1" /> | {millify(area)} sqft{" "}
            <BsFillGridFill className="me-2 ms-1" />
          </div>
          <div className="propertyDesc mt-2">
            <h4 className="text-capitalize">{title}</h4>
            <p className="text-muted lh-lg">{description}</p>
          </div>
          <div className="propertySpec">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="spec d-flex align-items-center justify-content-between mb-3">
                  <span className="text-muted">Type</span>
                  <span className="fw-bold text-capitalize">{type}</span>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="spec d-flex align-items-center justify-content-between mb-3">
                  <span className="text-muted">Purpose</span>
                  <span className="fw-bold text-capitalize">{purpose}</span>
                </div>
              </div>
              {furnishingStatus && (
                <div className="col-12 col-md-6">
                  <div className="spec d-flex align-items-center justify-content-between mb-3">
                    <span className="text-muted">Furnishing Status</span>
                    <span className="fw-bold text-capitalize">
                      {furnishingStatus}
                    </span>
                  </div>
                </div>
              )}
            </div>
            {amenities.length && (
              <div className="amenities py-3 d-flex align-items-center justify-content-start flex-wrap">
                {amenities.map((item) => {
                  return item.amenities.map((amenty) => {
                    return (
                      <span
                        className="badge text-bg-primary bg-opacity-10 text-primary mb-2 me-2"
                        key={amenty.externalID}
                      >
                        {amenty.text}
                      </span>
                    );
                  });
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyID;

export const getServerSideProps = async (context) => {
  const res = await FetchData(
    `${BaseURL}/properties/detail?externalID=${context.params.propertyID}`,
    options
  );
  return {
    props: {
      propertyData: res.data,
    },
  };
};
