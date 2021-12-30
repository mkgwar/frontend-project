import "./Component3.scss";

const Component3 = ({ title, paragraph, img }) => {
  return (
    <div className="component3">
      <div className="component3__text-content">
        <h2 className="component3__title">{title}</h2>
        <p className="component3__paragraph">{paragraph}</p>
      </div>
      <img src={img} alt="grid" />
    </div>
  );
};

export default Component3;
