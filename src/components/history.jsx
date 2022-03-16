import React from "react";
import Mood from "./mood";

/*
 * TODO:
 * 1. Add some pagination for 10+ entries
 * 2. Add a calander component with faces on days
 * 3. Add pull-down for multiple face on one day
 * 4. May need to add time to date strings?
 */
const History = ({ entries = [] }) => (
  <>
    {entries.map(({ date, idx }) => (
      <Mood date={date} idx={idx} />
    ))}
  </>
);

export default History;
