import React, { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const {t} = useTranslation();

  // ================= Error Messages Start here =================
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  // ================= Error Messages End here ===================
  const [seuccessMsg, setSuccessMsg] = useState("");
  // ================= Email Validation Start here ===============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ================= Email Validation End here =================

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!messages) {
      setErrMessage(true);
    }
    if (clientName && email && EmailValidation(email) && messages) {
      axios.post("https://getform.io/f/58ffa1a4-f93e-4bc9-ac6c-21e70903a041", {
        name: clientName,
        email: email,
        message: messages,
      });
      setSuccessMsg(
        t("hi")+ `${clientName}`+t("clientMessage")
      );
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };
  return (
    <div className="w-full">
      <Title title={t("get")} subTitle={t("inTouch")} />
      <div className="p-6 w-full flex flex-col md:flex-row justify-between pb-24 gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              {t("direction")}
            </span>
            Caballito | Buenos Aires
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              {t("phone")}
            </span>
            +54 1138460917
          </p>
        </div>
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between lgl:gap-6 w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-xs font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              {t("mail")}
            </span>
            francooursinoo@gmail.com
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              {t("freelance")}
            </span>
            {t("freeAvail")}
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title subTitle={t("contactMe")} />
        {seuccessMsg ? (
          <p className="text-center text-base font-titleFont p-20 text-designColor">
            {seuccessMsg}
          </p>
        ) : (
          <form
            id="form"
            action="https://getform.io/f/58ffa1a4-f93e-4bc9-ac6c-21e70903a041"
            method="POST"
            className="p-6 flex flex-col gap-6"
          >
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClientName
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                type="text"
                placeholder={t("placeholderName")}
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                type="email"
                placeholder={t("placeholderMail")}
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              className={`${
                errMessages
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`}
              placeholder={t("placeholderMessage")}
              rows="4"
            ></textarea>
            <button
              onClick={handleSend}
              className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
            >
              {t("sendBtn")}{" "}
              <span className="mt-1 text-designColor">
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
