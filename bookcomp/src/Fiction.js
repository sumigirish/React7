import Book from "./Book"
import fictionData from "./fictionData"

export default function Fiction(){
    return(
        <div className = "App">
            {fictionData.map((m) => (
                <Book img ={m.img} name = {m.name} price = {m.price} />
            )
            )}
            
        </div>
    );

}
