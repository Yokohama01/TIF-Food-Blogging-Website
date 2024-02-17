import Button from "./Button";
import "../Css/AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="aboutUs_div">
        <img
          src="../../public/img/aboutUS1440.png"
          alt="#"
          className="aboutUsImg"
        />
        <div>
          <h1 className="aboutUsTitle">About US</h1>
          <p className="aboutUsDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            explicabo iusto delectus dolorum provident aliquam laudantium quos
            vitae ipsam. Delectus ea odio qui cumque deserunt laboriosam porro
            aperiam facilis dolore.
          </p>
          <Button title="Read More" width="150px" height="60px" />
        </div>
      </div>
    </>
  );
}
export default AboutUs;
