import clsx from "clsx";
import React from "react";

import { CreditCardsIcon } from "../../../../icons/CreditCardsIcon";
import { PaypalIcon } from "../../../../icons/PaypalIcon";
import { TransferIcon } from "../../../../icons/TransferIcon";
import { IconCircleBackground } from "../../../../layouts/IconCircleBackground";

interface TransactionItemProps {
  type: "card" | "paypal" | "transfer";
  description: string;
  date: string;
  amount: number;
}

const getTransactionIcon = (type: string) => {
  switch (type) {
    case "card":
      return (
        <IconCircleBackground size="lg" variant="yellow">
          <CreditCardsIcon />
        </IconCircleBackground>
      );
    case "paypal":
      return (
        <IconCircleBackground size="lg" variant="blue">
          <PaypalIcon />
        </IconCircleBackground>
      );
    case "transfer":
      return (
        <IconCircleBackground size="lg" variant="teal">
          <TransferIcon />
        </IconCircleBackground>
      );
    default:
      return (
        <IconCircleBackground size="lg" variant="yellow">
          <TransferIcon />
        </IconCircleBackground>
      );
  }
};

export const TransactionItem: React.FC<TransactionItemProps> = ({
  type,
  description,
  date,
  amount,
}) => {
  return (
    <div className="flex items-center space-x-3">
      {getTransactionIcon(type)}

      <div className="flex-1">
        <p className="text-body-sm">{description}</p>
        <p className="text-label-sm text-light-blue">{date}</p>
      </div>

      <span
        className={clsx(
          "font-semibold",
          amount < 0 ? "text-red" : "text-green",
        )}
      >
        {amount < 0 ? "-" : "+"}${Math.abs(amount).toLocaleString()}
      </span>
    </div>
  );
};
