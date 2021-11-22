import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../../constants';


const SIZES = {
    small: {
        height: 8,
        borderRadius: 4,
        padding: 0,
    },
    medium: {
        height: 12,
        borderRadius: 4,
        padding: 0,
    },
    large: {
        height: 24,
        borderRadius: 8,
        padding: 4,
    },
}


const Wrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`


const ProgressIndicator = styled.div`
  width: ${p => p.value}%;
  background-color: ${COLORS.primary};
  height: 100%;
`

const ProgressWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--border-radius);
`

const ProgressBar = ({value, size}) => {
    // validate corner cases
    if (value > 100) {
        value = 100
    } else if (value < 0) {
        value = 0
    }

    const styles = SIZES[size];

    return (
        <Wrapper style={{
            '--border-radius': `${styles.borderRadius}px`,
            '--padding': `${styles.padding}px`,
            '--height': `${styles.height}px`,
        }}>
            <ProgressWrapper
                style={{
                    '--border-radius': '4px',
                }}>
                <ProgressIndicator
                    style={{
                        '--border-radius': '4px',
                    }}
                    value={value}
                    role={"progressbar"}
                    aria-valuemin={0}
                    aria-valuenow={value}
                    aria-valuemax={100}
                />
            </ProgressWrapper>
        </Wrapper>
    )
};

export default ProgressBar;
