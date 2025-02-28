import { useUser } from "../context/UserContext/UserContext";
import { NotificationIcon } from "../icons/NotificationIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { SettingsIcon } from "../icons/SettingsIcon";
import { Input } from "./Input";

interface HeaderProps {
  onMenuClick?: () => void;
  pageTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, pageTitle }) => {
  const { user } = useUser();

  return (
    <header className="flex w-full items-center justify-between bg-white p-8 shadow-md">
      <button
        aria-label="Open menu button"
        className="lg:hidden"
        onClick={onMenuClick}
      >
        ☰
      </button>

      <h1 className="text-heading1">{pageTitle}</h1>

      <div className="flex items-center space-x-8">
        <div className="relative hidden md:block">
          <Input
            variant="filled"
            placeholder="Search for something"
            type="text"
            className="pl-12"
          />

          <SearchIcon className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
        </div>

        <div className="flex items-center space-x-8">
          <button
            aria-label="Settings button"
            className="bg-catskill-white hidden rounded-full p-3 transition hover:bg-gray-200 md:block"
          >
            <SettingsIcon className="h-5 w-5 text-blue-500" />
          </button>

          <button
            aria-label="Notifications button"
            className="bg-catskill-white hidden rounded-full p-3 transition hover:bg-gray-200 md:block"
          >
            <NotificationIcon className="h-5 w-5 text-blue-500" />
          </button>

          <div className="h-10 w-10 overflow-hidden rounded-full">
            <img src={user.avatar} alt="User Profile" width={40} height={40} />
          </div>
        </div>
      </div>
    </header>
  );
};
