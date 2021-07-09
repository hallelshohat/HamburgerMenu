import { useAppDispatch, useAppSelector } from '../hooks'
import { MenuItems } from '../types';
import { select } from './menuSlice';
import './Menu.css'
import { shallowEqual } from 'react-redux';
import { AmountChip } from './AmountChip';

interface Props {
    icon: React.ReactNode;
    description: string;
    iconColor: string;
    name: keyof MenuItems;
}

export const MenuItem: React.FC<Props> = ({ icon, description, iconColor, name }) => {
    const dispatch = useAppDispatch();
    const amount = useAppSelector(state => state.menuReducer.state[name], shallowEqual);
    const selected = useAppSelector(state => state.menuReducer.selected === name, shallowEqual);

    return (
        <div className={`menu-item ${selected ? 'menu-item-selected' : ''}`} 
            onClick={() => dispatch(select(name))}>
            <div className="chip-item" style={{ backgroundColor: iconColor }}>
                <AmountChip amount={amount} />
                {icon}
            </div>
            <div className="chip-description">
                {description}
            </div>
        </div>
    )
}