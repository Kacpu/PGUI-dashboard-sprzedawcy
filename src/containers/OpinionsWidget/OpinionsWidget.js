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
    const categories = [{name: 'All', value: 0}, {name: 'Positive', value: 1}, {name: 'Negative', value: 2}]
    const [category, setCategory] = useState(categories[0]);
    const [isCategoryMenuOpen, setCategoryMenuOpen] = useState(false);

    const onSelect = (name) => {
        setCategory(categories.find(c => c.name === name));
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

    const categoryButtons = categories.filter(c => c.value !== category.value).map((c) =>
        <DropdownButton
            key={c.value}
            name={c.name}
            onClick={onSelect}
        />
    );

    const widgetNav = <React.Fragment>
        <WidgetDropdownSelect
            content={categoryButtons}
            selected={category.name}
            isMenuOpen={isCategoryMenuOpen}
            onMenuClick={onMenuClick}
            onClickOutside={onClickOutside}
            width={styles.width140}
            label={t("Category")}
        />
        <WidgetButton
            onCLick={onClickGoToOpinionsButton}
            icon={enterIcon}
            name={t("Go to opinions")}
        />
    </React.Fragment>;

    return (
        <WidgetFrame WidgetName={t("opinionsMenu")} OnCloseButton={props.OnCloseButton} WidgetNav={widgetNav}>
            <OpinionsList opinions={opinions} category={category.value}/>
        </WidgetFrame>
    );
}