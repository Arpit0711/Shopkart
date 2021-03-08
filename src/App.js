import { AppBar, CssBaseline, Link, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
// import Banner from "./component/Banner";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{ backgroundColor: "#010300" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_UrxKptxxWmB1zyMMaZ126TzJdAeUNXgsw&usqp=CAU"
            alt=""
            style={{
              position: "absolute",
              maxHeight: "8vh",
              objectFit: "contain",
              left: "5%",
            }}
          />
          <input
            type="text"
            placeholder="Search for products brand and more"
            style={{
              maxWidth: "40%",
              height: "7vh",
              flex: 1,
              padding: "1rem",
              marginLeft: "15rem",
              outline: "none",
            }}
          />
          <SearchIcon />
          <nav
            style={{
              position: "absolute",
              right: "10%",
            }}
          >
            <Link
              variant="button"
              href="#"
              style={{
                marginLeft: "2rem",
                color: "white",
                zIndex: "999",
              }}
              // className={classes.link}
            >
              Arpit
            </Link>
            <Link
              variant="button"
              href="#"
              style={{
                marginLeft: "2rem",
                color: "white",
              }}
              // className={classes.link}
            >
              More
            </Link>
            <ShoppingCartIcon />
            <Link
              variant="button"
              href="#"
              style={{
                marginLeft: "2rem",
                color: "white",
              }}
              // className={classes.link}
            >
              Cart
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <main>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Body />
        </div>
      </main>
    </>
  );
}

export default App;
