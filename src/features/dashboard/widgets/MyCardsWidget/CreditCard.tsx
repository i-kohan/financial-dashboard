import clsx from "clsx";
import React from "react";

import { CardSchemeIcon } from "../../../../icons/CardSchemeIcon";
import { ChipCardIcon } from "../../../../icons/ChipCardIcon";

interface CreditCardProps {
  balance: number;
  holder: string;
  number: string;
  validThru: string;
  variant?: "dark" | "light" | "blue";
}

const variantStyles = {
  dark: {
    background: "bg-gradient-dark",
    overlay: "bg-gradient-overlay",
    textColor: "text-white",
    labelColor: "text-white/70",
    iconColor: "text-white",
    borderColor: null,
  },
  light: {
    background: "bg-white",
    overlay: "bg-white",
    textColor: "text-navy",
    labelColor: "text-lightBlue",
    iconColor: "text-navy",
    borderColor: "border-light-gray",
  },
  blue: {
    background: "bg-gradient-blue",
    overlay: "bg-gradient-overlay",
    textColor: "text-white",
    labelColor: "text-white/70",
    iconColor: "text-white",
    borderColor: null,
  },
};

export const CreditCard: React.FC<CreditCardProps> = ({
  balance,
  holder,
  number,
  validThru,
  variant = "light",
}) => {
  const styles = variantStyles[variant];

  return (
    <div
      className={clsx(
        "font-secondary flex h-[235px] w-[350px] shrink-0 flex-col rounded-2xl shadow-lg",
        styles.background,
        styles.textColor,
        styles.borderColor && `border ${styles.borderColor}`,
      )}
    >
      <div className="flex flex-col p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className={clsx("text-label-xs", styles.labelColor)}>Balance</p>
            <p className="text-card-title">${balance.toLocaleString()}</p>
          </div>
          <ChipCardIcon width="35" height="35" color={styles.iconColor} />
        </div>

        <div className="flex items-center">
          <div>
            <p className={clsx("text-label-xs", styles.labelColor)}>
              CARD HOLDER
            </p>
            <p className="text-label-md">{holder}</p>
          </div>
          <div className="ml-16">
            <p className={clsx("text-label-xs", styles.labelColor)}>
              VALID THRU
            </p>
            <p className="text-label-md">{validThru}</p>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "mt-auto flex h-16 items-center justify-between rounded-b-2xl p-6",
          styles.overlay,
          styles.borderColor && `border-t ${styles.borderColor}`,
        )}
      >
        <p className="text-card-number">{number}</p>
        <CardSchemeIcon width="44" height="30" color={styles.iconColor} />
      </div>
    </div>
  );
};
