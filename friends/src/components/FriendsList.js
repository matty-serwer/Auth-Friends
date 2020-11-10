import React from "react";
import Friend from './Friend'
import axios from "axios";
import axiosWithAuth from "./../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getFriendsData();
  }

  getFriendsData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((req) => {
        this.setState({
            friends: req.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Friends List</h1>
        {this.state.friends.map(friend => (
            <Friend friend={friend} key={friend.key}/>
    ))}
      </div>
    );
  }
}

export default FriendsList;
