import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from '../../assets/FrancoUrsinoCV.pdf';
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Diseñador Web", "Front End Developer"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Franco Ursino</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a className="hover:text-designColor duration-300 cursor-pointer text-xl" href="https://github.com/FrancoUrsino" target="blank">
              <FaGithub />
            </a>
            <a className="hover:text-designColor duration-300 cursor-pointer text-xl"  href="https://www.linkedin.com/in/francoursino/" target="blank">
              <FaLinkedin />
            </a>
            <a className="hover:text-designColor duration-300 cursor-pointer text-xl"  href="https://www.facebook.com/profile.php?id=61550736414708" target="blank">
              <BsFacebook />
            </a>
            <a className="hover:text-designColor duration-300 cursor-pointer text-xl"  href="https://www.instagram.com/frankito.eze/" target="blank">
              <FiInstagram />
            </a>
            <a className="hover:text-designColor duration-300 cursor-pointer text-xl"  href="mailto:francooursinoo@gmail.com" target="blank">
              <FiMail />
            </a>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Descargar CV <BsCloudLightningFill />
            </button>
          </a>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contactarme <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;