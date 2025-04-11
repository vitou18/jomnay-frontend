import { RiDeleteBin7Line, RiEditLine, RiWalletLine } from "react-icons/ri";
import moment from "moment/moment";
import Icon from "./Icon";
import Tooltip from "./Tooltip";
import Button from "../../../utils/Button";

const CardInfo = ({ data, onDelete, onEdit, type }) => {
  const formattedDate = (date) => moment(date).format("Do MMM YYYY");

  const onClickDelete = (id, category) => {
    // console.log(id, category);

    onDelete(id, category);
  };

  return (
    <article className="p-[15px] bg-[#f8f8f8] flex items-start justify-between rounded-lg">
      <div className="flex flex-col gap-[10px]">
        <Icon style={type === "income" ? "green" : "red"} icon={RiWalletLine} />

        <div className="flex flex-col">
          <span className="text-[16px]">{data?.category}</span>
          <span className="text-[12px]">{formattedDate(data?.date)}</span>
        </div>
      </div>

      <div className="flex items-end gap-y-[15px] flex-col gap-x-[5px] md:gap-x-[20px]">
        <Tooltip type={type} amount={data?.amount} />

        <div className="flex items-center gap-x-[5px] md:gap-x-[10px]">
          <Button icon={RiEditLine} type="edit" onClick={() => onEdit(data)} />
          <Button
            onClick={() => onClickDelete(data?._id, data?.category)}
            icon={RiDeleteBin7Line}
            type="delete"
          />
        </div>
      </div>
    </article>
  );
};

export default CardInfo;
