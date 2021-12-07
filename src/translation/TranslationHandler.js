import { useTranslation } from "react-i18next";
import React, { useState } from "react";

export default function TranslationHanlder() {

    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("eng");

    const changeToPolish = () => {
        console.log("pol");
        setLanguage("pol");
        i18n.changeLanguage("pol");
    };

    const changeToEnglish = () => {
        console.log("eng");
        setLanguage("eng");
        i18n.changeLanguage("eng");
    }

    return (
        <div>
            <button onClick={changeToPolish}>pol</button>
            <button onClick={changeToEnglish}>eng</button>
        </div>
        

    );
}