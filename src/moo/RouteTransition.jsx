import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'
import { MountTransition } from './MountTransition'

export const RouteTransition = ({ children, exact = false, path, slide = 0, slideUp = 0, ...rest }) => {
  console.log('RouteTransition - path: ',path)
  return (
    <Route exact={false} path={`/about`} {...rest}>
    <MountTransition slide={slide} slideUp={slideUp}>
      {children}
    </MountTransition>
  </Route>
  )
}


export const AnimatedRoutes = ({ children, exitBeforeEnter = true, initial = false }) => {

  const location = useLocation()
  console.log('location: ',location)
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Switch location={location} key={location.pathname}>
        {children}
      </Switch>
    </AnimatePresence>
  )
}