<<<<<<< HEAD
import React, { useState } from 'react';
import Repo from '../../components/Repo.jsx';

export default (props) => {

  const { currentUser } = props;
  const [userRepos, setUserRepos] = useState([]);

  //write a function that fetchs all the repos for the currentUser. 
  
  //currentUser-> {userId, currentUser }
=======
import React, { useState, useEffect } from 'react';
import Repo from '../../components/Repo.jsx';

export default ({ currentUser, currentUserId, setCurrentRepo, currentRepo}) => {
>>>>>>> main
  const testRepos = [
    { name: 'solibee' },
    { name: 'latensee' },
    { name: 'gitchat' },
<<<<<<< HEAD
    // { name: "solibee" },
    // { name: "latensee" },
    // { name: "gitchat" },
    // { name: "solibee" },
    // { name: "latensee" },
    // { name: "gitchat" },
    // { name: "solibee" },
    // { name: "latensee" },
    // { name: "gitchat" },
    // { name: "solibee" },
    // { name: "latensee" },
    // { name: "gitchat" },
    // { name: "latensee" },
  ];

  const repos = [];
  testRepos.forEach((e, i) => {
=======
  ];
  const repos = [];
  const [reposList, setReposList] = useState(testRepos);

  useEffect(() => {
    if (currentUserId) {
      fetch(`/api/repos/${currentUserId}`)
        .then(response => response.json())
        .then((data) => {console.log(data)})
        .then(data => setReposList(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [currentUserId]); 

  reposList.forEach((e, i) => {
>>>>>>> main
    repos.push(
      <Repo
        key={i}
        name={e.name}
        setCurrentRepo={setCurrentRepo}
        currentRepo={currentRepo}
      />,
    );
  });

  return (
    <div className="w-1/3 overflow-y-hidden hover:overflow-y-auto">{repos}</div>
  );
};
