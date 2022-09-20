import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

import Searcher from "./components/searcher";

import { getGitHubUsers } from "./services/users";
import UserCard from "./containers/UserCard";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [data, setData] = useState({});

  useEffect(async () => {
    (async () => {
      try {
        const userResponse = await getGitHubUsers(inputUser);

        if (inputUser === "octocat") {
          localStorage.setItem("octocat", JSON.stringify(userResponse));
        }

        if (userResponse.message === "Not Found") {
          const octocat = JSON.parse(localStorage.getItem("octocat"));
          return setData(octocat);
        }

        setData(userResponse);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard data={data} />
    </Container>
  );
};

export default App;
