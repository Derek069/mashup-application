import React from "react";
import http from "../lib/mashupAPIRequest";
import Serie from "../components/Serie";

class SeriesHome extends React.Component{
    state={
        series:[]
    }
    componentDidMount = () =>{
        this.getData(URL)
    }
    getData = async(api_url) =>{
        const response = await http.instance.getSeries()
        this.setState({series: response.results})
        console.log(this.state.series)
    }
    render(){
        return(
            <React.Fragment>
                 <body>
                     <h1>Marvel's Comic Series</h1>
                     
                     <div> 
                        {this.state.series.map((serie) => 
                        {return <Serie serie = {serie}/>
                        })}
                        </div> 
                 </body>
            </React.Fragment> 
        )
    }
}export default SeriesHome;