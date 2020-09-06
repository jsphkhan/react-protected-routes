import React, { useEffect } from "react";
import auth from "../../auth";

import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  const handleLogout = () => {
    auth.logout(() => {
      //navigate to login page
      history.replace("/");
      console.log(auth);
    });
  };

  useEffect(() => {
    //console.log('Home Page mounted', auth);
  }, []);

  return (
    <>
      <h1>Protected Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default HomePage;
