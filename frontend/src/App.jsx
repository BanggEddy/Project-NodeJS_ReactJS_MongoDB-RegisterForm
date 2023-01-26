import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

constructor(props){
    super(props)
    this.state = {
        fullName:'',
        username:'',
        email:'',
        password:'',
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
}

//Change the this.state value
//Take the value of the event and save it 
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    
    //Front and take the value
    render() {
        return(
            <div> 
                <div className='container'> 
                    <div className='form-div'></div>
                        <form> 
                            <input type='text' 
                            placeholder='Full Name' 
                            onChange={this.changeFullName} 
                            value={this.state.fullName} 
                            className='form-control form-group' />

                            <input type='text' 
                            placeholder='Username' 
                            onChange={this.changeUsername} 
                            value={this.state.username} 
                            className='form-control form-group' />

                            <input type='text' 
                            placeholder='Email' 
                            value={this.state.email} 
                            onChange={this.changeEmail} 
                            className='form-control form-group' />

                            <input type='password' 
                            placeholder='Password' 
                            onChange={this.changePassword} 
                            value={this.state.password} 
                            className='form-control form-group' />

                            <input type='submit' className="btn btn-danger btn-block" value='Submit' />
                        </form> 
                    </div>
                </div>
        );
    }
}

export default App;