import style from "./Home.module.css";

const Home = ({ isMenuOpen }) => {
  const inlineStyle = {
    filter: isMenuOpen ? "blur(5px)" : "none",
    pointerEvents: isMenuOpen ? "none" : "auto"
  };

  return (
    <div className={style.mainClass} style={inlineStyle}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;