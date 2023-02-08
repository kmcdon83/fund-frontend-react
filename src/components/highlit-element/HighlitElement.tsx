import Highlighter from "react-highlight-words";

interface IHighlitElement {
  value: string;
  searchWord: string;
}

const Highlight = (props: any) => <strong>{props.children}</strong>;

const HighlitElement = (props: IHighlitElement) => {
  return (
    <Highlighter
      highlightTag={Highlight}
      searchWords={[props.searchWord]}
      autoEscape={true}
      textToHighlight={props.value}
    />
  );
};

export default HighlitElement;
