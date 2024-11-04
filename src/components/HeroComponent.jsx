import React from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function HeroComponent() {
  const { ref, inView } = useInView({triggerOnce: true})

  return (
    <div className="hero" ref={ref} >
      <Card id="hero">
        <div className={`items ${inView ? 'hero-visible' : 'hero-hidden'}`}>
        <h1 className="main-heading item">
          FULL STACK
          <br />
          DEVELOPER
        </h1>
        <h2 className="secondary-heading item">
          Building Tomorrow’s
          <br />
          Solutions Today
        </h2>
        <p className="small-text item">Specializing in React.js and .NET</p>
        <div className="item card flex flex-wrap gap-3" id="hero-button">
          <Button id="contact-me" type="button" label="CONTACT ME" />
          <Button type="button" label="LINKEDIN" outlined />
        </div>
        </div>

      </Card>
    </div>
  );
}
