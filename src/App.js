import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App=()=> {
  const pageSize = 6;
  // for passing the api key as a env file we are using this method
  const apikey = process.env.REACT_APP_NEWS_API;
  const[progress, setProgress]=useState(0);

 

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }


export default App;
