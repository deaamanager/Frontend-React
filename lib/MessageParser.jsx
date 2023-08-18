class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    //console.log(message);

    //* this skript fpr plan 1 *//
    const lowercase = message.toLowerCase();
    //console.log(this.state);
    if (
      lowercase.includes("hi") ||
      lowercase.includes("hey") ||
      lowercase.includes("Hey") ||
      lowercase.includes("Hi") ||
      lowercase.includes("Hello") ||
      lowercase.includes("hello")
    ) {
      //console.log("deaa ist da mit stab!");
      //this.actionProvider.helloworldHandler();
      this.actionProvider.greet();
    }

    if (
      lowercase.includes("lading-page") ||
      lowercase.includes("loading page")
    ) {
      this.actionProvider.handlerlandingPage();
    }

    if (
      lowercase.includes("store-shop") ||
      lowercase.includes("online store")
    ) {
      this.actionProvider.handleronline_shop();
    }
    if (lowercase.includes("App") || lowercase.includes("app")) {
      this.actionProvider.handlerweb_app();
    }
    if (lowercase.includes("web-site")) {
      this.actionProvider.handlerwebsite();
    }
    if (
      lowercase.includes("contact") ||
      lowercase.includes("Contact") ||
      lowercase.includes("contact you") ||
      lowercase.includes("Contact you")
    ) {
      this.actionProvider.handlercontact_section();
    }
    if (lowercase.includes("about you") || lowercase.includes("About you")) {
      this.actionProvider.handlerabout_sections();
    }
    //* this End skript fpr plan 1 *//
  };
}

export default MessageParser;
{
  /*
 parse = (standmessage) => {
    if (standmessage) {
      this.actionProvider.standmessageHandler();
    }
  };

*/
}
