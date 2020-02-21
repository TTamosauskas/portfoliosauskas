/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `light`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `dark` : `light`)
  }

  return (
    <ThemeFooter>
    
      Copyright &copy; {new Date().getFullYear()}, o ano que fizemos contato.
   
    </ThemeFooter>
  )
}

export default Footer