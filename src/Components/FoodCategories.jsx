import React from 'react';
import { Link } from 'react-router-dom';    {/* ინტერნეტიდან აღებული ფოტოების import   */}
import Shushi from '../assets/sushi.png';   {/* ინტერნეტიდან აღებული ფოტოების import   */}
import Pizza from '../assets/Pizza.png';    {/* ინტერნეტიდან აღებული ფოტოების import   */}
import Burger from '../assets/Burger.png';  {/* ინტერნეტიდან აღებული ფოტოების import   */}




{/* food category-ში მაქვ home page არსებული სახელები , სათაური , foodcard , სახელი , ფოტოები  */}
{/*  */}


function FoodCategories() {
    return (
        <div className="food-categories" style={{ marginTop: '-120px' }}>
            <h2>Food delivery in Tbilisi</h2>
            <div className="category-section">
                <h3>Promotions🔥</h3>
                <div className="category-list">
                    <Link to="/Sushi" className="category-card">
                        <img
                            src={Shushi}
                            alt="Sushi"
                            className="category-image"
                            style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
                        />
                        <div className="category-name1">𝚜𝚑𝚞𝚜𝚑𝚒</div>
                        <div className="category-type">Asian</div>
                    </Link>

                    <Link to="/Pizza" className="category-card">
                        <img
                            src={Pizza}
                            alt="Pizza"
                            className="category-image"
                            style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
                        />
                        <div className="category-name1">ᑭᎥ乙乙ᗩ</div>
                        <div className="category-type">Italy</div>
                    </Link>

                    <Link to="/Burger" className="category-card">
                        <img
                            src={Burger}
                            alt="Burger"
                            className="category-image"
                            style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
                        />
                        <div className="category-name1">𝓑𝓾𝓻𝓰𝓮𝓻</div>
                        <div className="category-type">USA</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FoodCategories;