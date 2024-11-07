import React, { ReactNode } from "react";
import classes from "./health-news.module.css";
import TopicCard from "../ui-utils/card";

const HEALTH_NEWS_CONSTANT = [
  {
    title: "Bayer Launches New Initiative for Preventive Healthcare",
    description:
      "Our new program aims to promote regular health check-ups and early disease detection.",
  },
  {
    title: "Understanding the Importance of Vaccinations",
    description:
      "Learn why vaccinations are crucial for individual and community health.",
  },
];

const HealthNewsComponent = () => {
  return (
    <>
      <h2 className={classes.healthTopicTilte}>Latest Health News </h2>
      <div className={classes.listHealtTopics}>
        {HEALTH_NEWS_CONSTANT.map((news, index) => (
          <TopicCard
            title={news.title}
            description={news.description}
            btnTitle="Read Full Article"
          ></TopicCard>
        ))}
      </div>
    </>
  );
};

export default HealthNewsComponent;
