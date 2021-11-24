import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/main.scss";

import CardComponent from "../src/components/CardComponent/CardComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
  const headerTitle = {
    title: "Insights",
  };

  const linkText = {
    text: "Learn More",
  };

  const cardContent = [
    {
      header: "Public information",
      body: "Bankruptcies and individual voluntary arrangements can damage your score",
      impact: "High Impact",
    },
    {
      header: "Credit utilisation",
      body: "Using more than 50% of your available credit can damage your score",
      impact: "Medium Impact",
    },
    {
      header: "Electoral roll",
      body: "Being on the electoral roll can improve your score",
      impact: "Medium Impact",
    },
  ];


  return (
    <div className="container">
      <div className="card-container">
        <HeaderComponent title={headerTitle.title} />
        <div className="card-row">
          <CardComponent
            header={cardContent[0].header}
            body={cardContent[0].body}
            impact={cardContent[0].impact}
            text={linkText.text}
          />
          <CardComponent
            header={cardContent[1].header}
            body={cardContent[1].body}
            impact={cardContent[1].impact}
            text={linkText.text}
          />
          <CardComponent
            header={cardContent[2].header}
            body={cardContent[2].body}
            impact={cardContent[2].impact}
            text={linkText.text}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
