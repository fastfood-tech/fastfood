import React from 'react';
import styled from 'styled-components';
import SelectedItemCover from './SelectedItemCover';

export interface ISelectableItemContainerProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  isSelected: boolean;
  shaddowOnHover?: boolean;
}

type ContainerProps = Omit<ISelectableItemContainerProps, 'isSelected'>;
const Container = styled(({ shaddowOnHover, ...props }: ContainerProps) => (
  <div {...props} />
))`
  width: fit-content;
  height: fit-content;

  -webkit-box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);
  -moz-box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);
  box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);

  border-radius: 20px;
  overflow: hidden;

  position: relative;

  cursor: ${({ shaddowOnHover }) => (shaddowOnHover ? 'pointer' : 'default')};
  @media (hover: hover) {
    &:hover {
      ${({ shaddowOnHover }) =>
        shaddowOnHover
          ? 'box-shadow: 0px 0px 0px 5px rgba(70, 200, 70, 0.8);'
          : ''}
    }
  }

  user-select: none;
`;

export default function SelectableItemContainer({
  children,
  isSelected,
  shaddowOnHover = true,
  ...props
}: ISelectableItemContainerProps) {
  return (
    <Container shaddowOnHover={shaddowOnHover} {...props}>
      {children}
      <SelectedItemCover show={isSelected} />
    </Container>
  );
}
