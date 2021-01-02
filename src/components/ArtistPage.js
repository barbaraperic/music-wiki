import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom'

const ArtistPage = (props) => {

  let location = useLocation();
  const { id } = useParams()
  const { profile } = location.state

  console.log('>>', location.state)
  
  return (
    <div>
      <Link to="/artists">
        <p>BACK</p>
      </Link>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
          <p>{profile.artists[0].name}</p>
          <p>{profile.album.name}</p>
        </div>
        <a 
          href={profile.album.external_urls.spotify} 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src={profile.album.images[0].url}
            alt="album_img"
          />
        </a>

      </div>
    </div>
  )
}

export default ArtistPage