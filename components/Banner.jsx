import Image from "next/image";
import Link from "next/link";
import banner from "../styles/Banner.module.css";
const Banner = ({ imgURL, title, subtitle, url, urlTitle, description }) => {
  return (
    <div className={banner.banner}>
      <div className={banner.bannerWrapper}>
        <Image
          src={imgURL}
          alt="flat-img"
          width={400}
          height={300}
          className="me-3"
        />
        <div className="banner-content text-capitalize">
          <h6 className="title">{title}</h6>
          <div className="subtitle text-muted mb-2">{subtitle}</div>
          <div className="description mb-2">{description}</div>
          <Link href={url} passHref>
            <a className="btn btn-info btn-sm text text-white">{urlTitle}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
