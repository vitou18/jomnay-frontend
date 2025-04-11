import React from "react";

const styleMap = {
  red: "#DC2626",
  blue: "#2563EB",
  green: "#16A34A",
};

const Icon = ({ icon: Icon, style }) => {
  const color = styleMap[style] || "#3A3A3A";

  return (
    <div
      className={`w-[60px] h-[60px] text-[20px] md:text-[24px] rounded-full grid place-items-center`}
      style={{
        backgroundColor: `${color}0D`,
        color,
      }}
    >
      <Icon />
    </div>
  );
};

export default Icon;
