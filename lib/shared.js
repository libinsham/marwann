// Pure helpers/constants that are safe to import from client components.
export const CATEGORIES = {
  community: 'Community Support',
  health: 'Health & Wellness',
  education: 'Education & Skills',
}

export const DEFAULT_SETTINGS = {
  topText: 'We Serve God by Serving Others',
  homeTopText: 'Empowering Communities Through Education, Healthcare & Social Welfare.',
  email: 'marwanncharitabletrust2001@gmail.com',
  phones: ['+91 95978 31666', '+91 74187 41961', '+91 80561 16777'],
  address:
    'No. 19, Kullathu Medu, 2nd Street, Kamaraj Nagar, Virupachipuram, Vellore - 632 002, Tamil Nadu, India. (Near Kuppam Bus Stop)',
  shortAddress: 'Vellore, Tamil Nadu, India',
}

export function toTel(display) {
  const digits = String(display || '').replace(/[^\d]/g, '')
  if (!digits) return '#'
  const full = digits.length === 10 ? '91' + digits : digits
  return 'tel:+' + full
}
