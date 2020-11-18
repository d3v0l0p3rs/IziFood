import React from "react";
import Column from "../Column/view";
import "./styles.scss";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Column />
      <Column />
      <Column />
    </div>
  );
}
