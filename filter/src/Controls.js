import { Button, FormGroup } from "@mui/material";
export default function Controls(props) {
  const handleCheckbox = (value) => {
    props.cbCheckbox(value);
  };

  const handleQuery = (event) => {
    props.cbQuery(event);
  };

  const handleButton = () => {
    props.cbButton();
  };

  return (
    <FormGroup row={true} /* sx={{ alignItems: "center" }} */>
      <input
        type="checkbox"
        className="checkbox"
        checked={props.checked}
        onChange={(event) => handleCheckbox(event.target.checked)}
      ></input>
      <input
        type="text"
        className="text"
        value={props.value}
        onChange={(event) => handleQuery(event.target.value)}
      ></input>
      <Button
        variant="contained"
        size="small"
        color="error"
/*         sx={{ width: 90, height: 30}} */
        onClick={handleButton}
      >
        сброс
      </Button>
    </FormGroup>
  );
}
