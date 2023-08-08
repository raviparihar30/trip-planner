import { Box, Card, Typography,Rating } from "@mui/material";
import "./index.css";

const TestimonialCard=(props)=>{
    return (
        <Box className="testimonial-card-section">
            <Box className="card-image m-auto">
                <img src="img/testimonial-one-img-3.png" alt="" />
            </Box>
            <Card className="card-text-container">
                        <Rating name="read-only" value={5} readOnly />
                        <Typography variant="subtitle2" className="lh-lg fw-normal p-2">This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.</Typography>
       
                <Typography variant="h6" className="fw-bold " gutterBottom>Shirley Smith</Typography>
               <Typography variant="subtitle2" className="customer-name">Customer</Typography>
            </Card>
        </Box>
    );
}

export default TestimonialCard;