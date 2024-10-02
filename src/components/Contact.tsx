"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {

    return (
        <Card className="widthCard m-auto mt-20" id='contact'>
            <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>
                    Contactez-moi directement par ce formulaire.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="flex flex-col gap-6 px-20 my-8">
                    <div className="flex justify-between max-[767px]:flex-col">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="example@email.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2 max-[767px]:mt-5">
                            <Label htmlFor="company">Entreprise (facultatif)</Label>
                            <Input
                                id="company"
                                placeholder="Nom entreprise"
                            />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="subject">Objet</Label>
                        <Input
                            id="subject"
                            placeholder="Objet du message"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Votre message ..."
                            rows={5}
                            required
                        />
                    </div>
                    {status && <p className="text-red-500">{status}</p>}
                </CardContent>
                <CardFooter className="justify-end">
                    <Button type="submit">Envoyer</Button>
                </CardFooter>
            </form>
        </Card>
    );
}
