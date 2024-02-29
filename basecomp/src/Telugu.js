import Movies from "./Movies"
import teluguData from "./teluguData"

export default function Telugu(){
    return(
        <div className = "App">
            {teluguData.map((m) => (
                <Movies url ={m.img} title = {m.title} />
            )
            )}
        </div>
    );

}