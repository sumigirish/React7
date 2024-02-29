import Movies from "./Movies";
import listData from "./data";


export default function Movie() {
  return (
    <div className="App">
      {listData.map((m) => (
        <Movies url={m.img} title={m.title} />
      ))} 
      

      </div>
  );
}