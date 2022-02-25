import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Delete extends Component {
  render() {
    const { onButtonDelete, buttonName } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-button"
        onClick={ onButtonDelete }
        name={ buttonName }
      >
        Excluir
      </button>
    );
  }
}

Delete.propTypes = {
  onButtonDelete: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default Delete;
