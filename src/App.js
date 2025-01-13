import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProgramsPage from './pages/ProgramsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ApplicationForm from './components/ApplicationForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/ProgramsPage" element={<ProgramsPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/newpplication" element={<ApplicationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
