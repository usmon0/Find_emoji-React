import React from "react";

export const Button = ({ func, text, classN, btnValue }) => {
  return (
    <>
      <button
        className={text == btnValue ? "bntClicked page" : "page"}
        onClick={() => func(text)}
      >
        {text}
      </button>
    </>
  );
};
