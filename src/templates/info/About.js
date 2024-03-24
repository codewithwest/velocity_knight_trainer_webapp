import "../../styles/info/About.css";
import "../../styles/Const.css";
import {} from "../../functions/ConstVars";
import { Link } from "react-router-dom";
import {
  iaaf_logo,
  main_logo,
  olympics_logo,
  timetronics_logo,
} from "../../functions/imageProvider";
import { aboutInfoText, aboutCardText } from "../../functions/ConstLists";
export default function Home() {
  return (
    <div className="home-cont d-flex wrap">
      {/* {vkTrainerAnimation()} */}
      {/* {introCards()} */}
      <div className="company-desc w-100 d-flex wrap">
        <h4 className="text-center w-100">West Dynamics</h4>
        {divTwo()}
        <div className="div-one flex-col w-100">
          <div className="cards d-flex wrap text-center">
            {divOne(
              aboutCardText[0][0],
              aboutCardText[0][1],
              aboutCardText[0][2],
              aboutCardText[0][3]
            )}
            {divOne(
              aboutCardText[1][0],
              aboutCardText[1][1],
              aboutCardText[1][2],
              aboutCardText[1][3]
            )}
          </div>
          <div className="cards d-flex wrap">
            {divOne(
              aboutCardText[0][0],
              aboutCardText[2][1],
              aboutCardText[2][2],
              aboutCardText[2][3]
            )}
            {divOne(
              aboutCardText[0][0],
              aboutCardText[3][1],
              aboutCardText[3][2],
              aboutCardText[3][3]
            )}
          </div>
        </div>
      </div>

      <h2 className="m-auto our-partners-header">Our Partners</h2>
      <div className="our-partners d-flex wrap w-100">
        {ourPartners("West Dynamics", main_logo)}
        {ourPartners("Olympics", olympics_logo)}
        {ourPartners("Iaaf", iaaf_logo)}
        {ourPartners("TimeTronics", timetronics_logo)}
      </div>
    </div>
  );

  function divOne(card_logo, card_header, card_desc, card_btn) {
    return (
      <div className="">
        <img src={card_logo} alt="" className="w-100" />
        <h5 className="text-center">{card_header}</h5>
        <p>{card_desc}</p>
        <div className="d-flex center-content">{card_btn}</div>
      </div>
    );
  }
  function divTwo() {
    return (
      <div className="div-two d-flex wrap w-100">
        <div className="">
          <span>{aboutInfoText[0][0]}</span>
          <p>{aboutInfoText[0][1]}</p>
        </div>
        <div className="">
          <span>{aboutInfoText[1][0]}</span>
          <p>{aboutInfoText[1][1]}</p>
        </div>
        <div className="">
          <span>{aboutInfoText[2][0]}</span>
          <p>{aboutInfoText[2][1]}</p>
        </div>
        <div className="">
          <span>{aboutInfoText[3][0]}</span>
          <p> {aboutInfoText[3][1]}</p>
        </div>
      </div>
    );
  }
  function arrowPictures(params) {
    return (
      <div className="arrow-cont d-flex">
        <div className="arrow-right"></div>
        <div className="arrow-down"></div>
        <div className="arrow-left"></div>
        <div className="arrow-up"></div>
      </div>
    );
  }
  function ourPartners(name, image) {
    return (
      <div className="partner-cont flex-col">
        <img src={image} alt="" className="m-auto" />
        <h4 className="m-auto">{name}</h4>
      </div>
    );
  }
}
