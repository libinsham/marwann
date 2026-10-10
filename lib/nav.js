// Adds the "active" class to a menu item when the current route is one of its routes.
export function navClass(base, pathname, routes) {
  return (base + (routes.includes(pathname) ? ' active' : '')).trim()
}
