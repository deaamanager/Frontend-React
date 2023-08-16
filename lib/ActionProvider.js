"use client";

import Contact from "@/components/Chatbot/Contact";
import About from "@/components/Chatbot/About";
import LandingPage from "@/components/LandingPage";
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
  helloworldHandler = () => {
    const message = this.createChatBotMessage("hello Iam User");
    this.setChatbotMessage(message);
  };

  //* this Achtion for plan 1 */
  greet = () => {
    const message = this.createChatBotMessage("hello deaa");
    this.addMessageTostate(message);
  };
  //* 1-sec *//
  handlerlandingPage = () => {
    const message = this.createChatBotMessage(<LandingPage />);
    this.addMessageTostate(message);
  };
  //* 2-sec *//
  handleronline_shop = () => {
    const message = this.createChatBotMessage("this Online shop sec", {
      widget: "laningPageQuiz",
    });
    this.addMessageTostate(message);
  };
  //* 3-sec *//
  handlerweb_app = () => {
    const message = this.createChatBotMessage(" this web-app sec", {
      widget: "laningPageQuiz",
    });
    this.addMessageTostate(message);
  };
  //* 4-sec *//
  handlerwebsite = () => {
    const message = this.createChatBotMessage(<LandingPage />);
    this.addMessageTostate(message);
  };
  //* 5-sec About me *//
  handlerabout_sections = () => {
    const message = this.createChatBotMessage(<About />, {
      widget: "aboutmeQuiz",
    });
    this.addMessageTostate(message);
  };
  //* 5-sec Contact me  *//
  handlercontact_section = () => {
    const message = this.createChatBotMessage(<Contact />);
    this.addMessageTostate(message);
  };
  addMessageTostate = (message) => {
    this.setState((prevstate) => ({
      ...prevstate,
      messages: [...prevstate.messages, message],
    }));
  };
  //* this End for plan 1 */
  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;

{
  /*

 standmessageHandler = () => {
    const standmessage = this.createChatBotMessage("stand messaga . . . ");
    this.setChatbotStandMessage(standmessage);
  };
  setChatbotStandMessage = (message) => {
    this.setState((state) => ({
      ...state,
      standmessages: [...state.standmessages, message],
    }));
  };

*/
}
