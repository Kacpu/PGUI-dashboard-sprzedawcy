import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import {t} from "i18next";

export default function ChartWidget(props) {
    let widgetNav = <div>dddd</div>;

    return (
        <WidgetFrame WidgetName={t("salesChartMenu")} OnCloseButton={props.OnCloseButton} WidgetNav={widgetNav}>
            ranking
        </WidgetFrame>
    );
}