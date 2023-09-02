import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp, classes }) => {
  let timeAgo = "";
  const convertTimeFormat = (timeString) => {
    let convertedString;

    if (timeString.includes("hours")) {
      const hours = parseInt(timeString.match(/\d+/)[0]);
      convertedString = `${hours}h ago`;
    } else if (timeString.includes("days")) {
      const days = parseInt(timeString.match(/\d+/)[0]);
      convertedString = `${days}d ago`;
    } else if (timeString.includes("minute")) {
      const minutes = parseInt(timeString.match(/\d+/)[0]);
      convertedString = `${minutes}m ago`;
    } else {
      // Handle other time formats if needed
      convertedString = timeString;
    }

    return convertedString;
  };
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = timePeriod ? convertTimeFormat(`${timePeriod} ago`) : "";
  }

  return (
    <span
      className=" text-sm  font-medium lowercase leading-3 text-neutral-500"
      title={timestamp}
    >
      &nbsp; {timeAgo}
    </span>
  );
};
export default TimeAgo;
