import "./Testimonial.scss";
import Testimony from "./Testimony";
import { data } from "../TestimonyData";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h2 className="testimonial__title">Client Testimonials</h2>
      <div className="testimonial__items">
        <Testimony
          testimony={data[0][0]}
          name={data[0][1]}
          designation={data[0][2]}
          src={data[0][3]}
        />
        <Testimony
          testimony={data[1][0]}
          name={data[1][1]}
          designation={data[1][2]}
          src={data[1][3]}
        />
        <Testimony
          testimony={data[2][0]}
          name={data[2][1]}
          designation={data[2][2]}
          src={data[2][3]}
        />
      </div>
    </div>
  );
};

export default Testimonial;
