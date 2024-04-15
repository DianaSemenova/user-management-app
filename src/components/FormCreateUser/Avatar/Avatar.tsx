import { IUser } from "../../../types/types";

interface IAvatarProps {
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  userInfo: IUser | undefined;
}

const Avatar = ({ image, setImage }: IAvatarProps) => {
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  const getSrcAvatar = () => {
    if (image) {
      return URL.createObjectURL(image);
    }
    // if (!image && userInfo?.photo_id) {
    //   return `https://tasks.tizh.ru/file/get?id=${userInfo?.photo_id}`;
    // }

    return "../user-placeholder.png";
  };

  return (
    <div className="form-user-avatar">
      <label htmlFor="avatarUser" className="form-user-avatar__label">
        <div className="container-img-block">
          <img
            className="container-img-block__img"
            src={getSrcAvatar()}
            alt="avatar-user"
          />
        </div>
        Заменить
        <input
          id="avatarUser"
          type="file"
          accept="image/*, .png, .jpg, .gif, .web, .jpeg"
          onChange={handleChangeImage}
        />
      </label>
    </div>
  );
};

export default Avatar;
