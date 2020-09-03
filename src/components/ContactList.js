import React from "react";

function contactList(props) {
  return (
    <div>
      <p>{props.contact.name}</p>
      <p>{props.contact.phone}</p>
    </div>
  );
}

export default contactList;
