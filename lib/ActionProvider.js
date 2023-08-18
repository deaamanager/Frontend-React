"use client";
import Contact from "@/components/Chatbot/Contact";
import About from "@/components/Chatbot/About";
import LandingPage from "@/components/Chatbot/LandingPage";
import OnlineShop from "@/components/Chatbot/OnlineShop";
import WebApp from "@/components/Chatbot/WebApp";
import Website from "@/components/Chatbot/Website";
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
    const message = this.createChatBotMessage(
      "👋 Greetings and a welcome to me Live Support! If you're on the hunt for exceptional software development services for your Business, you've landed in the perfect spot,and ready to lend a hand. What can I do for you today?",
      {
        widget: "options",
      }
    );
    this.addMessageTostate(message);
  };
  //* 1-sec *//
  handlerlandingPage = () => {
    const message = this.createChatBotMessage(<LandingPage />);
    this.addMessageTostate(message);
  };
  //* 2-sec *//
  handleronline_shop = () => {
    const message = this.createChatBotMessage(<OnlineShop />, {
      widget: "laningPageQuiz",
    });
    this.addMessageTostate(message);
  };
  //* 3-sec *//
  handlerweb_app = () => {
    const message = this.createChatBotMessage(<WebApp />, {
      widget: "laningPageQuiz",
    });
    this.addMessageTostate(message);
  };
  //* 4-sec *//
  handlerwebsite = () => {
    const message = this.createChatBotMessage(<Website />);
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
