import React from "react";
import Friend from './Friend'
import NewFriendForm from './NewFriendForm';

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
  }

  postFriend = (friend) => {
  axiosWithAuth()
      .post("/friends", friend)
      .then((req) => {
        this.setState({
            friends: req.data
        })
      });
  }

  render() {
    return (
      <div>
        <h1>Friends List</h1>
        {this.state.friends.map(friend => (
            <Friend friend={friend} key={friend.id} removeFriend={this.removeFriend}/>
    ))}
        <NewFriendForm postFriend={this.postFriend}/>
      </div>
    );
  }
}

export default FriendsList;
