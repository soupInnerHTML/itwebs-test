import {PropsWithChildren} from "react";

export interface IAnimationProps extends PropsWithChildren {
  index: number;
  className?: string;
}