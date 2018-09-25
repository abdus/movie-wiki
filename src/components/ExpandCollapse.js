import React from 'react';

class ExpandCollapse extends React.Component {
    constructor() {
        super();
        this.state = {
            isExpand: false
        }
    }

    clickToExpand() {
        this.setState({isExpand: !this.state.isExpand})
    }

    render() {
        return(
            <div className={this.state.isExpand ? 'expand' : 'collapse'} onClick={this.clickToExpand.bind(this)}>{this.props.children}</div>
        )
    }
}


export default ExpandCollapse;