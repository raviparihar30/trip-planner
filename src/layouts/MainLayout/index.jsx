import Header from "../../component/structure/Header";

const MainLayout = ({ children }) => (
  <div className="container">
    <Header />
    {children}
  </div>
);

export default MainLayout;
