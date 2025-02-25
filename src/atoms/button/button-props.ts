import { FlexboxProps, SpaceProps, TypographyProps } from 'styled-system'
import { VariantType } from '../../theme'

import { ColorProps } from '../../utils/color-props'

/**
 * @load ./button-props.doc.md
 * @memberof Button
 * @alias ButtonProps
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */
export type ButtonProps = ColorProps & SpaceProps & TypographyProps & FlexboxProps & {
  /**
   * Button color variant
   */
  variant?: VariantType | 'text';
  /**
   * Button size variant
   */
  size?: 'sm' | 'lg' | 'icon' | 'default' | 'md';
  /**
   * If button should be rounded
   */
  rounded?: boolean;

  /**
   * You can either pass an label prop - or use react Children.
   */
  label?: string
}
