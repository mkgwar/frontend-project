import "./Testimony.scss";

const Testimony = ({ testimony, name, designation, src }) => {
  return (
    <div className="testimony">
      <img src={src} alt="face" />
      <p className="testimony__paragraph">{testimony}</p>
      <h2 className="testimony__name">{name}</h2>
      <p className="testimony__designation">{designation}</p>
    </div>
  );
};

export default Testimony;
