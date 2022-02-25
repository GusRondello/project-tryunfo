import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';
import './index.css';

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
      cardList: [],
      onInputChange: () => {},
      onSaveButtonClick: () => {},
      onButtonDelete: () => {},
    };
  }

  onButtonDelete = ({ target }) => {
    const { cardList } = this.state;
    const cartaDeletar = cardList.find((carta) => carta.cardName === target.name);
    const isTrunfo = cardList.some((carta) => carta.cardTrunfo === true);
    const cartasAficar = cardList.filter((carta) => carta !== cartaDeletar);
    this.setState({
      cardList: cartasAficar,
      hasTrunfo: !isTrunfo,
    });
    console.log(`Deletado: ${target.name}`);
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
    }, this.handleButton);
  }

  onSaveButtonClick = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardList } = this.state;
    const cardObj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardList: [...cardList, cardObj],
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
      isSaveButtonDisabled,
      cardList } = this.state;
    return (
      <div className="app">
        <h1 className="tittle">Tryunfo Iniciando Projeto</h1>
        <section className="createCard">
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
        </section>
        <section className="divCardList">
          <CardList
            cardList={ cardList }
            onButtonDelete={ this.onButtonDelete }
          />
        </section>
      </div>
    );
  }
}

export default App;
