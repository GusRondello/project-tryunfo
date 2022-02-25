import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Checbox extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="trunfoCheck">
        <input
          id="trunfoCheck"
          type="checkbox"
          name="cardTrunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}
Checbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Checbox;
