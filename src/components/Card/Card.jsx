import "./Card.scss";

export const Card = ({ emoji, name, description }) => {
  return (
    <>
      <article className="card">
        <p className="emoji">{emoji}</p>
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
      </article>
    </>
  );
};
