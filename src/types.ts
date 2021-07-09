import React from "react";

export interface MenuItem {
    icon?: React.ReactNode;
    description: string;
    iconColor: string;
    itemColor: string;
}

export interface MenuItems {
    hamburgers: MenuItem;
    sandwitches: MenuItem;
    salads: MenuItem;
    fries: MenuItem;
    drinks: MenuItem;
}