import React, {useState, useEffect} from "react";

const Serie = (props) =>{
    const{ serie } = props
console.log(props)
    return(
        <React.Fragment>
            <h3>{serie.series_name}</h3> 
            <img src = {serie.logo} width="200"/>
            <p>{serie.series_description}</p>
        </React.Fragment>
    )
}
export default Serie;