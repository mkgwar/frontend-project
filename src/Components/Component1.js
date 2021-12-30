import "./Component1.scss";

const Component1 = ({ title, paragraph, flex }) => {
  return (
    <div className={"component1" + " " + flex}>
      <div className="component1__text-content">
        <h2 className="component1__title">{title}</h2>
        <p className="component1__paragraph">{paragraph}</p>
        <a href="https://google.com">LEARN MORE</a>
      </div>
    </div>
  );
};

export default Component1;
