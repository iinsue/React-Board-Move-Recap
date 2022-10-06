import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./sandbox/Board";
import Move from "./Move";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Board />} />
        <Route path={"/move"} element={<Move />} />
      </Routes>
    </Router>
  );
}

export default App;
