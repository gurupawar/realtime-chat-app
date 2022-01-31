import React from "react";
import Cookkies from "universal-cookie";
import { ChannelList, useChatContext } from "stream-chat-react";
import {
  ChannelSearch,
  TeamChannleList,
  TeamChannelPreview,
} from "stream-chat-react";
import ChannelSearchh from "./ChannelSearch";
import HospitalIcon from "../assets/hospital.png";
import Logout from "../assets/logout.png";

const Sidebar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={HospitalIcon} alt="Hostpital" width={30} />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={Logout} alt="Loutout" width={30} />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Medical Pager</p>
  </div>
);
const ChannelListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearchh />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannleList {...listProps} />}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
