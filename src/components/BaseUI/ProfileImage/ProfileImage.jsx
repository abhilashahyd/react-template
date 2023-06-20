import { useState, useRef } from "react";
import { DEFAULT_PROFILE_IMG } from "../../../utils/Constants";
import QChooseFile from "../../Forms/QChooseFile";
import "./style.scss";

const ProfileImage = (props) => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState(
      props.imgSrc || DEFAULT_PROFILE_IMG
    );
    const fileInputRef = useRef(null);
    const onProfileImgClick = () => {
      fileInputRef.current.click();
    };
    const onFileUpload = (evt) => {
      if (evt.target) {
        try{
          let reader = new FileReader();
          let fileSrc = evt.target.files ? evt.target.files[0] : "";
          if(fileSrc){
            reader.readAsDataURL(fileSrc);
            reader.onloadend = () => {
              setImagePreviewUrl(reader.result);
              if(props.onProfileImgUpload){
                props.onProfileImgUpload(reader.result);
              }
            };
          }
        }catch(e){
          console.log("Profile image upload failed")
        }
      }
      evt.stopPropagation();
    };
    return (
      <div className="img-uploader-wrapper">
        <img alt="..." className="img-holder" src={imagePreviewUrl} />
        <QChooseFile
          name="profileimage"
          fieldRef={fileInputRef}
          accept="image/*"
          onFileUpload={onFileUpload}
          style={{ display: "none" }}
        />
        <div className="edit-wrapper" onClick={onProfileImgClick}><i className="fa fa-solid fa-pencil"></i></div>
      </div>
    );
  };
  
export default ProfileImage;