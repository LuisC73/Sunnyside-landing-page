import type {
  CardImageProps,
  FooterProps,
  HeaderProps,
  HomeProps,
  SectionProps,
  SiteConfig,
  TestimonialsProps,
} from '@types';

export const CONFIG: SiteConfig = {
  'title': 'Frontend Mentor | Sunnyside agency landing page',
  'description': 'Sunnyside landing page, a Frontend Mentor challenge developed by Luis Miguel Castro.',
  'keywords': 'Luis Miguel Castro, Frontend, Frontend Mentor, landing page, Sunnyside, project',
  'canonicalURL': 'https://luisc73.github.io/Sunnyside-landing-page/',
  'socialImage': '/open-graph.jpg',
  'favicon': '/Sunnyside-landing-page/favicon.png'
};

export const HEADER_CONTENT: HeaderProps = {
  'logo': {
    'desktop': {
      'src': '/Sunnyside-landing-page/images/logo.svg',
      'alt': 'Sunnyside logo',
      'width': 160,
      'height': 80,
    },
    'mobile': {
      'src': '/Sunnyside-landing-page/images/logo.svg',
      'alt': 'Sunnyside logo',
      'width': 120,
      'height': 60,
    },
  },
  'items': [
    {
      'label': 'About',
      'href': '#',
      'title': 'About',
    },
    {
      'label': 'Services',
      'href': '#',
      'title': 'Services',
    },
    {
      'label': 'Projects',
      'href': '#',
      'title': 'Projects',
    },
  ],
  'button': {
    'label': 'Contact',
    'href': '#',
    'title': 'Contact',
  },
};

export const HOME_CONTENT: HomeProps = {
  'image': {
    'desktop': '/Sunnyside-landing-page/images/desktop/image-header.jpg',
    'mobile': '/Sunnyside-landing-page/images/mobile/image-header.jpg',
  },
  'title': 'We are creatives',
  'arrow': {
    'href': '#first-section',
    'title': 'Scroll down',
    'ariaLabel': 'Scroll down button'
  }
};

export const FIRST_SECTION: SectionProps = {
  'tag': 'h2',
  'title': 'Transform your brand',
  'description':
    'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
  'link': {
    'type': 'Primary',
    'label': 'Learn more',
    'href': '#',
    'title': 'Learn more',
  },
  'image': {
    'desktop': '/Sunnyside-landing-page/images/desktop/image-transform.jpg',
    'mobile': '/Sunnyside-landing-page/images/mobile/image-transform.jpg',
  },
  'orientation': 'Right',
};

export const SECOND_SECTION: SectionProps = {
  'tag': 'h3',
  'title': 'Stand out to the right audience',
  'description':
    'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
  'link': {
    'type': 'Secondary',
    'label': 'Learn more',
    'href': '#',
    'title': 'Learn more',
  },
  'image': {
    'desktop': '/Sunnyside-landing-page/images/desktop/image-stand-out.jpg',
    'mobile': '/Sunnyside-landing-page/images/mobile/image-stand-out.jpg',
  },
  'orientation': 'Left',
};

export const SECTIONS_IMAGES: Omit<SectionProps, 'link' | 'orientation'>[] = [
  {
    'tag': 'h4',
    'title': 'Graphic design',
    'description':
      'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
    'image': {
      'desktop': '/Sunnyside-landing-page/images/desktop/image-graphic-design.jpg',
      'mobile': '/Sunnyside-landing-page/images/mobile/image-graphic-design.jpg',
    },
  },
  {
    'tag': 'h5',
    'title': 'Photography',
    'description':
      'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
    'image': {
      'desktop': '/Sunnyside-landing-page/images/desktop/image-photography.jpg',
      'mobile': '/Sunnyside-landing-page/images/mobile/image-photography.jpg',
    },
  },
];

export const SECTION_TESTIMONIALS: TestimonialsProps = {
  'title': 'Client testimonials',
  'cards': [
    {
      'image': {
        'src': '/Sunnyside-landing-page/images/image-emily.jpg',
        'alt': 'Emily',
        'width': 80,
        'height': 80,
      },
      'description':
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      'name': 'Emily R.',
      'job': 'Marketing Director',
    },
    {
      'image': {
        'src': '/Sunnyside-landing-page/images/image-thomas.jpg',
        'alt': 'Thomas',
        'width': 80,
        'height': 80,
      },
      'description':
        'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      'name': 'Thomas S.',
      'job': 'Chief Operating Officer',
    },
    {
      'image': {
        'src': '/Sunnyside-landing-page/images/image-jennie.jpg',
        'alt': 'Jennie',
        'width': 80,
        'height': 80,
      },
      'description':
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      'name': 'Jennie F.',
      'job': 'Business Owner',
    },
  ],
};

export const CARDS_IMAGES: CardImageProps[] = [
  {
    'image': {
      'desktop': '/Sunnyside-landing-page/images/desktop/image-gallery-milkbottles.jpg',
      'mobile': '/Sunnyside-landing-page/images/mobile/image-gallery-milkbottles.jpg',
    },
  },
  {
    'image': {
      'desktop': '/Sunnyside-landing-page/images/desktop/image-gallery-orange.jpg',
      'mobile': '/Sunnyside-landing-page/images/mobile/image-gallery-orange.jpg',
    },
  },
  {
    'image': {
      'desktop': '/Sunnyside-landing-page/images/desktop/image-gallery-cone.jpg',
      'mobile': '/Sunnyside-landing-page/images/mobile/image-gallery-cone.jpg',
    },
  },
  {
    'image': {
      'desktop': '/Sunnyside-landing-page/images/desktop/image-gallery-sugarcubes.jpg',
      'mobile': '/Sunnyside-landing-page/images/mobile/image-gallery-sugarcubes.jpg',
    },
  },
];

export const FOOTER_CONTENT: FooterProps = {
  'logo': {
    'src': '/Sunnyside-landing-page/images/logo-variant.svg',
    'alt': 'Sunnyside Logo',
    'width': 140,
    'height': 80,
  },
  'items': [
    {
      'label': 'About',
      'href': '#',
      'title': 'About',
    },
    {
      'label': 'Services',
      'href': '#',
      'title': 'Services',
    },
    {
      'label': 'Projects',
      'href': '#',
      'title': 'Projects',
    },
  ],
  'socialMedia': [
    {
      'icon': 'facebook',
      'href': '#',
      'title': 'facebook',
      'ariaLabel': 'facebook',
    },
    {
      'icon': 'instagram',
      'href': '#',
      'title': 'instagram',
      'ariaLabel': 'facebook',
    },
    {
      'icon': 'twitter',
      'href': '#',
      'title': 'twitter',
      'ariaLabel': 'facebook',
    },
    {
      'icon': 'pinterest',
      'href': '#',
      'title': 'pinterest',
      'ariaLabel': 'facebook',
    },
  ],
};
