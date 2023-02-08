import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import HighlitElement from "../highlit-element/HighlitElement";

export interface IFund {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}

interface ISearchResultProps {
  data: IFund[];
  highlitWord: string;
}

const SECONDARY_COLOR = "#5E5E5E";

const SearchResult = (props: ISearchResultProps) => {
  return (
    <Paper sx={{ width: 800, overflow: "hidden", mt: 2 }}>
      <TableContainer sx={{ maxHeight: 250 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: SECONDARY_COLOR }}>Name</TableCell>
              <TableCell sx={{ color: SECONDARY_COLOR }}>Ticker</TableCell>
              <TableCell sx={{ color: SECONDARY_COLOR }}>Exchange</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((d) => (
              <TableRow
                key={d.symbol}
                sx={{
                  "&:hover": {
                    backgroundColor: "#E9EFFF",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell>
                  <HighlitElement
                    value={d.description}
                    searchWord={props.highlitWord}
                  />
                </TableCell>
                <TableCell>
                  <HighlitElement
                    value={d.displaySymbol}
                    searchWord={props.highlitWord}
                  />
                </TableCell>
                <TableCell>
                  <HighlitElement
                    value={d.type}
                    searchWord={props.highlitWord}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SearchResult;
