import React, { useState, useEffect } from "react";
import Repo from "../../components/Repo.jsx";

export default ({
  currentUser,
  currentUserId,
  setCurrentRepo,
  currentRepo,
}) => {
  console.log({ currentUser, currentUserId, setCurrentRepo, currentRepo });
  const testRepos = [
    { name: "solibee" },
    { name: "latensee" },
    { name: "gitchat" },
  ];
  const repos = [];
  // const [reposList, setReposList] = useState([
  //   { name: "solibee" },
  //   { name: "turtleset" },
  //   { name: "gitchat" },
  // ]);

  // useEffect(() => {
  //   console.log("use effect triggered");
  //   if (currentUserId) {
  //     console.log('if clause')
  //     fetch(`/api/repos/${currentUserId}`)
  //       .then((response) => {
  //         console.log("response", response);
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log("data!", data);
  //         return data
  //       })
  //       .then((data) => setReposList(data))
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }

  //   //changes testRepos to reposList: Bongi
  // }, [currentUserId]);
  
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
