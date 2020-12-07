import React from "react";

import { GoogleLogin } from "react-google-login";


const clientId =
  "1031637258310-u369th33g7ugfg615kif72dltsenqddd.apps.googleusercontent.com";

function GoogleLoginComponent() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    //alert( `Logged in successfully welcome ${res.profileObj.name} .`);
    /** sending the profileObj to store and varify to backen and getting a token for authentication*/
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login.`
    );
  };

  return (
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
  );
}

export default GoogleLoginComponent;
