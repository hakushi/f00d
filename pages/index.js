import { useState, useEffect } from "react";
import Buttons from "../components/Buttons/Buttons";

import foodData from "../data";

const getRandomFoodIndex = () => {
  return Math.floor(Math.random() * Math.floor(foodData.length));
};

const Index = () => {
  const [index, setIndex] = useState(getRandomFoodIndex());
  const [food, setFood] = useState(foodData[index]);
  const [showList, setShowList] = useState(false);
  const [bought, setBought] = useState([]);

  const hasShoppingList = !!food.list;

  const handleItemClick = item => {
    if (bought.includes(item)) {
      setBought(bought.filter(boughtItem => boughtItem !== item));
    } else {
      setBought([item, ...bought]);
    }
    setShowList(true);
  };

  const handleYesButtonClick = () => {
    setShowList(true);
  };

  const handleNoButtonClick = () => {
    setShowList(false);
    let newIndex = getRandomFoodIndex();
    while (newIndex === index) {
      newIndex = getRandomFoodIndex();
    }
    setIndex(newIndex);
    setFood(foodData[newIndex]);
  };

  const updateHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight, true);
    };
  }, []);

  const handlers = { yes: handleYesButtonClick, no: handleNoButtonClick };
  return (
    <>
      <style global>{`
        html, body {
          margin: 0; padding: 0; border: 0;
          background-color: #000;
          height: 100vh;
        }
        h1 {
          font-size: 4rem;
          color #fff;
        }
        @media screen and (max-width: 600px) {
          h1 {
            font-size: 2em;
          }   
        }
      `}</style>
      <style jsx>{`
        .wrapper {
          color #fff;
          font-family: lato, verdana;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100vh;
        }
        
        .imageWrapper {
            display: flex;
            align-items: center;
            height: 400px;
            max-width: 400px;
            max-height: 40vh;
            overflow: hidden;
        }
        @media screen and (max-width: 600px) {
          .imageWrapper {
            width: 90vw;
          }
        }
        .image {
            width: 100%;
        }
        .name {
          text-align: center;
          width: 90vw;
          font-size: 2.5rem;
        }

        @media screen and (max-width: 600px) {
          .name {
            font-size: 1.5rem
          }
        }
        
        .list {
            font-size: 24px;
            width: 400px;
            list-style-type: none;
            flex-direction:row;
            display: flex;
            flex-wrap: wrap;
            padding: 0;
        }
        @media screen and (max-width: 600px) {
          .list {
            width: 90vw;
            display: inline-flex;
            flex-wrap: wrap;
            padding: 0;
          }
        }
        .list-item {
            margin: 2
            display: inline-flex;
            border: 1px solid #fff;
            margin: 8px;
            padding: 8px 12px;
            border-radius: 6px;
            cursor: pointer;
            flex-grow: 1;
            text-align: center;
        }
        .list-item:hover {
            background-color: #2a63a1;

        }
        .list-item--bought {
            background-color: #1478e3;
        }
      `}</style>
      <div className="wrapper">
        <h1>Vad ska vi äta?</h1>
        <div className="name">{food?.name}</div>
        {food?.image && !showList && (
          <div className="imageWrapper">
            <img className="image" src={`/${food.image}`} alt={food?.name} />
          </div>
        )}
        {food?.list && showList && (
          <div className="listWrapper">
            <ul className="list">
              {food.list.map(item => {
                const classNames = `list-item ${
                  bought.includes(item) ? "list-item--bought" : ""
                }`;
                return (
                  <li
                    className={classNames}
                    key={item}
                    data-value={item}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <Buttons hasList={hasShoppingList} handlers={handlers} />
      </div>
    </>
  );
};

export default Index;
