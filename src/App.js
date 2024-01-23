
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LayOutAdmin from './HOCs/LayOutAdmin';
import {routes} from './app/Routes'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayOutAdmin/>}>
        {routes.map(({ path, Component}) =>
          <Route key={path} path={path} element={<Component/>} />
        )}
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
