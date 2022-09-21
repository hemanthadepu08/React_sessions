import "./styles.css";
import { Profile } from "./Profile.js";

export default function App() {
  return (
    <div className="App">
      <h1 id="Company">Prodapt one</h1>
      <Profile
        img={
          "https://th.bing.com/th/id/OIP.n1D7DNqXc6tLGKxtKUtRFgHaE7?pid=ImgDet&rs=1"
        }
        name={"Mark ZukerBurg"}
        DOB={"01/09/89"}
      />

      <Profile
        img={
          "https://th.bing.com/th/id/OIP.n1D7DNqXc6tLGKxtKUtRFgHaE7?pid=ImgDet&rs=1"
        }
        name={"Mark ZukerBurg"}
        DOB={"01/09/89"}
      />
    </div>
  );
}
