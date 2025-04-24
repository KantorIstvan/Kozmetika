"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Animation configuration
const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <main className="text-darkest">
      {/* Hero Section */}
      <header className="bg-lightest px-4 sm:px-6 lg:px-8 xl:px-16 w-full pb-8 md:pb-12 lg:pb-16">
        <motion.div
          className="flex flex-col md:flex-row w-full items-center gap-6 md:gap-12 lg:gap-16 max-w-7xl mx-auto"
          {...sectionAnimation}
        >
          <div className="w-full md:w-1/2 py-4 md:py-8 lg:py-12 space-y-4">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Üdvözöllek!
            </h1>
            <div className="space-y-4 text-base sm:text-lg lg:text-xl">
              <p>
                Bodnár Krisztina vagyok, professzionális sminktetoválóként és
                kozmetikusként dolgozom. Örülök, hogy itt vagy.
              </p>
              <p>
                Nálam a szépség nem csupán külsőségekről szól – a célom, hogy
                feltöltődve, önazonosan és magabiztosan távozz.
              </p>
              <p>
                Célom, hogy kiemeljem mindenkiben azt az egyedi szépséget, ami
                már ott van benne.
              </p>
            </div>
          </div>
          <figure className="w-full md:w-1/2 relative aspect-square md:h-[550px]">
            <Image
              src="/assets/download.jpg"
              alt="Krisztina portré"
              fill
              className="rounded-lg lg:rounded-2xl shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </figure>
        </motion.div>
      </header>

      {/* Services Section */}
      <section
        id="szolgaltatasok"
        className="bg-light px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16"
      >
        <motion.div className="max-w-7xl mx-auto" {...sectionAnimation}>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16">
            <figure className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3]">
              <Image
                src="/assets/kozmetika.jpg"
                alt="Kozmetikai kezelés"
                fill
                className="rounded-lg lg:rounded-2xl shadow-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Szolgáltatások
              </h2>
              <div className="space-y-6 text-base sm:text-lg lg:text-xl">
                <p className="font-medium">
                  Arckezelések – természetes hatóanyagokkal, látványos
                  eredményekkel
                </p>
                <p>
                  Bőröd egyedi – a kezeléseim is azok. Minden alkalmat személyre
                  szabok, bőrtípusodhoz és aktuális állapotodhoz igazítva.
                </p>
                <div className="space-y-4">
                  <p className="font-medium">Használt termékek:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ilcsi bio-natur kozmetikumok</li>
                    <li>Amerikai Esthemax maszkok</li>
                    <li>Koreai KRX bőrápolók</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Product Showcase */}
          <motion.article
            className="mt-8 md:mt-12 lg:mt-16"
            {...sectionAnimation}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Miért ezekkel a termékekkel dolgozom?
            </h3>
            <p className="mt-4 text-base sm:text-lg lg:text-xl">
              A bőrápolás számomra nem csupán szakma, hanem hivatás. Hiszem hogy
              a legjobb eredmények akkor születnek, ha a vendégem megkapja a
              személyre szabott figyelmet.
            </p>
          </motion.article>

          {/* Portfolio Carousel */}
          <motion.div className="mt-8 md:mt-12 lg:mt-16" {...sectionAnimation}>
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 9 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full xs:basis-1/2 sm:basis-1/3 lg:basis-1/4"
                  >
                    <div className="p-2">
                      <figure className="relative aspect-square">
                        <Image
                          src={`/assets/carousel${index + 1}.jpg`}
                          alt={`Munkáim ${index + 1}`}
                          fill
                          className="rounded-lg lg:rounded-xl object-cover shadow-md"
                        />
                      </figure>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0 border-darkest hover:bg-lightest" />
                <CarouselNext className="static translate-y-0 border-darkest hover:bg-lightest" />
              </div>
            </Carousel>
          </motion.div>
        </motion.div>
      </section>

      {/* PMU Section */}
      <section
        id="sminktetovalas"
        className="bg-lightest px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16"
      >
        <motion.div className="max-w-7xl mx-auto" {...sectionAnimation}>
          <header className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Sminktetoválásaim
            </h2>
            <p className="mt-4 text-base sm:text-lg lg:text-xl">
              A célom, hogy reggelente tükörbe nézve csak annyit mondj:
              &ldquo;Igen, ez vagyok én.&rdquo;
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto py-8 md:py-12 lg:py-16">
            {["Szemöldök", "Szempilla", "Ajaksatírozás"].map((title, idx) => (
              <Card
                key={title}
                className="bg-white shadow-lg hover:shadow-xl transition hover:-translate-y-2 duration-300 overflow-hidden p-0 border-0"
              >
                <figure className="relative aspect-video w-full">
                  <Image
                    src={`/assets/${
                      ["szemoldok", "szempilla", "ajak"][idx]
                    }.jpg`}
                    alt={title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </figure>
                <CardHeader className="space-y-4 px-6 py-4">
                  <CardTitle className="text-2xl lg:text-3xl">
                    {title}
                  </CardTitle>
                  <hr className="border-t-2 w-[80%] mx-auto" />
                  <CardDescription className="text-base lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16">
        <motion.div className="max-w-7xl mx-auto" {...sectionAnimation}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Gyakori kérdések
          </h2>
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 py-8 md:py-12">
            <div className="w-full lg:w-1/2">
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-4"
                defaultValue="item-0"
              >
                {[
                  {
                    question: "Hogyan készüljek egy arckezelésre?",
                    answer:
                      "Semmi különösre nincs szükség. Ha sminkben érkezel, azt le fogom tisztítani.",
                  },
                  {
                    question: "Fájdalmas a savas hámlasztás?",
                    answer:
                      "A hámlasztás érzete enyhe bizsergéstől közepes melegségig terjedhet.",
                  },
                  {
                    question: "Mire figyeljek sminktetoválás után?",
                    answer:
                      "Részletes útmutatót fogsz kapni tőlem a friss tetoválás ápolására.",
                  },
                ].map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg lg:text-xl p-4  rounded-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base lg:text-lg px-4 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <figure className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/3]">
              <Image
                src="/assets/questions.jpg"
                alt="Gyakori kérdések"
                fill
                className="rounded-lg lg:rounded-2xl shadow-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-lightest px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16">
        <motion.div
          className="max-w-7xl mx-auto space-y-8"
          {...sectionAnimation}
        >
          <header className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Itt megtalálsz
            </h2>
            <p className="text-base sm:text-lg lg:text-xl">
              Örömmel várom jelentkezésedet személyre szabott konzultációra vagy
              időpontfoglalásra.
            </p>
          </header>
          <div className=" w-full rounded-lg lg:rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.83606174397!2d22.098601664922793!3d48.2708936331019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738ee9e2d493705%3A0x4903a780fafeed4b!2sF%C3%A9nyeslitke%2C%20Kossuth%20u.%20136%2C%204621!5e0!3m2!1shu!2shu!4v1745396704942!5m2!1shu!2shu"
              className="w-full h-[600px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kozmetika helyszín"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
