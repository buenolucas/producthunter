export type TypographyStyle = {
  family: string
  size: string
  smSize?: string
  lgSize?: string
  weight: number
  lineHeight: string
  smLineHeight?: string
  lgLineHeight?: string
}

export interface TypographyStyles {
  [key: string]: TypographyStyle
}
