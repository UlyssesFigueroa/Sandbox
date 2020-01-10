import React, { Component } from "react";
import TableData from "./TableData";
import TableHeadings from "../components/TableHeadings";
import API from "../../utils";

class TableArea extends Component {
      state = {
        result:[{}],
        filtered: [{}]
      };
    
  
    // when our page loads we make axios call to get random users, and set our state with the results we get back
    componentDidMount() {
      console.log("starting")
      API.getUsers().then(results => {
        console.log(results.data.results);

        this.setState({
          result: results.data.results,
          filtered: results.data.results
        })


      });
    }


    render () {
      return(
        <div>
    
          <table class="table">
          <TableHeadings />
          <TableData users={this.state.filtered} />

          </table>

        </div>



      )
    }

  }
export default TableArea;