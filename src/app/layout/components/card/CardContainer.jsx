import React, { useState } from "react";
import CardInfo from "./CardInfo";
import Action from "../../../utils/Action";
import Modal from "../../../utils/Modal";

const CardContainer = ({ data, onDelete, navigate, type }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:hidden gap-[20px]">
        {data?.map((item) => (
          <CardInfo
            type={type}
            key={item._id}
            data={item}
            navigate={navigate}
            onDelete={onDelete}
          />
        ))}
      </div>

      {show && (
        <Modal >
          <Action onCancel={() => setShow(pre => !pre)} onSubmit={''}/>
        </Modal>
      )}
    </>
  );
};

export default CardContainer;
