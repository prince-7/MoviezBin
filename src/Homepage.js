import React, { Component } from 'react';
import ControlledCarousel from './carousel';
import SearchBox from './SearchBox';
import Topnav from './Topnav';
import Result from './Result';



class Homepage extends Component{
	constructor(){
		super()
		this.state = {
			searchTerm:'',
			option:'',
		}
	}

  	onSearchChange = (event) =>
	{
		this.setState({ searchTerm : event.target.value})
		localStorage.setItem(this.state.option,this.state.searchTerm)
	}

	option =(event)=>
	{
		localStorage.removeItem('Name')
		localStorage.removeItem('Genre')
		var opt=event.target.value
		this.setState({option: opt})
	}



  showResult()
  {
    window.open('/Result')
  }


	render()
	{
		return(
		<div className="bg-black vh-100">
			<Topnav />
			<div className='tc'>
				<ControlledCarousel />
			</div>
			<div className='tc bottom-0 pv5  fixed w-100'>
				<h1 className="blue f-6 pv0 mv0">MoviezBin</h1>
				<SearchBox searchChange={this.onSearchChange} show={this.showResult} option={this.option}/>
				<h2 className='tc white'>A Repository of your Favourite Movies</h2>
				<h6>Press Spacebar after writing then search</h6>
			</div>
		</div>


	);

	}
}
export default Homepage;