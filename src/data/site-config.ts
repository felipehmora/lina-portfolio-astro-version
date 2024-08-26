export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Lina Marea',
    description: 'Venezuelan pianist',
    image: {
        src: '/piano.jpg',
        alt: 'A person playing piano'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Biography',
            href: '/biography'
        },
        {
            text: 'Gallery',
            href: '/gallery'
        },
        {
            text: 'Videos',
            href: '/videos'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/linamarea2000?igsh=MXR5NzcwaHJ3OWN1eQ=='
        }
    ],
    hero: {
        title: 'Venezuelan pianist now at Brussels, Belgium',
        text: 'I am Lina Esther Marea Peñalver, born in 2000 in Caracas, Venezuela. My musical journey began at six with piano lessons from Professor Luisa Sánchez, and I later continued at the Mozarteum Caracas School of Music with Professor Carlos Urbaneja Silva. I have participated in masterclasses with notable artists such as Kristiina Junttu, Laura Silva, Alexia Mouza, and Toshiki Usui. In 2020, I started my Bachelor in Music Performance at the Liceu Conservatory of Music in Barcelona under the guidance of concert pianist Josep María Colom Rincón. I have performed in significant venues in Caracas, like The Teresa Carreño Theatre, and in Barcelona, including Sala Parés and the Liceu Conservatory Auditorium. As a finalist in the 2014 XII National Piano Competition Silvia Eisenstein and a guest soloist with the Municipal Orchestra of Caracas, my playing is praised for its musicality and profound expression. Additionally, since 2021, I have been passionate about teaching piano and music theory to beginner and intermediate students.',
        image: {
            src: '/hero.jpg',
            alt: 'A person playing piano'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    }
};

export default siteConfig;
