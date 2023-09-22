import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateExam from "./pages/Test/CreateExam";
import TestList from "./pages/TestManagment/TestList";

function App() {
  return (
    <>
      <Routes>
        <Route exact path={"/admin"} element={<AdminLayout />}>
          <Route exact path={"dashboard"} element={<Dashboard />}></Route>
          <Route exact path={"createTest"} element={<CreateExam/>}></Route>
          <Route exact path={"testList"} element={<TestList/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
