import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import React ,{ Component } from 'react';
    /* creation of class component */
class App extends React.Component{
    constructor(props){
        super(props);
           /*creation of our person state */
        this.state = {
            person :{
                fullName:'Gisele Caroline Bündchen',
                bio : ' Born in 20 july 1980, Gisele is a brazilian model, she has been one of the highest-paid models in the world. In 2007, Bündchen was the 16th-richest woman in the entertainment industry and in 2014, she was listed as the 89th-most-powerful woman in the World by Forbes' ,
                img : './gisle.jfif',
                profession: 'Model, philanthropiste and businesswoman',
                show: false,
            },
            countshow: 0,
        };
        this.timer = null;
    }
        /*  use of the life cycle method*/
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((prevState) => ({
            countshow: prevState.countshow + 1,
        }));
        }, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    
        /*  setting the state show by the setState method*/
    Show = () => {
        this.setState({show: !this.state.show});
        }
        /*  the render method */
    render() {
        return (
            <div className='container' >
                { this.state.show &&
                <div className='box'>
                    <img src={this.state.person.img} alt='gisele'/>
                        <div className='information'>
                            <h1>{this.state.person.fullName}</h1>
                            <p>{this.state.person.profession}</p>
                            <p>{this.state.person.bio}</p>
                        </div>
                        <p className='count'>count: {this.state.countshow} seconds</p>
                </div>}
            <button onClick={this.Show}>Click Me</button>
            
            </div>
        )
    }
}



export default App;