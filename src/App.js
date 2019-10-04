import React from 'react';
import { searchFiltring } from './actions/action';
import MovieCard from './components/Movie-cards';
import Form from './components/add-movie';
import { connect } from "react-redux";
import Search from "./components/search-bar";
import './App.css';


const Filtred = ({ searchFiltring }) => {
  return (
    <div className="app">
      <Search changeInput={(e) => { searchFiltring(e) }} />
      <div className="movies-list">
        <MovieCard />
      </div>
      <Form />

    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    searchFiltring: newFilter => dispatch(searchFiltring(newFilter)),
  };
}

const Container = connect(null, mapDispatchToProps)(Filtred);
export default Container;