import Banner from "../components/Banner/Banner.jsx"

const Home = ({isMenuOpen ,styles}) => {
  

  return (
    <div style={styles}>
      <div style={{background: "#ffd3aa"}}>
        <Banner />
      </div>
    </div>
  );
};

export default Home;