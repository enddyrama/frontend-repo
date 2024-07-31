'use client'

import { remoteConfig } from "@/apis/firebase/FirebaseConfig";
import { Button } from "@mui/material";
import { fetchAndActivate, getValue } from "firebase/remote-config";
import { useEffect, useState } from "react";

const RemoteConfigComponent = () => {
    const [showBtn, setShowBtn] = useState(false);
    const [text, setText] = useState<String>("")
    const getConfigValue = () => {
        const firebaseRemoteConfig = remoteConfig;
        console.log("firebase config", firebaseRemoteConfig)
        if (firebaseRemoteConfig) {
            fetchAndActivate(firebaseRemoteConfig).then((a: any) => {
                setShowBtn(getValue(firebaseRemoteConfig, 'show_button').asBoolean())


                setText(getValue(firebaseRemoteConfig, "test").asString())
            })
        }
    }
   
    useEffect(() => {
        getConfigValue();
    }, []);

    return (
        <div className="p-16 text-white">
            <h1 className="text-black">{text}</h1>
            {showBtn ? (
                <Button >New Button</Button>
            ) : (
                <Button>Old Button</Button>
            )}
        </div>
    )

}
export default RemoteConfigComponent;