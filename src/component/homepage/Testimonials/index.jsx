import { Container, Typography } from "@mui/material";
import "./index.css";
import TestimonialCard from "./Testimonial-card";
import SimpleSlider from "../../structure/Slides";
import "./index.css";

const testimonialList = [{}, {}, {}, {}, {}, {}];

const Testimonials = (props) => {
  return (
    <Container className="testimonial-section testimonial-text py-5">
      <Typography variant="h5" className="heading">
        Testimonials & reviews
      </Typography>
      <Typography variant="h3" className="fw-bold" gutterBottom>
        What They’re Saying
      </Typography>

      <div className="">
        <SimpleSlider
          propsSettings={{
            slidesToShow: 3,
            autoplay: true,
          }}
        >
          {testimonialList.map((m) => (
            <TestimonialCard />
          ))}
        </SimpleSlider>
      </div>
    </Container>
  );
};
export default Testimonials;
