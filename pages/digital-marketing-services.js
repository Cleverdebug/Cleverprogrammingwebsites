import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Nav, Tab } from "react-bootstrap";
import {
  Chip,
  Container,
  Divider,
  Grid,
  Button,
  Dialog,
  DialogContent,
  TextField,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import { FaBoxes } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaUserTag } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuMonitorDot } from "react-icons/lu";
import { TbBulb } from "react-icons/tb";
import { SiLinkerd } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { RiFocus2Line } from "react-icons/ri";
import { TbLayersLinked } from "react-icons/tb";
import { SlLike } from "react-icons/sl";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ContactUsProduct from "./ContactUsProduct";

const Services = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [submitted, setsubmitted] = useState(false);
  const router = useRouter();

  
  useEffect(() => {

    setTimeout(() => {
      setOpen(true);
    }, [7000]);

  }, []);
  
  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("/api/Enquiry/ProductEnquiry", values);
      console.log("Form submitted successfully:", response.data);
      setOpen(false);
      Swal.fire({
        title: "Thank you!",
        text: "Your service request has been submitted successfully. Our team will get back to you shortly.",
        icon: "success",
        confirmButtonText: "Done",
      }).then((result) => {
        if (result.isConfirmed) {
          resetForm();
        }
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error submitting form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageBanner pageName={"Digital Marketing Services "} />
      {/* <div className="sticky-button-container">
        <Button
          onClick={handleButtonClick}
          variant="contained"
          color="warning"
          className="sticky-button headShake "
        >
          Quick Enquiry
        </Button>
      </div> */}
      {/* mobile-services*/}
      <section className="about-area-two py-50 rel z-1">
        <Container>
          <div className="row align-items-center gap-90">
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Our Services</span>
                  <h2>Digital Marketing Services </h2>
                </div>
                <p>
                  At Ask Technology, we offer comprehensive digital marketing
                  solutions to help businesses maximize their online presence,
                  drive targeted traffic, and achieve measurable results. From
                  Google Ads and social media advertising to search engine
                  optimization (SEO) and performance marketing, our services are
                  designed to enhance brand visibility, generate leads, and
                  increase conversions across various digital channels.
                </p>

                <div className="about-btns py-3">
                  <Link legacyBehavior href="#callback">
                    <a className="theme-btn style-three mt-15">
                      Get a Call Back <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-image rel z-1 rmb-65 wow fadeInRight delay-0-2s">
                <img src="assets/images/services/digital.png" alt="About" />
                {/* <div className="bg-circle-shape" /> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* About Area end */}

      {/* Services Area Two start */}
      <section className="services-area-two py-50 rel z-2">
        <Container maxWidth={"lg"}>
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Our Services</span>
            {/* <h2>Mobile App Solutions</h2> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/gads.png" alt="Service" />
                </div>
                <div className="content">
                  <h4 className="title text-center">
                    <span style={{ color: "#068FFF" }}>Google Ads </span>{" "}
                    Network
                  </h4>
                  <p className="text-center">
                    Utilize the power of Google Ads to reach your target
                    audience with precision targeting, compelling ad creatives,
                    and strategic bidding strategies. Our Google Ads experts
                    optimize campaigns to maximize ROI and drive qualified
                    traffic to your website.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/ads.png" alt="Service" />
                </div>
                <div className="content">
                  <h4 className="title text-center">
                    <span style={{ color: "#7E97A6" }}>Social Media</span> Ads
                  </h4>
                  <p className="text-center">
                    Engage with your audience on popular social media platforms
                    through targeted advertising campaigns. From Facebook and
                    Instagram to LinkedIn and Twitter, we create and manage ads
                    that resonate with your audience, drive engagement, and
                    increase brand awareness.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/seo.png" alt="Service" />
                </div>
                <div className="content">
                  <h4 className="title text-center">
                    <span style={{ color: "#008DDA" }}>SEO </span> Optimization
                  </h4>
                  <p className="text-center">
                    Improve your website's visibility and organic search
                    rankings with our SEO services. Our SEO experts conduct
                    comprehensive keyword research, optimize on-page and
                    off-page elements, and implement strategic tactics to boost
                    your website's authority and drive organic traffic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/ppc.png" alt="Service" />
                </div>
                <div className="content">
                  <h4 className="title text-center">
                    {" "}
                    <span style={{ color: "#5356FF" }}>
                      Pay-Per-Click (PPC){" "}
                    </span>
                    Advertising
                  </h4>
                  <p className="text-center">
                    Drive immediate results with PPC advertising campaigns that
                    target high-intent keywords and audiences. Our PPC
                    specialists create customized campaigns across Google, Bing,
                    and other platforms to generate qualified leads and maximize
                    your advertising budget.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/marketing.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title text-center">
                    <span style={{ color: "#7E97A6" }}>Performance </span>
                    Marketing
                  </h4>
                  <p className="text-center">
                    Leverage data-driven insights and analytics to optimize your
                    digital marketing campaigns for maximum performance. Our
                    performance marketing strategies focus on continuous
                    monitoring, testing, and refinement to ensure that your
                    campaigns deliver the best possible results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Services Area Two end */}

      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area py-50 rel z-1">
        <Container>
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15 new-font-play">
                  Why Choose Ask Technology
                </span>
                <h5 className="my-4">
                  At Ask Technology, we understand that the right technology
                  partner can make all the difference. Here's why we stand out
                  in the crowded tech landscape
                </h5>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"wc-tap1"}>
            <div className="why-choose-tab">
              <Nav
                as={"ul"}
                className="nav nav-pills nav-fill mb-20 rmb-50 wow fadeInUp delay-0-4s"
              >
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap1"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap1"
                  >
                    <TbBulb className="nav-icons" />
                    <span>Innovation</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap2"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap2"
                  >
                    <SiLinkerd className="nav-icons" />
                    <span>Tailoring</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap3"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap3"
                  >
                    <LuBrainCircuit className="nav-icons" />
                    <span>Expertise</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap4"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap4"
                  >
                    <RiFocus2Line className="nav-icons" />
                    <span>Client-Centric</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap5"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap5"
                  >
                    <TbLayersLinked className="nav-icons" />
                    <span>End-to-End</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap6"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap6"
                  >
                    <SlLike className="nav-icons" />
                    <span>Excellence</span>
                  </Nav.Link>
                </li>
              </Nav>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap1">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-4">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/Deconstructed.png"
                          alt="Why Choose"
                          className="why-choose-img "
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Innovation at the Core
                        </h3>
                        <p>
                          Our commitment to innovation drives everything we do.
                          From developing cutting-edge solutions to adopting the
                          latest technologies, we ensure your business stays
                          ahead in a rapidly evolving digital landscape
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Strategic UI/UX Assessment</li>
                          <li>
                            Thorough Contextual Research and 360° Planning
                          </li>
                          <li>
                            Advanced Wireframing &amp; Prototyping Techniques
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap2">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Tailored Solutions, Every Time
                        </h3>
                        <p>
                          Our approach is personalized to fit your specific
                          requirements. We delve deep into understanding your
                          business intricacies to provide tailor-made solutions
                          that perfectly match your objectives. No cookie-cutter
                          approaches here – just bespoke strategies for your
                          success.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Customized Strategy Development</li>
                          <li>Thorough Needs Analysis and Consultation</li>
                          <li>Personalized Product Development</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/technology.png"
                          alt="Why Choose"
                          // className="why-choose-img"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap3">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-4">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/expert.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Proven Expertise
                        </h3>
                        <p>
                          With years of experience in IT technology services, we
                          bring a wealth of expertise to the table. Our team of
                          skilled professionals is dedicated to delivering
                          solutions that not only meet but exceed expectations
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Decades of IT Technology Services Experience</li>
                          <li>In-depth Industry Expertise and Insight</li>
                          <li>Commitment to Exceeding Client Expectations</li>
                        </ul>

                        {/* <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap4">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Client-Centric Approach
                        </h3>
                        <p>
                          Your success is our priority. We pride ourselves on
                          our client-centric approach, ensuring open
                          communication, transparency, and a collaborative
                          partnership. Your challenges are our challenges, and
                          your victories are our victories.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Commitment to Prioritizing Your Success</li>
                          <li>
                            Emphasis on Open Communication and Transparency
                          </li>
                          <li>Building Collaborative Partnerships</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/excellence.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap5">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-4">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/End-to-End.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          End-to-End Services
                        </h3>
                        <p>
                          From web and mobile app development to ready-to-go ERP
                          products and technology training, we offer end-to-end
                          services. This holistic approach ensures that all your
                          technology needs are met under one roof.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive Web and Mobile App Development</li>
                          <li>Ready-to-Deploy ERP Solutions</li>
                          <li>Technology Training and Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap6">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Commitment to Excellence
                        </h3>
                        <p>
                          Excellence is not just a goal; it's a standard. We are
                          committed to delivering solutions that not only meet
                          high-quality benchmarks but set new standards in the
                          industry. Your success story is our measure of
                          success.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Setting High-Quality Standards</li>
                          <li>Pioneering Industry-Leading Solutions</li>
                          <li>Your Success Drives Our Pursuit of Excellence</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/Commitment.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </Container>
        <div className="why-choose-shapes">
          <img
            className="shape one"
            src="assets/images/about/why-choose-shape1.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/about/why-choose-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Why Choose Us Area end */}

      {/* Partners Area start */}
      <section className="partners-area  py-50 rel z-1">
        <div>
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            {/* <span className="sub-title mb-15">Global Partners</span> */}
            <h2 className="text-gradient-title2">Our Partners</h2>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <Marquee
              direction="right"
              pauseOnHover
              gradient={100}
              loop={0}
              autoFill
            >
              <div>
                <img
                  src="assets/images/clients/1.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div>
                <img
                  src="assets/images/clients/2.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div>
                <img
                  src="assets/images/clients/3.webp"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div>
                <img
                  src="assets/images/clients/4.webp"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div>
                <img
                  src="assets/images/clients/5.jpg"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div>
                <img
                  src="assets/images/clients/6.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div>
                <img
                  src="assets/images/clients/7.jpg"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div>
                <img
                  src="assets/images/clients/8.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div>
                <img
                  src="assets/images/clients/9.jpg"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      {/* Partners Area end */}
      {/* Work Process Area start */}
      <section className="work-process-area py-50 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Discover</h4>
                  <p>
                    From your idea to our understanding, we dive deep to shape
                    the plan
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Planning</h4>
                  <p>
                    With clarity in mind, we map out every detail for seamless
                    execution
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Design &amp; Dev</h4>
                  <p>
                    Bringing ideas to life with precision in design and
                    development
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Testing</h4>
                  <p>
                    Ensuring perfection through rigorous testing for flawless
                    performance
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Project Delivery</h4>
                  <p>
                    From final touches to delivery, we ensure excellence every
                    step of the way
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="hero-area-two bgs-cover"
        style={{ backgroundImage: "url(assets/images/hero/hero-two.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="hero-content-two pt-50 pb-50 rpt-115 rpb-65 wow fadeInUp delay-0-4s">
                <h1>Industries we serve</h1>
                <span className="sub-title">
                  Explore our diverse clientele across various industries, from
                  healthcare and finance to retail and manufacturing. Our
                  tailored solutions cater to the unique needs of each sector,
                  driving innovation, efficiency, and growth for businesses
                  worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row justify-content-center pb-50">
            <Marquee
              direction="right"
              pauseOnHover
              // gradient={100}
              loop={0}
              autoFill
            >
              {/* <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img
                    src="assets/images/services/sewing-machine.png"
                    alt="Icon"
                    className="industries-icon"
                  />
                </div>
                <h5>
                  
                    Garments
                  </Link>
                </h5>
              </div>
            </div> */}
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/manufacture.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>Manufacturing</h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/online-marketing.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>E-commerce</h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/patient.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>Healthcare</h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/seller.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>Retail</h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/wholesaler.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>Wholesale</h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/logistics.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>Logistics</h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/hotel.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>Hospitality</h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/vacation.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>Travel</h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/car-services.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>Automotive</h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/invesment.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>Financial</h5>
                </div>
              </div>
            </Marquee>
          </div>
        </div>

        <div className="hero-shapes-two">
          <img src="assets/images/hero/hero-bg-lines.png" alt="BG Lines" />
        </div>
      </section>

      <ContactUsProduct TypeOF={"s"} initialValue={"DigitalMarketing"} />
    </Layout>
  );
};
export default Services;
