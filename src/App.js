import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
        <h3 className="text-center mt-6">
          Crud Oparation with Tailwind, React & Axios js
        </h3>
        <Routes>
          <Route exact path="/" element={<Read />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
