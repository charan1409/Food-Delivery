import React,{ useContext } from "react";
import { foodstore } from "../../../App";
import Product from "../../Product/Product";
import "./ServiceHome.css";

const ServiceHome = () => {
  const {gallery} = useContext(foodstore);

  return (
    <div>
      <div className="gallery">
        <h1>Gallery</h1>
        {gallery.length > 1 ? (
          <div className="grids">
            {gallery.map((pd) => (
              <Product key={pd.id} product={pd}></Product>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ServiceHome;
