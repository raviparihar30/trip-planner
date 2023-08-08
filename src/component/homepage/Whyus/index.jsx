import { Box, Container, Typography } from "@mui/material";
import "./index.css";

const WhyUs = (props) => {
  return (
    <Container className="why-section">
      <div className="why-img">
        <img src="img/why-choose-left-bg.ef1bd558.jpg" alt="" />
      </div>
      <div className="why-text-section">
        <h4>Our benefit lists</h4>
        <h1 className="fw-bold p-2">Why Choose Tevily</h1>
        <p className="p-2">
          There are many variations of passages of Lorem Ipsum is simply free
          text available in the market for you, but the majority have suffered
          alteration in some form.
        </p>
      </div>
    </Container>
  );
};

export default WhyUs;
