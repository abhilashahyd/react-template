import "./style.scss";
import QButton from "../../components/BaseUI/QButton";
import QTextInput from "../../components/Forms/QTextInput";
import QTextArea from "../../components/Forms/QTextArea";
import ProfileImage from "../../components/BaseUI/ProfileImage";
import {
  LABEL_ABOUT_ME,
  LABEL_ABOUT_ME_PLACEHOLDER,
  LABEL_ADDRESS,
  LABEL_ADRESS_PLACEHOLDER,
  LABEL_City,
  LABEL_CONTACT_INFO,
  LABEL_Country,
  LABEL_DUMMY_TEXT,
  LABEL_EDIT_PROFILE,
  LABEL_EMAIL_ADDRESS,
  LABEL_EMAIL_PLACEHOLDER,
  LABEL_FIRST_NAME,
  LABEL_LAST_NAME,
  LABEL_POSTAL,
  LABEL_PROFILE_HEADER,
  LABEL_SAVE_PROFILE,
  LABEL_USER_INFO,
  LABEL_USER_NAME,
} from "../../utils/Labels";
import React from "react";
import { Component } from "react";
import { Form, FormLabel } from "react-bootstrap";
import {
  DEFAULT_PROFILE_CONFIG,
  DEFAULT_PROFILE_IMG,
} from "../../utils/Constants";

class Profile extends Component {
  constructor(props) {
    super(props);
    const {
      userNameKey = "username",
      userEmailKey = "useremail",
      firstNameKey = "firstname",
      lastNameKey = "lastname",
      userAddresskey = "address",
      userCityKey = "city",
      userCountryKey = "country",
      userPostCodeKey = "postalcode",
      userDescriptionKey = "aboutuser",
    } = props;
    this.state = {
      [`${userNameKey}`]: DEFAULT_PROFILE_CONFIG.username,
      [`${userEmailKey}`]: DEFAULT_PROFILE_CONFIG.useremail,
      [`${firstNameKey}`]: DEFAULT_PROFILE_CONFIG.firstname,
      [`${lastNameKey}`]: DEFAULT_PROFILE_CONFIG.lastname,
      [`${userAddresskey}`]: DEFAULT_PROFILE_CONFIG.address,
      [`${userCityKey}`]: DEFAULT_PROFILE_CONFIG.city,
      [`${userCountryKey}`]: DEFAULT_PROFILE_CONFIG.country,
      [`${userPostCodeKey}`]: DEFAULT_PROFILE_CONFIG.postalcode,
      [`${userDescriptionKey}`]: DEFAULT_PROFILE_CONFIG.aboutuser,
      editMode: false,
      profileImg: DEFAULT_PROFILE_IMG,
    };
  }

  onProfileDataEdit = (evt) => {
    if (evt.target && evt.target.name) {
      let name = evt.target.name;
      this.setState({
        [`${name}`]: evt.target.value,
      });
    }
  };

  onEditSaveClick = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  onProfileImgUpload = (imgSrc = "") => {
    this.setState({
      profileImg: imgSrc,
    });
  };

  render() {
    let {
        userNameKey = "username",
        userEmailKey = "useremail",
        firstNameKey = "firstname",
        lastNameKey = "lastname",
        userAddresskey = "address",
        userCityKey = "city",
        userCountryKey = "country",
        userPostCodeKey = "postalcode",
        userDescriptionKey = "aboutuser",
      } = this.props,
      {
        username = "",
        useremail = "",
        firstname = "",
        lastname = "",
        address = "",
        city = "",
        country = "",
        postalcode = "",
        aboutuser = "",
        editMode = false,
        profileImg = "",
      } = this.state;

    return (
      <>
        <div className="profile-header align-items-center">
          <div className="container-fluid">
            <div className="col-md-10 col-lg-7">
              <QButton
                qbtnCls="btn-info edit-profile-btn"
                label={editMode ? LABEL_SAVE_PROFILE : LABEL_EDIT_PROFILE}
                onClick={this.onEditSaveClick}
              />
            </div>
          </div>
        </div>
        <div className="profile-form-wrapper">
          <div className="container">
            <div className="row">
              {editMode ? (
                <>
                  <div className="order-xl-2 mb-5 mb-xl-0 col-xl-4 col-lg-12">
                    <div className="card-profile shadow card">
                      <div className="justify-content-center row">
                        <div className="order-lg-2 col-lg-3">
                          <div className="card-profile-image">
                            <ProfileImage
                              imgSrc={profileImg}
                              onProfileImgUpload={this.onProfileImgUpload}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pt-0 card-body">
                        <div className="text-center">
                          <p>{LABEL_DUMMY_TEXT}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-xl-1 col-xl-8 col-lg-12">
                    <div className="shadow card">
                      <div className="border-0 card-header">
                        <div className="align-items-center row">
                          <div className="col-8">
                            <h3 className="mb-0">{LABEL_PROFILE_HEADER}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <Form className="profile-edit-mode">
                          <h6 className="heading-small text-muted mb-4">
                            {LABEL_USER_INFO}
                          </h6>
                          <div className="pl-lg-4">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <QTextInput
                                    type="text"
                                    label={LABEL_USER_NAME}
                                    name={userNameKey}
                                    value={username}
                                    placeholder={LABEL_USER_NAME}
                                    onInputChange={this.onProfileDataEdit}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <QTextInput
                                    type="email"
                                    name={userEmailKey}
                                    value={useremail}
                                    placeholder={LABEL_EMAIL_PLACEHOLDER}
                                    label={LABEL_EMAIL_ADDRESS}
                                    onInputChange={this.onProfileDataEdit}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <QTextInput
                                    label={LABEL_FIRST_NAME}
                                    name={firstNameKey}
                                    value={firstname}
                                    placeholder={LABEL_FIRST_NAME}
                                    onInputChange={this.onProfileDataEdit}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <QTextInput
                                    label={LABEL_LAST_NAME}
                                    name={lastNameKey}
                                    value={lastname}
                                    placeholder={LABEL_LAST_NAME}
                                    onInputChange={this.onProfileDataEdit}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="my-4" />
                          <h6 className="heading-small text-muted mb-4">
                            {LABEL_CONTACT_INFO}
                          </h6>
                          <div className="pl-lg-4">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <QTextInput
                                    label={LABEL_ADDRESS}
                                    name={userAddresskey}
                                    value={address}
                                    placeholder={LABEL_ADRESS_PLACEHOLDER}
                                    onInputChange={this.onProfileDataEdit}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <QTextInput
                                    label={LABEL_City}
                                    name={userCityKey}
                                    value={city}
                                    placeholder={LABEL_City}
                                    onInputChange={this.onProfileDataEdit}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <QTextInput
                                    label={LABEL_Country}
                                    name={userCountryKey}
                                    value={country}
                                    placeholder={LABEL_Country}
                                    onInputChange={this.onProfileDataEdit}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <QTextInput
                                    label={LABEL_POSTAL}
                                    name={userPostCodeKey}
                                    value={postalcode}
                                    placeholder={LABEL_POSTAL}
                                    onInputChange={this.onProfileDataEdit}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="my-4" />
                          <h6 className="heading-small text-muted mb-4">
                            {LABEL_ABOUT_ME}
                          </h6>
                          <div className="pl-lg-4">
                            <div className="form-group">
                              <QTextArea
                                label={LABEL_ABOUT_ME}
                                name={userDescriptionKey}
                                value={aboutuser}
                                placeholder={LABEL_ABOUT_ME_PLACEHOLDER}
                                onInputChange={this.onProfileDataEdit}
                              />
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="order-xl-1 col-xl-12 col-lg-12">
                  <div className="shadow card">
                    <div className="card-body">
                      <div className="profile-readonly-mode">
                        <div className="row">
                          <div className="col-lg-3 col-xl-3">
                            <div className="profile-left-wrapper">
                              <img className="profile-img" src={profileImg} />
                              <FormLabel>{username}</FormLabel>
                            </div>
                          </div>
                          <div className="col-lg-9 col-xl-9">
                            <div className="info-wrapper">
                              <FormLabel>
                                {firstname + " " + lastname}
                              </FormLabel>
                              <div>
                                <p>{useremail}</p>
                              </div>
                              <div>
                                <p>{`${address}, ${city}, ${country} ${postalcode}`}</p>
                              </div>
                              <div className="about-me">{aboutuser}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
