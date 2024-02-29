import Movies from "./Movies"
import englishData from "./englishData"

export default function English(){
    return(
        <div className = "App">
            {englishData.map((m) => (
                <Movies url ={m.img} title = {m.title} />
            )
            )}
        </div>
    );

}