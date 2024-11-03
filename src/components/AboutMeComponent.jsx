import React, { useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from 'primereact/image';
        
export default function AboutMeComponent() {

  return (
    <div className="about-me">
      <Card>
        <div className="flex flex-column md:flex-row">
          <div className="w-full md:w-6 flex flex-column align-items-center justify-content-center gap-3 py-5 mr-5">
            <h2 className="secondary-heading" style={{fontWeight: 800}}>About Me</h2>
            <p className="github-linkedin">
              <a href="https://github.com/FatimaBadar">
                <i
                  className="pi pi-github"
                  style={{ color: "black", fontSize: "2.5rem" }}
                ></i>
              </a>
              <a href="https://www.linkedin.com/in/noor-fatima-qureshi">
                <i
                  className="pi pi-linkedin"
                  style={{ color: "#0077B5", fontSize: "2.5rem" }}
                ></i>
              </a>
            </p>

              <div class="about-section">
                <p>Location:</p>
                <p style={{paddingLeft: '19%'}}>New Zealand</p>
              </div>
              <div class="about-section">
                <p>Email:</p>
                <p style={{paddingLeft: '25%', overflowWrap: 'anywhere'}}>fatimabadarq@gmail.com</p>
              </div>
              <div class="about-section">
                <p>Phone:</p>
                <p  style={{paddingLeft: '22%'}}>+64 22 650 8069</p>
              </div>
              <div class="about-section">
                <p>Qualification:</p>
                <p style={{paddingLeft: '11%'}}>Bachelor's in Computer Science</p>
              </div>
              <div class="about-section">
                <p>Resume:</p>
                <p style={{paddingLeft: '20%'}}>
                <Button id="download-pdf" type="button" label="DOWNLOAD PDF" />
                </p>
              </div>
          </div>

          <div className="w-full md:w-6 flex flex-column align-items-center justify-content-center gap-5 py-5">
            <p className="short-intro">
              I’m a Full Stack Developer passionate about building efficient and
              impactful software solutions using modern technologies like React,
              .NET, and Azure. I love exploring new tools, and I’m constantly
              improving my skillset to stay ahead in the field.
            </p>
            <Image id="profile" src="./src/assets/Linkedin-profile.JPG" alt="Me" width="308"/>
          </div>
        </div>
      </Card>
    </div>
  );
}
