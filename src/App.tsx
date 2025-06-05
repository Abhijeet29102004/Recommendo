import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import RecommendationDetail from './pages/RecommendationDetail';
import Favorites from './pages/Favorites';
import SearchResults from './pages/SearchResults';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:categoryId" element={<CategoryPage />} />
          <Route path="recommendation/:id" element={<RecommendationDetail />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

