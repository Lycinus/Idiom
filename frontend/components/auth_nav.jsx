import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import UserPane from './user_pane';

class AuthNav extends React.Component {
    
    constructor(props) {
        super(props);
        this.toggleUserPane = this.toggleUserPane.bind(this)
    }

    toggleUserPane() {
        this.userPane.toggle()
    }


    render() {
        if (!this.props.currentUser) {
            return(
                <div className="auth-nav">
                    <button><i className="fas fa-search"></i></button>
                    <NavLink to='/login' className='nav-bar-link' style={{color: "rgb(40, 206, 137)"}}>Sign In</NavLink>
                    <NavLink to='/signup' className='nav-bar-link' style={{color: "rgb(40, 206, 137)"}}>Get Started</NavLink>
                </div>
            )
        } else {
            return(
                <div className="auth-nav">

                    <div className="auth-nav-buttons">
                        <Route 
                            path="/stories/new" 
                            render={() => <button className="publish">Ready to publish?</button>}/>
                        <Route 
                            path="/stories/edit" 
                            render={() => <button className="publish">Ready to publish?</button>}/>
                        <button><i className="fas fa-search"></i></button>
                        <button><i className="far fa-bookmark"></i></button>
                        <button><i className="far fa-bell"></i></button>
                        <button 
                            id="user-icon"
                            onClick={this.toggleUserPane}
                            >{this.props.currentUser.username[0]}</button>
                    </div>
                    <UserPane
                        ref={node=>{this.userPane = node}}
                        currentUser={this.props.currentUser}
                        logout={this.props.logout}
                        toggleUserPane={this.toggleUserPane}
                        />
                </div>
            )
        }
    }

    
}


export default AuthNav