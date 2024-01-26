import 'nextra-theme-docs/style.css'
import Nextra from 'nextra'

const NextraTheme = require('@nextra/theme-docs')

function MyApp({ Component, pageProps }) {
  return (
    <Nextra
      theme={NextraTheme}
      // You can add additional Nextra and theme specific props here
    >
      <Component {...pageProps} />
    </Nextra>
  )
}

export default MyApp
