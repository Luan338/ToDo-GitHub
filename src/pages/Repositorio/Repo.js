import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import api from "../../Services/Api";

const Repo = ({ match }) => {
  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(match.params.repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);

      console.log(repositorioData.data);
      console.log(issuesData.data);
    }
    load();
  }, []);

  return (
    <Container>
      <h1>oi</h1>
    </Container>
  );
};

export default Repo;
