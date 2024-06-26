import React, { useState } from "react";

export const Tour = ({ id, image, info, price, name, deleteTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 150)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "show more"}
        </button>
        <button className="delete-btn" onClick={() => deleteTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

//export default Tour;
