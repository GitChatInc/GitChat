import React, { useState } from 'react';
import Repo from '../../components/Repo.jsx';

export default (props) => {

  const { currentUser } = props;
  const [userRepos, setUserRepos] = useState([]);

  //write a function that fetchs all the repos for the currentUser. 
  
  //currentUser-> {userId, currentUser }
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
        setCurrentRepo={props.setCurrentRepo}
        currentRepo={props.currentRepo}
      />,
    );
  });

  return (
    <div className="w-1/3 overflow-y-hidden hover:overflow-y-auto">{repos}</div>
  );
};
