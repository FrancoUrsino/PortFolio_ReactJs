import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="R" subTitle="edes" />
      <ul>
        <li className="sidenavLi"><a href={""} target="_blank">Linkedin</a></li>
        <li className="sidenavLi"><a href={""} target="_blank">Facebook</a></li>
        <li className="sidenavLi"><a href={""} target="_blank">Instagram</a></li>
        <li className="sidenavLi"><a href={""} target="_blank">GitHub</a></li>
      </ul>
      <SidenavTitle title="P" subTitle="royectos" />
      <ul>
      <li className="sidenavLi"><a href={""} target="_blank">Vay Administración</a></li>
      <li className="sidenavLi"><a href={""} target="_blank">Eficap</a></li>
      <li className="sidenavLi"><a href={""} target="_blank">Extreme Combat Shop</a></li>
      <li className="sidenavLi"><a href={""} target="_blank">Discover Arg</a></li>
      <li className="sidenavLi"><a href={""} target="_blank">Planes en Pareja</a></li>
      </ul>
      {/* <SidenavTitle title="C" subTitle="ertificados" />
      <ul>
        <li className="sidenavLi">UI & UX Conference at Lviv 2022</li>
        <li className="sidenavLi">How to become a creative designer</li>
        <li className="sidenavLi">
          Designers thoughts about mobile UI templates
        </li>
        <li className="sidenavLi">Designer Conference at Florida, USA 2020</li>
      </ul> */}
      <SidenavTitle title="C" subTitle="ontactame" />
      <ul>
        <li className="sidenavLi">+54 1138460917</li>
        <li className="sidenavLi">francooursinoo@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav