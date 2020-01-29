import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    };

    static defaultProps = {
        bulletInChamber: 8
    }
    

    componentWillUnmount() {
        clearTimeout(this.timeOut)
    }

    handleButtonClick = () => {
        this.setState({spinningTheChamber: true})
        let randomNum = Math.ceil(Math.random() * 8);
        this.timeOut = setTimeout(() => {
            this.setState(
            {
                chamber: randomNum,
                spinningTheChamber: false
            }, )
        }, 2000);
    }

    renderState = () => {
        if(this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!'
        } else {
            return `you're safe!`
        }
    }

    render(){
        return (
            <div>
                <p>{this.renderState()}</p>
                <button onClick={this.handleButtonClick}>Pull the trigger</button>
            </div>
        )
    }
}   

export default RouletteGun;