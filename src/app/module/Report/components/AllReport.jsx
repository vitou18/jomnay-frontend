import React from "react";
import { RiDownloadLine } from "react-icons/ri";
import Button from "../../../utils/Button";
import moment from "moment/moment";

const AllReport = ({ data, onDownloadReport }) => {
  //   console.log(data);

  return (
    <section className="bg-[#fff] shadow-[0_0_8px_0_rgba(0,0,0,0.05)] rounded-lg p-[20px] flex flex-col gap-y-[30px]">
      <header className="flex items-center justify-between">
        <h3 className="text-[18px] md:text-[20px] font-medium">
          Recent Report
        </h3>

        {data && data.length > 0 && (
          <Button
            text="Download"
            onClick={onDownloadReport}
            icon={RiDownloadLine}
          />
        )}
      </header>

      <div className="overflow-x-auto">
        {data && data.length > 0 ? (
          <table className="min-w-full table-auto whitespace-nowrap">
            <thead>
              <tr className="border-b-2 border-[#000]/5">
                <th className="text-left pe-[30px] py-[10px] font-medium text-[#33363F]">
                  No.
                </th>
                <th className="text-left px-[30px] py-[10px] font-medium text-[#33363F]">
                  Type
                </th>
                <th className="text-left px-[30px] py-[10px] font-medium text-[#33363F]">
                  Category
                </th>
                <th className="text-left px-[30px] py-[10px] font-medium text-[#33363F]">
                  Date
                </th>
                <th className="text-left px-[30px] py-[10px] font-medium text-[#33363F]">
                  Amount
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
                    {item.type}
                  </td>
                  <td className="px-[30px] text-[14px] py-[10px] text-[#000]/70">
                    {item.category}
                  </td>
                  <td className="px-[30px] text-[14px] py-[10px] text-[#000]/70">
                    {item.date ? moment(item.date).format("YYYY-MM-DD") : ""}
                  </td>
                  <td className="px-[30px] text-[14px] py-[10px] text-[#000]/70">
                    ${item.amount.toFixed(2)}
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
    </section>
  );
};

export default AllReport;
