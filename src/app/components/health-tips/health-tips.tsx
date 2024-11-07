import React, { ReactNode } from "react";
import classes from "./health-tips.module.css";
import TopicCard from "../ui-utils/card";

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

const HealthTipsComp = () => {
  return (
    <>
      <h2 className={classes.healthTopicTilte}>Featured Health Topics </h2>
      <div className={classes.listHealtTopics}>
        {HEALTH_TIPS_CONSTANT.map((tips, index) => (
          <TopicCard
            title={tips.title}
            description={tips.description}
            btnTitle="Learn More"
          ></TopicCard>
        ))}
      </div>
    </>
  );
};

export default HealthTipsComp;
