// Title
type TitleLevel = '' | 'L' | 'M' | 'S' | 'custom'
type TitleTag = '' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TitleStyleMapping = {
  level: TitleLevel
  tag: TitleTag
  style: string
}

// Headline
export type HeadlineLevel = 'XL' | 'L' | 'M/L' | 'M' | 'S' | 'XS'
export type HeadlineTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadlineStyleMapping {
  tag: HeadlineTag
  style: string
}

// Subline
export type SublineLevel = '' | 'L' | 'M' | 'S' | 'XS' | 'CUSTOM'
export type SublineTag = '' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface SublineStyleMapping {
  level: SublineLevel
  tag: SublineTag
  style: string
}

// Text
export type TextLevel = 'XXL' | 'XL' | 'L' | 'M/L' | 'M' | 'S' | 'XS' | 'CUSTOM'

export interface TextStyleMapping {
  level: TextLevel
  style: string
}

// Link
export type LinkSize = 'large' | 'medium' | 'small'

// List
export type ListSize = 'large' | 'small'

export type ListStyle = 'check' | 'cross' | 'bullet' | 'letter' | 'number'

// ListItem
export type ListItemStyle =
  | ''
  | 'check'
  | 'cross'
  | 'bullet'
  | 'letter'
  | 'number'
