import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllContactsPage from './pages/allContactsPage';
import CreateContactPage from './pages/createContactPage';
import { Box } from '@mui/material';
import './App.css';
function App() {
  return (
    <Router>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#5e6691',
      }}>
        <h1>ERINO Contacts</h1>
      </Box >
      <Routes>
        <Route path="/" element={<AllContactsPage />} />
        <Route path="/contact" element={<CreateContactPage />} />
      </Routes>

    </Router>
  );
}

export default App;
