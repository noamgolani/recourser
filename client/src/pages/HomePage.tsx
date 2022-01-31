import React, { FC } from "react";

import {} from "react-query";
import { useGetAllResources } from "../queries";

const HomePage: FC = () => {
  const { isLoading, error, data } = useGetAllResources();
  return (
    <div className="page">
      <div className="container">
        {isLoading && <span>Loading...</span>}
        {!isLoading && error && (
          <span className="error"> {JSON.stringify(error)}</span>
        )}
        {!isLoading && data && <span> {JSON.stringify(data)}</span>}
      </div>
    </div>
  );
};

export default HomePage;
