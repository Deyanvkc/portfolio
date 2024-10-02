import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const ExpSection = () => {
    return (
        <Card className="widthCard m-auto mt-20" id="xp">
            <CardHeader>
                <CardTitle>Expérience</CardTitle>
                <CardDescription>Une présentation plus détaillée de mon parcours.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger> 📅  Septembre 2024 - 🏫 Epitech → Étudiant</AccordionTrigger>
                        <AccordionContent>
                            Entrée à Epitech, l'école de l'excellence informatique, pour suivre le cursus MSC Pro avec les spécialités Intelligence Artificielle et Big Data, délivrant, à terme, le titre d'Architecte en Systèmes d'Informations RNCP de niveau 7 (bac +5).
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger> 📅  Avril 2024 - 📜 Titre Professionnel → Développeur Web & Web Mobile</AccordionTrigger>
                        <AccordionContent>
                            Un titre délivré aux apprenants en développement web & web mobile qui ont terminé avec succès leur formation et maîtrisé les langages HTML, CSS, JS, SQL, PhP.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger> 📅  Janvier 2024 - 💼 La Signora Sakura → Développeur Web en stage</AccordionTrigger>
                        <AccordionContent>
                            Stage de deux mois au sein de La Signora Sakura en tant que développeur web et web mobile afin de créer le site web (e-commerce) de l'entreprise et d'assurer son activité de vente de sacs en ligne.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger> 📅  Mars 2024 - 📜 Google Career Certificates → Data Analyst | IT Support </AccordionTrigger>
                        <AccordionContent>
                            Entrée à Epitech, l'école de l'excellence informatique, pour suivre le cursus MSC Pro avec les spécialités Intelligence Artificielle et Big Data, délivrant, à terme, le titre d'Architecte en Systèmes d'Informations RNCP de niveau 7 (bac +5).
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger> 📅  Mai 2023 - 🏫 CCI → Étudiant</AccordionTrigger>
                        <AccordionContent>
                            Entrée en formation de développeur web et web mobile au sein de la Chambre de Commerce et d'Industrie de Moselle à Metz afin d'apprendre le métier de développeur web et web mobile ainsi que les différentes technologies et connaissances nécéssaires au métier.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
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