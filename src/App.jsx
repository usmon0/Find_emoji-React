import "./App.scss";
import { Fotter } from "./components/Footer/Fotter";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { useEffect, useState } from "react";
import { objEmoji } from "./assets/Emoji/emojIco";
import { uniqalizeStr } from "./helpers/uniqalizeStr";
import { ModalWin } from "./components/ModalWin/ModalWin";
const list = document.querySelectorAll(
  'link[rel="icon"], link[rel="shortcut icon"]'
);

let randomFavicon = (obj) => {
  obj = Object.values(obj);
  let numRandom = Math.ceil(Math.random() * obj.length);
  return obj[numRandom];
};

list.forEach(function (element) {
  element.setAttribute("href", `${randomFavicon(objEmoji)}`);
});

function App() {
  const [inValue, setInValue] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectValue, setSelectValue] = useState("12");
  const [btnValue, setBtnValue] = useState("0");
  const [last, setLast] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const respose = await fetch(
          `http://api.codeoverdose.space/api/emoji?search=${inValue}&limit=${selectValue}&page=${btnValue}`
        );
        const obj = await respose.json();
        setData(obj.data);
        setLast(obj.lastPage);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [inValue, selectValue, btnValue]);

  function render(value) {
    setInValue(value);
  }

  const filterData = data.map((el) => (
    <Card
      emoji={el.symbol}
      name={el.title}
      description={uniqalizeStr(el.keywords)}
    />
  ));

  function renderWin() {
    setError("");
  }

  function select(value) {
    setSelectValue(value);
  }

  function btn(value) {
    setBtnValue(value - 1);
  }

  return (
    <>
      <Header func={render} />
      <main className="main">
        {loading ? (
          <div class="spinner">
            <span class="spinner-inner-1"></span>
            <span class="spinner-inner-2"></span>
            <span class="spinner-inner-3"></span>
          </div>
        ) : (
          <div className="cards__cont">{filterData}</div>
        )}
      </main>
      <Fotter
        lastPage={last}
        btnValue={btnValue + 1}
        func={select}
        btnFunc={btn}
        setBtnValue={setBtnValue}
      />
      {error && <ModalWin func={renderWin} e={String(error)} />}
    </>
  );
}

export default App;
