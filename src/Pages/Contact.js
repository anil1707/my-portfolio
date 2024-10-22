import React, { useEffect, useState } from "react";
import "../css/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAllFieldFilled, setIsAllFieldFilled] = useState(false);
  const [userData, setUserData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isMessageSend, setIsMessageSend] = useState(false);

  if (isMessageSend) {
    setTimeout(() => {
      setIsMessageSend(false);
    }, 5000);
  }

  useEffect(() => emailjs.init("10Jze-BGQEjhBK6t_"), []);
  const handleChange = (e) => {
    setIsAllFieldFilled(false);
    const { name, value } = e.target;
    setUserData(() => ({ ...userData, [name]: value }));
  };
  const handleSubmit = () => {
    if (userData.from_email && userData.from_name && userData.message) {
      setIsLoading(true);
      let serviceId = "service_de7tm37";
      let templateId = "template_hvvmh9l";
      emailjs
        .send(serviceId, templateId, userData)
        .then(() => {
          console.log("OK");
          setIsLoading(false);
          setUserData(() => ({ from_email: "", from_name: "", message: "" }));
          setIsMessageSend(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsAllFieldFilled(true);
    }
  };
  return (
    <div id="contact" className="main-container-contact">
      <div className="contact-container">
        <p className="contact-header">Contact</p>
        <div className="underline contact-underline"></div>
      </div>
      <div className="contact-form-super-container">
        <p className="contact-description">
          I’d love to hear from you! Whether you have a project in mind, a
          question, or just want to say hello, feel free to reach out. Let’s
          create something amazing together!
        </p>

        <div className="contact-form-parent-conatainer">
          <div className="contact-form-container">
            {isAllFieldFilled && (
              <div
                style={{
                  color: "red",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "20px" }}>&#9888;</span>
                <p>Please fill all the required filed!</p>
              </div>
            )}
            {isMessageSend && (
              <div style={{ padding: "10px", background: "#bdf2bd" }}>
                <p>Email send successfully!</p>
              </div>
            )}
            <div>
              <p className="label">
                Name<span style={{ color: "red" }}>*</span>
              </p>
              <input
                type="text"
                className="input-field"
                name="from_name"
                onChange={handleChange}
                value={userData.from_name}
              />
            </div>
            <div>
              <p className="label">
                Email<span style={{ color: "red" }}>*</span>
              </p>
              <input
                className="input-field"
                name="from_email"
                onChange={handleChange}
                value={userData.from_email}
              />
            </div>
            <div>
              <p className="label">
                Message<span style={{ color: "red" }}>*</span>
              </p>
              <textarea
                className="textarea-field"
                name="message"
                onChange={handleChange}
                value={userData.message}
              />
            </div>
            <button className="submit-btn" onClick={handleSubmit}>
              {!isLoading ? "Submit" : "Sending..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
