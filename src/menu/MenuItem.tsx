import { useAppDispatch, useAppSelector } from '../hooks'
import { MenuItems } from '../types';
import { select } from './menuSlice';
import './Menu.css'
import { shallowEqual } from 'react-redux';
import { AmountChip } from './AmountChip';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
    icon: React.ReactNode;
    description: string;
    iconColor: string;
    name: keyof MenuItems;
    itemColor: string;
}

export const MenuItem: React.FC<Props> = ({ icon, description, iconColor, name, itemColor }) => {
    const dispatch = useAppDispatch();
    const amount = useAppSelector(state => state.menuReducer.state[name], shallowEqual);
    const selected = useAppSelector(state => state.menuReducer.selected === name, shallowEqual);

    return (
        <motion.div whileHover={{backgroundColor: "#dddacf", y: -2, transition: {duration: 0.1}}} 
            className={`menu-item ${selected ? 'menu-item-selected' : ''}`}
            onClick={() => {dispatch(select(name))}}>
            <div className="chip-item">
                <AmountChip amount={amount} />
                <AnimatePresence>
                    {selected &&
                        <motion.div initial={{ scale: 1 }} animate={{ scale: 1.2 }}
                            exit={{ scale: 1 }}
                            className="chip-selected" style={{ backgroundColor: itemColor }} />
                    }
                </AnimatePresence>
                <div className="icon" style={{ backgroundColor: iconColor }}>
                    {icon}
                </div>
            </div>
            <div className="chip-description">
                {description}
            </div>
        </motion.div>
    )
}