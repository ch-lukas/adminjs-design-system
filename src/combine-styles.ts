import * as theme from './theme'
import { Theme } from './default-theme.interface'

const isObject = (item: any) => (item && typeof item === 'object' && !Array.isArray(item))

const mergeDeep = (target: any, ...sources: Array<any>) => {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}

/**
 * Applies new styles to the default theme
 *
 * @param   {Partial<Theme>}         newTheme
 *
 * @return  {Theme}
 */
const combineStyles = (newTheme: Partial<Theme>): Theme => {
  const merged = mergeDeep(theme, newTheme)
  if (newTheme.font) {
    return {
      ...merged,
      font: newTheme.font,
    }
  }
  return merged
}

// eslint-disable-next-line import/prefer-default-export
export { combineStyles }
