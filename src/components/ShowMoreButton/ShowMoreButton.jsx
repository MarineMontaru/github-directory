import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ShowMoreButton = ({ handleMoreResults, submitStatus }) => {
  if (submitStatus === 'pending') {
    return (
      <Button fluid loading>
        Loading
      </Button>
    );
  }

  if (submitStatus === 'succeed') {
    return (
      <Button fluid onClick={handleMoreResults}>
        Afficher plus de résultats
      </Button>
    );
  }
};

ShowMoreButton.propTypes = {
  handleMoreResults: PropTypes.func.isRequired,
  submitStatus: PropTypes.string.isRequired,
};

export default ShowMoreButton;
