import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Business, Language, LocationOn, Twitter } from "@mui/icons-material";

const LocationInformation = (props) => {
  const { data } = props;
  const { location, twitter_username, blog, company } = data;
  return (
    <Grid container spacing={2} sx={{ marginTop: "15px" }}>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOn />
          <Typography>{location}</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Twitter />
          {twitter_username ? (
            <Typography>{`@${twitter_username}`}</Typography>
          ) : (
            <Typography>Not available</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <Language />
          {blog ? (
            <a href={blog} target="_blank">
              <Typography>{blog}</Typography>
            </a>
          ) : (
            <Typography>Not available</Typography>
          )}
        </Stack>
        <Stack direction="row" spacing={2}>
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
