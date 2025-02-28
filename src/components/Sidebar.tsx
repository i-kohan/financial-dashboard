import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import { AccountIcon } from "../icons/AccountIcon";
import { CreditCardIcon } from "../icons/CreditCardIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { InvestmentsIcon } from "../icons/InvestmentsIcon";
import { LampIcon } from "../icons/LampIcon";
import { LoanIcon } from "../icons/LoanIcon";
import { ServiceIcon } from "../icons/ServiceIcon";
import { SettingsIcon } from "../icons/SettingsIcon";
import { TransactionsIcon } from "../icons/TransactionsIcon";

const menuItems = [
  { name: "Dashboard", path: "/", isActive: true, Icon: <HomeIcon /> },
  {
    name: "Transactions",
    path: "/transactions",
    isActive: false,
    Icon: <TransactionsIcon />,
  },
  {
    name: "Accounts",
    path: "/accounts",
    isActive: false,
    Icon: <AccountIcon />,
  },
  {
    name: "Investments",
    path: "/investments",
    isActive: false,
    Icon: <InvestmentsIcon />,
  },
  {
    name: "Credit Cards",
    path: "/credit-cards",
    isActive: true,
    Icon: <CreditCardIcon />,
  },
  { name: "Loans", path: "/loans", isActive: false, Icon: <LoanIcon /> },
  {
    name: "Services",
    path: "/services",
    isActive: false,
    Icon: <ServiceIcon />,
  },
  {
    name: "My Privileges",
    path: "/privileges",
    isActive: false,
    Icon: <LampIcon />,
  },
  {
    name: "Setting",
    path: "/setting",
    isActive: true,
    Icon: <SettingsIcon />,
  },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const location = useLocation();

  return (
    <aside
      className={clsx(
        "flex h-screen flex-col bg-white shadow-md transition-all duration-300 ease-in-out",
        "w-64 min-w-64 lg:w-64",
        isOpen
          ? "translate-x-0 opacity-100"
          : "-translate-x-4 opacity-0 lg:translate-x-0 lg:opacity-100",
      )}
      aria-label="Main Navigation"
    >
      <div className="flex h-full flex-col">
        {onClose && (
          <button
            aria-label="Close menu button"
            className="absolute top-2 right-2 lg:hidden"
            onClick={onClose}
          >
            ✖
          </button>
        )}

        <div className="flex items-center py-9 pl-11">
          <DocumentIcon width={23} height={29} />
          <span className="text-heading2 ml-2">Soar Task</span>
        </div>

        <nav className="mt-6 flex flex-col">
          {menuItems.map((item) => {
            const isCurrent = location.pathname === item.path;

            return (
              <Link
                aria-label={item.name}
                key={item.name}
                to={item.isActive ? item.path : "#"}
                className={clsx(
                  "relative flex items-center space-x-6 py-6 pl-11 transition-all",
                  isCurrent
                    ? "text-black before:absolute before:top-1/2 before:left-0 before:h-full before:w-2 before:-translate-y-1/2 before:rounded-r-full before:bg-black"
                    : "text-gray hover:bg-gray-100",
                )}
              >
                <span>{item.Icon}</span>
                {isOpen && <span className="text-body-lg">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
