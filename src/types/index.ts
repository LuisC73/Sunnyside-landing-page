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
  label: string;
  href: string;
  title: string;
}

export interface HeaderProps {
  logo: { desktop: ImageProps; mobile: ImageProps };
  items: LinkProps[];
  button: LinkProps;
}

export interface FooterProps {
  logo: ImageProps;
  items: LinkProps[];
  socialMedia: { icon: string; href: string; title: string }[];
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
}

export interface TestimonialsProps {
  title: string;
  cards: CardProps[];
}
