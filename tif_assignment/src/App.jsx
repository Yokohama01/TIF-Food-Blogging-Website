import Top_Img from "./components/Top-Img";
import ExploreNow from "./components/ExploreNow-Section";
import AboutUs from "./components/AboutUs_section";
import Slide from "./components/SlideDiv";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="main">
        <Top_Img />
        <ExploreNow />
        <AboutUs />
        <Slide />
        <Footer />
      </div>
    </>
  );
}
export default App;
