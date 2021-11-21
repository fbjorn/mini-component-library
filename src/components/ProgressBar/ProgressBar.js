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
  border-radius: ${p => p.value === 100 ? 'var(--border-radius)' : 'var(--border-radius) 0 0 var(--border-radius)'};
  height: var(--height);
`

const ProgressIndicatorLarge = styled(ProgressIndicator)`
  width: ${p => (p.value* 0.975)}%;
  top: 4px;
  left: 4px;
  border-radius: ${p => p.value === 100 ? '4px' : '4px 0 0 4px'};
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
    if (value > 100) {
        value = 100
    } else if (value < 0) {
        value = 0
    }

    const styles = SIZES[size];
    const Indicator = size === "large"? ProgressIndicatorLarge: ProgressIndicator;

    return (
        <Wrapper style={styles}>
            <Indicator
                value={value}
                style={styles}
                role={"progressbar"}
                aria-valuemin={0}
                aria-valuenow={value}
                aria-valuemax={100}
            >
                &nbsp;
            </Indicator>
        </Wrapper>
    )
};

export default ProgressBar;
