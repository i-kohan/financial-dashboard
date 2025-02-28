import { Input } from "../../components/Input";

interface IAvatarUploadProps {
  avatar: string;
  onChange: (url: string) => void;
}

export const AvatarUpload: React.FC<IAvatarUploadProps> = ({
  avatar,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative h-16 w-16">
        <img
          src={avatar}
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
                  onChange(event.target?.result as string);
                reader.readAsDataURL(file);
              }
            }}
          />
        </label>
      </div>
    </div>
  );
};
