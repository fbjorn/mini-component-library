import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.label`
  display: flex;
  align-items: flex-end;
  position: relative;

  width: var(--width);
  padding-bottom: 4px;

  border-bottom: var(--border-width) solid ${COLORS.black};
  color: ${COLORS.gray500};

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputWrapper = styled.input`
  width: 100%;
  height: var(--input-height);

  padding-bottom: 2px;
  padding-left: var(--padding-left);

  border: none;
  color: ${COLORS.gray700};

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: var(--font-size);
  line-height: var(--line-height);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 8px;
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: -1px;
  left: -1px;
  color: inherit;
`;

const STYLES = {
  small: {
    "--border-width": "1px",
    "--height": "24px",
    "--input-height": "16px",
    "--font-size": "14px",
    "--line-height": "16px",
  },
  large: {
    "--border-width": "2px",
    "--height": "36px",
    "--input-height": "21px",
    "--font-size": "18px",
    "--line-height": "21px",
  },
};

const SIZES = {
  small: {
    icon: 16,
    strokeWidth: 1,
  },
  large: {
    icon: 24,
    strokeWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = STYLES[size];
  const sizes = SIZES[size];

  return (
    <Wrapper
      style={{
        ...style,
        "--width": `${width}px`,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        id={icon}
        size={sizes.icon}
        strokeWidth={sizes.strokeWidth}
      />
      <InputWrapper
        style={{
          ...style,
          "--padding-left": `${sizes.icon + 4}px`,
        }}
        placeholder={placeholder}
        id={label}
      />
    </Wrapper>
  );
};

export default IconInput;
