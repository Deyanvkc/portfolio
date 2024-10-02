import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function TechnoCarousel() {
    const slides = [
        { src: "/icones/react.svg", text: "React", level: "Débutant" },
        { src: "/icones/nextjs.png", text: "Next.js", level: "Débutant" },
        { src: "/icones/wordpress.png", text: "WordPress", level: "Débutant" },
        { src: "/icones/html.png", text: "HTML", level: "Intermédiaire" },
        { src: "/icones/css.png", text: "CSS", level: "Intermédiaire" },
        { src: "/icones/js.png", text: "JavaScript", level: "Intermédiaire" },
        { src: "/icones/php.png", text: "PHP", level: "Intermédiaire" },
        { src: "/icones/python.png", text: "Python", level: "Intermédiaire" },
        { src: "/icones/sql.png", text: "SQL", level: "Intermédiaire" }
    ];

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-sm"
        >
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col items-center p-6">
                                    <Image
                                        src={slide.src}
                                        alt={`Slide ${index + 1}`}
                                        className="object-cover"
                                        width={80}
                                        height={80}
                                    />
                                    <div className="text-center mt-2">
                                        <span className="text-xl font-semibold">{slide.text}</span>       
                                        <div className="flex justify-center px-3">
                                            <Image src={"/icones/levelup.png"} width={20} height={10} alt={`level up`}/>
                                            <p className="text-sm ps-1 text-gray-500">{slide.level}</p>
                                        </div>                                        
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
