function updateColorScheme() {
  const primaryColorHex = getComputedStyle(document.documentElement).getPropertyValue('--ghost-accent-color').trim()
  const primaryDarkColor = tinycolor(primaryColorHex).darken(10)
  const secondaryColor = tinycolor(primaryColorHex).spin(180)
  const secondaryDarkColor = tinycolor(primaryColorHex).spin(180).darken(10)
  document.documentElement.style.setProperty('--color-primary-dark', primaryDarkColor.toString())
  document.documentElement.style.setProperty('--color-secondary', secondaryColor.toString())
  document.documentElement.style.setProperty('--color-secondary-dark', secondaryDarkColor.toString())
}

document.addEventListener('hashchange', updateColorScheme)
document.addEventListener('DOMContentLoaded', updateColorScheme)
