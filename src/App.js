import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import ProjectPage from "./Pages/ProjectPages/ProjectPage";
import "./css/common.css";

function App() {
  return (
    <div style={{ background: "#f2f2f2", scrollBehavior: "initial" }}>
      <Routes>
        <Route path="/" element={<Index/>}/>
         
        <Route path="/project/:id" element={<ProjectPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
