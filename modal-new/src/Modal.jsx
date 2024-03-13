
import "./modal.css"
export const Modal= ({onClose,show}) => {
if (!show){
    return null;
}

return (
    <div className = "modal">
        <div className="content">
            <h4>Welcome!!</h4>  
            <p>This is the Basic Modal Demo</p>         
            <div className = "footer">
                <button onClick={onClose}>Close</button>                
            </div>
        </div>
    </div>
)
}
