import React from 'react';
import Pizza from '../assets/Pizza.png';

{/*მეორე გვერდი ფოტო , აღწერა  , პიცის სახელები ,  გადახდის ღილაკი , მესიჯი*/}

function PizzaPage({ handleBuyClick, buyMessage }) {
    return (
        <div className="page-content">
            <div className="restaurant-card">
                <img
                    src={Pizza}
                    alt="Pizza"
                    className="restaurant-image"
                    style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
                />
                <div className="Allinfo3">
                    <h1 className="namefd">ᑭᎥ乙乙ᗩ</h1>
                    <div className="counrtyfrom">Italy</div>
                    <div className="dscrib">
                        Traditional Italian pizzas with wood-fired crust
                    </div>
                </div>
            </div>

            <div className="food-items-container">
                <div className="food-item">
                    <div className="food-item-name">𝘯𝘦𝘢𝘱𝘰𝘭𝘪𝘵𝘢𝘯 𝘱𝘪𝘻𝘻𝘢</div>
                    <button className="buy-button" onClick={() => handleBuyClick('𝘯𝘦𝘢𝘱𝘰𝘭𝘪𝘵𝘢𝘯 𝘱𝘪𝘻𝘻𝘢')}>order</button>
                </div>
                <div className="food-item">
                    <div className="food-item-name">𝙋𝙞𝙯𝙯𝙖 𝙈𝙖𝙧𝙜𝙝𝙚𝙧𝙞𝙩𝙖</div>
                    <button className="buy-button" onClick={() => handleBuyClick('𝙋𝙞𝙯𝙯𝙖 𝙈𝙖𝙧𝙜𝙝𝙚𝙧𝙞𝙩𝙖')}>order</button>
                </div>
                <div className="food-item">
                    <div className="food-item-name">𝙽𝚎𝚠 𝚈𝚘𝚛𝚔–𝚜𝚝𝚢𝚕𝚎 𝚙𝚒𝚣𝚣𝚊</div>
                    <button className="buy-button" onClick={() => handleBuyClick('𝙽𝚎𝚠 𝚈𝚘𝚛𝚔–𝚜𝚝𝚢𝚕𝚎 𝚙𝚒𝚣𝚣𝚊')}>order</button>
                </div>
            </div>

            {/*ყიდვის მესიჯი*/}

            {buyMessage && (
                <div className="buy-success-message">
                    {buyMessage}
                </div>
            )}
        </div>
    );
}

export default PizzaPage;