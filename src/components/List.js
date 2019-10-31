import React, {Component, Fragment} from 'react';
import ListItem from "./ListItem";

class List extends Component {
    render() {
        const {items} = this.props;

        console.log(items);

        return (
            <Fragment>
                <ul>
                    {
                        items.map(item => (
                                <ListItem key={item.id}>
                                    {item.text}
                                </ListItem>
                            )
                        )
                    }
                </ul>
            </Fragment>
        );
    }
}

export default List;
