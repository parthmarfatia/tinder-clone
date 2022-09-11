import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import Person from "@mui/icons-material/Person";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "ELon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Elon_Musk_%283017880307%29.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://e3.365dm.com/21/07/2048x1152/skynews-jeff-bezos-amazon_5437859.jpg?20210705134847",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
