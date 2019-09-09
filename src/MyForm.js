import React, { Component } from 'react';

class MyForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            globalTitle: ''
        }
    }
    onValidation = e => {
        e.preventDefault();
        const newGlobalTitle = "Mon formulaire - " + this.state.title;
        this.setState({
            globalTitle: newGlobalTitle
        })
    }

    handleTitleChange = e => {
        const newTitle = e.target.value;
        this.setState(
            {title: newTitle}
        );
    }

    componentDidMount = () => {

        console.log('Formulaire rendu');
        //setInterval(this.timer.bind(this), 1000);
    }

    componentDidUpdate = () => {
        console.log('Titre changé');
    }

    render() {
        return(
            <form onSubmit={this.onValidation}>
                <input type="text" onChange={this.handleTitleChange}/>
                <button type="submit">Submit</button>
            </form>

        );
    }
}

export default MyForm;