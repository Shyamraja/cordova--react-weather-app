import React, { Component } from 'react';
import Form from './components/Form';
import Example from'./components/Example';
import Weather from './components/Weather';

const API_KEY = "f6984a18510a1d6c005e35fff7cc4174";
class App extends Component {
  constructor(props){
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.state = {
      tempraure: undefined,
      city: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  }
  async getWeather(e){
    e.preventDefault();

    const city = e.target.elements.city.value;

   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
   
   
    if(city){
      console.log(data);
      this.setState({
         tempraure:   data.main.temp,
         city:        data.name,
         humidity:    data.main.humidity,
         description: data.weather[0].description,
          error:       ""

      });
   
    }else{
      this.setState({
          tempraure:   undefined,
         city:        undefined,
         humidity:    undefined,
         description: undefined,
          error:       undefined

      });
    }
    
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
          <div className="containers">
           <div className="row">
             <div className="col-xs-5 title-container">
                  <Example />
              </div>
              
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather tempraure={this.state.tempraure} 
                            
                       humidity={this.state.humidity}
                       city={this.state.city}
                        description={this.state.description}
                        error={this.state.error}
                    />
                  </div>
                  </div>
             
              </div>
             </div>
          
           </div>
        </div>
    );
  }
}

      export default App;