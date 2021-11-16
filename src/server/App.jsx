import React from "react";
import Chirpcode from "./components/Chirpcode";
import "./styles.css";
import * as mysql from 'mysql';
import Blogs from './blogs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chirps: [
        { username: "", 
          message: "" },
        {
          username: "",
          message: "",
        },
        {
          username: "",
          message: "",
        },
      ],
      username: "",
      message: "",
    };
  }


  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handlenameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleButtonClick = (e) => {
    e.preventDefault();
    const newChirp = {
      username: this.state.username,
      message: this.state.message,
    };

    this.setState({
      chirps: [...this.state.chirps, newChirp],
    });
  };

  render() {
    return (
      <main className="container">
        <section className="row mt-5 justify-content-center">
          <div className="col-md-8">
            <form className="form-group p-4">
              <input
                id="Chirpy"
                value={this.state.message}
                onChange={this.handleMessageChange}
                placeholder="Chirp it here..."
                type="text"
                className="form-control shadow-sm"
              />
              <input
                id="Userman"
                value={this.state.Username}
                onChange={this.handlenameChange}
                placeholder="Username here..."
                type="text"
                className="form-control shadow-sm"
              />
              <button
                onClick={this.handleButtonClick}
                className="btn btn-outline-danger mt-3 btn-block w-50 mx-auto shadow-sm"
              >
                Chirp the World!
              </button>
            </form>
          </div>
        </section>
        <section className="row my-8 justify-content-center" id="Moxy">
          {this.state.chirps.map((chirp, index) => {
            return <Chirpcode key={index} chirp={chirp} />;
          })}
        </section>
      </main>
    );
  }
}

export default App;
