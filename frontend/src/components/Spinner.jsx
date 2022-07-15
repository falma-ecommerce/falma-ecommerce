import React from "react";

export default function Spinner() {
  return (
    <div className="spinner-grow text-primary" role="status">
      <span className="sr-only">
        {" "}
        <br />
        {/* Loading... */}
      </span>
    </div>
  );
}
