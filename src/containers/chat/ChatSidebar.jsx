import React, { useState, useEffect } from 'react';
import Repo from '../../components/Repo.jsx';

export default ({ currentUser, currentUserId, setCurrentRepo, currentRepo}) => {
  const testRepos = [
    { name: 'solibee' },
    { name: 'latensee' },
    { name: 'gitchat' },
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
