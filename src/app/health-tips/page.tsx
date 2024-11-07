import Link from "next/link";
import classes from "./page.module.css";
import TopicCard from "../components/ui-utils/card";
import { time } from "console";
import { title } from "process";

const HEALTH_TIPS_CONSTANT = [
  {
    title: "COVID-19 Updates",
    description:
      "Stay informed about the latest COVID-19 guidelines and vaccination information.",
  },
  {
    title: "Heart Health",
    description:
      "Discover tips and information for maintaining a healthy heart and cardiovascular system.",
  },
  {
    title: "Mental Wellness",
    description:
      "Explore resources and support options for maintaining good mental health.",
  },
  {
    title: "Nutrition & Diet",
    description:
      "Learn about balanced nutrition and healthy eating habits for overall wellbeing.",
  },
];
export default function HealthTips() {
  return (
    <>
      <div className={classes.headerCont}>
        <div>Bayer Healthcare</div>
        <div>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Health Topics</Link>
          <Link href={"/"}>Resources</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div>Your Health, Our Priority</div>
        <div>
          Explore the latest health information and resources from Bayer
          Healthcare
        </div>
      </div>
      <div>
        {HEALTH_TIPS_CONSTANT.map((tips, index) => (
          <TopicCard
            title={tips.title}
            description={tips.description}
          ></TopicCard>
        ))}
      </div>
    </>
  );
}
