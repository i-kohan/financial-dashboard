import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Tab } from "../../components/Tab";
import { Tabs } from "../../components/Tabs/Tabs";
import { useUser } from "../../context/UserContext/UserContext";

type ProfileFormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  permanentAddress: string;
  presentAddress: string;
  postalCode: string;
  city: string;
  country: string;
};

export const ProfileSettingsPage = () => {
  const { user, updateUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    defaultValues: user,
  });

  const onSubmit = (data: Partial<ProfileFormData>) => {
    updateUser(data);
  };

  const tabs = ["Edit Profile", "Preferences", "Security"] as const;
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className="space-y-6 rounded-2xl bg-white p-6 shadow-md">
      <Tabs selected={activeTab} onTabChange={setActiveTab}>
        {tabs.map((tab) => (
          <Tab key={tab} tab={tab}>
            {tab}
          </Tab>
        ))}
      </Tabs>

      {activeTab === "Edit Profile" && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="col-span-2 flex items-center space-x-4">
            <div className="relative h-16 w-16">
              <img
                src={user.avatar}
                alt="Profile Picture"
                width={64}
                height={64}
                className="rounded-full"
              />
              <label className="absolute right-0 bottom-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-black text-white">
                ✎
                <Input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) =>
                        updateUser({ avatar: event.target?.result as string });
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            </div>
          </div>

          <div>
            <Label htmlFor="name" label="Your Name">
              <Input
                {...register("name", { required: "Name is required" })}
                id="name"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </Label>
          </div>

          <div>
            <Label htmlFor="username" label="User Name">
              <Input
                {...register("username", { required: "Username is required" })}
                id="username"
              />
              {errors.username && (
                <p className="text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </Label>
          </div>

          <div>
            <Label htmlFor="email" label="Email">
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
                id="email"
                type="email"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </Label>
          </div>

          <div>
            <Label htmlFor="password" label="Password">
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                id="password"
                type="password"
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </Label>
          </div>

          <div>
            <Label htmlFor="dateOfBirth" label="Date of Birth">
              <Input
                {...register("dateOfBirth")}
                id="dateOfBirth"
                type="date"
              />
            </Label>
          </div>

          <div>
            <Label htmlFor="permanentAddress" label="Permanent Address">
              <Input {...register("permanentAddress")} id="permanentAddress" />
            </Label>
          </div>

          <div>
            <Label htmlFor="presentAddress" label="Present Address">
              <Input {...register("presentAddress")} id="presentAddress" />
            </Label>
          </div>

          <div>
            <Label htmlFor="postalCode" label="Postal Code">
              <Input {...register("postalCode")} id="postalCode" />
            </Label>
          </div>

          <div>
            <Label htmlFor="city" label="City">
              <Input {...register("city")} id="city" />
            </Label>
          </div>

          <div>
            <Label htmlFor="country" label="Country">
              <Input {...register("country")} id="country" />
            </Label>
          </div>

          <div className="col-span-2 flex justify-end">
            <Button type="submit">Save</Button>
          </div>
        </form>
      )}

      {activeTab === "Preferences" && (
        <div className="text-center text-gray-500">
          Preferences settings coming soon...
        </div>
      )}

      {activeTab === "Security" && (
        <div className="text-center text-gray-500">
          Security settings coming soon...
        </div>
      )}
    </div>
  );
};
