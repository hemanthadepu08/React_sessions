import "./styles.css";
function Profile(props) {
  return (
    <div className="App">
      <img src={props.img} alt="Mark" />
      <p>
        <b>Name:</b>
        {props.name}
      </p>
      <p>
        <b>DOB:</b> {props.DOB}
      </p>
    </div>
  );
}

export { Profile };
