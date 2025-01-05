import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes'; 
import { CardProvider } from './context/CardContext';

function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes /> 
        <Footer />
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;