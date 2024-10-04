import Link from "next/link";
import Search from "../Search";
import Menu from "./Menu";

import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "@mui/material";

const Header1 = () => {
  const theme = useTheme();
  const matchesScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <header className="main-header  header-one  menu-white">
      {/*Header-Upper*/}
      <div className="header-upper bgc-black2">
        <div
          className="header-top-wrap bgc-gray"
          style={{ backgroundColor: "#0A1D56" }}
        >
          <Container >
            <div className="header-top">
              <ul>
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="$" style={{ color: "white" }}>
                    ##@gmail.com
                  </a>
                </li>

                <li>
                  <i className="far fa-phone" />{" "}
                  <a href="#" style={{ color: "white" }}>
                    +91 9######
                  </a>
                </li>

                <li>
                  <i className="far fa-tty" />{" "}
                  <a href="#" style={{ color: "white" }}>
                    044-#####
                  </a>
                </li>

                <li className="for-none" style={{ color: "white" }}>
                  <i className="far fa-clock" /> Working Hours : Mon - Fri, 9
                  AM to 6 PM
                </li>
                {/* <li>
                <div className="social-style-one">
                  <a href="#" style={{color:"white"}}>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" style={{color:"white"}}>
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" style={{color:"white"}}>
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" style={{color:"white"}}>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </li> */}
              </ul>
            </div>
          </Container>
        </div>
        {/* <div className={`${matchesScreen && "container"} clearfix`}></div> */}
        <Container>
          <div className="header-inner rel d-flex align-items-center">
            <div
              className="logo-outer"
              style={{
                backgroundColor: "white",
                position: "relative",
                left: "-264px",
                width: "420px",
              }}
            >
              <div className="logo" style={{ right: "-253px" }}>
                <Link legacyBehavior href="/index">
                  <a>
                    <img
                      src="assets/images/logos/ASK.png"
                      alt="Logo"
                      title="Logo"
                      style={{
                        maxHeight: "70px",
                      }}
                    />
                  </a>
                </Link>
              </div>
            </div>
            {/*             
            <div className="logo-outer" style={{ backgroundColor: "#F5F7F8",padding: '5px 30px' }}>
              <div className="logo">
                <Link legacyBehavior href="/index">
                  <a>
                    <img
                      src="assets/images/logos/ASK.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div> */}

            <div className="nav-outer mx-auto clearfix">
              {/* Main Menu */}
              <Menu />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            {/* <div className="nav-search py-10">
              <Search />
            </div> */}
            {/* Menu Button */}
            <div className="menu-btns">
              <Link legacyBehavior href="/contact">
                <a
                  className="theme-btn"
                  style={{ fontFamily: "roboto", whiteSpace: "nowrap" }}
                >
                  Hire A Developer <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header1;
