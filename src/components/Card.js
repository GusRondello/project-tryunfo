import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SuperTrunfo from './SuperTrunfo';

class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="showCard">
        <p>Nome:</p>
        <p data-testid="name-card" name="cardName">
          {cardName}
        </p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          name="cardImage"
        />
        <p data-testid="description-card" name="cardDescription">
          Descrição:
          {' '}
          {cardDescription}
        </p>
        <p data-testid="attr1-card" name="cardAttr1">
          Atributo 1:
          {' '}
          {cardAttr1}
        </p>
        <p data-testid="attr2-card" name="cardAttr2">
          Atributo 2:
          {' '}
          {cardAttr2}
        </p>
        <p data-testid="attr3-card" name="cardAttr3">
          Atributo 3:
          {' '}
          {cardAttr3}
        </p>
        <p data-testid="rare-card" name="cardRare">
          Raridade:
          {' '}
          {cardRare}
        </p>
        <p>{cardTrunfo && <SuperTrunfo />}</p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
