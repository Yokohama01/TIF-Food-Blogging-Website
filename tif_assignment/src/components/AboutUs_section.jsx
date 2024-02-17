import Button from "./Button";
import "../Css/AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="aboutUs_div">
        <div>
          <h1 className="aboutUsTitle">About US</h1>
          <p className="aboutUsDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            explicabo iusto delectus dolorum provident aliquam laudantium quos
            vitae ipsam. Delectus ea odio qui cumque deserunt laboriosam porro
            aperiam facilis dolore.
          </p>
          <Button title="Read More" />
        </div>
      </div>
    </>
  );
}
export default AboutUs;
