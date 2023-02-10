import { Component } from "react";
import "./cards.styles.css";

class Cards extends Component {
  render() {
    const { name, email, id } = this.props;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Cards;
