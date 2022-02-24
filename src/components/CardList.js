import React, { Component } from 'react';

class CardList extends Component {
  render() {
    const { cardList } = this.props;
    // console.log(cardList[0]);
    // const { cardName } = cardList[0];

    console.log(cardList.cardName);
    /* const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = cardList; */
    return (
    // {cardList.map((element) => <Card cardName={ element.cardName } />)}
      <div>Ois</div>
    );
  }
}

/* CardList.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
 */
export default CardList;
