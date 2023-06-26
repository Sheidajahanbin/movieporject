import React, { Component } from "react";

class Boxsearch extends Component {
    state = {  } 
    render() { 
        return (
        
            
          <div className="boxSearch">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search by movie title.."
            />
          </div>
          
        );
    }
}
 
export default Boxsearch;
