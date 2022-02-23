import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: 's',
      cardDescription: 's',
      cardAttr1: 's',
      cardAttr2: 's',
      cardAttr3: 's',
      cardImage: 's',
      cardRare: 's',
      cardTrunfo: true,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      onInputChange: () => {},
      onSaveButtonClick: () => {},
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    console.log(name);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Tryunfo Iniciando Projeto</h1>
        <Form value={ this.state } />
      </div>
    );
  }
}

export default App;
