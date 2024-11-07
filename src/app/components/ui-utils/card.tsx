import React, { ReactNode } from "react";
import classes from "./card.module.css";

interface TopicCardProps {
  title: string;
  description: string;
  btnTitle: string;
}

const TopicCard: React.FC<TopicCardProps> = ({
  title,
  description,
  btnTitle,
}) => {
  return (
    <div className={classes.cardBg}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{btnTitle}</button>
    </div>
  );
};

export default TopicCard;
