import { Banner, Property } from "../components/CompContainer";
import { BaseURL, FetchData, options } from "../Data/FetchAPI";
import HomeStyle from "../styles/Home.module.css";
const Home = ({ propertyForSale, propertyForRent }) => {
  return (
    <div className="home-section">
      <Banner
        title="rent a home"
        subtitle="Rental homes for everyone"
        description="Explore apartments, villas, homes, and more"
        url="/search?purpose=for-rent"
        urlTitle="explore renting"
        imgURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <div className={HomeStyle.saleSection}>
        <div className="container">
          <div className="row">
            {propertyForSale.map((property) => (
              <Property property={property} key={property.id} />
            ))}
          </div>
        </div>
      </div>
      <Banner
        title="buy a home"
        subtitle="find, buy &amp; own your dream house"
        description="Explore apartments, villas, homes, and more"
        url="/search?purpose=for-sale"
        urlTitle="explore buying"
        imgURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <div className={HomeStyle.rentSection}>
        <div className="container">
          <div className="row">
            {propertyForRent.map((property) => (
              <Property property={property} key={property.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const resForSale = await FetchData(
    `${BaseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`,
    options
  );
  const resForRent = await FetchData(
    `${BaseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`,
    options
  );

  return {
    props: {
      propertyForSale: resForSale.data.hits,
      propertyForRent: resForRent.data.hits,
    },
  };
};
