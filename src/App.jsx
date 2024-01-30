import "./App.scss";
import { Fotter } from "./components/Footer/Fotter";
import { Header } from "./components/header/Header";
import { data } from "./assets/Emoji/emoji";
import { Card } from "./components/Card/Card";
import { useState } from "react";
import { objEmoji } from "./assets/Emoji/emojIco";
import { uniqalizeStr } from "./helpers/uniqalizeStr";
var list = document.querySelectorAll(
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

  function render(value) {
    setInValue(value);
  }

  const filteredData = data
    .filter(
      (el) =>
        el.keywords.toLowerCase().includes(inValue.trim().toLowerCase()) ||
        el.title.toLowerCase().includes(inValue.trim().toLowerCase())
    )
    .map((el) => (
      <Card emoji={el.symbol} name={el.title} description={uniqalizeStr(el.keywords)} />
    ));

  return (
    <>
      <Header func={render} />
      <main className="main">
        <div className="cards__cont">{filteredData}</div>
      </main>
      <Fotter />
    </>
  );
}

export default App;
