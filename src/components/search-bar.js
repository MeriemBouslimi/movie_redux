
import React from 'react';
import Stars from '../components/Rating';
import {searchRating} from "../actions/action";
import {connect} from 'react-redux';

function  Search (props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-brand">Navbar</div>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>props.changeInput(e.target.value)}/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <Stars searchRating={(e)=>{props.searchRating(e)}} count={props.count} />
  </nav>
  )
}
const mapStateToProps =(state)=>{
  return{
    count:state.rating
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    searchRating: rate =>dispatch(searchRating(rate))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)

