import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
          }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email:'',password:''});
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({[name]:value});
    }
    render() { 
        return (  
            <div className="sign-in">
                <h2>I have already to Account</h2>
                <span>Sign in with your email</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" handleChange={this.handleChange} value={this.state.email} />
                    <span>Email</span>
                    <FormInput type="password" name="password" handleChange={this.handleChange} value={this.state.password} />
                    <span>password</span>
                    <input type="submit" value="submit form" />
                </form>
            </div>
         );
    }
}
 
export default Signin;