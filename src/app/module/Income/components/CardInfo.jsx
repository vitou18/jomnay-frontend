import { RiDeleteBin7Line, RiEditLine, RiWalletLine } from "react-icons/ri";
import Icon from "../../../layout/components/Icon";
import moment from "moment/moment";
import Tooltip from "../../../layout/components/Tooltip";
import Button from "../../../utils/Button";

const CardInfo = ({ data }) => {
  const formattedDate = (date) => moment(date).format("Do MMM YYYY");

  return (
    <article className="flex items-center justify-between">
      <div className="flex items-center gap-x-[15px]">
        <Icon icon={RiWalletLine} />

        <div className="flex flex-col">
          <span className="text-[14px] md:text-[18px]">{data?.category}</span>
          <span className="text-[10px] md:text-[12px]">
            {formattedDate(data?.date)}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-x-[10px] md:gap-x-[20px]">
        <Tooltip type="income" amount={data?.amount} />

        <div className="flex items-center gap-x-[5px] md:gap-x-[10px]">
          <Button icon={RiEditLine} type="edit" />
          <Button icon={RiDeleteBin7Line} type="delete" />
        </div>
      </div>
    </article>
  );
};

export default CardInfo;
