import { Segment, Header } from 'semantic-ui-react';

const Error404 = () => {
  return (
    <Segment>
      <Header as="h1">Oups... Erreur 404</Header>
      <p>Le contenu demandé n&apos;existe pas.</p>
    </Segment>
  );
};

export default Error404;
