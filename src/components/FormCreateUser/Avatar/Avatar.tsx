// import { useAppSelector } from "../../../store/hooks";
// import { useAppDispatch } from "../../../store/hooks";
// import { setImage } from "../../../store/slices/users";
import { useState } from "react";

const Avatar = () => {
  // const dispatch = useAppDispatch();
  // const image = useAppSelector((state) => state.users.bodyUserPost.image);
  const [image, setImage] = useState<File | null>(null);

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  return (
    <div className="form-user-avatar">
      <label htmlFor="avatarUser" className="form-user-avatar__label">
        <div className="container-img-block">
          <img
            className="container-img-block__img"
            src={image ? URL.createObjectURL(image) : "../user-placeholder.png"}
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
