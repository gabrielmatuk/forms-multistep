import { AiOutlineUser, AiOutlineStar, AiOutlineSend } from "react-icons/ai";

import React from "react";
import "./Steps.css";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        Identificação
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        Avaliação
      </div>
      <div className= {`step ${currentStep >= 2 ? "active" : ""}`}>
        <AiOutlineSend />
        Envio
      </div>
    </div>
  );
};

export default Steps;
