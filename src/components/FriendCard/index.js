import React from "react";
import "./style.css";

function FriendCard(props) {
  const {image, name, beenClicked} = props
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => beenClicked(name)} alt={name} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
        </ul>
      </div>
      {/* <span onClick={() => this.props.beenClicked(this.props.name)} src={this.props.image} className="remove">
      </span> */}
    </div>
  );
}

export default FriendCard;
