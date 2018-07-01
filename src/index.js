import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const maze = `
|i|__________
|________   |
| __________|
|______ |
| ______|
|______ |
|o______|
`;

function charToClass(char) {
  switch (char) {
    case "|":
      return "side";
    case "_":
      return "bottom";
    default:
      return "";
  }
}

const Block = ({ char }) => <div className={"block " + charToClass(char)} />;

const Row = ({ children }) => <div className="row">{children}</div>;

const blockSize = getComputedStyle(document.body).getPropertyValue(
  "--blockSize"
);

const Map = ({ layout }) => {
  const mazeData = layout.split("\n");
  const width = mazeData.reduce((a, b) => (a.length > b.length ? a : b)).length;
  const height = mazeData.length;
  return mazeData.map((row, i) => (
    <Row key={i}>
      {Array.from(row, (char, c) => <Block key={c} char={char} />)}
    </Row>
  ));
};

class Game extends React.Component {
  render() {
    return <Map layout={maze} />;
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
