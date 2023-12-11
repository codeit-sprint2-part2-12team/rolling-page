import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<div>잘못된 페이지임</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
