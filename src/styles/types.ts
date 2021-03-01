export type TypographyStyle = {
  family: string
  size: string
  smSize?: string
  weight: number
  lineHeight: string
  smLineHeight?: string
}

export interface TypographyStyles {
  [key: string]: TypographyStyle
}
