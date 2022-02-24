import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: () => {},
      onSaveButtonClick: () => {},
    };
  }

  handleTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  handleTextButton = () => {
    const values = ['cardName',
      'cardDescription',
      'cardImage',
      'cardRare'];
    return values.every((nome) => {
      const states = this.state;
      return states[nome];
    });
  }

  handleNumberButton = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attValues = [cardAttr1, cardAttr2, cardAttr3];
    const numberArray = attValues.map((element) => Number(element));
    const min = 0;
    const max = 90;
    const maxSum = 210;
    const sumResult = numberArray.reduce((a, b) => a + b) <= maxSum;
    const valuesMinMax = numberArray.every((element) => {
      const isMin = element >= min;
      const isMax = element <= max;
      return (isMin && isMax);
    });
    return valuesMinMax && sumResult;
  }

  handleButton = () => {
    const stateText = this.handleTextButton();
    const attrValues = this.handleNumberButton();
    this.setState({
      isSaveButtonDisabled: !(attrValues && stateText),
    });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.handleButton());
  }

  onSaveButtonClick = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    }, () => this.handleTrunfo());
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo Iniciando Projeto</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
