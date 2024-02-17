import ReadMoreButton from "./ReadMoreButton";
import "../Css/SlideComponent.css";

function SlideComponent({ image, text }) {
  return (
    <>
      <div className="slideBorder">
        <img src={image} alt="#" />
        <h2>{text}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic dolorem
          non consequatur in aperiam aspernatur ullam nostrum veniam cum
          quibusdam, labore expedita, autem asperiores similique!
        </p>
        <ReadMoreButton />
      </div>
    </>
  );
}
export default SlideComponent;
