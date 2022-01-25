import styles from "./opinionsWidget.module.css"
import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import {t} from "i18next";
import DropdownButton from "../../components/WidgetDropdownSelect/DropdownButton/DropdownButton";
import WidgetDropdownSelect from "../../components/WidgetDropdownSelect/WidgetDropdownSelect";
import React, {useState} from "react";
import WidgetButton from "../../components/WidgetButton/WidgetButton";
import enterIcon from "../../assets/icons/enter-icon.png";
import OpinionsList from "../../components/OpinionsList/OpinionsList";
import {opinions} from '../../mocks/OpinionMock'

export default function OpinionsWidget(props) {
    const categories = ['All', 'Positive', 'Negative']
    const [category, setCategory] = useState(categories[0]);
    const [isCategoryMenuOpen, setCategoryMenuOpen] = useState(false);

    const onSelect = (value) => {
        setCategory(value);
        setCategoryMenuOpen(false);
    }

    const onMenuClick = () => {
        setCategoryMenuOpen((prev) => !prev);
    }

    const onClickOutside = () => {
        setCategoryMenuOpen(false);
    }

    const onClickGoToOpinionsButton = () => {

    }

    const categoryButtons = categories.filter(c => c !== category).map((c) =>
        <DropdownButton
            key={c}
            name={c}
            onClick={onSelect}
        />
    );

    const widgetNav = <React.Fragment>
        <WidgetDropdownSelect
            content={categoryButtons}
            selected={category}
            isMenuOpen={isCategoryMenuOpen}
            onMenuClick={onMenuClick}
            onClickOutside={onClickOutside}
            width={styles.width120}
            label={"Category"}
        />
        <WidgetButton
            onCLick={onClickGoToOpinionsButton}
            icon={enterIcon}
            name={t("Go to opinions")}
        />
    </React.Fragment>;

    return (
        <WidgetFrame WidgetName={t("opinionsMenu")} OnCloseButton={props.OnCloseButton} WidgetNav={widgetNav}>
            <OpinionsList opinions={opinions}/>
        </WidgetFrame>
    );
}