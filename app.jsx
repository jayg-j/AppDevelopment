import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import OTPVerifyScreen from "./screens/OTPVerifyScreen";
import PasswordResetScreen from "./screens/PasswordResetScreen";
import AccountCreatedScreen from "./screens/AccountCreatedScreen";
import FeedScreen from "./screens/FeedScreen";

function App() {
  const [screen, setScreen] = useState("login");

  const screenMap = {
    login: <LoginScreen goTo={setScreen} />,
    register: <RegisterScreen goTo={setScreen} />,
    otp: <OTPVerifyScreen goTo={setScreen} />,
    reset: <PasswordResetScreen goTo={setScreen} />,
    created: <AccountCreatedScreen goTo={setScreen} />,
    feed: <FeedScreen goTo={setScreen} />,
  };

  return <div className="w-screen h-screen bg-teal-600 flex items-center justify-center">{screenMap[screen]}</div>;
}

export default App;
