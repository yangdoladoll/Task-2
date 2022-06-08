import React, { Component } from 'react';
import Users from "./Align";
import './index.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users_data: ([]),
            loading: false
        }
        this.loadUsers = this.loadUsers.bind(this)
    }

    loadUsers() {
        this.setState({ loading: true });
        setTimeout(async function () {
            const response = await fetch("https://reqres.in/api/users?page=1");
            const jsonresponse = await response.json();
            console.log(jsonresponse)
            this.setState({ users_data: jsonresponse["data"], loading: false });
        }.bind(this), 2000);
    }

    render() {
        return (
            <>
                <nav className="navbar" >
                    <div className="nav-items">
                    <button className="getdetails" onClick={this.loadUsers} > Get Users </button>
                    </div>
                </nav>
                <div className="userdata">
                    <
                        Users loading={this.state.loading}
                        users={this.state.users_data}
                    />
                </div >

            </>
        );
    }
}
export default App

