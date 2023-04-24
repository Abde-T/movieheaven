export default function ProgressCircle({ percent }) {
  const dashArray = Math.PI * 100;
  const dashOffset = Math.PI * (100 - percent);

  const bar = {
    low: "#ff0000",
    medium: "#ffa500",
    high: "#008000",
    none: "#d4d4d4",
  };
  const track = {
    low: "#9c0a0a",
    medium: "#9e6c0e",
    high: "#073a07",
    none: "#666666",
  };

  const getColor = (rating) => {
    if (rating >= 70) return "high";
    if (rating >= 40) return "medium";
    if (rating >= 0) return "low";
    return "none";
  };

  return (
   
      <div className="w-[38px] h-[38px] bg-blue-950 rounded-full flex justify-center items-center">
        <svg
          width="54px"
          height="54px"
          viewBox="0 0 100 100"
          className="rotate-[-90deg]"
        >
          <circle
            cx="52.5"
            cy="52.5"
            r="50"
            fill="transaprent"
            stroke={track[getColor(percent)]}
            strokeWidth={8}
            strokeDasharray={dashArray}
            className="scale-[0.95]"
          />
          <circle
            cx="52.5"
            cy="52.5"
            r="50"
            fill="transaprent"
            stroke={bar[getColor(percent)]}
            strokeWidth={6}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            className="scale-[0.95]"
            strokeLinecap="round"
          />
        </svg>
        <div className="text-white absolute">
          {percent ? (
            <div>
              {percent} <span className="absolute text-[4px] top-[5px]">%</span>
            </div>
          ) : (
            "NR"
          )}
        </div>
      </div>

  );
}
