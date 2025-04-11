import React from "react";
import CardInfo from "./CardInfo";

const CardContainer = ({ data, onDelete, onEdit, type }) => {
  return (
    <div className="grid sm:grid-cols-2 md:hidden gap-[20px]">
      {data?.map((item) => (
        <CardInfo
          type={type}
          key={item._id}
          data={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CardContainer;
