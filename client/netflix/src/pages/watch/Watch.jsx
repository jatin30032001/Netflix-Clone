import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Watch() {
const location = useLocation()
const {movie} = location.state;
console.log(movie)


  return (
    <div className="watch">

      <Link to ="/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.video}
      />
    </div>
  );
}