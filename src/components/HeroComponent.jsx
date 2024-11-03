import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function HeroComponent() {
  return (
    <div className="hero">
      <Card>
        <h1 className="main-heading">
          FULL STACK
          <br />
          DEVELOPER
        </h1>
        <h2 className="secondary-heading">
          Building Tomorrow’s
          <br />
          Solutions Today
        </h2>
        <p className="small-text">Specializing in React.js and .NET</p>
        <div className="card flex flex-wrap gap-3" id="hero-button">
          <Button id="contact-me" type="button" label="CONTACT ME" />
          <Button type="button" label="LINKEDIN" outlined />
        </div>
      </Card>
    </div>
  );
}
