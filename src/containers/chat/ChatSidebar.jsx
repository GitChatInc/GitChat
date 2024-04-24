
import React, { useState } from 'react';
import Repo from '../../components/Repo.jsx';

export default ({ currentUser, currentUserId, setCurrentRepo, currentRepo}) => {

  //  const { currentUser } = props;
  const [userRepos, setUserRepos] = useState([]);

  const testRepos = [
    { name: 'solibee' },
    { name: 'latensee' },
    { name: 'gitchat' },
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
