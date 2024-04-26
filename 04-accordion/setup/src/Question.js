import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Question = ({ title, info }) => {
  const [selectThis, setSelectThis] = useState(false);

  return (
    <article>
      <header>
        <h4>{title} </h4>
        <button className="btn" onClick={() => setSelectThis(!selectThis)}>
          {selectThis ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {selectThis && <p>{info}</p>}
    </article>
  );
};

export default Question;
