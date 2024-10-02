import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { DataTableDemo } from "@/components/Projects"

export const ProjectSection = () => {
    return (
        <Card className="widthCard m-auto mt-20" id="projets">
            <CardHeader>
                <CardTitle>Projets</CardTitle>
                <CardDescription>Certains de mes projets.</CardDescription>
            </CardHeader>
            <CardContent className='flex justify-center'>
                <DataTableDemo />
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
}