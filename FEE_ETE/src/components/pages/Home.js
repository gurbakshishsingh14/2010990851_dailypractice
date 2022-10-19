import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return (
    <>
      <div>
        <header className="masthead">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
              <h1 className="text-uppercase">The Garnet Society </h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                The Union College Student Alumni Association
              </h2>
              <a href="#about" className="btn btn-primary js-scroll-trigger">
                Learn More
              </a>
            </div>
          </div>
        </header>
        <section id="about" className="about-section text-center mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                <h2 className="text-black mb-3">
                  Working throughout the year to build relationships between
                  students and alumni.
                </h2>
                <hr className="accessory" />
                <p className="text-black-50">
                  The Union College Student Alumni Association, The Garnet
                  Society, is one of the largest student run organizations on
                  campus today. TGS is committed to connecting students to Union
                  College alumni and the larger community through a variety of
                  programs and events throughout the year. TGS acts as
                  ambassadors at Union College functions and help facilitate
                  student philanthropy efforts.{" "}
                </p>
                <div className="flex justify-content-center my-5">
                  <img
                    className="img col-lg-2 img-fluid unionicon"
                    src="https://i.postimg.cc/d1PsJ8kR/union.png"
                    alt=""
                  />{" "}
                  <img
                    className="img col-lg-3 img-fluid cresticon"
                    src="https://i.postimg.cc/Kc7zvs51/tgscrestinverted.png/"
                    alt=""
                  />
                </div>
                <p className="text-black-50">
                  TGS plays a huge role during major events hosted on campus by
                  The Office of Alumni & Parent Engagement & other divisions
                  within College Relations. Members of TGS also benefit from the
                  great leadership skills they learn, and they receive a behind
                  the scenes look at many of our top events. Members have the
                  opportunity to interact with an array of alumni and gain great
                  networking skills hosting alumni events as student
                  ambassadors.{" "}
                </p>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </>
  );
};

export default Home;
