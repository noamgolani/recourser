import React, { FC } from "react";
import { ResourceList } from "../components/ResourceList";

const HomePage: FC = () => {
  return (
    <div className="page">
      <div className="container">
        <ResourceList />
      </div>
    </div>
  );
};

export default HomePage;
