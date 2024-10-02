import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { AnimatePp } from "@/components/AnimatePp"

export const Header = () => {
    return (

        <header className="relative isolate px-6 lg:px-8">
            {/* Polygones en arrière-plan */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 overflow-hidden blur-3xl"
            >
                {/* Premier polygone */}
                <div
                    style={{
                        clipPath: 'polygon(15% 0%, 100% 10%, 85% 100%, 0% 100%)',
                    }}
                    className="absolute left-[5%] top-[5%] w-[25rem] h-[20rem] bg-gradient-to-br from-[#8e44ad] to-[#3498db] opacity-40"
                />
                {/* Deuxième polygone */}
                <div
                    style={{
                        clipPath: 'polygon(0% 40%, 50% 0%, 100% 40%, 50% 100%)',
                    }}
                    className="absolute top-[20%] right-[5%] w-[30rem] h-[25rem] bg-gradient-to-tl from-[#9b59b6] to-[#2980b9] opacity-40"
                />
                {/* Troisième polygone */}
                <div
                    style={{
                        clipPath: 'polygon(10% 0%, 90% 0%, 80% 100%, 20% 100%)',
                    }}
                    className="absolute top-[35%] left-[15%] w-[20rem] h-[20rem] bg-gradient-to-br from-[#6f2c91] to-[#1f7a8c] opacity-40"
                />
                {/* Quatrième polygone */}
                <div
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 50%, 30% 50%)',
                    }}
                    className="absolute bottom-[15%] left-[10%] w-[25rem] h-[25rem] bg-gradient-to-r from-[#8e44ad] to-[#3498db] opacity-40"
                />
                {/* Cinquième polygone */}
                <div
                    style={{
                        clipPath: 'polygon(90% 0%, 100% 100%, 0% 100%)',
                    }}
                    className="absolute top-[60%] right-[10%] w-[25rem] h-[20rem] bg-gradient-to-tr from-[#5f5c8a] to-[#2980b9] opacity-40"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >

            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <div className="flex justify-center items-center pb-12">
                        <AnimatePp />
                        {/* <Image src="/images/image_de_moi.jpg" className="rounded-full" alt="image de deyan" width={250} height={250} /> */}
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">
                        Développeur Web & Web Mobile
                    </h1>
                    <p className="mt-6 text-lg leading-8">
                        Actuellement étudiant à Epitech Nancy en pré MSc pour le titre RNCP de niveau 7 (bac +5) d'Architecte en Systèmes d'Informations.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button><Link href={"#about"}>En savoir plus</Link></Button>
                        <Button variant="link" className='text-white'><span aria-hidden="true">Mes projets →</span></Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
