import { Link } from "react-router-dom";
import {
    FlashOnIcon,
    AccountCircleIcon,
    AutoGraphIcon,
    SettingsIcon
} from "../../providers/icons"

export default function navigationBar() {
    return (
        <div className="nav-bar">
            <Link className="nav-link" to={"/"}>
                <p className="path">
                    Programs
                </p>
                <span className="icon">
                    <FlashOnIcon>Programs</FlashOnIcon>
                </span>
            </Link>
            <Link className="nav-link" to={"/stats"}>
                <p className="path">
                    Stats
                </p>
                <span className="icon">
                    <AutoGraphIcon>Stats</AutoGraphIcon>
                </span>
            </Link>
            <Link className="nav-link" to={"/profile"}>
                <p className="path">
                    Profile
                </p>
                <span className="icon">
                    <AccountCircleIcon>Profile</AccountCircleIcon>
                </span>
            </Link>


            <Link className="nav-link" to={"/settings"} >
                <p className="path">
                    Settings
                </p>
                <span className="icon">
                    <SettingsIcon>Settings</SettingsIcon>
                </span>
            </Link >

        </div >
    );
}