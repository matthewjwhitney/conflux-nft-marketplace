import logoWhite from "../img/logoWhite.svg";

const Welcome = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={logoWhite} alt="logo" style={{ height: 300 }} />
      <div
        style={{
          color: "white",
          paddingTop: 8,
          fontSize: 32,
          textAlign: "center",
        }}
      >
        Non Figgybles
      </div>
    </div>
  </div>
);

export default Welcome;
