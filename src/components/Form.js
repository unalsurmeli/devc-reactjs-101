import React, {Component} from 'react';
import Input from "./Input";
import Button from "./Button";

class Form extends Component {
    state = {
        items: [],
        text: ''
    };

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {text} = this.state;

        if(text.length<1){
            return;
        }

        const newItem = {
            id: Date.now(),
            text: text
        };

        const items  = this.state.items.concat(newItem);

        this.setState({
            items,
            text: ''
        });

        this.props.callBack(items);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    id="new-todo"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <Button>
                    EKLE
                </Button>
            </form>
        );
    }
}

export default Form;
