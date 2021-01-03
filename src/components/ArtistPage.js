import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import Loading from './Loading'

const ArtistPage = () => {

  let location = useLocation();
  const { profile } = location.state

  if(!profile) {
    return <Loading />
  }
  
  return (
    <div>
      <Link to="/artists">
        <p>BACK</p>
      </Link>
      <div>
        <p>{profile.artists[0].name} - {profile.album.name}</p>
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