import Card from "../cards/cards.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster, id) => {
      return <Card monster={monster} key={id} />;
    })}
  </div>
);

export default CardList;
