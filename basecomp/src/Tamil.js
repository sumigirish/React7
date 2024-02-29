import Movies from "./Movies"
import tamilData from "./tamilData"

export default function Tamil(){
    return(
        <div className = "App">
            {tamilData.map((m) => (
                <Movies url ={m.img} title = {m.title} />
            )
            )}
        </div>
    );

}