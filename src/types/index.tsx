export interface StyleProps {
  // width
  w?: number | string;
  maxW?: number | string;
  minW?: number | string;
  // height
  h?: number | string;
  maxH?: number | string;
  minH?: number | string;
  // font option
  fSize?: number | string;
  fWeight?: number | string;
  fColor?: string;
  tAlign?: string;
  // display option
  mode?: string; // row or column
  justifyContent?: string;
  alignItems?: string;
  // padding
  p?: string;
  pt?: number | string;
  pb?: number | string;
  pl?: number | string;
  pr?: number | string;
  // margin
  m?: string;
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
  bgColor?: string;

  // border option
  radius?: number | string;
  bColor?: string;

  gap?: number;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface RegisterUser {
  email: string;
  password: string;
  isAllow: boolean;
}
