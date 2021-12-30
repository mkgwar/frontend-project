import "./ImageFooter.scss";
import img1 from "../images/desktop/image-gallery-milkbottles.jpg";
import img2 from "../images/desktop/image-gallery-orange.jpg";
import img3 from "../images/desktop/image-gallery-cone.jpg";
import img4 from "../images/desktop/image-gallery-sugarcubes.jpg";

const ImageFooter = () => {
  return (
    <div className="images">
      <div className="xyz1">
        <img src={img1} alt="footer" />
        <img src={img2} alt="footer" />
        <img src={img3} alt="footer" />
        <img src={img4} alt="footer" />
      </div>
      <div className="xyz2">
        <img src={img1} alt="footer" />
        <img src={img2} alt="footer" />
        <img src={img3} alt="footer" />
        <img src={img4} alt="footer" />
      </div>
    </div>
  );
};

export default ImageFooter;
