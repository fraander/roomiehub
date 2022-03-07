import React from "react";

const Account = ({ account }) => {
  return (
    <div style={{ width: "250px", border: "1px solid black" }}>
      <h1>{account.title}</h1>
    </div>
  );
};

Account.defaultProps = {
  title: "Title"
};

export default Account;
