import React from "react";

import store from "./Redux/Store";

import ContactList from "./components/ContactList";

// const contacts = [
//   { name: "Charles", phone: "124567890" },
//   { name: "Zeph", phone: "1234567890" },
//   { name: "smith", phone: "1234567890" },
// ];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    const storeData = store.getState().contacts;
    // console.log(storeData);
    this.setState({
      contacts: [...storeData],
    });
  }

  render() {
    return (
      <div>
        {this.state.contacts.map((contact) => (
          <ContactList key={contact.name} contact={contact} />
        ))}
      </div>
    );
  }
}

export default App;
