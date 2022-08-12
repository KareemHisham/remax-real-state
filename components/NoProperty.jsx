import Image from "next/image";
import resault from "../assets/images/noresult.svg";

const NoProperty = () => {
  return (
    <div className="text-center py-4">
      <div className="container">
        <Image src={resault} alt="resault" />
        <h4 className="text-capitalize mt-4">no resault found</h4>
      </div>
    </div>
  );
};

export default NoProperty;
