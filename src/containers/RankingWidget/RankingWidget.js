import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import {t} from "i18next";

export default function RankingWidget(props) {
    let widgetNav = <div>dddd</div>;

    return (
        <WidgetFrame WidgetName={t("offersMenu")} OnCloseButton={props.OnCloseButton} WidgetNav={widgetNav}>
            oferty
        </WidgetFrame>
    );
}