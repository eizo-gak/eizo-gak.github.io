export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: '映像学区',
  DESCRIPTION:
    '',
  EMAIL: 'setsugen2019@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 4,
  POSTS_PER_PAGE: 20,
  SITEURL: 'https://eizo-gak.github.io',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/tags', label: 'tags' },
  { href: '/about', label: 'about' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://youtube.com/@eizo-gak', label: 'YouTube' },
  { href: 'https://twitter.com/eizo_gak', label: 'Twitter' },
  { href: 'https://www.instagram.com/setsugen_tetra/', label: 'Instagram' },
  { href: 'mailto:setsugen2019@gmail.com', label: 'Email' },
]
