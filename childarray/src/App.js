import Child from "./Child";
export default function App(){

  let images = ["https://img.theweek.in/content/dam/week/review/movies/images/2020/1/16/big-brother-imdb.jpg",
  "https://images.filmibeat.com/webp/img/2023/11/garudanmain-1698988268.jpg",
  "https://th-i.thgim.com/public/incoming/qo613a/article66864970.ece/alternates/LANDSCAPE_1200/neymar.jpg",
  "https://www.filmibeat.com/img/2023/05/2018day1-1683280970.jpg",
  "https://images.cinemaexpress.com/uploads/user/imagelibrary/2023/8/30/original/Ozler.jpg" ];

  let names = ["BIG BROTHER","GARUDAN","NEYMAR","2018","OZLER"];

  return(
    <div className = "App">
      {images.map((im,index) =>
      (
        <Child image={im} name={names[index]} key ={index} />
      )
      )}

    </div>
  )

}