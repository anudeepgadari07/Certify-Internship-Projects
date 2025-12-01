import React from 'react';

export default function MovieCard({movie}){
  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/400x220?text=No+Image';
  return (
    <div className="card h-100">
      <img src={poster} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.release_date ? movie.release_date.slice(0,4) : ''} • {movie.vote_average}</p>
        <p className="card-text small">{movie.overview?.slice(0,100)}...</p>
      </div>
    </div>
  );
}
