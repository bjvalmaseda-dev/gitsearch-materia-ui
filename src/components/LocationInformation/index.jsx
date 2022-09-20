import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Business, Language, LocationOn, Twitter } from "@mui/icons-material";

const LocationInformation = (props) => {
  const { data } = props;
  const { location, twitter_username, blog, company } = data;
  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOn />
          <Typography>{location}</Typography>
        </Stack>
        <Stack>
          <Twitter />
          {twitter_username ? (
            <Typography>{`@${twitter_username}`}</Typography>
          ) : (
            <Typography>Not available</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Language />
          {blog ? (
            <Typography>{blog}</Typography>
          ) : (
            <Typography>Not available</Typography>
          )}
        </Stack>
        <Stack>
          <Business />
          {company ? (
            <Typography>{company}</Typography>
          ) : (
            <Typography>Not available</Typography>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
