interface IAvatarProps {
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

const Avatar = ({ image, setImage }: IAvatarProps) => {
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
