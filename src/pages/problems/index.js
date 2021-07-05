import {Routes , Route, Navigate} from 'react-router-dom';
import Problem from "../problem/";
import Problems from "./problems";


const ProblemsNav = ()=>{
  return <Routes>
    <Route path="" element={<Problems />}  />
    <Route path=":id*" element={<Problem />}  />
    <Route path="*" element={<Navigate to="" />}  />
  </Routes>
}

export default ProblemsNav;