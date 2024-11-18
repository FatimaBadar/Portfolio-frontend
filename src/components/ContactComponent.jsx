import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";

export default function ContactComponent() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
            <br/>
            Fill out the form or
            email me at fatimabadarq@gmail.com
          </p>
        </div>
        <Card className="col-6 col-offset-0 contact-form shadow-2">
          <div className="flex flex-column gap-3 py-4">

            <div className="text-group">
              <div className="text-box">
                <label htmlFor="firstname">First name</label>
                <InputText
                required
                  id="firstname"
                  aria-describedby="firstname-help"
                  value={firstname}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div className="text-box">
                <label htmlFor="lastname">Last name</label>
                <InputText
                required
                  id="lastname"
                  aria-describedby="lastname-help"
                  value={lastname}
                  onChange={(e) => setValue(e.target.value)}
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
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>

              <div className="text-box">
                <label htmlFor="message">Message</label>
                <InputTextarea
                required
                  id="message"
                  value={message}
                  onChange={(e) => setValue(e.target.value)}
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
