import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';


const SIZES = {
    small: {
        '--height': '8px',
        '--border-radius': '4px',
    },
    medium: {
        '--height': '12px',
        '--border-radius': '4px',
    },
    large: {
        '--height': '24px',
        '--border-radius': '8px',
    },
}

const ProgressIndicator = styled.div`
  position: absolute;
  width: ${p => p.value}%;
  background-color: ${COLORS.primary};
  top: 0;
  left: 0;
  border-radius: 4px var(--indicator-right-br) var(--indicator-right-br) 4px;
  height: var(--height);
`

const ProgressIndicatorLarge = styled(ProgressIndicator)`
  width: ${p => (p.value* 0.975)}%;
  top: 4px;
  left: 4px;
  height: 16px;
`

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  height: var(--height);
  position: relative;
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`

const ProgressBar = ({value, size}) => {
    // validate corner cases
    if (value > 100) {
        value = 100
    } else if (value < 0) {
        value = 0
    }

    const styles = SIZES[size];
    const Indicator = size === "large"? ProgressIndicatorLarge: ProgressIndicator;

    // border radius when the value is close to 100
    styles['--indicator-right-br'] = 0
    if (value > 99) {
        styles['--indicator-right-br'] = `${value * 4 / 100}px`
    }


    return (
        <Wrapper style={styles}>
            <Indicator
                value={value}
                style={styles}
                role={"progressbar"}
                aria-valuemin={0}
                aria-valuenow={value}
                aria-valuemax={100}
            />
        </Wrapper>
    )
};

export default ProgressBar;
