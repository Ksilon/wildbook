import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Ctx } from "../../App";
import "./style.css";

export default ({animal}) => {
    const {setAnimal} = useContext(Ctx);

    let bg = "orange ";
    if (animal.image) {
        bg += `url(${animal.image})`;
    }
    bg +=  " center center no-repeat"
    const style = {
        background: bg,
        backgroundSize: animal.image ? "cover" : "contain",
    }

    return <div className="card" style={style} onClick={() => setAnimal(animal)}>
        <Link to={`/animals/${animal._id}`}>
            {animal.type}
        </Link>
    </div>
}