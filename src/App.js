// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation';
import News from './components/News';
import Footer from './components/Footer';
// import FloatingAuthButton from './components/FloatingAuthButton';
import AuthPage from './components/AuthPage'; // Import the AuthPage component
//import newsData from './assets/data/newsData.json';
import FixturesPage from './components/FixturesPage';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import { AuthProvider } from './contexts/AuthContext';
import MatchDetails from './components/MatchDetails';
import SeriesPage from './components/SeriesPage';
import PlayersPage from './components/PlayersPage';
import PlayersData from './components/PlayersData';
import NewsArticleForm from './components/NewsArticleForm';
import StatsCorner from './components/StatsCorner';
import AdminPanel from './components/AdminPanel';
import NewsDetailsPage from './components/NewsDetailsPage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/news/articles');
        setNewsArticles(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching news articles:', error);
      }
    };

    fetchNewsArticles();
  }, []);
  return (
    <AuthProvider>
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/fixtures" element={<FixturesPage />} />
          <Route path="/fixture/:matchId" element={<MatchDetails />} />
          <Route path='/series' element={<SeriesPage/>}/>
          <Route path='/players' element={<PlayersPage/>}/>
          <Route path='/players/:playerId' element={<PlayersData/>}/>
          <Route path='/article-form' element={<NewsArticleForm/>}/>
          <Route path='/stats' element={<StatsCorner/>}/>
          <Route path="/admin-panel" element={<AdminPanel/>} />
          <Route path="/" element={
          <div className="news-list">
            
            {newsArticles.map((news) => (
              
              <Link to={`/news/${news._id}`} key={news._id} className="news-link"><News {...news} /></Link>
            ))}
          </div>} />
          <Route path="/news/:newsId" element={<NewsDetailsPage newsArticles={newsArticles} />} />
        </Routes>
        
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
