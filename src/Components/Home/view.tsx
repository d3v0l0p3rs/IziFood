import React from "react";
import Column from "../Column/view";
import "./style.scss";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Column columnType="pending" />
      <Column columnType="cooking" />
      <Column columnType="ready" />
    </div>
  );
}
