import "./App.scss";
import arrow from "./images/icon-arrow-down.svg";
import Data from "./Data";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <>
      <nav>
        <div className="logo">sunnyside</div>
        <div className="links">
          <a href="https://google.com/">About</a>
          <a href="https://google.com/">Services</a>
          <a href="https://google.com/">Projects</a>
          <a href="https://google.com/">Contact</a>
        </div>
      </nav>
      <header>
        <h1>We are creatives</h1>
        <img src={arrow} alt="arrow" />
      </header>
      <main>
        <Component1
          title={Data[0][0]}
          paragraph={Data[0][1]}
          flex={Data[0][2]}
        />

        <Component2 img={Data[1][0]} />
        <Component2 img={Data[2][0]} />
        <Component1
          title={Data[3][0]}
          paragraph={Data[3][1]}
          flex={Data[3][2]}
        />
        <Component3
          title={Data[4][0]}
          paragraph={Data[4][1]}
          img={Data[4][2]}
        />
        <Component3
          title={Data[5][0]}
          paragraph={Data[5][1]}
          img={Data[5][2]}
        />
      </main>

      <Testimonial />
      {/*   Learn more   Learn more     Client testimonials W        About Services Projects
      Contact */}
    </>
  );
}

export default App;
