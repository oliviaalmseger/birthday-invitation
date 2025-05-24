import './App.css'
import { Navigation } from './components/Navigation'
import { Welcome } from './components/Welcome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { RsvpForm } from './components/RsvpForm'
import { Menu } from './components/Menu'

function App() {
  return (
     <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/rsvp" element={<RsvpForm />} />
      </Routes>
    </Router>
  );
};

export default App
