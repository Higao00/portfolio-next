import { SocialNetwork } from "@/types";
import * as Icons from "@mui/icons-material";

const socialNetworksData: SocialNetwork[] = [
    {
        name: "GitHub",
        url: "https://github.com/Higao00",
        icon: Icons.GitHub,
        username: "@Higao00"
    },
    {
        name: "LinkedIn", 
        url: "https://www.linkedin.com/in/higor-henrique-89105a187",
        icon: Icons.LinkedIn,
        username: "Higor Henrique"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/higaofreitas",
        icon: Icons.Instagram,
        username: "@higaofreitas"
    },
    {
        name: "WhatsApp",
        url: "https://wa.me/5516993031255",
        icon: Icons.WhatsApp,
        username: "+55 16 99303-1255"
    },
    {
        name: "Email",
        url: "mailto:freitashigor@hotmail.com",
        icon: Icons.Email,
        username: "freitashigor@hotmail.com"
    },
    {
        name: "Gmail",
        url: "mailto:freitashigor16@gmail.com", 
        icon: Icons.Mail,
        username: "freitashigor16@gmail.com"
    }
];

export default socialNetworksData;
