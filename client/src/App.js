import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookkies from "universal-cookie";

import ChannelContainer from "./components/ChannelContainer";
import ChannelListContainer from "./components/ChannelListContainer";

const apiKey = "xzfv2ryt7fgv";
const client = StreamChat.getInstance(apiKey);
function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
