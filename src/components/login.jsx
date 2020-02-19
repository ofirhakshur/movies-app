import React, { Component } from "react";

class Login extends Component {
  state = {
    account: { username: "", password: "" }
  };
  handleSubmit = e => {
    //Prevent calling the server every time we press Login button
    e.preventDefault();
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    return (
      <React.Fragment>
        <h2 className="m-2">Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group m-2">
            <label htmlFor="userName">UserName</label>
            <input
              onChange={this.handleChange}
              value={this.state.account.username}
              name="username"
              id="userName"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              value={this.state.account.password}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary m-2">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
