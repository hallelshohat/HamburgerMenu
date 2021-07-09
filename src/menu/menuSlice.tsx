import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuItems } from '../types';

export type MenuState = {
    state: Record<keyof MenuItems, number>,
    selected: keyof MenuItems,
    options: MenuItems
};

const initialState: MenuState = {
    state: {
        drinks: 0,
        fries: 0,
        hamburgers: 0,
        salads: 0,
        sandwitches: 0
    },
    selected: 'drinks',
    options: {
        hamburgers: { description: "Hamburgers", iconColor: '#ffdcb9', itemColor: '#ffaa56' },
        sandwitches: { description: "Sandwitches", iconColor: '#cfdcff', itemColor: '#6e95ff' },
        salads: { description: "Salads", iconColor: '#2ed72e', itemColor: '#158b15' },
        fries: { description: "Fries", iconColor: '#efff64', itemColor: '#bccf17' },
        drinks: { description: "Drinks", iconColor: '#ffa3b8', itemColor: '#ff5078' },
    }
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        increase: (state) => {
            state.state[state.selected]++;
        },
        select: (state, action: PayloadAction<keyof MenuItems>) => {
            state.selected = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { increase, select } = menuSlice.actions

export default menuSlice.reducer