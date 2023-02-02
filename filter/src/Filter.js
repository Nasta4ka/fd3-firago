import Controls from "./Controls";
import List from "./List";
import "./filter.css";
import { useEffect, useState } from "react";

export default function Filter(props) {
  const [list, setList] = useState([...props.list]);
  const [query, setQuery] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
      let sort = checkbox;
      let newList = [...props.list];
        if (query.length) {
          newList = newList.filter((word) => word.includes(query));
        }
        if (sort) {
          newList = newList.sort();}
  
      setList([...newList]);
      
  }, [query, checkbox]);

  function cbQuery(value) {
    setQuery(value);
  }

  function cbCheckbox(bool) {
    setCheckbox(bool);
  }

  function cbButton() {
    setQuery("");
    setCheckbox(false);
  }

   return (
    <div className="filter">
      <h3 className="title">my filter</h3>
      <Controls
        checked={checkbox}
        value={query}
        cbButton={cbButton}
        cbQuery={cbQuery}
        cbCheckbox={cbCheckbox}
      ></Controls>
      <List value={list.join(" ")}></List>
    </div>
  );
}
