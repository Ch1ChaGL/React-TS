import React, { FC, useState } from "react";

export enum EnumCardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode | React.ReactChild;
  variant: EnumCardVariant;
  onClick: (num: number) => void;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  variant,
  children,
  onClick,
}) => {
  const [state, setState] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border:
          variant === EnumCardVariant.outlined ? "1px solid grey" : "none",
        background: variant === EnumCardVariant.primary ? "lightgray" : "",
      }}
      onClick={() => {
        onClick(state);
        setState(state + 1);
      }}
    >
      {children}
    </div>
  );
};

export default Card;
