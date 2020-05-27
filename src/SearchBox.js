import React from 'react';

const SearchBox= ({searchChange, show, option}) =>{
	return(
		<div className='white pa2'>
		<a className="white f3">Search By </a>
		<select className=" white bg-blue w-10 pa3 b--none" onChange={option}>
			<option value="Select">Select</option>
			<option value="Name">Name</option>
			<option value="Genre">Genre</option>
		</select>
		 <input 
			className='pa3 br4 ba b--blue bg-lightest-blue w-50'
			type='search'
			placeholder='Search Movies or Genres:- Romance, Action, Animation, Crime, Thriller, Comedy '
			onChange={searchChange}
			/>
			<input 
			type='button' 
			className='white bg-blue br4 w-10 pa3 b--none'
			value="Search"
			onClick={show}
			/>
		</div>
	);
}

export default SearchBox;
