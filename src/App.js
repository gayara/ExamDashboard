import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import SubjectList from "./pages/CreateExam";
import ManageUser from "./pages/ManageUser/ManageUser";
import CreateMCQ from "./pages/ManageMCQ/CreateMCQ";
import ListOfMCQ from "./pages/ManageMCQ/ListOfMCQ";
import CreateQuestion from "./pages/ManageMCQ/CreateQuestion";
import ManageBookmark from "./pages/ManageBookmark/ManageBookmark";
import Test from "./pages/Test/Test";

function App() {
  return (
    <>
      <Routes>
        <Route exact path={"/admin"} element={<AdminLayout />}>
          <Route exact path={"dashboard"} element={<Dashboard />}></Route>
          <Route exact path={"CreateExam"} element={<SubjectList />}></Route>
          <Route exact  path={"User"} element={<ManageUser />}></Route>
          <Route exact  path={"Mcq"} element={<CreateMCQ />}></Route>
          <Route exact  path={"mcq/list"} element={<ListOfMCQ />}></Route>
          <Route exact  path={"mcq/add"} element={<CreateQuestion />}></Route>
          <Route exact  path={"bookmark"} element={<ManageBookmark />}></Route>
          <Route exact  path={"test"} element={<Test />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
