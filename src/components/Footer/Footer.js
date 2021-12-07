import "./footer.css"
import { useTranslation } from "react-i18next";

export default function Footer(){

    const {t, i18n} = useTranslation();
    return(
        <footer className="authors-footer">{t("footer")}</footer>
    );
} 