import { Routes, Route } from "react-router-dom";
import * as pages from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<pages.Home />} />
      <Route path="/about" element={<pages.About />} />
    </Routes>
  );
}

export default App;
