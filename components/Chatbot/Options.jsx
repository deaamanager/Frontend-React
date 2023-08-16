"use client";

const Options = (props) => {
  const options = [
    {
      text: "Leanding-Page",
      handler: props.actionProvider.handlerlandingPage,
      id: 1,
    },
    {
      text: "Online-Shop",
      handler: props.actionProvider.handleronline_shop,
      id: 2,
    },
    {
      text: "Web-App",
      handler: props.actionProvider.handlerweb_app,
      id: 3,
    },
    {
      text: "Website",
      handler: props.actionProvider.handlerwebsite,
      id: 4,
    },
    {
      text: "About me",
      handler: props.actionProvider.handlerabout_sections,
      id: 4,
    },
    {
      text: "Contact me",
      handler: props.actionProvider.handlercontact_section,
      id: 4,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="text-[12px] px-2 py-2 bg-amber-600/20 border border-amber-600/50 rounded-full text-amber-500 "
    >
      {option.text}
    </button>
  ));

  return <div className=" my-8 grid grid-cols-2 gap-4 ">{buttonsMarkup}</div>;
};

export default Options;
