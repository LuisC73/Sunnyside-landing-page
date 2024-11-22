interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface BackgroundImageProps {
  desktop: string;
  mobile: string;
}

export interface LinkProps {
  type: 'Primary' | 'Secondary';
  label: string;
  href: string;
  title: string;
}

export interface HeaderProps {
  logo: { desktop: ImageProps; mobile: ImageProps };
  items: Omit<LinkProps, 'type'>[];
  button: Omit<LinkProps, 'type'>;
}

export interface FooterProps {
  logo: ImageProps;
  items: Omit<LinkProps, 'type'>[];
  socialMedia: { icon: string; href: string; title: string; ariaLabel: string }[];
}

export interface CardProps {
  image: ImageProps;
  description: string;
  name: string;
  job: string;
}

export interface SectionProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string;
  description: string;
  link: LinkProps;
  image: BackgroundImageProps;
  orientation: 'Right' | 'Left';
}

export interface HomeProps {
  title: string;
  image: BackgroundImageProps;
  arrow: ArrowDownProps;
}

export interface TestimonialsProps {
  title: string;
  cards: CardProps[];
}

export interface CardImageProps {
  image: { desktop: string; mobile: string };
}

export interface ArrowDownProps {
  href: string;
  title: string;
  ariaLabel: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  keywords: string;
  canonicalURL: string;
  socialImage: string;
  favicon: string;
} 