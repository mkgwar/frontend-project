import "./App.scss";
import arrow from "./images/icon-arrow-down.svg";

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
      {/* Transform your brand We are a full-service creative agency specializing in
      helping brands grow fast. Engage your clients through compelling visuals
      that do most of the marketing for you. Learn more Stand out to the right
      audience Using a collaborative formula of designers, researchers,
      photographers, videographers, and copywriters, we&#39;ll build and extend
      your brand in digital places. Learn more Graphic design Great design makes
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
