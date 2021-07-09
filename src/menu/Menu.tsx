import './Menu.css';
import { motion } from "framer-motion";
import { useState } from "react";
import { HamburgerIcon } from '../icons/HamburgerIcon';
import { SandwitchIcon } from '../icons/SandwitchIcon';
import { MenuItem } from './MenuItem';
import { SaladIcon } from '../icons/SaladIcon';
import { FriesIcon } from '../icons/FriesIcon';
import { DrinksIcon } from '../icons/DrinksIcon';
import { MenuItem as MenuItemType, MenuItems } from '../types';
import { useAppSelector } from '../hooks';
import { merge } from 'lodash';
import { shallowEqual } from 'react-redux';


const itemIcons: Record<keyof MenuItems, Partial<MenuItemType>> = {
    hamburgers: { icon: <HamburgerIcon /> },
    sandwitches: { icon: <SandwitchIcon /> },
    salads: { icon: <SaladIcon /> },
    fries: { icon: <FriesIcon /> },
    drinks: { icon: <DrinksIcon /> },
}

export const Menu: React.FC = () => {
    const [isSmall, setIsSmall] = useState(true);
    const itemsState = useAppSelector(state => state.menuReducer.options, shallowEqual);
    const items = merge({}, itemsState, itemIcons);

    return (
        <motion.div initial={false} animate={{ width: isSmall ? '3.5em' : '14em' }} transition={{ duration: 0.2 }} className="menu"
            onMouseEnter={() => { setIsSmall(false) }} onMouseLeave={() => { setIsSmall(true) }}>
            {Object.entries(items).map(([name, item]) => (
                <div key={item.description}>
                    <MenuItem name={name} key={item.description} {...item} />
                </div>
            ))}
        </motion.div>
    )
}