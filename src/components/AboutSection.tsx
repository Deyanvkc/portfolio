
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export const AboutSection = () => {
    return (
        <Card className="widthCard m-auto" id="about">
            <CardHeader>
                <CardTitle>A propos</CardTitle>
                <CardDescription>Une courte description de moi et mon parcours.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-foreground pb-3">
                    Initialement militaire et ayant fait une reconversion professionnelle dans le développement car, en effet depuis jeune, je suis intéressé par les domaines du numérique et plus précisément le développement, c’est à l’âge de douze ans que sont apparues mes premières expériences avec les bases de données et JavaScript dans le cadre de modification d’un jeu que j’affectionnais.
                </p>
                <p className="text-sm text-foreground">
                    Fort des acquis de mes expériences professionnelles passées, j'ai décroché mon premier titre professionnel de développeur web et web mobile puis j'ai choisi de m'engager sur la voie d'un cursus MSc Pro au sein de l'école d'Epitech de Nancy pour acquérir un titre RNCP de niveau 7 (bac +5) d'ingénieur en systèmes d'information. 🎓
                </p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">
                    <Link className='flex align-middle' href={"https://github.com/Deyanvkc"} target='_blank'>
                        <GitHubLogoIcon className="mr-2 h-5 w-4" />
                        GitHub
                    </Link>
                </Button>
                <Button variant="outline">
                    <Link className='flex align-middle' href={"https://www.linkedin.com/in/deyanvkc/"} target='_blank'>
                        <LinkedInLogoIcon className="mr-2 h-5 w-4" />
                        LinkedIn
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};