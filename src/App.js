import "./App.scss";
import arrow from "./images/icon-arrow-down.svg";
import Data from "./Data";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";

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
      </main>
      {/*   Learn more   Learn more Graphic design Great design makes
      you memorable. We deliver artwork that underscores your brand message and
      captures potential clients&#39; attention. Photography Increase your
      credibility by getting the most stunning, high-quality photos that improve
      your business image. Client testimonials We put our trust in Sunnyside and
      they delivered, making sure our needs were met and deadlines were always
      hit. Emily R. Marketing Director Sunnyside&#39;s enthusiasm coupled with
      their keen interest in our brand&#39;s success made it a satisfying and
      enjoyable experience. Thomas S. Chief Operating Officer Incredible end
      result! Our sales increased over 400% when we worked with Sunnyside.
      Highly recommended! Jennie F. Business Owner About Services Projects
      Contact */}
    </>
  );
}

export default App;
