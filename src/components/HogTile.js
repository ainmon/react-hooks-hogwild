

function HogTile(){
    
    
    
    return(
        <div className="pigTile">
            <h3 className="pigTile">{text}</h3>
            <img src={image} />
            <ul className="details">
                <li>{specialty}</li>
                <li>{weight}</li>
                <li>{greased}</li>
                <li>{reward}</li>
            </ul>
        </div>
        
    )
}