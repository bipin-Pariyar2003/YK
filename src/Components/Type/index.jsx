import React from "react";
import types from "assets/types";
import { useDispatch } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import { setSelectedType } from "reducers/typeSlice";

const Type = () => {
  const dispatch = useDispatch();

  const handleTypeClick = (type) => {
    dispatch(setSelectedType(type));
  };

  console.log(types);
  return (
    <>
      {/* <Stack sx={{ width: "500px", height: "550px", mt: 2 }}> */}
      <Stack sx={{ mt: 2 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Select Orientation
        </Typography>
        <Stack sx={{ overflowY: "auto", overflowX: "hidden" }}>
          {types.map((type) => (
            <React.Fragment key={type}>
              <Button onClick={() => handleTypeClick(type)}>{type}</Button>
            </React.Fragment>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Type;
