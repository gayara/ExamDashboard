import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import SubjectList from "./pages/CreateExam";
import {Subjects} from "./pages/subjectManagement/Subject";
import Progress from "./pages/chechProgress/CheckProgress";


function App() {
  return (
    <>
      <Routes>
        <Route exact path={"/admin"} element={<AdminLayout />}>
          <Route exact path={"dashboard"} element={<Dashboard />}></Route>
          <Route exact path={"CreateExam"} element={<SubjectList />}></Route>
          <Route exact path={"subjects"} element={<Subjects />}></Route>
          <Route exact path={"progress"} element={<Progress />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
