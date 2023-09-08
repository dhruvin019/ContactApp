



import React from "react";
 
class Addcontact extends React.Component {
    state = {
        name:"",
        email:"",
    };

    add = (event) => {
        event.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("all the field are mandatory");
            return;
        }
        this.props.addcontacthandler(this.state);
        this.setState({name:"",email:""})
        
    }
    render() {
        return(
            <div className="main">
                <div className="addcontact">Add Contact</div>
                <form  onSubmit={this.add} >
                    <div className="detail"></div>
                    <div className="name">
                        <label>Name:</label>
                        <input className="input1" type="text" name="name" placeholder="Name" 
                        value={this.state.name}
                        onChange={ (event) => this.setState({name: event.target.value})} />
                    </div>

                    <div className="email">
                        <label>Email:</label>
                        <input className="input2"  type="text" name="email" placeholder="email"
                        value={this.state.email}
                        onChange={ (event) => this.setState({email: event.target.value})} />
                    </div>
                    <button className="btn">Add</button>
                </form>
            </div>
        );
    }
}

export default Addcontact; 