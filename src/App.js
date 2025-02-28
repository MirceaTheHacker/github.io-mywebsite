import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content, Drawer } from "react-mdl";
import Main from "./components/main";
import { Link, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/Portfolio">
      <div>
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                className="nav-bar"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "2em"
                }}
                to="/"
              >
                My portfolio
              </Link>
            }
          >
            <Navigation>
              <Link
                to="/resume"
                className="nav-bar"
                style={{ fontSize: "2em" }}
              >
                Resume
              </Link>
              {/* <Link to="/aboutme" className="nav-bar" style={{ fontSize: "2em" }}>
              About Me
            </Link> */}
              <Link
                to="/projects"
                className="nav-bar"
                style={{ fontSize: "2em" }}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="nav-bar"
                style={{ fontSize: "2em" }}
              >
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                My portfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              {/* <Link to="/aboutme">About Me</Link> */}
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
