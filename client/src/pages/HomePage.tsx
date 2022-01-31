import React, { FC } from "react";
import { ResourceList } from "../components/ResourceList";

const HomePage: FC = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Resourcer</h1>
        <p>
          Find and share your the perfect resource for learning the new best
          technology
        </p>
        <ResourceList />
      </div>
    </div>
  );
};

export default HomePage;
