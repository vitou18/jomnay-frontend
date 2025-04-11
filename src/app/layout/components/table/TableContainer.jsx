import React from "react";
import { RiDeleteBin7Line, RiEditLine } from "react-icons/ri";
import moment from "moment/moment";
import Button from "../../../utils/Button";

const TableContainer = ({ data, onDelete, onEdit }) => {
  const formattedDate = (date) => moment(date).format("Do MMM YYYY");

  const onClickDelete = (id, category) => {
    // console.log(id, category);

    onDelete(id, category);
  };

  return (
    <div className="hidden md:block overflow-x-auto">
      {data && data.length > 0 ? (
        <table className="min-w-full table-auto whitespace-nowrap">
          <thead>
            <tr className="border-b-2 border-[#000]/5">
              <th className="text-left pe-[30px] py-[10px] font-medium text-[#33363F]">
                No.
              </th>
              <th className="text-left px-[30px] py-[10px] font-medium text-[#33363F]">
                Category
              </th>
              <th className="text-left px-[30px] py-[10px] font-medium text-[#33363F]">
                Date
              </th>
              <th className="text-center px-[30px] py-[10px] font-medium text-[#33363F]">
                Amount
              </th>
              <th className="text-right px-[30px] pe-0 py-[10px] font-medium text-[#33363F]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id || index}>
                <td className="pe-[30px] text-[14px] py-[10px] text-[#000]/70">
                  {index + 1}
                </td>
                <td className="px-[30px] capitalize text-[14px] py-[10px] text-[#000]/70">
                  {item.category}
                </td>
                <td className="px-[30px] text-[14px] py-[10px] text-[#000]/70">
                  {formattedDate(item.date)}
                </td>
                <td className="px-[30px] text-center text-[14px] py-[10px] text-[#000]/70">
                  ${item.amount.toFixed(2)}
                </td>
                <td className="px-[30px] pe-0 py-[10px] flex items-center justify-end gap-x-[10px]">
                  <Button
                    icon={RiEditLine}
                    type="edit"
                    onClick={() => onEdit(item)}
                  />
                  <Button
                    onClick={() => onDelete(item?._id)}
                    icon={RiDeleteBin7Line}
                    type="delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="h-[350px] text-[#696969] w-full flex items-center text-center justify-center">
          No data available
        </div>
      )}
    </div>
  );
};

export default TableContainer;
