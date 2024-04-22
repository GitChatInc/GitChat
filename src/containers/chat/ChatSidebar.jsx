import React from "react";
import Repo from "../../components/Repo.jsx";

export default () => {
  const testRepos = [
    { name: "solibee" },
    { name: "latensee" },
    { name: "gitchat" },
  ];
  let repos = [];
  testRepos.forEach((e, i) => {
    repos.push(<Repo key={i} name={e.name} />);
  });

  return <div class="w-1/3 rounded-lg  border p-1"> {repos}</div>;
};
