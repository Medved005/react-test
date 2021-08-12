import React from 'react';

import HOC from './HOC';

class Height extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            windowWidth: window.innerWidth
        }
    }

    updateDimensions = () => {
        this.setState({ windowWidth: window.innerWidth});
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    render () {
        return (
            <div className="with_border" style={{height: this.props.height + "px"}}>
                <span style={{width: this.state.windowWidth}}>{ this.state.windowWidth }</span>
            </div>
        );
    }
}

export default HOC(Height);