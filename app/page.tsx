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

export default function Home() {
  return (
    <main className="text-darkest">
      {/* Hero Section */}
      <header className="bg-lightest px-4 sm:px-8 lg:px-15 w-full pb-8 md:pb-15">
        <div className="flex flex-col md:flex-row w-full items-center gap-8 md:gap-15">
          <div className="w-full md:w-1/2 py-4 md:py-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Üdvözöllek!
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-4">
              Bodnár Krisztina vagyok, professzionális sminktetoválóként és
              kozmetikusként dolgozom. Örülök, hogy itt vagy.
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-4">
              Nálam a szépség nem csupán külsőségekről szól – a célom, hogy
              feltöltődve, önazonosan és magabiztosan távozz. Minden kezelést a
              természetesség, az igényesség és a harmónia jegyében végzek.
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-4">
              Célom, hogy kiemeljem mindenkiben azt az egyedi szépséget, ami már
              ott van benne.
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-4">
              Nálam nemcsak megszépülsz, hanem is feltöltődsz testben és
              lélekben egyaránt.
            </p>
          </div>
          <figure className="w-full md:w-1/2 relative h-64 sm:h-96 md:h-[550px]">
            <Image
              src="/assets/download.jpg"
              alt="Krisztina portré"
              fill
              className="rounded-lg md:rounded-[20px] shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </figure>
        </div>
      </header>

      {/* Services Section */}
      <section
        id="szolgaltatasok"
        className="bg-light px-4 sm:px-8 lg:px-15 py-8 md:py-15"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-15">
          <figure className="w-full md:w-1/2 relative h-64 sm:h-96 md:h-[550px]">
            <Image
              src="/assets/kozmetika.jpg"
              alt="Kozmetikai kezelés"
              fill
              className="rounded-lg md:rounded-[20px] shadow-md object-cover"
            />
          </figure>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Szolgáltatások
            </h2>
            <div className="text-sm sm:text-base md:text-lg mt-4">
              <p>
                Arckezelések – természetes hatóanyagokkal, látványos
                eredményekkel
              </p>
              <p className="mt-4">
                Bőröd egyedi – a kezeléseim is azok. Minden alkalmat személyre
                szabok, bőrtípusodhoz és aktuális állapotodhoz igazítva.
              </p>
              <p className="mt-4">
                Kezeléseimhez kizárólag gondosan válogatott termékeket
                használok:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Ilcsi bio-natur kozmetikumok</li>
                <li>Amerikai Esthemax maszkok</li>
                <li>Koreai KRX bőrápolók</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Showcase */}
        <article className="w-full mt-8 md:mt-15">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Miért ezekkel a termékekkel dolgozom?
          </h3>
          <p className="text-sm sm:text-base md:text-lg mt-4">
            A bőrápolás számomra nem csupán szakma, hanem hivatás. Hiszem hogy a
            legjobb eredmények akkor születnek, ha a vendégem megkapja a
            személyre szabott figyelmet.
          </p>
        </article>

        {/* Portfolio Carousel */}
        <div className="w-full mt-8 md:mt-15">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-9 basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <figure className="p-1 w-full relative aspect-square">
                    <Image
                      src={`/assets/carousel${index + 1}.jpg`}
                      alt={`Munkáim ${index + 1}`}
                      fill
                      className="rounded-lg md:rounded-[20px] object-cover shadow-md"
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="static transform-none border-white" />
              <CarouselNext className="static transform-none border-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* PMU Section */}
      <section
        id="sminktetovalas"
        className="bg-lightest px-4 sm:px-8 lg:px-20 py-8 md:py-15"
      >
        <header className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Sminktetoválásaim
          </h2>
          <p className="text-sm sm:text-base md:text-lg mt-4">
            A célom, hogy reggelente tükörbe nézve csak annyit mondj:
            &ldquo;Igen, ez vagyok én.&rdquo;
          </p>
        </header>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-15 py-8 md:py-15">
          <Card className="w-full md:w-[350px] h-auto md:h-[450px] bg-white shadow-md overflow-visible border-none transition-transform hover:-translate-y-2">
            <figure className="relative w-full h-48 md:h-[250px] -mt-6 mx-auto overflow-hidden rounded-t-lg] md:rounded-t-[10px]">
              <Image
                src="/assets/szemoldok.jpg"
                alt="Szemöldök"
                fill
                className="object-cover scale-130 transform translate-x-4 translate-y-8"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </figure>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl md:text-2xl">
                Szemöldök
              </CardTitle>
              <hr className="border-t-2 my-2" />
              <CardDescription className="text-sm sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-full md:w-[350px] h-auto md:h-[450px] bg-white shadow-md overflow-visible border-none transition-transform hover:-translate-y-2">
            <figure className="relative w-full h-48 md:h-[250px] -mt-6 mx-auto overflow-hidden rounded-t-lg md:rounded-t-[10px]">
              <Image
                src="/assets/szempilla.jpg"
                alt="Szempillasűrűsítés"
                fill
                className="object-cover -rotate-90 scale-160 transform -translate-x-6 translate-y-8 sm:translate-x-0 sm:translate-y-0"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </figure>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl md:text-2xl">
                Szempillasűrűsítés
              </CardTitle>
              <hr className="border-t-2 my-2" />
              <CardDescription className="text-sm sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-full md:w-[350px] h-auto md:h-[450px] bg-white shadow-md overflow-visible border-none transition-transform hover:-translate-y-2">
            <figure className="relative w-full h-48 md:h-[250px] -mt-6 mx-auto overflow-hidden rounded-t-lg md:rounded-t-[10px]">
              <Image
                src="/assets/ajak.jpg"
                alt="Ajaksatírozás"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </figure>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl md:text-2xl">
                Ajaksatírozás
              </CardTitle>
              <hr className="border-t-2 my-2" />
              <CardDescription className="text-sm sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light px-4 sm:px-8 lg:px-15 py-8 md:py-15">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Gyakori kérdések
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-15 py-8 md:py-15">
          <div className="w-full md:w-1/2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg">
                  Hogyan készüljek egy arckezelésre?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base">
                  Semmi különösre nincs szükség. Ha sminkben érkezel, azt le
                  fogom tisztítani.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg">
                  Fájdalmas a savas hámlasztás?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base">
                  A hámlasztás érzete enyhe bizsergéstől közepes melegségig
                  terjedhet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg">
                  Mire figyeljek sminktetoválás után?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base">
                  Részletes útmutatót fogsz kapni tőlem a friss tetoválás
                  ápolására.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <figure className="w-full md:w-1/2 relative h-64 sm:h-96 md:h-[550px]">
            <Image
              src="/assets/questions.jpg"
              alt="Gyakori kérdések"
              fill
              className="rounded-lg md:rounded-[20px] shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-lightest px-4 sm:px-8 lg:px-15 py-8 md:py-15">
        <header>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Itt megtalálsz
          </h2>
          <p className="text-sm sm:text-base md:text-lg mt-2">
            Örömmel várom jelentkezésedet személyre szabott konzultációra vagy
            időpontfoglalásra.
          </p>
        </header>
        <div className="mt-8 w-full rounded-lg md:rounded-[15px] overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.83606174397!2d22.098601664922793!3d48.2708936331019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738ee9e2d493705%3A0x4903a780fafeed4b!2sF%C3%A9nyeslitke%2C%20Kossuth%20u.%20136%2C%204621!5e0!3m2!1shu!2shu!4v1745396704942!5m2!1shu!2shu"
            width="100%"
            height="400"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kozmetika helyszín"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark px-4 sm:px-8 lg:px-15 py-8 md:py-15">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          <div>
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2">
              Kapcsolat
            </h3>
            <hr className="mb-4" />
            <p className="text-xs sm:text-sm">
              4621 Fényeslitke, Kossuth u. 136.
            </p>
            <p className="text-xs sm:text-sm mt-2">asd@asd.com</p>
            <p className="text-xs sm:text-sm mt-2">+36 30 123 4567</p>
          </div>

          <div>
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2">
              Navigáció
            </h3>
            <hr className="mb-4" />
            <nav className="flex flex-col gap-2">
              <Link
                href="/#szolgaltatasok"
                className="text-xs sm:text-sm hover:text-lightest"
              >
                Szolgáltatások
              </Link>
              <Link
                href="/#sminktetovalas"
                className="text-xs sm:text-sm hover:text-lightest"
              >
                Sminktetoválás
              </Link>
              <Link
                href="/arlista"
                className="text-xs sm:text-sm hover:text-lightest"
              >
                Árlista
              </Link>
              <Link
                href="/idopontfoglalo"
                className="text-xs sm:text-sm hover:text-lightest"
              >
                Időpontfoglalás
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2">
              Nyitvatartás
            </h3>
            <hr className="mb-4" />
            <p className="text-xs sm:text-sm">H-P: 9:00 - 18:00</p>
            <p className="text-xs sm:text-sm mt-2">Szombat: 10:00 - 14:00</p>
            <p className="text-xs sm:text-sm mt-2">Vasárnap: Zárva</p>
          </div>

          <div>
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2">
              Közösségi média
            </h3>
            <hr className="mb-4" />
            <div className="flex gap-4">{/* Social media icons */}</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
