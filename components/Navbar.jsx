import Link from "next/link";
import { useState } from "react";
import NavbarStyle from "../styles/navbar.module.css";
import { GoThreeBars, GoHome, GoSearch } from "react-icons/go";
import { AiOutlineKey, AiOutlineDollar } from "react-icons/ai";
const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const showMenu = () => {
    setIsShow(!isShow);
  };
  const listData = [
    {
      name: "home",
      icon: <GoHome />,
      link: "/",
    },
    {
      name: "search",
      icon: <GoSearch />,
      link: "/search",
    },
    {
      name: "buy property",
      icon: <AiOutlineDollar />,
      link: "/search?purpose=for-sale",
    },
    {
      name: "rent property",
      icon: <AiOutlineKey />,
      link: "/search?purpose=for-rent",
    },
  ];
  return (
    <nav
      className={`${NavbarStyle.myNav} p-3 border-bottom border-muted d-flex justify-content-between align-items-start`}
    >
      <div className={NavbarStyle.brand}>
        <h3 className="text-capitalize">
          <Link href="/">
            <a className="text-decoration-none" style={{ color: "#2C3639" }}>
              remax
            </a>
          </Link>
        </h3>
      </div>
      <div className={`${NavbarStyle.list}`}>
        <span
          className={`${NavbarStyle.bars} text-muted border border-muted rounded`}
          onClick={showMenu}
        >
          <GoThreeBars />
        </span>
        {isShow && (
          <ul className={`${NavbarStyle.listItems} list-unstyled`}>
            {listData.map((item) => {
              return (
                <li
                  key={item.name}
                  className={`${NavbarStyle.listLink} d-flex`}
                >
                  <Link href={item.link} passHref>
                    <a className={`text-decoration-none ${NavbarStyle.link}`}>
                      <span className="icon me-3">{item.icon}</span>
                      <span className="name text-capitalize">{item.name}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
