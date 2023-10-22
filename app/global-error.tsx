"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const GlobalErrorPage = ({ error, reset }: Props) => {
  console.log("Error: ", error);

  return (
    <>
      <div>Global Error Page</div>
      <button className="btn" onClick={reset}>
        Retry
      </button>
    </>
  );
};

export default GlobalErrorPage;
