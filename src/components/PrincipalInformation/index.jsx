import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const PrincipalInformation = (props) => {
  const { data } = props;
  const { name, login, created_at } = data;
  return (
    <>
      <Stack>
        <Typography>{name}</Typography>
        <Typography>{created_at}</Typography>
      </Stack>
      <Typography>{login}</Typography>
    </>
  );
};

export default PrincipalInformation;
