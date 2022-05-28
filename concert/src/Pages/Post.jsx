import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineLike} from 'react-icons/ai'
import Reacticons from '../custom icons/Reacticons'

const Post = () => {
    let[album,setAlbum]=useState([])

    useEffect(() => {
        async function album() {
          let data = await axios.get("https://api.github.com/users");
      
            console.log(data.data);
            setAlbum(data.data)
        }
        album()
    },[])

  return (
    <section>
     
          <article className='map'>{album.map((x) => {
              return (
                <div className="card_body">
                  <div className="card">
                    <img src={x.avatar_url} />
                    <div>
                      <div className="icon">
                        <h1>id: {x.id}</h1>
                        <Link to="/">
                          <span>
                            <AiOutlineLike></AiOutlineLike>
                          </span>
                        </Link>
                      </div>
                      <div className='details'>
                        <h4>Username: {x.login}</h4>
                        <h4>type: {x.type}</h4>
                      </div>
                    
                    </div>
                  </div>
                </div>
               
                  
              );
          }
           )}</article>
   </section>
  )
}

export default Post