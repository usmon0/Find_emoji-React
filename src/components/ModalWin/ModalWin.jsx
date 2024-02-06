import "./ModalWin.scss";

export const ModalWin = ({ e, func }) => {
  return (
    <div onClick={func} className="modalwin__cont">
      <div className="modal__win">
        <p>{e}</p>
      </div>
    </div>
  );
};
