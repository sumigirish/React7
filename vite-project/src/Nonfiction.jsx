import Book from "./Book"
import nonfictionData from "./nonfictionData"

export default function Nonfiction(){
    return(
        <div className = "App">
            {nonfictionData.map((m) => (
                <Book img ={m.img} name = {m.name} price = {m.price} />
            )
            )}
            
        </div>
    );

}
