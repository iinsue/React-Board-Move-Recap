import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "./Input";
import Move from "./Move";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Input />} />
        <Route path={"/move"} element={<Move />} />
      </Routes>
    </Router>
  );
}

export default App;
