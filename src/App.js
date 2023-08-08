import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AllRoutes } from "./routes";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
