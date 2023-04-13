import CourseNavigator from "./CourseNavigator";
import Modules from "./Modules";
import Sidebar from "./Sidebar";
import TarpNavigator from "./TarpNavigator";
import Assignments from "./assignments";
import Quizzes from "./quizzes";
import {Route, Routes} from "react-router-dom";

export default function Tarp() {
    return (
        <div className="container">
        <h1>Tarp !!!!!</h1>
        <div className="row">
            <div className="d-none d-md-block col-md-2">
                <TarpNavigator/>
            </div>
            <div className="d-none d-md-block col-md-2">
                <CourseNavigator highlight="Home"/>
            </div>
            <div className="col-md-8 col-xl-7">
                <Routes>
                    <Route path="/modules" element={<Modules/>}/>
                    <Route path="/quizzes" element={<Quizzes/>}/>
                    <Route path="/assignments" element={<Assignments/>}/>
                </Routes>
            </div>
            <div className="d-none d-xl-block col-lg-1">
                <Sidebar/>
            </div>
        </div>
    </div>
    )
}