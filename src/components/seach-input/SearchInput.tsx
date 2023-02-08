import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { ChangeEvent } from "react";
import React from "react";

interface ISearchInputProps {
  value: string;
  onChangeHandler: (newValue: string) => void;
  onFocusHandler: () => void;
  onBlurHandler: () => void;
}

const SearchInput = (props: ISearchInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChangeHandler(e.target.value);
  };
  const onSearchButtonClick = () => {
    inputRef?.current?.focus();
    props.onFocusHandler();
  };
  const onCloseButtonClick = () => {
    props.onChangeHandler("");
  };
  return (
    <Paper elevation={3} sx={{ p: "2px", display: "flex", width: 500 }}>
      <IconButton onClick={onSearchButtonClick}>
        <SearchIcon />
      </IconButton>
      <InputBase
        inputRef={inputRef}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for securities"
        value={props.value}
        onChange={onInputChange}
        onFocus={props.onFocusHandler}
        onBlur={props.onBlurHandler}
      />
      {props.value.length > 0 && (
        <IconButton onClick={onCloseButtonClick}>
          <CloseIcon />
        </IconButton>
      )}
    </Paper>
  );
};

export default SearchInput;
