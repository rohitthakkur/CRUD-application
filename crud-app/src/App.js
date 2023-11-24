import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import List from './crud/list';
import Add from './crud/add';
import Edit from './crud/edit';
import NoMatch from './crud/Nomatch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<List />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/edit/:carId" element={<Edit />} />
        <Route exact path="*" element={<NoMatch/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
