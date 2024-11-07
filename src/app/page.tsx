import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import classes from "./page.module.css";
import TopicCard from "./components/ui-utils/card";
import HealthTips from "./health-tips/page";
import HealthTipsComp from "./components/health-tips/health-tips";
import HealthNewsComp from "./components/health-news/health-news";

export default function Home() {
  return (
    <>
      <div className={classes.headerCont}>
        <h1 className={classes.title}>Bayer Healthcare</h1>
        <div className={classes.navBg}>
          <Link className={classes.navLink} href={"/"}>
            Home
          </Link>
          <Link className={classes.navLink} href={"/"}>
            Health Topics
          </Link>
          <Link className={classes.navLink} href={"/"}>
            Resources
          </Link>
          <Link className={classes.navLink} href={"/"}>
            About Us
          </Link>
          <Link className={classes.navLink} href={"/"}>
            Contact
          </Link>
        </div>
        <h1 className={classes.subTitle}>Your Health, Our Priority</h1>
        <p className={classes.subDesc}>
          Explore the latest health information and resources from Bayer
          Healthcare
        </p>
      </div>
      <div className={classes.bodyContainer}>
        <HealthTipsComp></HealthTipsComp>
        <HealthNewsComp></HealthNewsComp>
      </div>
    </>
  );
}
