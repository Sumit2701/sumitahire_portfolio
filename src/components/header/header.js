import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import './header.css';
export const Header=()=>{
    const navigate=useNavigate();
    let search=''   
    const go=()=>{

        if(search){
            navigate(`/search/${search}`)
        }
    }
    return(
        <div className="header">
            <div className="headerLeft">
                  
                  <Link style={{textDecoration:"none"}} to="/"><img className='header_icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/54px-IMDB_Logo_2016.svg.png' alt='logo'></img><span>Sumit's IMDB Clone</span></Link>
                  <Link style={{textDecoration:"none"}} to="/popular"><span>Popular</span></Link>
                  <Link style={{textDecoration:"none"}}to="/top_rated"><span>Top Rated</span></Link>
                  <Link style={{textDecoration:"none"}}to="/upcoming"><span>Upcoming</span></Link>
                 
                  <form><input type="search" placeholder="Search..." onChange={(event)=>{search=(event?.target.value); }}/>
                  <button  onClick={go} type="submit"> 
                 <i className="fa fa-search" /></button > </form>
                 
            </div>
        </div>
    )
}