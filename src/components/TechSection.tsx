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
import { TechnoCarousel } from "@/components/TechnoCarousel"

export const TechSection = () => {
    return (
        <Card className="widthCard m-auto mt-20" id="tech">
            <CardHeader>
                <CardTitle>Technologies</CardTitle>
                <CardDescription>Une présentations de mes compétences.</CardDescription>
            </CardHeader>
            <CardContent className='flex justify-center'>
                <TechnoCarousel />
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