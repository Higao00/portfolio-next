import { 
  Home,
  Code,
  School,
  Work,
  Share,
  ContactMail
} from "@mui/icons-material";
import { NavItem } from "@/types";

export const getNavigationData = (t: any): NavItem[] => [
    {
        link: "/",
        name: t('navigation.home', 'Início'),
        icon: Home,
    },
    {
        link: "/skills",
        name: t('navigation.skills', 'Habilidades'),
        icon: Code,
    },
    {
        link: "/formations",
        name: t('navigation.formations', 'Formação'),
        icon: School,
    },
    {
        link: "/projects",
        name: t('navigation.projects', 'Projetos'),
        icon: Work,
    },
    {
        link: "/social-networks",
        name: t('navigation.socialNetworks', 'Redes Sociais'),
        icon: Share,
    },
    {
        link: "/contacts",
        name: t('navigation.contact', 'Contato'),
        icon: ContactMail,
    },
];
