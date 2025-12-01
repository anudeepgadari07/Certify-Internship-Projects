import React, {useState, useEffect} from 'react';
import MovieCard from './components/MovieCard';

const TMDB_KEY = '28be741f280e8ec9766ecb4f3fd1c567';
const BASE = 'https://api.themoviedb.org/3';

export default function App(){
  const [movies, setMovies] = useState([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    fetchTrending();
  }, []);

  function fetchTrending(){
    setLoading(true);
    fetch(`${BASE}/trending/movie/week?api_key=${TMDB_KEY}`)
      .then(res=>res.json()).then(data => {
        setMovies(data.results || []);
        setLoading(false);
      }).catch(()=>setLoading(false));
  }

  function search(e){
    e.preventDefault();
    if(!q) return fetchTrending();
    setLoading(true);
    fetch(`${BASE}/search/movie?api_key=${TMDB_KEY}&query=${encodeURIComponent(q)}`)
      .then(res=>res.json()).then(data => { setMovies(data.results || []); setLoading(false); });
  }

  return (
    <div className="container py-4">
      <h1 className="mb-3">Movie Recommendation App</h1>
      <form className="d-flex mb-3" onSubmit={search}>
        <input className="form-control me-2" placeholder="Search movies..." value={q} onChange={e=>setQ(e.target.value)} />
        <button className="btn btn-primary search-btn" type="submit">Search</button>
      </form>

      {loading && <div>Loading...</div>}
      <div className="row">
        {movies.map(m => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={m.id}>
            <MovieCard movie={m} />
          </div>
        ))}
      </div>
    </div>
  );
}

