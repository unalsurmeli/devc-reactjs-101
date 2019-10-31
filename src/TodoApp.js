import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Form from "./components/Form";
import styled from "styled-components";

class TodoApp extends Component {
    state = {
        items: [{'id': 1, 'text': 'İlk Yapılacak Olan'}],
    };

    callBack =(items) => {
        if(items) {
            this.setState({
                items
            });
        }
    };

    render() {
        const {items} = this.state;

        return (
            <Container>
                <Header title="YAPILACAKLAR"/>
                <List items={items}/>
                <Form callBack={this.callBack}/>
            </Container>
        );
    }
}

export default TodoApp;

const Container = styled.div`
    background: #fafafa;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    padding: 0;
    margin-bottom: 2rem;
    width: 50%;
    float: none;
    margin-left: auto;
    margin-right: auto;
`;

