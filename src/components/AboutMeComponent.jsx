import React from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from 'primereact/image';

export default function AboutMeComponent() {
    const { ref, inView } = useInView({threshold: 0.2, triggerOnce: true });
  
  return (
    <div className="about-me" ref={ref} id="aboutme">
      <Card className={`${inView ? 'about-visible' : 'about-hidden'}`}>
        <div className="flex flex-column md:flex-row">
          <div className="about-item w-full md:w-6 flex flex-column align-items-center justify-content-center gap-3 py-5 mr-5">
            <h2 className="secondary-heading" style={{fontWeight: 800}}>About Me</h2>
            <p className="github-linkedin">
              <a href="https://github.com/FatimaBadar">
                <i
                  className="pi pi-github"
                  style={{ color: "white", fontSize: "2.5rem" }}
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
                <p  style={{paddingLeft: '23%'}}>+64 22 650 8069</p>
              </div>
              <div class="about-section">
                <p>Qualification:</p>
                <p style={{paddingLeft: '10%'}}>Bachelor's in Computer Science</p>
              </div>
              <div class="about-section">
                <p>Resume:</p>
                <p style={{paddingLeft: '20%'}}>
                  <a href="Resume.pdf" download="Resume.pdf">
                <Button id="inner-button" 
                onClick={() =>  window.open('Resume.pdf')}               
                icon="pi pi-download" label="DOWNLOAD PDF" />
                </a></p>
              </div>
          </div>

          <div className="about-item w-full md:w-6 flex flex-column align-items-center justify-content-center gap-5 py-5">
            <p className="short-intro">
              I’m a Full Stack Developer passionate about building efficient and
              impactful software solutions using modern technologies like React,
              .NET, and Azure. I love exploring new tools, and I’m constantly
              improving my skillset to stay ahead in the field.
            </p>
            <Image id="profile" src="/Linkedin-profile1.WebP" alt="Me" width="308"/>
          </div>
        </div>
      </Card>
    </div>
  );
}