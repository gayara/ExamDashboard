import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import SubjectList from "./pages/CreateExam";
import ManageUser from "./pages/ManageUser/ManageUser";
import CreateMCQ from "./pages/ManageMCQ/CreateMCQ";
import ListOfMCQ from "./pages/ManageMCQ/ListOfMCQ";

function App() {
  return (
    <>
      <Routes>
        <Route exact path={"/admin"} element={<AdminLayout />}>
          <Route exact path={"dashboard"} element={<Dashboard />}></Route>
          <Route exact path={"CreateExam"} element={<SubjectList />}></Route>
            <Route exact  path={"User"} element={<ManageUser />}></Route>
            <Route exact  path={"Mcq"} element={<CreateMCQ />}></Route>
            <Route exact  path={"Mcq-list"} element={<ListOfMCQ />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
