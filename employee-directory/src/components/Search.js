import React, {Component} from "react";
import "../style.css"

class Search extends Component {
state = {value: ""};

constructor(props) {
    super(props);
}
    render(){

   return(
       <form>
           <input className = "search" />
       </form>
   )
    
    }

}

export default Search;