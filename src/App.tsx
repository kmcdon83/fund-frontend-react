import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import { SearchFunds } from "./services/fundApiService";
import SearchInput from "./components/seach-input/SearchInput";
import SearchResult, { IFund } from "./components/search-result/SearchResult";

const App = () => {
  const [searchInputValue, setSearchInputValue] = React.useState<string>("");
  const [searchResult, setSearchResult] = React.useState<IFund[]>([]);
  const [isLoadingData, setIsLoadingData] = React.useState<boolean>(false);
  const [
    isSearchInputFocused,
    setIsSearchInputFocused,
  ] = React.useState<boolean>(false);
  const onSearchInputChangeHandler = async (newValue: string) => {
    console.log(newValue);
    setSearchResult([]);
    console.log(searchResult);
    setSearchInputValue(newValue);
    if (newValue.length >= 2) {
      setIsLoadingData(true);
      const results = await SearchFunds(newValue);
      if (results !== undefined) {
        setSearchResult(results.data.funds);
        setIsLoadingData(false);
      }
    }
  };

  const doShowResult = () =>
    searchResult.length > 0 &&
    isSearchInputFocused &&
    searchInputValue.length >= 2;

  const doShowLoader = () =>
    isLoadingData && isSearchInputFocused && searchInputValue.length >= 2;

  const onSearchInputFocusHandler = () => {
    setIsSearchInputFocused(true);
  };
  const onSearchInputBlurHandler = () => {
    setIsSearchInputFocused(false);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ marginTop: 100 }}
    >
      <Grid item xs={8}>
        <SearchInput
          value={searchInputValue}
          onChangeHandler={onSearchInputChangeHandler}
          onFocusHandler={onSearchInputFocusHandler}
          onBlurHandler={onSearchInputBlurHandler}
        />
      </Grid>

      {doShowLoader() && (
        <Grid item xs>
          <CircularProgress />
        </Grid>
      )}

      {doShowResult() && (
        <Grid item xs>
          <SearchResult data={searchResult} highlitWord={searchInputValue} />
        </Grid>
      )}
    </Grid>
  );
};

export default App;
