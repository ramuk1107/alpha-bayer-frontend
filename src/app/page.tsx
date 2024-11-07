import Link from "next/link";
import classes from "./page.module.css";
import HealthTipsComp from "./components/health-tips/health-tips";
import HealthNewsComp from "./components/health-news/health-news";

const NAV_CONSTANT = [
  "Home",
  "Health Topics",
  "Resources",
  "About Us",
  "Contact",
];

export default function Home() {
  return (
    <>
      <div className={classes.headerCont}>
        <h1 className={classes.title}>Bayer Healthcare</h1>
        <div className={classes.navBg}>
          {NAV_CONSTANT.map((nav, index) => (
            <Link className={classes.navLink} href={"/"}>
              {nav}
            </Link>
          ))}
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
