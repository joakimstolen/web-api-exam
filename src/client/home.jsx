//This file contains code from the lecturer and has been altered to fit the needs of this assignment
//https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-10/src/client/home.jsx

import React from "react";
import { Profile } from "./profile"
import { Timeline } from "./timeline";


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        if (this.props.user) {
            this.props.fetchAndUpdateUserInfo();
        }
    }


    render() {
        const user = this.props.user;
        const loggedIn = user !== null && user !== undefined;

        return (
            <div>
                {loggedIn ? (
                    <div>
                        <Profile fetchAndUpdateUserInfo={this.props.fetchAndUpdateUserInfo} user={this.props.user} users={this.props.users} />
                        <Timeline user={this.props.user} />
                    </div>
                ) : (
                        <div>
                            <h1>Welcome to the house of Medici!</h1>
                            <p>Please log in to view your profile, search for others and keep in touch with old friends</p>

                        </div>
                    )
                }
            </div>
        );
    }
}
