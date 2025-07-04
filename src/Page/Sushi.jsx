import React from 'react';
import Sushi from '../assets/Sushi.png';


{/*მეორე გვერდი ფოტო , აღწერა  , სუშის სახელები ,  გადახდის ღილაკი , მესიჯი*/}
{/*ზოგიერთი id მეორდება ყველა გვერძე , რადგან ერთი და იგივე css კოდი აქვს*/}


function SushiPage({ handleBuyClick, buyMessage }) {
    return (
        <div className="page-content">
            <div className="restaurant-card">
                <img
                    src={Sushi}
                    alt="Sushi"
                    className="restaurant-image"
                    style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
                />
                <div className="Alf2">
                    <h1 className="namefd">𝚜𝚑𝚞𝚜𝚑𝚒</h1>
                    <div className="counrtyfrom">Asian</div>
                    <div className="dscrib">
                        Authentic Japanese sushi with fresh ingredients
                    </div>
                </div>
            </div>

            {/*ყიდვის მესიჯი*/}
            <div className="food-items-container">
                <div className="food-item">
                    <div className="food-item-name">Philadelphia sushi</div>
                    <button className="buy-button" onClick={() => handleBuyClick('Philadelphia sushi')}>order</button>
                </div>
                <div className="food-item">
                    <div className="food-item-name">California Roll</div>
                    <button className="buy-button" onClick={() => handleBuyClick('California Roll')}>order</button>
                </div>
                <div className="food-item">
                    <div className="food-item-name">Spicy Tuna</div>
                    <button className="buy-button" onClick={() => handleBuyClick('Spicy Tuna')}>order</button>
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

export default SushiPage;