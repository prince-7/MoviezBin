import React, { Component } from 'react';
import Topnav from './Topnav';
import $ from 'jquery';
import Homepage from './Homepage';
import SearchBox from './SearchBox';
import Card from './Card';
import {genres} from './genres';


class Result extends Component{
	constructor(){
		super()
		this.state = {
			searchTerm:'',
			rows: [],
			similar:[],
			id:'',
		}
	}

	performSearch(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=e28352683e2c81e21a2fa19948cb541a&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {const results = searchResults.results
        	this.setState({id:results[0].id})
        	console.log(this.state.id)
 			this.similarMovies()
 			this.mainmov()
     }
 	})
}


	mainmov()
	{
		var id=this.state.id,
		fav=[]
		const urlString = "https://api.themoviedb.org/3/movie/" + this.state.id +"?api_key=e28352683e2c81e21a2fa19948cb541a"
	    $.ajax({
	      url: urlString,
	      success: (searchResults) => {const results = searchResults
	      		results.poster_src= "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + results.poster_path
	          	fav.push(results)
	          	this.setState({rows : fav})

	     }
	 	})
	}

 	similarMovies()
 	{
 			const similarUrl= "https://api.themoviedb.org/3/movie/"+this.state.id+"/similar?api_key=e28352683e2c81e21a2fa19948cb541a&page=1"
    $.ajax({
      url: similarUrl,
      success: (searchResults) => {const results = searchResults.results
        var movieRows =[]
        results.forEach((movie) => {
        	movie.poster_src= "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path
        	const movieRow = movie
          	movieRows.push(movieRow)
          })

        this.setState({similar: movieRows})
     }
 	})
  }

 
  componentWillMount()
  {
  	if(localStorage.getItem('Name'))
  	{
  		var term= localStorage.getItem('Name')
  		this.performSearch(term)
  	}
  	if(localStorage.getItem('Genre'))
  	{
  		var term=localStorage.getItem('Genre')
  		this.GenreSearch(term)
  	}
 }	


  	GenreSearch(term)
 	{
 		console.log(term)
 		genres.forEach((genre)=>{
 			if(genre.name === term)
 			{
 				console.log(term)
 				console.log(genre.id)
 				const GenUrl="https://api.themoviedb.org/3/discover/movie?api_key=e28352683e2c81e21a2fa19948cb541a&sort_by=popularity.desc&page=1&with_genres="+genre.id
 		console.log(GenUrl)
 		$.ajax({
      url: GenUrl,
      success: (searchResults) => {const results = searchResults.results
        var movieRows =[]
        results.forEach((movie) => {
        	movie.poster_src= "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path
        	const movieRow = movie
          	movieRows.push(movieRow)
          })

        this.setState({similar: movieRows})
     }
 	})
 			}
 		})
 	}



  Watchlist = (event) =>
  {
  	localStorage.setItem((this.state.rows[0].id), (this.state.rows[0].title));
  }

  


	render()
	{
		return(
		<div className='tc'>
			<Topnav/>		
			<h1 className='bg-white'>Result</h1>
				<div className="vh-90 pa3 mv3">
				{
					this.state.rows.map((movies , i ) => {
					return(
							<Card

							key={i}
							name={this.state.rows[i].title}
							overview={this.state.rows[i].overview}
							poster_src ={this.state.rows[i].poster_src}
							Watchlist = {this.Watchlist}
							/>
						);
					})
				}
			</div>
			<h1 className='bg-white'>Similar Movies</h1>
				<div className="vh-90 pa3 mv3">
				{
					this.state.similar.map((movies , i ) => {
					return(
							<Card
							key={i}
							name={this.state.similar[i].title}
							overview={this.state.similar[i].overview}
							poster_src ={this.state.similar[i].poster_src}
							Watchlist = {this.Watchlist}
							/>
						);
					})
				}
			</div>
		</div>
	);

	}

} 
export default Result;