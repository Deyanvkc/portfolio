import { Contact } from "@/components/Contact"
import { AboutSection } from "@/components/AboutSection"
import { ExpSection } from "@/components/ExpSection"
import { TechSection } from "@/components/TechSection"
import { ProjectSection } from "@/components/ProjectSection"

export const Main = () => {
    return (
        <main className="relative">
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

            <section>
                <AboutSection />
            </section>

            <section>
                <ExpSection />
            </section>

            <section>
                <TechSection />
            </section>

            <section>
                <ProjectSection />
            </section>

            <section>
                <Contact />
            </section>

        </main>
    );
}