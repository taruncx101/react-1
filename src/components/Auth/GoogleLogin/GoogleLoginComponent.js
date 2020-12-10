import React from "react";

import { GoogleLogin } from "react-google-login";


const clientId =
  "1031637258310-u369th33g7ugfg615kif72dltsenqddd.apps.googleusercontent.com";

function GoogleLoginComponent(props) {
  const onSuccess = (res) => {
    props.googleLogin(res.tokenId);
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
      />
  );
}

export default GoogleLoginComponent;
