import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM --> send data to API!
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }

    render() {
        const { values: {firstName, lastName, email, occupation, city, bio} } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                    </List>
                    <ListItem
                            primaryText="Last Name"
                            secondaryText={firstName}
                        />
                    <ListItem
                            primaryText="Email Name"
                            secondaryText={firstName}
                        />
                    <ListItem
                            primaryText="Occupation Name"
                            secondaryText={firstName}
                        />
                    <ListItem
                            primaryText="City"
                            secondaryText={firstName}
                        />
                    <ListItem
                            primaryText="Bio"
                            secondaryText={firstName}
                        />
                    <br/>
                    <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;