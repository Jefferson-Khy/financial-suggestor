import React, { useState } from "react";
import Prefrence from "./preference/Prefrence";
import EditUser from "./preference/EditUser";
import SignInAndSecurity from "./singIn & security/SignIn&Security";
import EditEmail from "./singIn & security/EditEmail";
import EditPassword from "./singIn & security/EditPassword";
import CloseAccount from "./preference/CloseAccount";
import Language from "./preference/Language";
import Verifications from "./preference/Verifications";

import PhoneNumbers from "./singIn & security/PhoneNumbers";
import TwoStep from "./singIn & security/TwoStep";

function MySettings(props) {
  const userData = props.data;
  const [selectedTab, setSelectedTab] = useState("Account Preference"); // State to keep track of which tab the user is on
  const [selectedSetting, setSelectedSetting] = useState("Account Preference"); // State to manage displayed component

  // Component we want to render
  function renderSettings() {
    switch (selectedSetting) {
      // Account Preference tab
      case "Account Preference":
        return (
          <Prefrence
            userData={userData}
            setSelectedSetting={setSelectedSetting}
          />
        );
      case "EditUser":
        return (
          <EditUser
            userData={userData}
            setChangesMade={props.setChangesMade}
            setSelectedSetting={setSelectedSetting}
          />
        );
      case "LanguageSetting":
        return (
          <Language
            userData={userData}
            setChangesMade={props.setChangesMade}
            setSelectedSetting={setSelectedSetting}
          />
        );
      case "Verifications":
        return (
          <Verifications
            userData={userData}
            setChangesMade={props.setChangesMade}
            setSelectedSetting={setSelectedSetting}
          />
        );
      case "CloseAccount":
        return (
          <CloseAccount
            userData={userData}
            setChangesMade={props.setChangesMade}
            setSelectedSetting={setSelectedSetting}
          />
        );

      // Sign In and security tab
      case "SignIn & Security":
        return (
          <SignInAndSecurity
            userData={userData}
            setSelectedSetting={setSelectedSetting}
          />
        );
      case "EditEmail":
        return (
          <EditEmail
            userData={userData}
            setChangesMade={props.setChangesMade}
            setSelectedSetting={setSelectedSetting}
          />
        );
      case "EditPassword":
        return (
          <EditPassword
            userData={userData}
            setChangesMade={props.setChangesMade}
            setSelectedSetting={setSelectedSetting}
          />
        );
      case "PhoneNumbers":
        return (
          <PhoneNumbers
            userData={userData}
            setChangesMade={props.setChangesMade}
            setSelectedSetting={setSelectedSetting}
          />
        );
      case "TwoStep":
        return (
          <TwoStep
            userData={userData}
            setChangesMade={props.setChangesMade}
            setSelectedSetting={setSelectedSetting}
          />
        );

      default:
        break;
    }
  }

  return (
    <div className="myData">
      <div className="settings-switch-buttons">
        <h4 className="gold-text mt-1">{userData.user.username}'s Settings</h4>
        <button
          onClick={() => {
            setSelectedSetting("Account Preference");
            setSelectedTab("Account Preference");
          }}
          className={
            selectedTab === "Account Preference"
              ? "active-tab-button"
              : "inactive-tab-button"
          }
        >
          Account Preference
        </button>
        <button
          onClick={() => {
            setSelectedSetting("SignIn & Security");
            setSelectedTab("SignIn & Security");
          }}
          className={
            selectedTab === "SignIn & Security"
              ? "active-tab-button"
              : "inactive-tab-button"
          }
        >
          SignIn & Security
        </button>
        <button
          onClick={() => {
            setSelectedSetting("Notifications");
            setSelectedTab("Notifications");
          }}
          className={
            selectedTab === "Notifications"
              ? "active-tab-button"
              : "inactive-tab-button"
          }
        >
          Notifications
        </button>
      </div>
      <div className="profile-information">{renderSettings()}</div>
    </div>
  );
}

export default MySettings;
