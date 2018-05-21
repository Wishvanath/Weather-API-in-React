    import React from 'react';
    class Weather extends React.Component{
        render(){
            return(
                <div>
                   {/* now call the state value using the concept of the props */}
                    {/* <p>Temperature:{this.props.temperature} </p>
                    <p>City Name:{this.props.city}</p>    
                    <p>Country Name: {this.props.country}</p>
                    <p> Humidity: {this.props.humidity}</p>
                    <p>Desceription:{this.props.description}</p> */}

                    {/* to omit the empty sting on the screen use the concept of and operator */}
                    {this.props.temperature && <p>Temperature:{this.props.temperature} </p>}
                    {this.props.country && <p>Country Name: {this.props.country}</p>}
                    {this.props.city && <p>City Name:{this.props.city}</p> }
                    {this.props.humidity && <p> Humidity: {this.props.humidity}</p>}
                    {this.props.description && <p>Desceription:{this.props.description}</p>}

                </div>
            ); // end of return function
        }//end of render method

    }// end of class
    // export this component to use in other componets
    export default Weather;