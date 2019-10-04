import React from 'react';
import Stars from './Rating';
import { connect } from "react-redux";




const Cards = ({rating,filterValue,movies}) => {
  return (
    <div>
      <div className='films'>,
        {movies.filter(movie => 
              movie.rating>=rating && movie.title.includes(filterValue.toLowerCase().trim())).map((el, i) => <div>
          <div className='carte'>
            <Stars count={el.rating} />
            <img className="affiche" src={el.figure} alt=''></img>
            <div className="bar-title">
              <h2 className='title'>{el.title}</h2>
              <button type="button" class="btn btn-primary">watch Now</button>
            </div>
          </div>
        </div>)}
      </div>
    </div>);
}


function mapStateToProps(state){
  return { filterValue:state.filterValue, rating:state.rating, movies:state.movies}
}
const List = connect(mapStateToProps)(Cards);
export default List;