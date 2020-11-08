import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

function ChannelRow({
  Image,
  Channel,
  verified,
  subs,
  noOfvideos,
  description,
}) {
  return (
    <div className="channelrow">
      <Avatar className="channelrow__logo" src={Image} alt={Channel} />
      <div className="channelrow__text">
        <h4>
          {Channel} {verified && <CheckCircleOutlinedIcon />}
        </h4>
        <p>
          {subs} Subscribers . {noOfvideos} Videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
