import Landingpage from "./pages/Landingpage";
import Loginscreen from "./pages/Loginscreen";
import Signupscreen from "./pages/Signupscreen";
import Profilescreen from "./pages/Profilescreen";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/loginscreen" element={<Loginscreen />} />
        <Route path="/signupscreen" element={<Signupscreen />} />
        <Route path="/profilescreen" element={<Profilescreen />} />
      </Routes>
    </div>
  );
}

export default App;
