import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { useUser } from "../../context/UserContext/UserContext";
import { AvatarUpload } from "./AvatarUpload";

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

export const ProfileForm = () => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="mb-auto flex-shrink-0 px-8 pt-4">
          <AvatarUpload
            avatar={user.avatar}
            onChange={(newAvatar) => updateUser({ avatar: newAvatar })}
          />
        </div>

        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="flex-1 space-y-6">
            <Label htmlFor="name" label="Your Name">
              <Input
                {...register("name", { required: "Name is required" })}
                aria-invalid={errors.name ? "true" : "false"}
                id="name"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </Label>

            <Label htmlFor="email" label="Email">
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                id="email"
                type="email"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </Label>

            <Label htmlFor="dateOfBirth" label="Date of Birth">
              <Input
                {...register("dateOfBirth")}
                id="dateOfBirth"
                type="date"
              />
            </Label>

            <Label htmlFor="permanentAddress" label="Permanent Address">
              <Input {...register("permanentAddress")} id="permanentAddress" />
            </Label>

            <Label htmlFor="postalCode" label="Postal Code">
              <Input {...register("postalCode")} id="postalCode" />
            </Label>
          </div>

          <div className="flex-1 space-y-6">
            <Label htmlFor="username" label="User Name">
              <Input
                {...register("username", { required: "Username is required" })}
                id="username"
                aria-invalid={errors.username ? "true" : "false"}
              />
              {errors.username && (
                <p className="text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </Label>

            <Label htmlFor="password" label="Password">
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
                id="password"
                type="password"
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </Label>

            <Label htmlFor="presentAddress" label="Present Address">
              <Input {...register("presentAddress")} id="presentAddress" />
            </Label>

            <Label htmlFor="city" label="City">
              <Input {...register("city")} id="city" />
            </Label>

            <Label htmlFor="country" label="Country">
              <Input {...register("country")} id="country" />
            </Label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          aria-label="Save profile"
          onClick={() => alert(`Profile saved`)}
        >
          Save
        </Button>
      </div>
    </form>
  );
};
