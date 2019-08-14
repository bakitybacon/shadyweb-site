import React, { Component } from 'react';

class Home extends Component {
  state = {};
  render() {
    return ( <div class="center-div">
    <center> <h2>Corrin Fosmire</h2> </center>
    <img src="me.jpg" height="683" width="512"></img>
    <center> <h2> <a href="/CorrinFosmireResume.pdf"> Resume </a> | <a href="https://github.com/bakitybacon"> GitHub </a> | <a href="mailto:cf24@rice.edu">Email </a> </h2> </center>
    </div> );
  }
}

export default Home;