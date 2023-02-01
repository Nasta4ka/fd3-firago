export default function List(props) {
  return (
    <textarea
      className="textarea"
      readOnly={true}
      value={props.value}
    ></textarea>
  );
}
