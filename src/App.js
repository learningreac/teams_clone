import './App.css';
import Calls from './components/calls';

import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Layout from './components/common/Layout';


function App() {
  return (
  
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/calls" element={<Calls />} ></Route>
        </Route>
      </Routes>

  );
}

export default App;
