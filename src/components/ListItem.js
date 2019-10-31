import React, {Component} from 'react';

class ListItem extends Component {
    render() {
        return (
            <div>
                <li {...this.props}/>
            </div>
        );
    }
}

export default ListItem;
