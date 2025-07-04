import React, { useState ,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// დავაიმპორტე ზედა ნაწილი header-ი
import Header from './components/Header.jsx';
import FoodCategories from './components/FoodCategories.jsx';


/// მოცემულია ყველა დაიმპორტებული ფაილებიი:home,sushi ,burger, pizza , about
import HomePage from './Page/Home.jsx';
import AboutPage from './pages/About.jsx';
import PizzaPage from './Page/Pizza.jsx';
import BurgerPage from './Page/Burger.jsx';
import SushiPage from './Page/Sushi.jsx';

import './App.css'; // css დავაიმპორტე

function App() {
    const [buyMessage, setBuyMessage] = useState('');
    const [showLastItem, setShowLastItem] = useState(true);

    const handleBuyClick = (itemName) => {
        setBuyMessage(`${itemName} შეკვეთა წარმატებით შესრულდა!`);
        localStorage.setItem("lastBoughtItem", itemName);
        setShowLastItem(true);

        setTimeout(() => setBuyMessage(''), 3000);
    };

    useEffect(() => {
        //  3 წამში გაქრება ეფექტი
        const timer = setTimeout(() => {
            setShowLastItem(false);
        }, 3000);


        return () => clearTimeout(timer);
    }, [localStorage.getItem("lastBoughtItem")]); // როცა lastBoughtItem შეიცვლება, დროც გადატვირთება

    return (
        <Router>
            <Header />

            {showLastItem && localStorage.getItem("lastBoughtItem") && (
                <div
                    className="last-item-info"
                    style={{
                        padding: '1px',
                        fontWeight: 'bold',
                        color: 'goldenrod',  // ოქროსფერი
                        transition: 'opacity 0.3s ease-in-out',
                    }}
                >
                     შეკვეთა!: <strong>{localStorage.getItem("lastBoughtItem")}</strong>
                </div>
            )}

            <Routes>
                <Route path="/" element={<><FoodCategories /><HomePage /></>} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/Sushi" element={<SushiPage handleBuyClick={handleBuyClick} buyMessage={buyMessage} />} />
                <Route path="/Pizza" element={<PizzaPage handleBuyClick={handleBuyClick} buyMessage={buyMessage} />} />
                <Route path="/Burger" element={<BurgerPage handleBuyClick={handleBuyClick} buyMessage={buyMessage} />} />
            </Routes>
        </Router>
    );
}
export default App;