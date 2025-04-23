import Image from "next/image";
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
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="text-darkest">
      {/* Hero Section */}
      <header className="bg-lightest px-4 sm:px-6 lg:px-8 xl:px-16 w-full pb-8 md:pb-12 lg:pb-16">
        <div className="flex flex-col md:flex-row w-full items-center gap-6 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
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
        </div>
      </header>

      {/* Services Section */}
      <section
        id="szolgaltatasok"
        className="bg-light px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
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
        <article className="max-w-7xl mx-auto mt-8 md:mt-12 lg:mt-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Miért ezekkel a termékekkel dolgozom?
          </h3>
          <p className="mt-4 text-base sm:text-lg lg:text-xl">
            A bőrápolás számomra nem csupán szakma, hanem hivatás. Hiszem hogy a
            legjobb eredmények akkor születnek, ha a vendégem megkapja a
            személyre szabott figyelmet.
          </p>
        </article>

        {/* Portfolio Carousel */}
        <div className="max-w-7xl mx-auto mt-8 md:mt-12 lg:mt-16">
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
        </div>
      </section>

      {/* PMU Section */}
      <section
        id="sminktetovalas"
        className="bg-lightest px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16"
      >
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
                  src={`/assets/${["szemoldok", "szempilla", "ajak"][idx]}.jpg`}
                  alt={title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </figure>
              <CardHeader className="space-y-4 px-6 py-4">
                <CardTitle className="text-2xl lg:text-3xl">{title}</CardTitle>
                <hr className="border-t-2 w-[80%] mx-auto" />
                <CardDescription className="text-base lg:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Gyakori kérdések
          </h2>
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 py-8 md:py-12">
            <div className="w-full lg:w-1/2">
              <Accordion type="single" collapsible className="w-full space-y-4">
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-lightest px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <header className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Itt megtalálsz
            </h2>
            <p className="text-base sm:text-lg lg:text-xl">
              Örömmel várom jelentkezésedet személyre szabott konzultációra vagy
              időpontfoglalásra.
            </p>
          </header>
          <div className="aspect-video w-full rounded-lg lg:rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.83606174397!2d22.098601664922793!3d48.2708936331019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738ee9e2d493705%3A0x4903a780fafeed4b!2sF%C3%A9nyeslitke%2C%20Kossuth%20u.%20136%2C%204621!5e0!3m2!1shu!2shu!4v1745396704942!5m2!1shu!2shu"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kozmetika helyszín"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* Contact Column */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
              Kapcsolat
            </h3>
            <hr className="border-t-2 w-1/3 border-lightest" />
            <div className="space-y-2 text-sm sm:text-base">
              <p>4621 Fényeslitke, Kossuth u. 136.</p>
              <p>asd@asd.com</p>
              <p>+36 30 123 4567</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
              Navigáció
            </h3>
            <hr className="border-t-2 w-1/3 border-lightest" />
            <nav className="flex flex-col gap-2 text-sm sm:text-base">
              <Link
                href="/#szolgaltatasok"
                className="hover:text-lightest transition-colors"
              >
                Szolgáltatások
              </Link>
              <Link
                href="/#sminktetovalas"
                className="hover:text-lightest transition-colors"
              >
                Sminktetoválás
              </Link>
              <Link
                href="/arlista"
                className="hover:text-lightest transition-colors"
              >
                Árlista
              </Link>
              <Link
                href="/idopontfoglalo"
                className="hover:text-lightest transition-colors"
              >
                Időpontfoglalás
              </Link>
            </nav>
          </div>

          {/* Opening Hours Column */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
              Nyitvatartás
            </h3>
            <hr className="border-t-2 w-1/3 border-lightest" />
            <div className="space-y-2 text-sm sm:text-base">
              <p>Hétfő - Péntek: 9:00 - 18:00</p>
              <p>Szombat: 10:00 - 14:00</p>
              <p>Vasárnap: Zárva</p>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
              Közösségi média
            </h3>
            <hr className="border-t-2 w-1/3 border-lightest" />
            <div className="flex gap-4 mt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-2 hover:bg-lightest rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 hover:bg-lightest rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="max-w-7xl mx-auto mt-8 md:mt-12 border-t border-lightest/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-xs sm:text-sm text-lightest/80">
              © 2024 Bodnár Krisztina - Minden jog fenntartva
            </p>
            <div className="flex gap-4 text-xs sm:text-sm">
              <Link
                href="/adatvedelem"
                className="hover:text-lightest transition-colors"
              >
                Adatvédelmi nyilatkozat
              </Link>
              <Link
                href="/impresszum"
                className="hover:text-lightest transition-colors"
              >
                Impresszum
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
