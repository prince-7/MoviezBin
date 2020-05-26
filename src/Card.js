import React from 'react'


const Card =({name, overview , poster_src, id, Watchlist})=>{
  return(
    <div className ='tc bg-light-green br3 pa3 mh4 dib bw2 shadow-5 w-60 mv4 h-60 overflow-hidden'>
      <h2>{name}</h2>
      <img alt='movieposter' width="120" src={poster_src} />
      <h6 className="h-30 overflow-hidden">{overview}</h6>
      <input 
      type='button' 
      className='white bg-blue br4 w-30 b--none'
      value="+ Watchlist"
      onClick={Watchlist}
      />
    </div>
    );
}
export default Card;

