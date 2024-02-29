export default function Movies(props) {
    const { url ,title} = props;
    return (
      <div className = "Movie">
        <img src={url} alt="movie" />
        <h2> {title} </h2>
      </div>
    );
  }