import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Players extends Component {
    // constructor(props) {
    //   super(props);
    //   this.updateTitle = this.updateTitle.bind(this);
      state = {
        result: {},
        search: "",
        score: {},
        quarters: {},
        plays: {},
        getInitialState: function(){
          return { active: null}
        },
        toggle: function(position){
          if (this.state.active === position) {
            this.setState({active : null})
          } else {
            this.setState({active : position})
          }
        },
        myColor: function(position) {
          if (this.state.active === position) {
            return "blue";
          }
          return "";
        },
    }
// }

    updateTitle = e => {
        console.log(this.props);
        // alert(e.target.value);
      }

    render() {
        const { user } = this.props.auth;
        const players = [
            {
              id: 1,
              title: user.name,
            },
            {
              id: 2,
              title: "player 2",
            },
            {
              id: 3,
              title: "player 3",
            },
            {
              id: 4,
              title: "player 4",
            },
          ]
       
        return (
            <ul className="list-inline">{players.map(activePlayer => (
                <li key={activePlayer.id}>
                  <button onClick={this.updateTitle}>
                    {activePlayer.title}
                  </button>
                </li>
              ))}
              </ul>
            );

//             <div class="buttons">
//   <button className="button is-info is-small">{user.name}</button>
//   <button className="button is-success is-small">{user.name} + "1"</button>
//   <button className="button is-warning is-small">Player-3</button>
//   <button className="button is-danger is-small">Player-4</button>
// </div>
        
        }    
}; 

Players.propTypes = {
    // logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });

  export default connect(
    mapStateToProps,
)(Players);