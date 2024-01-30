import "./Header.scss";

export const Header = ({ func }) => {
  return (
    <>
      <header className="header">
        <div className="title__cont">
          <h1 className="title">Emoji Finder</h1>
          <h2 className="subTitle">Find emoji by keywords</h2>
        </div>
        <input
          onChange={(ev) => func(ev.target.value)}
          className="search"
          type="text"
          placeholder="placeholder"
        />
      </header>
    </>
  );
};
