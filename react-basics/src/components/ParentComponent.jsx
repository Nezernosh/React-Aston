import React, { Component, createRef } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        this.inputRef = createRef();
        console.log('[ParentComponent] constructor');
    }

    componentDidMount() {
        console.log('[ParentComponent] componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('[ParentComponent] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[ParentComponent] componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('[ParentComponent] componentWillUnmount');
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        this.setState({
            inputValue: value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма отправлена со значением:', this.state.inputValue);
        this.setState({
            inputValue: '',
        });
    }

    render() {
        console.log('[ParentComponent] render');
        const { inputValue } = this.state;

        const childStringProp = "Hello, World!";
        const childNumberProp = 7;
        const childObjectProp = { name: 'Павел', age: 27 };
        const childFunctionProp = () => console.log('Вызывается function prop');

        return (
            <div style={{ border: '1px solid red', padding: '10px' }}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Форма для ввода:
                        <input
                            type="text"
                            value={inputValue}
                            onChange={this.handleInputChange}
                            ref={this.inputRef}
                        />
                    </label>
                    <button type="submit">Отправить</button>
                </form>

                <ChildComponent
                    stringProp={childStringProp}
                    numberProp={childNumberProp}
                    objectProp={childObjectProp}
                    functionProp={childFunctionProp}
                />
            </div>
        );
    }
}

export default ParentComponent;
