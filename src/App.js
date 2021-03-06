import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highScore: 0
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  componentDidMount() {
    //this.setState({friends: this.shuffle(this.state.friends)});
  }

  //https://www.frankmitchell.org/2015/01/fisher-yates///
  shuffle = array => {
    var i = 0,
      j = 0,
      temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  beenClicked = name => {
    console.log("clicked");
    const thisFriend = this.state.friends.filter(
      friend => friend.name === name
    )[0];
    if (thisFriend.clicked) {
      alert("GAME OVER, YOU ALREADY TRIED TO EAT THAT COOKIE");

      // reset all clicked values to false
      this.state.friends
        .filter(friend => friend.clicked === true)
        .map(friend => (friend.clicked = false));
      // set current score back to zero
      this.setState({
        //pass the current friends array into the shuffle function, to generate a new shuffle array (setState will cause new render)
        friends: this.shuffle(this.state.friends),
        score: 0
      });
    } else {
      //change click flag
      thisFriend.clicked = true;
      const newScore = this.state.score + 1;
      const highScore =
        newScore > this.state.highScore ? newScore : this.state.highScore;
      this.setState({
        score: newScore,
        friends: this.shuffle(this.state.friends),
        highScore: highScore
      });
      // add a point to score

      // score > highscore (add up on highscore)
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky the Cookie Game</Title>
        <div>
          <h1>Score: {this.state.score}</h1>
          <h1>High Score: {this.state.highScore}</h1>
        </div>
        {this.state.friends.map(friend => (
          <FriendCard
            beenClicked={this.beenClicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
            anything={10}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
