import logoWhite from "../img/logoWhite.svg";

const Header = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "24px 32px",
      width: "100%",
    }}
  >
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logoWhite} alt="logo" style={{ height: 50 }} />
      </div>
    </div>
    <div>
      <button className="nes-btn is-small">Login</button>
    </div>
  </div>
);

export default Header;
