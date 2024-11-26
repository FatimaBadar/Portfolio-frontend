import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";

export default function ContactComponent() {
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
      .post("https://noorfatimaqureshi-api.vercel.app/contactMe", {EmailPayload})
      .then((response) => {
        console.log("Done", response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="grid" id="contact">
        <div className="col-6 left">
          <h2
            className="secondary-heading"
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
        <Card className="col-6 col-offset-0 contact-form shadow-2">
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

      {/* <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText
              id="firstname"
              value={firstname}
              onChange={(e) => setValue(e.target.value)}
            />
            </div> */}
    </>
  );
}
