import { useState, useEffect } from "react";
import "./BurgerStyle.css";

const Burger = () => {
  const [lettuce, setLettuce] = useState(0);
  const [tomato, setTomato] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);

  //lettuse
  const handleLettuce = (action) => {
    switch (action) {
      case "add":
        setLettuce(+lettuce + 1);
        break;
      case "remove":
        if (lettuce > 0) setLettuce(+lettuce - 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let lettuceValue = localStorage.getItem("lettuce");
    if (lettuceValue) {
      setLettuce(lettuceValue);
    } else {
      setLettuce(0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lettuce", lettuce);
  }, [lettuce]);


//tomato
  const handleTomato = (action) => {
    switch (action) {
      case "add":
        setTomato(+tomato + 1);
        break;
      case "remove":
        if (tomato > 0) setTomato(+tomato - 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let tomatoValue = localStorage.getItem("tomato");
    if (tomatoValue) {
      setTomato(tomatoValue);
    } else {
      setTomato(0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tomato", tomato);
  }, [tomato]);


//cheese

const handleCheese = (action) => {
  switch (action) {
    case "add":
      setCheese(+cheese + 1);
      break;
    case "remove":
      if (cheese > 0) setCheese(+cheese - 1);
      break;
    default:
      break;
  }
};

useEffect(() => {
  let cheeseValue = localStorage.getItem("cheese");
  if (cheeseValue) {
    setCheese(cheeseValue);
  } else {
    setCheese(0);
  }
}, []);

useEffect(() => {
  localStorage.setItem("cheese", cheese);
}, [cheese]);

//meat 

const handleMeat = (action) => {
  switch (action) {
    case "add":
      setMeat(+meat + 1);
      break;
    case "remove":
      if (meat > 0) setMeat(+meat - 1);
      break;
    default:
      break;
  }
};

useEffect(() => {
  let meatValue = localStorage.getItem("meat");
  if (meatValue) {
    setMeat(meatValue);
  } else {
    setMeat(0);
  }
}, []);

useEffect(() => {
  localStorage.setItem("meat", meat);
}, [meat]);

  const burgerContent = () => {
    // let { lettuce, tomato, cheese, meat } = state;
    let burger = [];
    if (lettuce) {
      for (let i = 0; i < lettuce; i++) {
        burger.push(<div key={burger.length} className="lettuceSide"></div>);
      }
    }

    for (let i = 0; i < tomato; i++) {
      burger.push(<div key={burger.length} className="tomatoSide"></div>);
    }

    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className="cheeseSide"></div>);
    }
    for (let i = 0; i < meat; i++) {
      burger.push(<div key={burger.length} className="meatSide"></div>);
    }
    if (burger.length === 0)
      burger.push(<p key="0">Add Ingredients You WAnt!</p>);
    return burger;
  };
  return (
    <>
      <div className="burgerIngredients">
        <div className="topSide"></div>
        {burgerContent()}
        <div className="bottomSide"></div>
      </div>
      
      <div className="ingredientsBlock">
        <p>Lettuce</p>
        <div className="ingrBtns">
          <button
            onClick={() => handleLettuce("add")}
            className="ingrBtn"
          >
            Add
          </button>
          <button
            onClick={() => handleLettuce("remove")}
            className="ingrBtn"
          >
            Remove
          </button>
        </div>

        <p>Tomato</p>
        <div className="ingrBtns">
          <button
            onClick={() => handleTomato("add")}
            className="ingrBtn"
          >
            Add
          </button>
          <button
            onClick={() => handleTomato("remove")}
            className="ingrBtn"
          >
            Remove
          </button>
        </div>

        <p>Cheese</p>
        <div className="ingrBtns">
          <button
            onClick={() => handleCheese("add")}
            className="ingrBtn"
          >
            Add
          </button>
          <button
            onClick={() => handleCheese("remove")}
            className="ingrBtn"
          >
            Remove
          </button>
        </div>

        <p>Meat</p>
        <div className="ingrBtns">
          <button
            onClick={() => handleMeat("add")}
            className="ingrBtn"
          >
            Add
          </button>
          <button
            onClick={() => handleMeat("remove")}
            className="ingrBtn"
          >
            Remove
          </button>
        </div>


      </div>
    </>
  );
};

export default Burger;
