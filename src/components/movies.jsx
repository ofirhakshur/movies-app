import React, { Component } from "react";
import Pagination from "./pagination";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./listGroup";
import MoviesTable from "./moviesTable";
import SearchBox from "./searchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    selectedGenre: null,
    searchQuery: ""
  };

  componentDidMount = () => {
    this.setState({ movies: getMovies(), genres: getGenres() });
  };

  handleDelet = movie => {
    const newMovies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: newMovies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: "" });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1, selectedGenre: null });
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      searchQuery
    } = this.state;
    if (this.state.movies.length === 0) {
      return <h3>No movies in Database..</h3>;
    }
    // const filetedMovies =
    //   selectedGenre && selectedGenre._id
    //     ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
    //     : allMovies;
    let filetedMovies = allMovies;
    if (searchQuery) {
      filetedMovies = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filetedMovies = allMovies.filter(m => m.genre._id === selectedGenre._id);
    }

    const movies = paginate(filetedMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ListGroup
                items={this.state.genres}
                selectedItem={this.state.selectedGenre}
                onItemSelect={this.handleGenreChange}
              ></ListGroup>
            </div>
            <div className="col">
              <h3>There are {filetedMovies.length} movies..</h3>
              <SearchBox value={searchQuery} onChange={this.handleSearch} />
              <MoviesTable movies={movies} onDelete={this.handleDelet} />

              <Pagination
                itemCount={filetedMovies.length}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
                currentPage={this.state.currentPage}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
