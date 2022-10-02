import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import "./Cards.css";
import Navbar from "./Navbar";
const Cards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const response = await fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    // setProducts(await response.json());
    const data = await response.json();
    let arr = [];
    for (const key in data) {
      arr.push(data[key]);
    }
    setProducts(arr);
    // console.log(products);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const [text, setText] = useState(0);
  const increaseValue = () => {
    setText(text + 1);
  };
  console.log(text);
  // <Navbar text={text} />;

  return (
    !loading && (
      <>
        <div>
          <Navbar text={text} />
          <Banner />
        </div>

        <h1 className="main">Products</h1>
        <div className="card">
          {products?.map((current) => {
            return (
              <div className="ccc">
                <div className="cc">
                  <div className="imggg">
                    <img
                      className="ima"
                      src={current.productImage}
                      alt="no img found"
                    />
                  </div>
                  <div className="tit">
                    <p>{current.productName.slice(0, 32)}...</p>
                  </div>
                  <div className="prices">
                    <div className="stars">
                      <svg
                        className="starsss"
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                          fill="#FFAC4B"
                        />
                      </svg>
                      <svg
                        className="star"
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                          fill="#FFAC4B"
                        />
                      </svg>
                      <svg
                        className="star"
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                          fill="#FFAC4B"
                        />
                      </svg>
                      <svg
                        className="star"
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                          fill="#FFAC4B"
                        />
                      </svg>
                      <svg
                        className="star"
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                          fill="#FFAC4B"
                        />
                      </svg>
                    </div>
                    <p className="cutPrice">{current.oldPrice}/-</p>
                    <p className="Oriprice">{current.newPrice}/-</p>
                  </div>
                  <div className="btnnn">
                    <button className="carting" onClick={increaseValue}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  );
};

export default Cards;
