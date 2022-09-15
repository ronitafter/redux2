import { parseISO, formatDistanceToNow } from "date-fns";

import React from "react";

const TimeAgo = ({ timesStamp }) => {
  let TimeAgo = "";
  if (timesStamp) {
    const date = parseISO(timesStamp);
    const timePeriod = formatDistanceToNow(date);
    TimeAgo = `${timePeriod} ago`;
  }
  return (
    <span title={timesStamp}>
      &nbsp; <i>{TimeAgo}</i>
    </span>
  );
};

export default TimeAgo;
