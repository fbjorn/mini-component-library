import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';


const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  width: var(--width);

  &:hover {
    color: ${COLORS.black};
  }
`

const SelectWrapper = styled.select`
  width: var(--width);
  height: 43px;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  color: inherit;
  appearance: none;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`

const Arrow = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 8px;
`

const Select = ({value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);

    const style = {
        '--width': `${displayedValue.length + 5}ch`
    }

    return (
        <Wrapper style={style}>
            <SelectWrapper value={value} onChange={onChange} style={style}>
                {children}
            </SelectWrapper>
            <Arrow id={"chevron-down"} strokeWidth={2} />
        </Wrapper>
    );
};

export default Select;
