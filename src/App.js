import Loginpage from "./Components/Loginpage";
import Home from "./Components/Home";
import { Route, Routes} from "react-router-dom";
import Forgotpassword from "./Components/Forgotpassword";
import Verifycode from "./Components/Verifycode";
import Newpassword from "./Components/Newpassword";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/loginpage' element={<Loginpage />} />
      <Route path='/forgotpassword' element={<Forgotpassword />} />
      <Route path='/verifycode' element={<Verifycode />} />
      <Route path='/verifyproceed' element={<Newpassword />} />
    </Routes>
  );
}

export default App;
