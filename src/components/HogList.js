
function HogList( {hogs, displayTile, showInfo} ){

    
    const tileList = hogs.map((hog) => {
        <HogTile 
        key={hog.name}
        text={hog.name}
        image={displayTile ? hog.image : null}
        specialty={displayTile ? hog.specialty : null}
        greased={displayTile ? hog.greased : null}
        weight={displayTile ? hog.weight : null}
        reward={displayTile ? hog[5] : null}
        />
    })

    return (
        <div className="ui grid container" onClick={showInfo}>
            {tileList}
        </div>
    )

}