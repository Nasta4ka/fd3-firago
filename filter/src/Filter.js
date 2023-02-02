import Controls from "./Controls";
import List from "./List";
import "./filter.css";
import { useEffect, useState } from "react";

export default function Filter(props) {
  const [list, setList] = useState([...props.list]);
  const [query, setQuery] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    handleFilter();
  }, [query, checkbox]);

  function cbQuery(value) {
    setQuery(value);
  }

  function cbCheckbox(value) {
    setCheckbox(value);
  }

  function cbButton() {
    setQuery("");
    setCheckbox(false);
    setList([...props.list]);
  }

  function handleFilter() {
    let sort = checkbox;
    if (sort) {
      let newList = [...props.list];
      if (query.length) {
        newList = newList.filter((word) => word.includes(query));
      }
      newList = newList.sort();

      setList([...newList]);
    }

    if (!sort) {
      let newList = [...props.list];
      if (query.length) {
        newList = newList.filter((word) => word.includes(query));
      }
      setList([...newList]);
    }
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
