import { Middleware } from '@nuxt/types'

const Me: Middleware = ({
  app,
  base,
  beforeNuxtRender,
  env,
  error,
  from,
  isClient,
  isDev,
  isHMR,
  isServer,
  isStatic,
  nuxtState,
  params,
  payload,
  query,
  redirect,
  req,
  res,
  route,
  store
}) => {}

export default Me
