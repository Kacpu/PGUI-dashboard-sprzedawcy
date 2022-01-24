import styles from "./opinionsWidget.module.css"
import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import {t} from "i18next";

export default function OpinionsWidget(props) {
    let widgetNav = <div>dddd</div>;

    return (
        <WidgetFrame WidgetName={t("opinionsMenu")} OnCloseButton={props.OnCloseButton} WidgetNav={widgetNav}>
            ddddddd1
        </WidgetFrame>
    );
}