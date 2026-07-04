import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// const Home = React.lazy(() => import("./components/Home"));
import Communities from "./section1/Commitypage";
import Network from "./section2/Network";
import Corporate from "./section3/Corporate";
import Donationhero from "./section4/Donationhero";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/volunteers" element={<Network />} />
      <Route path="/corporate" element={<Corporate />} />
      <Route path="/donations" element={<Donationhero />} />
    </Routes>
  );
}

