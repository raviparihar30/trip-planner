import JournryForm from "../../component/common/journey-form";
import Banner from "../../component/homepage/Banner";
import Testimonials from "../../component/homepage/Testimonials";
import WhyUs from "../../component/homepage/Whyus";
import Places from "../../component/homepage/locations";
import MainLayout from "../../layouts/MainLayout";
import "./index.m.css";

const HomePage = () => {
  return (
    <MainLayout>
      <Banner />
      <JournryForm />
      <Places />
      <Testimonials />
      <WhyUs />
      Hello Home Page
    </MainLayout>
  );
};

export default HomePage;
