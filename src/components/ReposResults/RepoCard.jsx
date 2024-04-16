import { Link } from 'react-router-dom';
import {
  Card,
  GridColumn,
  Image,
  CardContent,
  CardHeader,
  CardMeta,
  CardDescription,
} from 'semantic-ui-react';

import PropTypes from 'prop-types';

import './ReposResults.scss';

const RepoCard = ({ currentRepo }) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, description, html_url } = currentRepo;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { avatar_url, login } = currentRepo.owner;

  return (
    <GridColumn>
      <Link to={html_url}>
        <Card className="repo-card" centered fluid>
          <Image src={avatar_url} wrapped ui={false} />
          <CardContent>
            <CardHeader>{name}</CardHeader>
            <CardMeta>
              <span className="date">{login}</span>
            </CardMeta>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </Card>
      </Link>
    </GridColumn>
  );
};

RepoCard.propTypes = {
  currentRepo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    html_url: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RepoCard;
