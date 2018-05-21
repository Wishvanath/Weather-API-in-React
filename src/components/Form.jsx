import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit = {this.props.getWeather}>
                    <input type = "text" name = "city" placeholder = "City Name" />
                    <input type = "text" name = "country" placeholder ="Your Country"/>
                    <button type = "submit">Get Weather</button>
                </form>
            </div>
        ); // end of return
    }// end of render

}// end of class

// export it to use in another components 
export default Form;