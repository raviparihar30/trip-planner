import { Typography } from "@mui/material";


import "./index.css";

const { default: PlaceCard } = require("./place-card");

const locations = [
  { src: "img/maheshwer.jpg", name: "Maheshwar" },
  { src: "img/Mandu-97-km.jpg", name: "Mandu" },
  { src: "img/rajwada_cover_1_700x367.jpg", name: "Rajwada" },
  { src: "img/omkareshwar.jpg", name: "Omkareshwar" },
  { src: "img/maheshwer.jpg", name: "Maheshwar" },
];

const Places = (props) => {
  return (
    <div className="location-section">
      <div className="location-text">
        <Typography gutterBottom variant="h5" className="heading" component="div">
          Destination lists
        </Typography>

        <Typography gutterBottom variant="h3" component="div" className="fw-bold">
          Go Exotic Places
        </Typography>
      </div>
      <div className="location-card-section">
        {locations.map((loc) => (
          <PlaceCard location={loc} />
        ))}
      </div>
    </div>
  );
};
export default Places;
