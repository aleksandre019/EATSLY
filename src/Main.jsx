import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // This imports your main application component

// Find the HTML element with the ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component into that root element
root.render(<App />);