import React from "react";
import Http from "../../lib/tidbisapi/SeriesApi";
//import { Link } from "react-router-dom"

/*
Developed by: Manuel Barraza, Derek Alvarado and Luis Villa
Group: TIDBIS41M
Software version: 1.0
Date developed: wednesday, March 30, 2022
*/

const Series = () =>{
    const getData = async(api_url) =>{
        const response = await Http.instance.get_series()
        }
        getData();
    return (
        <React.Fragment>
               <div>
                   <h1>Series</h1>
               </div>
        </React.Fragment>
    );
}

export default Series;