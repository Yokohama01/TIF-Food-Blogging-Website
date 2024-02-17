import "../Css/ExploreNow.css";
import Button from "./Button";

function ExploreNow() {
  return (
    <>
      <div className="explore-div">
        <div className="explore-title">
          <h1>
            Discover the <br />
            <span>Best</span> Food and <br />
            Drinks
          </h1>
        </div>
        <p className="explore-description">
          Naturally made Healthcare Products for the <br />
          better care & support of your body.
        </p>
        <Button title="Explore Now!" />
      </div>
    </>
  );
}

export default ExploreNow;
