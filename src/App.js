import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CategoryPage from './pages/categoryPage/CategoryPage';
import JobPage from './pages/JobPage/JobPage';
import UserPage from './pages/userPage/UserPage';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <HomeTemplate>
              <UserPage />
            </HomeTemplate>
          }
        />
        <Route
          path='/category'
          element={
            <HomeTemplate>
              <CategoryPage />
            </HomeTemplate>
          }
        />
        <Route
          path='/job'
          element={
            <HomeTemplate>
              <JobPage />
            </HomeTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
