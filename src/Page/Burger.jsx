import React from 'react';
import Burger from '../assets/Burger.png'; // დარწმუნდით, რომ გზა სწორია


{/*მეორე გვერდი ფოტო , აღწერა  , ბურგერის სახელები ,  გადახდის ღილაკი , მესიჯი*/}
{/*ზოგიერთი id მეორდება ყველა გვერძე , რადგან ერთი და იგივე css კოდი აქვს*/}


function BurgerPage({ handleBuyClick, buyMessage }) {
    return (
        <div className="page-content">
            <div className="burgerrestn">
                <img
                    src={Burger}
                    alt="Burger"
                    className="restimage"
                    style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
                />
                <div className="Allin0">
                    <h1 className="Alf2">Burger</h1>
                    <div className="counrtyfrom">USA</div>
                    <div className="dscrib">
                        Juicy American-style burgers with fresh ingredients
                    </div>
                </div>
            </div>
            <div className="food-items-container">
                <div className="food-item">
                    <div className="food-item-name">𝘊𝘭𝘢𝘴𝘴𝘪𝘤 𝘊𝘩𝘦𝘦𝘴𝘦𝘣𝘶𝘳𝘨𝘦𝘳</div>
                    <button className="buy-button" onClick={() => handleBuyClick('𝘊𝘭𝘢𝘴𝘴𝘪𝘤 𝘊𝘩𝘦𝘦𝘴𝘦𝘣𝘶𝘳𝘨𝘦𝘳')}>order</button>
                </div>
                <div className="food-item">
                    <div className="food-item-name">𝙱𝚊𝚌𝚘𝚗 𝙲𝚑𝚎𝚎𝚜𝚎𝚋𝚞𝚛𝚐𝚎𝚛</div>
                    <button className="buy-button" onClick={() => handleBuyClick('𝙱𝚊𝚌𝚘𝚗 𝙲𝚑𝚎𝚎𝚜𝚎𝚋𝚞𝚛𝚐𝚎𝚛')}>order</button>
                </div>
                <div className="food-item">
                    <div className="food-item-name">𝙱𝚎𝚎𝚏 𝚋𝚞𝚛𝚐𝚎𝚛</div>
                    <button className="buy-button" onClick={() => handleBuyClick('𝙱𝚎𝚎𝚏 𝚋𝚞𝚛𝚐𝚎𝚛')}>order</button>
                </div>
            </div>

            {buyMessage && (
                <div className="buy-success-message">
                    {buyMessage}
                </div>
            )}
        </div>
    );
}

export default BurgerPage;