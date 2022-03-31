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
                 <div className="App">
                    <div className='header'>
                        <img className='logoMarvel'src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png' />
                    </div>
                    <h1 className="title">Comic Series</h1>
                    <div className='students'>
                        Derek Alvarado, Alex Barraza, Omar Ramos, Luis Hernández, Salvador Perez and Luis Villa
                    </div>
                     <div> 
                        {this.state.series.map((serie) => 
                        {return <Serie serie = {serie}/>
                        })}
                    </div>
                </div>
            </React.Fragment> 
        )
    }
}export default SeriesHome;