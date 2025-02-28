import { AppLayout } from "../../../layouts/AppLayout";

interface ISettingsLayoutProps {
  tabs: React.ReactNode;
  form: React.ReactNode;
}

export const SettingsLayout: React.FC<ISettingsLayoutProps> = ({
  tabs,
  form,
}) => {
  return (
    <AppLayout pageTitle="Setting">
      <div className="m-6 space-y-6 rounded-2xl bg-white p-6 shadow-md">
        {tabs}
        {form}
      </div>
    </AppLayout>
  );
};
