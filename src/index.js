import ReactDOM from 'react-dom/client';
import './index.css';
import SignInEmail from './components/SignInEmail';
import { Provider} from 'react-redux';
import appStore from './store/appStore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
// firebase config starts here
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB5g55Ym-epZbAICK9Cq5cmuEyrHMyKHXc",
  authDomain: "prime-6a4b7.firebaseapp.com",
  projectId: "prime-6a4b7",
  storageBucket: "prime-6a4b7.firebasestorage.app",
  messagingSenderId: "53953948912",
  appId: "1:53953948912:web:fddc7d2638f1c73769e635",
  measurementId: "G-HZJ9NMYSNF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// firebase config ends here
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={appStore}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignInEmail/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>
    </Provider>
);

