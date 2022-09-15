import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontsize="large"></ReplayIcon>
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontsize="large"></CloseIcon>
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fontsize="large"></StarRateIcon>
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontsize="large"></FavoriteIcon>
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontsize="large"></FlashOnIcon>
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
