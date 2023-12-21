import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPageController from './pages/ListPage/ListPageController';
import AddPageController from './pages/AddPage/AddPageController';
import HeaderView from './components/Header/HeaderView';

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />

      <Routes>
        <Route path="/" element={<ListPageController />} />
        <Route path="/add" element={<AddPageController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
