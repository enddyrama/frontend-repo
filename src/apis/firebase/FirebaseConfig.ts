import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { RemoteConfigSettings, getRemoteConfig } from "firebase/remote-config";

const firebaseConfig = {
  apiKey: "AIzaSyBT2d53XfdD-z2dQ_8HoxIDQvxfUr9hLKg",
  authDomain: "ebuddy-assignment.firebaseapp.com",
  projectId: "ebuddy-assignment",
  storageBucket: "ebuddy-assignment.appspot.com",
  messagingSenderId: "248508311752",
  appId: "1:248508311752:web:142a34a4d7f43c361b5dfd",
};

export const app = initializeApp(firebaseConfig);

let remoteConfigVar;
if (typeof window !== "undefined") {
  remoteConfigVar = getRemoteConfig(app);
  remoteConfigVar.settings.minimumFetchIntervalMillis = 600000;
  remoteConfigVar.defaultConfig = {
    welcome_message: "Welcome",
  };
}
export const remoteConfig = remoteConfigVar;

export const auth = getAuth(app);
