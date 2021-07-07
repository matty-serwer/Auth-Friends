import React, { Component } from "react";

export class NewFriendForm extends Component {
  state = {
    name: "",
    age: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  postNewFriend = (e) => {
    e.preventDefault();
    console.log('test');
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.age,
      id: Date.now()
    };
    this.props.postFriend(newFriend)
  };

  render() {
    return (
      <div onSubmit={this.postNewFriend}>
        <h2>Add A Friend Form</h2>
        <form>
          <label htmlFor='name'>
            Name:
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor='age'>
            Age:
            <input
              type='number'
              name='age'
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor='email'>
            Email:
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default NewFriendForm;
