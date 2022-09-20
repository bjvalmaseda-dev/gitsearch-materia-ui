import { CardMedia, Grid } from "@mui/material";
import React from "react";
import PrincipalInformation from "../../components/PrincipalInformation";
import Description from "../Description";

const UserCard = (props) => {
  const { data } = props;
  const { avatar_url } = data;

  return (
    <Grid container>
      <Grid item xs={3}>
        <CardMedia component="img" image={avatar_url} alt="GitHub User" />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation data={data} />
        <Description data={data} />
      </Grid>
    </Grid>
  );
};

export default UserCard;
