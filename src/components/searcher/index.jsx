import React, { useState } from "react";
import { Stack } from "@mui/system";
import { IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searcher = (props) => {
  const { inputUser, setInputUser } = props;
  const [value, setValue] = useState("");

  const onSearchValueChange = (event) => {
    const input = event.target.value;
    setValue(input);
  };

  const handleSubmit = () => {
    setInputUser(value);
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        id="user"
        label="GitHub User"
        variant="outlined"
        size="small"
        value={value}
        onChange={onSearchValueChange}
        placeholder="octocat"
        sx={{ width: "90%" }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSubmit}>
              <Search />
            </IconButton>
          ),
        }}
      />
      {/* <IconButton
        size="small"
        sx={{
          left: "-48px",
        }}
      >
        <Search />
      </IconButton> */}
    </Stack>
  );
};

export default Searcher;
