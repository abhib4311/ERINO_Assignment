import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import './App.css';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <FormControl>
      <ContactForm />
    </FormControl>
  );
}

export default App;
