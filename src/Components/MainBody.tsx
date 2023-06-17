import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Workouts from "../Pages/Workouts";
import EatRight from "../Pages/EatRight";
import Signin from "../Pages/Signin";
//import Recipes from "./Recipes";

export default function MainBody() {
  return (
    <div className="m-0 p-0">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/eatright" element={<EatRight />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/recipes" element={<Recipes />} /> */}
      </Routes>
    </div>
  );
}
