import { Segment, Form, Input, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ handleSubmit, searchInput, setSearchInput }) => {
  return (
    <Segment>
      <Form method="" onSubmit={handleSubmit}>
        <Input
          name="searched-text"
          iconPosition="left"
          placeholder="Rechercher un dépôt"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          fluid
        >
          <Icon name="search" />
          <input />
        </Input>
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.string.isRequired,
};

export default SearchBar;
