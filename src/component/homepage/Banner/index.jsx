import SimpleSlider from "../../structure/Slides";
import "./index.css";

const bannerImage = [
  {
    src: "img/main-slider-1-2.4865c85b.jpg",
    title: "Travel & Adventure",
    subTitle: "Where Would You Like To Go?",
  },
  {
    src: "img/main-slider-1-3.fe6aff2e.jpg",
    title: "Travel & Adventure",
    subTitle: "Where Would You Like To Go?",
  },
];

const Banner = (props) => {
  return (
    <div className="w-100 mw-100">
      <SimpleSlider>
        {bannerImage.map((image) => (
          <>
            <img src={image.src} className={"banner-image"} alt="vghgvfhv" />
            <div className={"text"}>
              <h2>{image.title}</h2>
              <p>{image.subTitle}</p>
            </div>
          </>
        ))}
      </SimpleSlider>
    </div>
  );
};

export default Banner;
