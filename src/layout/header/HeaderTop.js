import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="header-top-wrap bg-primary">
      <div className="container-fluid">
        <div className="header-top">
          <div className="container">
            <div className="header-top">
              <ul>
                <li>
                  <i className="far fa-envelope" style={{ color: "white" }} />{" "}
                  <a
                    href="#"
                    style={{ color: "white", fontSize: "small" }}
                  >
                    ##@gmai.com
                  </a>
                </li>

                <li>
                  <i className="far fa-phone" style={{ color: "white" }} />{" "}
                  <a
                    href="#"
                    style={{ color: "white", fontSize: "small" }}
                  >
                    +91 #######
                  </a>
                </li>

                <li>
                  <i className="far fa-tty" style={{ color: "white" }} />{" "}
                  <a
                    href="#"
                    style={{ color: "white", fontSize: "small" }}
                  >
                    044-#####
                  </a>
                </li>

                {/* <li className="for-none" style={{ color: "white" }}>
                  <i className="far fa-clock" /> Working Hours : Mon - Sat, 10
                  AM to 7 PM
                </li> */}
                <li>
                  <div className="social-style-one">
                    <a
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
