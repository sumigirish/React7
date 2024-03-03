export default function Book(props) {

    function print ()
    {
        alert( "Button clicked")
    }
    return (
      <div className = "Book">
        <img src={props.img} alt="book" />
        <h2> {props.name} </h2>
	    <p> {props.price} </p>
        <button onClick ={print}> Price less than 200 </button>
      </div>


    );
  }

  