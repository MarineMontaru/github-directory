import { Message as MessageSemantic, Icon } from 'semantic-ui-react';

import PropTypes from 'prop-types';

const Message = ({ nbOfResults, submitStatus }) => {
  if (submitStatus === 'error') {
    return (
      <MessageSemantic>
        <Icon name="warning sign" />
        Une erreur est survenue, veillez réessayer.
      </MessageSemantic>
    );
  }

  if (submitStatus === 'succeed') {
    if (nbOfResults === 1 || nbOfResults === 0) {
      return (
        <MessageSemantic>
          <p>La recherche a donné {nbOfResults} résultat.</p>
        </MessageSemantic>
      );
    }

    return (
      <MessageSemantic>
        <p>La recherche a donné {nbOfResults}+ résultats.</p>
      </MessageSemantic>
    );
  }

  return (
    <MessageSemantic>
      <p>Bienvenue ! Recherchez un nom de dépôt GitHub.</p>
    </MessageSemantic>
  );
};

Message.propTypes = {
  nbOfResults: PropTypes.number,
  submitStatus: PropTypes.string.isRequired,
};

Message.defaultProps = {
  nbOfResults: undefined,
};

export default Message;
