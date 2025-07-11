import SidenavTitle from './SidenavTitle';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidenav = () => {
  const {t} = useTranslation();
  return (
    <div className="px-7 py-4">
      <SidenavTitle title={t("menuTitle1")} subTitle={t("menuSubTitle1")} />
      <ul>
        <li className="sidenavLi"><Link to={"https://www.linkedin.com/in/francoursino/"} target="_blank">Linkedin</Link></li>
        <li className="sidenavLi"><Link to={"https://github.com/FrancoUrsino"} target="_blank">GitHub</Link></li>
      </ul>
      <SidenavTitle title={t("menuTitle2")} subTitle={t("menuSubTitle2")} />
      <ul>
      <li className="sidenavLi"><Link to={"https://github.com/FrancoUrsino/interior-deco-zen"} target="_blank">Interior Deco Zen</Link></li>
      <li className="sidenavLi"><Link to={"https://github.com/FrancoUrsino/Cine-Film"} target="_blank">CineFilm</Link></li>
      <li className="sidenavLi"><Link to={"https://github.com/FrancoUrsino/biotrust"} target="_blank">BioTrust</Link></li>
      <li className="sidenavLi"><Link to={"https://github.com/Faradar/Proyecto-Real-PAL-ALMA"} target="_blank">Pa'l Alma</Link></li>
      <li className="sidenavLi"><Link to={"https://github.com/FrancoUrsino/Ming-ink-art"} target="_blank">Ming Art Ink</Link></li>
      <li className="sidenavLi"><Link to={"https://github.com/FrancoUrsino/eficap"} target="_blank">Eficap</Link></li>
      <li className="sidenavLi"><Link to={"https://github.com/FrancoUrsino/ProyectoFinal_Ursino"} target="_blank">Extreme Combat Shop</Link></li>
      <li className="sidenavLi"><Link to={"https://github.com/FrancoUrsino/PF-js_URSINO"} target="_blank">Discover Arg</Link></li>
      <li className="sidenavLi"><Link to={"https://github.com/FrancoUrsino/PF-Ursino"} target="_blank">Planes en Pareja</Link></li>
      </ul>
      <SidenavTitle title={t("menuTitle3")} subTitle={t("menuSubTitle3")} />
      <ul>
        <li className="sidenavLi">+54 1138460917</li>
        <li className="sidenavLi">francooursinoo@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav