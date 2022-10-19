import React, { useEffect } from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    .container {
      text-align: left;

      .contact-form {
        max-width: 30rem;
        margin-left: 65%;
        margin-top: -42%;
      }

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      iframe {
        background-color: whitesmoke;
      }
    }
  `;

  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <Wrapper className="section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d110128.38019647067!2d76.7500464489617!3d30.3932156474972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665066476724!5m2!1sen!2sin"
        width="60%"
        height="525"
        title="Find us"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="#" className="contact-inputs">
            <h1>CONTACT US</h1>
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name"
              />
            </div>
            <div>
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                placeholder="Write your message here ..."
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                style={{
                  resize: "none",
                }}
              ></textarea>
            </div>

            <div className="inputBox">
              <input className="btn btn-primary" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;
