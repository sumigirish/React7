import Book from "./Book"
import fantasyData from "./fantasyData"

export default function Fantasy(){
    return(
        <div className = "App">
            {fantasyData.map((m) => (
                <Book img ={m.img} name = {m.name} price = {m.price} />
            )
            )}
            
        </div>
    );

}
