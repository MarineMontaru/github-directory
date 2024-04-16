import { Segment, Header, Divider } from 'semantic-ui-react';

const Faq = () => {
  return (
    <Segment>
      <Header as="h1">FAQ</Header>
      <Header as="h2">A quoi ça sert ?</Header>
      Cette application permet de trouver une liste de dépôts GitHub pour un
      critère donné.
      <Divider />
      <Header as="h2">Comment faire une recherche ?</Header>
      Sur la page recherche, complétez le champ de recherche et valider la
      recherche.
      <Divider />
      <Header as="h2">Puis-je chercher n&apos;importe quel terme ?</Header>
      Oui, c&apos;est fou.
    </Segment>
  );
};

export default Faq;
