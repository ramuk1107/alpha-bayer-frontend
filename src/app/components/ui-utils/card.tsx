import React, { ReactNode } from "react";
import classes from "./card.module.css";

interface TopicCardProps {
  title: string; // Title to be displayed in the card
  description: string; // Description/content of the card
  btnTitle: string; // Text to be displayed on the button
}

const TopicCard: React.FC<TopicCardProps> = ({
  title,
  description,
  btnTitle,
}) => {
  // Render the card structure
  return (
    <div className={classes.cardBg}>
      {/* Card title */}
      <h3>{title}</h3>

      {/* Card description/content */}
      <p>{description}</p>

      {/* Action button */}
      <button>{btnTitle}</button>
    </div>
  );
};

// Export the component as default for importing in other files
export default TopicCard;
