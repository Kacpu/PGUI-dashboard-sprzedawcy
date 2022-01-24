import styles from "./opinionsWidget.module.css"
import WidgetFrame from "../../elements/WidgetFrame/WidgetFrame";
import {t} from "i18next";
import DropdownButton from "../../components/WidgetDropdownSelect/DropdownButton/DropdownButton";
import WidgetDropdownSelect from "../../components/WidgetDropdownSelect/WidgetDropdownSelect";
import React, {useState} from "react";

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
        />
    </React.Fragment>;

    return (
        <WidgetFrame WidgetName={t("opinionsMenu")} OnCloseButton={props.OnCloseButton} WidgetNav={widgetNav}>
            <div>He moonlight difficult engrossed an it sportsmen. Interested has all devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arise along to. Parlors waiting so against me no. Wishing calling are warrant settled was luckily. Express besides it present if at an opinion visitor.
                Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
            </div>
        </WidgetFrame>
    );
}