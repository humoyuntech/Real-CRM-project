import { ProfileContaier } from "./style";
import noImg from "../../assets/images/noUser.webp";

export const Profile = () => {
  return (
    <ProfileContaier>
      <ProfileContaier.Image src={noImg} />
      <div>
        <ProfileContaier.Name>Rustamov Khumoyun</ProfileContaier.Name>
        <ProfileContaier.Email>humoyuntech@gmail.com</ProfileContaier.Email>
      </div>
    </ProfileContaier>
  );
};
