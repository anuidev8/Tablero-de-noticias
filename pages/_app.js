import Head from 'next/head'
import App from 'next/app'
import { Fragment } from 'react'
import { wrapper }  from '../redux/store'
import cookies from 'next-cookies'

import '../styles/global.css'

const APP_NAME = 'Gou University'
const APP_DESCRIPTION = 'This is an example of using next-pwa plugin'

const  MyApp = ({ Component, pageProps }) => {
  return (

    <Fragment>
        <Head>
          <title>GOU</title>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"/>

          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/icons/favicon.ico' />
          <link rel="stylesheet" type="text/css" href="/css/fonts.css" />
        </Head>

      <Component {...pageProps} />

    </Fragment>

  )

}


MyApp.getInitialProps = async (appContext) => {
  const { ctx } = appContext
  const { token } = cookies(ctx)



  /* if (ctx.pathname !== '/login') {
    if (!token) {
      if (ctx.req) {
        ctx.res.writeHead(302, { Location: '/login' })
        ctx.res.end()
      } else {
        Router.push('/login')
      }
      return
    }
  } else if (token) {
    if (ctx.req) {
      ctx.res.writeHead(302, { Location: '/' })
      ctx.res.end()
    } else {
      Router.push('/')
    }
  }
*/
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default wrapper.withRedux(MyApp)
