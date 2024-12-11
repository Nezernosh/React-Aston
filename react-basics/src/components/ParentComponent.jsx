import React, { Component, createRef } from 'react';
import ChildComponent from './ChildComponent';
import FunctionalList from './FunctionalList';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            isButtonDisabled: false,
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
        const reactValues = ['react', 'реакт']
        const containsReact = reactValues.some(e => value.toLowerCase().includes(e));
        this.setState({
            inputValue: value,
            isButtonDisabled: containsReact,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма отправлена со значением:', this.state.inputValue);
        this.setState({
            inputValue: '',
            isButtonDisabled: false,
        });
    }

    focusInput = () => {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }

    render() {
        console.log('[ParentComponent] render');
        const { inputValue, isButtonDisabled } = this.state;

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
                    <button type="submit" disabled={isButtonDisabled}>Отправить</button>
                </form>
                <button onClick={this.focusInput}>Выставить фокус в инпут</button>

                <> {/* Сокращенная форма записи React.Fragment */}
                    <ChildComponent
                        stringProp={childStringProp}
                        numberProp={childNumberProp}
                        objectProp={childObjectProp}
                        functionProp={childFunctionProp}
                    />
                    <FunctionalList />
                </>
            </div>
        );
    }
}

export default ParentComponent;
