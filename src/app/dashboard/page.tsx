import LeftMenu from "../components/ui-utils/left-menu";
import classes from "./page.module.css";

export default function Dashbaord() {
  return (
    <div className={classes.container}>
      <LeftMenu></LeftMenu>
      <div className={classes.mainContnet}>
        <h1 className={classes.welcomeMsg}>Welcome, Dr. Smith </h1>
      </div>
    </div>
  );
}
