import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <Link className="link" to="/">
            <span className="logo">lunaadmin</span>
          </Link>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="topbarAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
