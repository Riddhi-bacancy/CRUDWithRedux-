import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectAction';

class Form2 extends Component {
    state = {
        firstName:'',
        lastName:'',
        address:'',
        age:'',
        gender:[],
        hobby:[],
    }
    handleChange(e) {
        const state = {...this.state}
        state[e.target.name] = e.target.value
        this.setState( state )

    }
    handleChecked = (e) => {
        if(e.target.checked){
            this.setState({hobby:[...this.state.hobby,e.target.value]})
        }
        else{
            const index=this.state.hobby.indexOf(e.target.value);
            const newarray=[...this.state.hobby.slice(0,index),...this.state.hobby.slice(index+1)]
            this.setState({hobby:newarray})
        }
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <br></br>
                <br></br >
                <form>
                    <label>First Name:</label>
                    <input 
                    type="text"
                    name="firstName"
                    placeholder="Enter the First Name..." 
                    onChange={(e) => {this.handleChange(e)}}/>
                    <br />
                    <br />

                    <label>Last Name:</label>
                    <input 
                    type="text"
                    name="lastName"
                    placeholder="Enter the Last Name..." 
                    onChange={(e) => {this.handleChange(e)}}/>
                    <br />
                    <br />

                    <label>Address:</label>
                    <textarea 
                    rows="5"
                    cols="30"
                    name="address" 
                    onChange={(e) => {this.handleChange(e)}}/>
                    <br />
                    <br />

                    <label>Age:</label>
                    <input 
                    type="number"
                    name="age" 
                    onChange={(e) => {this.handleChange(e)}}/>
                    <br />
                    <br />

                    <label>Gender:</label>
                    <input 
                    type="radio" 
                    name="gender" 
                    value="Male" 
                    onChange={(e) => {this.handleChange(e)}}
                    />Male
                    <input 
                    type="radio" 
                    name="gender" 
                    value="Female" 
                    onChange={(e) => {this.handleChange(e)}}
                    />Female
                    <br />
                    <br />

                    <label>Hobby:</label>
                    <input 
                    type="checkbox"
                    value="reading"
                    name="hobby"
                    onChange={this.handleChecked} 
                    />Reading
                    <input 
                    type="checkbox"
                    value="playing"
                    name="hobby"
                    onChange={this.handleChecked} 
                    />Playing
                    <input 
                    type="checkbox"
                    value="singing"
                    name="hobby"
                    onChange={this.handleChecked} 
                    />Singing
                    <br />
                    <br/>
                    
                    <button name="b2" onClick = {this.handleSubmit}>ADD</button>
                   
                </form>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
 return{
    createProject: (project) => dispatch(createProject(project))
 }
}
export default connect((state)=>{return{state:state}},mapDispatchToProps)(Form2);