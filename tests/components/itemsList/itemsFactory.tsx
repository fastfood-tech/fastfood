
import React from "react";
import { faker } from "@faker-js/faker";

export const createItem = () => {
const itemData = {id: faker.number.int(), textContent: faker.lorem.sentence()};

const Component = <div key={itemData.id} data-testid={`child-component-${itemData.id}`} >{itemData.textContent}</div>;

return {itemData, Component};
};

export const createItems = (maxAmount: number = 5) => {
    const amount = faker.number.int({min:1,max:maxAmount})
    const items = [];

    for(let i = 0; i < amount ; i++){
        const item = createItem()
        items.push(item.Component);
    }

    return items;
}