import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate();

  // return <div className={styles.mapContainer}>Map</div>;
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <p>
        position:{lat} {lng}
      </p>
      <button onClick={() => setSearchParams({ lat: 20, lng: 50 })}>
        change position
      </button>
    </div>
  );
}

export default Map;
