import { useState } from "react";

import foodData from "../data";

const getRandomFoodIndex = () => {
  return Math.floor(Math.random() * Math.floor(foodData.length));
};

const Index = () => {
  const [index, setIndex] = useState(getRandomFoodIndex());
  const [food, setFood] = useState(foodData[index]);
  const [showList, setShowList] = useState(false);
  const [bought, setBought] = useState([]);

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
  console.log(bought);
  return (
    <>
      <style global>{`html, body {
    margin: 0; padding: 0; border: 0;
    background-color: #000;
} h1 {
    font-size: 64px;
    color #fff;
}`}</style>
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
        .button-group {
            display: flex;
            flex-direction: row;
            width: 70vw;
        }
        .button {
          height: 80px;
          padding: 10px;
          margin: 10px;
          width: 50vw;
          font-size: 36px;
          font-family: lato, verdana;
          cursor: pointer;
          border: 0;
          border-radius: 8px;
          outline: none;
          background-color: #992680;
          color: #f5d3ed;

        }
        .yes-button {
            background-color: #0bb04f
        }
        .yes-button:hover, .yes-button:active {
            background-color: #0dd15e;
        }
        .no-button {
            background-color: #820719
        }
        .no-button:hover, .no-button:active {
            background-color:#a80820
        }
        .imageWrapper {
            display: flex;
            align-items: center;
            height: 400px;
            max-width: 400px;
        }
        .image {
            width: 100%;
        }
        .name {
            font-size: 36px;
        }
        .list {
            font-size: 24px;
            list-style-type: none;
            display: flex;
            flex-direction:row;
            width: 400px;
        }
        .list-item {
            margin: 2
            display: inline-flex;
            border: 1px solid #fff;
            margin: 8px;
            padding: 8px 12px;
            border-radius: 6px;
            cursor: pointer;
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
        <div className="button-group">
          <button className="button yes-button" onClick={handleYesButtonClick}>
            Visa inköpslista 👍
          </button>
          <button className="button no-button" onClick={handleNoButtonClick}>
            Nej tack 😬
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
