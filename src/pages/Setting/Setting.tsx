import { useState } from "react";

import { Tab } from "../../components/Tab";
import { Tabs } from "../../components/Tabs/Tabs";
import { SettingsLayout } from "../../features/setting/layouts/SettingsLayout";
import { ProfileForm } from "../../features/setting/ProfileForm";

export const Setting = () => {
  const tabs = ["Edit Profile", "Preferences", "Security"] as const;
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <SettingsLayout
      tabs={
        <Tabs selected={activeTab} onTabChange={setActiveTab}>
          {tabs.map((tab) => (
            <Tab key={tab} tab={tab}>
              {tab}
            </Tab>
          ))}
        </Tabs>
      }
      form={
        activeTab === "Edit Profile" ? (
          <ProfileForm />
        ) : (
          <div className="text-center text-gray-500">
            {activeTab} settings coming soon...
          </div>
        )
      }
    />
  );
};
