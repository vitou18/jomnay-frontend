import {
  RiBarChart2Line,
  RiExchangeDollarLine,
  RiWalletLine,
} from "react-icons/ri";
import Card from "./Card";

const CardInfo = ({ data }) => {
  const formatNumber = (num) =>
    typeof num === "number" ? num.toFixed(2) : "0.00";

  const cardData = [
    {
      icon: RiBarChart2Line,
      title: "Total Balance",
      balance: formatNumber(data?.totalBalance),
    },
    {
      icon: RiWalletLine,
      title: "Total Income",
      balance: formatNumber(data?.totalIncome),
    },
    {
      icon: RiExchangeDollarLine,
      title: "Total Expense",
      balance: formatNumber(data?.totalExpense),
    },
  ];

  return (
    <section className="flex flex-wrap gap-[20px]">
      {cardData.map((item, index) => (
        <Card
          key={index}
          icon={item.icon}
          title={item.title}
          balance={item.balance}
        />
      ))}
    </section>
  );
};

export default CardInfo;
