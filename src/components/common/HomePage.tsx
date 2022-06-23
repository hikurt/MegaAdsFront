import {Link} from "react-router-dom";

import "./HomePage.css";

interface Props {
    to: string;
    text: string;
}

export const HomePage = ({to, text}: Props) => (
    <Link className="home-page-btn" to={to}>{text}</Link>
)