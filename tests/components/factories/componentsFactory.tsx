import React from 'react';
import { faker } from '@faker-js/faker';

export const createComponent = () => {
  const componentData = {
    id: faker.number.int(),
    textContent: faker.lorem.sentence(),
  };

  const JsxElement = (
    <div
      key={componentData.id}
      data-testid={`child-component-${componentData.id}`}
    >
      {componentData.textContent}
    </div>
  );

  return { componentData, JsxElement };
};

export const createComponents = (maxAmount = 5) => {
  const amount = faker.number.int({ min: 1, max: maxAmount });
  const components = [];

  for (let i = 0; i < amount; i += 1) {
    const Component = createComponent();
    components.push(Component.JsxElement);
  }

  return components;
};
