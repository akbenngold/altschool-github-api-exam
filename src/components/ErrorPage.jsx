import React from "react";

function ErrorPage(props) {
  return (
    <>
      <div>An error has occured. Check console for details</div>
      <div>{console.log(props.error)}</div>
    </>
  );
}

export default ErrorPage;
