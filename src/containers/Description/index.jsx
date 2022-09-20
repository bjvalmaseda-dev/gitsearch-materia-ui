import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import LocationInformation from "../../components/LocationInformation";
import PaperInformation from "../../components/PaperInformation";

const Description = (props) => {
  const { data } = props;
  const { bio } = data;
  return (
    <>
      <Stack>
        {bio ? (
          <Typography>{bio}</Typography>
        ) : (
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            provident repellendus harum eos voluptates, ipsa, unde laboriosam
            facilis quae vel voluptatem magni commodi labore eligendi totam
            possimus et corporis eius?
          </Typography>
        )}
      </Stack>
      <PaperInformation data={data} />
      <LocationInformation data={data} />
    </>
  );
};

export default Description;
