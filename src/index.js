import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextprovider } from './Authentication/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContextprovider>
<BrowserRouter><App /></BrowserRouter>
</AuthContextprovider>);
