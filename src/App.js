import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Loading from './components/loading/Loading';
import CategoryPage from './pages/categoryPage/CategoryPage';
import { CreateJob } from './pages/JobPage/createJob/CreateJob';
import JobPage from './pages/JobPage/JobPage';
import UserPage from './pages/userPage/UserPage';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';

function App() {
  return (
    <div>
      <Loading />

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
          <Route
            exact
            path='/job/create'
            element={
              <HomeTemplate>
                <CreateJob />
              </HomeTemplate>
            }
          />
          <Route
            path='/job/:id'
            element={
              <HomeTemplate>
                <CreateJob />
              </HomeTemplate>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
