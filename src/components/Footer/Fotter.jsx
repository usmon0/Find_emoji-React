import { useState } from "react";
import { Button } from "../Button/Button";
import "./Fotter.scss";

export const Fotter = ({ func, btnFunc, btnValue, lastPage, setBtnValue }) => {
  let arrButton = [1, 2, 3, 4, 5];

  if (btnValue > 3) {
    arrButton = [
      btnValue - 2,
      btnValue - 1,
      btnValue,
      Number(btnValue) + 1,
      Number(btnValue) + 2,
    ];
  }

  if (btnValue > lastPage - 3) {
    arrButton = [
      lastPage - 3,
      lastPage - 2,
      lastPage - 1,
      lastPage,
      Number(lastPage) + 1,
    ];
  }
  switch (lastPage) {
    case 3:
      arrButton = [1, 2, 3, 4];
      break;
    case 2:
      arrButton = [1, 2, 3];
      break;
    case 1:
      arrButton = [1, 2];
      break;
    case 0:
      arrButton = [1];
      break;
    case -1:
      arrButton = [];
      break;
  }

  console.log(lastPage);

  return (
    <>
      <footer className="footer">
        <div className="outCont">
          <div className="container">
            <div className="pages">
              <button
                disabled={btnValue == 1}
                onClick={() => btnFunc(1)}
                className="page first"
              >
                first
              </button>
              {arrButton.map((el) => (
                <Button btnValue={btnValue} func={btnFunc} text={el} />
              ))}
              <button
                disabled={btnValue == lastPage + 1}
                onClick={() => btnFunc(lastPage + 1)}
                className="page last"
              >
                <p>last</p>
              </button>
            </div>
            <select
              onChange={(e) => {
                func(e.target.value);
                setBtnValue(0);
              }}
              name=""
              id=""
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
          </div>
        </div>
      </footer>
    </>
  );
};
