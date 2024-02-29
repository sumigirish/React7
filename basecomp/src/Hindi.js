import Movies from "./Movies"
import hindiData from "./hindiData"

export default function Hindi(){
    return(
        <div className = "App">
            {hindiData.map((m) => (
                <Movies url ={m.img} title = {m.title} />
            )
            )}
        </div>
    );

}