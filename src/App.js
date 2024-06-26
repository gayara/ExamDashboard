import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import SubjectList from "./pages/CreateExam";

function App() {
  return (
    <>
      <Routes>
        <Route exact path={"/admin"} element={<AdminLayout />}>
          <Route exact path={"dashboard"} element={<Dashboard />}></Route>
          <Route exact path={"CreateExam"} element={<SubjectList />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
