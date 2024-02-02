
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LayOutAdmin from './HOCs/LayOutAdmin';
import {routes} from './app/Routes'
import Login from './Component/logins/Login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayOutAdmin/>}>
        {routes.map(({ path, Component}) =>
          <Route key={path} path={path} element={<Component/>} />
        )}
      </Route>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
