import React, {useState, useEffect} from "react";

const Serie = (props) =>{
    const{ serie } = props
console.log(props)
    return(
        <React.Fragment>
            <div className="Character__container">
                <div className="Character__data_serie">
                    <h2 className="Character__name">{serie.series_name}</h2>
                </div>
                <div className="Character__image">
                    <img src = {serie.logo} width="200"/>
                </div>
                <div className="Character__description">
                    <p>{serie.series_description}</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Serie;