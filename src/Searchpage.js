import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./Searchpage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function Searchpage() {
  return (
    <div className="searchpage">
      <div className="searchpage__filter">
        <TuneOutlinedIcon />
        <h3>FILTER</h3>
      </div>
      <hr />

      <ChannelRow
        Image="/avatar.jpeg"
        Channel="Sujay"
        verified
        subs="150M"
        noOfvideos={500}
        description="Full Stack Developer"
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="FULL STACK DEVELOPER"
        timestamp="59 seconds ago"
        channel="Sujay"
        title="YOOOOOOOOOOOO!!!!!!"
        image="/thumb/4.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="FULL STACK DEVELOPER"
        timestamp="59 seconds ago"
        channel="Sujay"
        title="YOOOOOOOOOOOO!!!!!!"
        image="/thumb/1.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="FULL STACK DEVELOPER"
        timestamp="59 seconds ago"
        channel="Sujay"
        title="YOOOOOOOOOOOO!!!!!!"
        image="/thumb/2.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="FULL STACK DEVELOPER"
        timestamp="59 seconds ago"
        channel="Sujay"
        title="YOOOOOOOOOOOO!!!!!!"
        image="/thumb/5.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="FULL STACK DEVELOPER"
        timestamp="59 seconds ago"
        channel="Sujay"
        title="YOOOOOOOOOOOO!!!!!!"
        image="/thumb/6.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="FULL STACK DEVELOPER"
        timestamp="59 seconds ago"
        channel="Sujay"
        title="YOOOOOOOOOOOO!!!!!!"
        image="/thumb/8.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="FULL STACK DEVELOPER"
        timestamp="59 seconds ago"
        channel="Sujay"
        title="YOOOOOOOOOOOO!!!!!!"
        image="/thumb/9.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="FULL STACK DEVELOPER"
        timestamp="59 seconds ago"
        channel="Sujay"
        title="YOOOOOOOOOOOO!!!!!!"
        image="/thumb/10.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="FULL STACK DEVELOPER"
        timestamp="59 seconds ago"
        channel="Sujay"
        title="YOOOOOOOOOOOO!!!!!!"
        image="/thumb/12.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="FULL STACK DEVELOPER"
        timestamp="59 seconds ago"
        channel="Sujay"
        title="YOOOOOOOOOOOO!!!!!!"
        image="/thumb/13.jpg"
      />
    </div>
  );
}

export default Searchpage;
