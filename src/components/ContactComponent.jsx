import React, { useState, useRef } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from 'primereact/toast';
import axios from "axios";
import { useInView } from "react-intersection-observer";
const server = import.meta.env.VITE_SERVER_URL;


export default function ContactComponent() {
  const { ref, inView } = useInView({threshold: 0.2, triggerOnce: true });
  const toast = useRef(null);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SubmitContactForm = async (e) => {
    e.preventDefault();
    const EmailPayload = {
      firstname,
      lastname,
      email,
      message,
    };

    await axios
      .post(`${server}/api/contactMe`, {EmailPayload})
      .then((response) => {
        console.log("Done", response.data);
        showSuccess()
      })
      .catch((error) => {
        console.log(error.message);
        showError(error.message);
      });
  };
 
  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail: "Email sent successfully", life: 3000});
  }

  const showError = (message) => {
    toast.current.show({severity:'error', summary: 'Error', detail: message, life: 3000});
  }

  return (
    <div ref={ref} id="contact">
      <Toast ref={toast}/>
      <div className={`grid ${inView ? 'about-visible' : 'about-hidden'}`}>
        <div className="about-item col-6 left">
          <h2
            className="about-item secondary-heading"
            style={{
              fontWeight: 900,
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            Contact Me
          </h2>
          <p className="small-text-contact">
            Need to get in touch with me?
            <br />
            Fill out the form or email me at fatimabadarq@gmail.com
          </p>
        </div>
        <Card className="about-item col-6 col-offset-0 contact-form shadow-2">
          <div className="flex flex-column gap-3 py-4">
            <form onSubmit={SubmitContactForm}>
              <div className="text-group">
                <div className="text-box">
                  <label htmlFor="firstname">First name</label>
                  <InputText
                    required
                    id="firstname"
                    aria-describedby="firstname-help"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="text-box">
                  <label htmlFor="lastname">Last name</label>
                  <InputText
                    required
                    id="lastname"
                    aria-describedby="lastname-help"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>

              <div className="text-box">
                <label htmlFor="email">Email</label>
                <InputText
                  required
                  id="email"
                  type="email"
                  aria-describedby="email-help"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="text-box">
                <label htmlFor="message">Message</label>
                <InputTextarea
                  required
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  cols={30}
                />
              </div>

              <Button
                raised
                id="submit-contact"
                label="Submit"
                icon="pi pi-envelope"
                className="w-12rem"
              ></Button>
            </form>
          </div>
        </Card>
        </div>
      </div>
    // </>
  );
}
