import React, { Component } from 'react';
import Topnav from './Topnav';
import $ from 'jquery';
import Card from './Card';


class Watchlist extends Component{
	constructor(){
		super()
		this.state = {
			rows:[],
		}
	}


componentWillMount()
{
	var fav=[],
  	k = Object.keys(localStorage)
  	k.forEach((key)=>{
  		const urlString = "https://api.themoviedb.org/3/movie/" + key +"?api_key=e28352683e2c81e21a2fa19948cb541a"
	    $.ajax({
	      url: urlString,
	      success: (searchResults) => {const results = searchResults
	      		results.poster_src= "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + results.poster_path
	          	fav.push(results)
	          	this.setState({rows : fav})
	     }
	 	})
	 }) 
}


  render()
  {
  	return(
  		<div className="tc">
  		<Topnav/>
  			<h1 className="tc">WatchList</h1>
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
  		</div>
  	);
  }
 }



export default Watchlist;