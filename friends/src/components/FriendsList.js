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

  removeFriend = (friendID) => {
      console.log(friendID);
      axiosWithAuth()
        .delete(`/friends/${friendID}`)
        .then(req => {
            console.log(req);
        })
        .catch(err => {
            console.log(err);
        })
        this.getFriendsData();
  }

  render() {
    return (
      <div>
        <h1>Friends List</h1>
        {this.state.friends.map(friend => (
            <Friend friend={friend} key={friend.id} removeFriend={this.removeFriend}/>
    ))}
      </div>
    );
  }
}

export default FriendsList;
