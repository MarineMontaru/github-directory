import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import RepoCard from './RepoCard';

const ReposResults = ({ reposList }) => {
  return (
    <Grid centered columns={3}>
      {reposList.map((currentRepo) => {
        return (
          <RepoCard key={currentRepo.id} currentRepo={{ ...currentRepo }} />
        );
      })}
    </Grid>
  );
};

ReposResults.propTypes = {
  reposList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default ReposResults;
