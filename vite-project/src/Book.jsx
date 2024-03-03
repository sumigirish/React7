export default function Book(props) {

    return (
      <div className = "Book">
        <img src={props.img} alt="book" />
        <h2> {props.name} </h2>
        <p> {props.price} </p>
        {props.price>200 && 
	    (<p id="high"> Price is greater than 200 </p>) }
        
      </div>


    );
  }

  