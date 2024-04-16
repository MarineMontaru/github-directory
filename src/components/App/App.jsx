// Import Semantic UI React framework
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Image, Divider } from 'semantic-ui-react';
import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import Faq from '../Faq/Faq';
import Error404 from '../Errors/Error404';

import 'semantic-ui-css/semantic.min.css';
import './App.scss';

import logo from '../../assets/images/logo-github.png';

function App() {
  //----------------------------------
  // DEFINITION DES VARIABLES DE STATE
  //----------------------------------

  const [submitStatus, setSubmitStatus] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [reposList, setReposList] = useState([]);
  const [resultsPageNb, setResultsPageNb] = useState(0);

  //----------------------------------
  // RECUPERATION DES DONNES DES REPOS
  //----------------------------------

  // collecter les résultats auprès de l'API
  const getResults = (input, stateData, pageNb) => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${input}&sort=stars&order=desc&page=${
          pageNb + 1
        }&per_page=9`
      )
      .then((response) => {
        const { data } = response;
        setResultsPageNb(pageNb + 1);
        setSubmitStatus('succeed');
        setReposList([...stateData, ...data.items]);
      })
      .catch(() => {
        setReposList(false);
        setSubmitStatus('error');
      });
  };

  // handler déclenché suite à la soumission du form de recherche
  const handleSubmit = (event) => {
    // réinitialiser tous les states
    setSubmitStatus('pending');
    setSearchInput('');

    // récupérer la chaine de caractères entrée dans la barre de recherche
    const textInput = event.currentTarget.querySelector('input').value;
    setSearchInput(textInput);

    getResults(textInput, [], 0);
  };

  // afficher plus de résultats
  const handleMoreResults = () => {
    setSubmitStatus('pending');
    getResults(searchInput, reposList, resultsPageNb);
  };

  // récupérer le nombre total de résultats trouvés
  const nbOfResults = reposList.length;

  //-----------------------
  // GESTION DE L'AFFICHAGE
  //-----------------------
  return (
    <Container className="App">
      <NavBar />
      <Image src={logo} size="small" centered />
      <Routes>
        <Route
          key="/"
          path="/"
          element={
            <div>
              <SearchBar
                handleSubmit={handleSubmit}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
              <Message nbOfResults={nbOfResults} submitStatus={submitStatus} />
              {nbOfResults >= 1 && (
                <ReposResults
                  reposList={reposList}
                  submitStatus={submitStatus}
                />
              )}
              <Divider hidden />
              {nbOfResults >= 9 && (
                <ShowMoreButton
                  handleMoreResults={handleMoreResults}
                  submitStatus={submitStatus}
                />
              )}
            </div>
          }
        />
        <Route key="faq" path="faq" element={<Faq />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Container>
  );
}

export default App;
