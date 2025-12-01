import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = "8fa4b53036a35460be83f58aaf0b97b5";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    setError("");
    setData(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const json = await res.json();

      if (json.cod !== 200) setError(json.message);
      else setData(json);
    } catch {
      setError("Network error");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">🌦️ Weather App (CRA)</h2>

      <div className="d-flex gap-2 mb-3">
        <input
          className="form-control"
          value={city}
          placeholder="Enter city..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchWeather}>
          Search
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {data && (
         
          <div className="card p-4 shadow-sm text-center">
  <h3>
    {data.name}, {data.sys.country}
  </h3>

  {/* Weather Icon */}
  <img
    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
    alt="weather icon"
    className="mx-auto"
    style={{ width: "100px" }}
  />

  <h1 className="display-4">{Math.round(data.main.temp)}°C</h1>

  <p className="lead text-capitalize">
    {data.weather[0].description}
  </p>

  <div className="d-flex justify-content-center gap-4 mt-3">
    <div>
      <strong>🌡️ Feels Like:</strong> {Math.round(data.main.feels_like)}°C
    </div>
    <div>
      <strong>💧 Humidity:</strong> {data.main.humidity}%
    </div>
    <div>
      <strong>🌬️ Wind:</strong> {data.wind.speed} m/s
    </div>
  </div>
</div>

        
      )}
    </div>
  );
}

export default App;
