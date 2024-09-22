
import  { useEffect, useState } from "react";
import axios from "axios";

const CinemaList = () => {
  const [cinemas, setCinemas] = useState([]);

  useEffect(() => {
    const fetchCinemas = async () => {
      try {
        const res = await axios.get(
          "https://cinema-backend-cbpe.onrender.com/api/cinemas"
        );
        setCinemas(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCinemas();
  }, []);

  return (
    <div>
      <h1>Cinemas</h1>
      <ul>
        {cinemas.map((cinema) => (
          <li key={cinema._id}>
            <h2>{cinema.name}</h2>
            <p>Location: {cinema.location}</p>
            <p>Seats: {cinema.seats}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CinemaList;
