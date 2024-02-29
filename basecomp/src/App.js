import Movie from "./Movie"
import Hindi from "./Hindi"
import Tamil from "./Tamil"
import Telugu from "./Telugu"
import English from "./English"
export default function App(){

  return (
    <div>
      <h2>Malayalam Movies</h2>
      <Movie />
      <h2>Hindi Movies</h2>
      <Hindi />
      <h2>Tamil Movies</h2>
      <Tamil />
      <h2>Telugu Movies</h2>
      <Telugu />
      <h2>English Movies</h2>
      <English />
    </div>
  )
}