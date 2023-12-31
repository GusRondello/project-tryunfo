import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';
import Delete from './DeleteButton';

class CardList extends Component {
  render() {
    const { cardList, onButtonDelete } = this.props;
    return (
      <div className="cardList">
        {cardList.length > 0
          ? cardList.map((element) => (
            <div
              key={ element.cardName }
            >
              <Card
                cardName={ element.cardName }
                cardDescription={ element.cardDescription }
                cardAttr1={ element.cardAttr1 }
                cardAttr2={ element.cardAttr2 }
                cardAttr3={ element.cardAttr3 }
                cardImage={ element.cardImage }
                cardRare={ element.cardRare }
                cardTrunfo={ element.cardTrunfo }
              />
              <Delete
                onButtonDelete={ onButtonDelete }
                buttonName={ element.cardName }
              />
            </div>

          )) : <h2>Não a cartas no Baralho!</h2> }
      </div>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onButtonDelete: PropTypes.func.isRequired,
};

export default CardList;
