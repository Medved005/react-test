import React, {Component} from 'react';

export default function Hoc(HocComponent) {
    return class extends Component {
        constructor (props) {
            super(props)
    
            this.state = {
                divHeight: 120
            }
        }

        render () {
            const changeDivHeight = val => !/^[0-9]+$/.test(val) ? alert("Please only enter numeric characters! (Allowed input:0-9)") : this.setState({divHeight: val});

            return (
                <div>
                    <HocComponent {...this.props} height={this.state.divHeight} />

                    <input onChange={e => changeDivHeight(e.target.value)} value={this.state.divHeight} />
                </div>
            );
        }
    } 
}