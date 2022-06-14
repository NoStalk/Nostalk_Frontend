import { Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Event } from '../Pages/Contests';
import { faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons'

//TODO animate links
//TODO get better svg

import styles from "../styles/EventCard.module.css";

const ICON_PATH_PREFIX = "/assets/publisher-icons/"

const IconMap: { [key: string]: { img: string, background?: string } } = {
    "leetcode.com": { img: "leetcode.png", background: "#00000" },
    "geeksforgeeks.com": { img: "gfg.png" }
}
function getIconSrc(publisher: string): string {
    return ICON_PATH_PREFIX + IconMap[publisher].img;
}

function getIconAccent(publisher: string): string {
    if (ICON_PATH_PREFIX + IconMap[publisher].background) return ICON_PATH_PREFIX + IconMap[publisher].img;
    else return "#ffffff"
}
export default function EventCard({ event }: { event: Event }) {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.logoDiv} style={{ backgroundColor: getIconAccent(event.publisher) }}>
                <img src={getIconSrc(event.publisher)} height="90%" width="90%" alt="Publisher icon" />
            </div>
            <div className={styles.vl} />
            <div>
                {event.title}
                <br />
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src="/assets/earth.svg" height="20rem" />
                    <Link href={"https:/" + event.publisher} underline="hover" target="__blank">
                        {event.publisher}
                    </Link>
                </span>
            </div>
            <a className={styles.linkTag} href={event.contestLink} target="__blank"> <FontAwesomeIcon style={{ color: "wheat" }} icon={faExternalLinkSquare} /></a>
        </div>
    )
}
