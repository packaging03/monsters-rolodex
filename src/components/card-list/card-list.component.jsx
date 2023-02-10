import { Component } from "react";
import Cards from "../cards/cards.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        <div className="card-list">
          {monsters.map((monster) => {
            const { name, email, id } = monster;
            return (
              <Cards name={name} email={email} id={id}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardList;
