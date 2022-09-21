import "./styles.css";
function Profile(props) {
  return (
    <div className="App">
      <div id="profile">
        <img src={props.img} alt="Mark" />
        <p>
          <b>Name:</b>
          {props.name}
        </p>
        <p>
          <b>DOB:</b> {props.DOB}
        </p>
      </div>
    </div>
  );
}

export { Profile };
