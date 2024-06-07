import {
  Link,
  Outlet,
} from "react-router-dom";

export default function App() {
    return <div>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>React Router Spike</h1>
        <ul style={{display: "flex", justifyContent: "space-between"}}>
          <li>
            <Link to="/waterfall/grandparent">Waterfall Grandparent</Link>
          </li>
          <li>
            <Link to="/waterfall/grandparent/parent">Waterfall Parent</Link>
          </li>
          <li>
            <Link to="/waterfall/grandparent/parent/child">Waterfall Child</Link>
          </li>
          <li>
            <Link to="/blocking/grandparent">Blocking Grandparent</Link>
          </li>
          <li>
            <Link to="/blocking/grandparent/parent">Blocking Parent</Link>
          </li>
          <li>
            <Link to="/blocking/grandparent/parent/child">Blocking Child</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
}
