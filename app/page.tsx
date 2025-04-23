import Image from "next/image";
/* import placeholderImage from "../assets/placeholder.png"; */
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
    <div className="text-darkest">
      {/* Hero */}
      <div className="flex items-center bg-lightest px-15 w-full pb-15">
        <div className="flex w-full items-center gap-15 bg-lightest">
          <div className="w-1/2 bg-lightest py-8">
            <h1 className="text-[64px] font-bold">Üdvözöllek!</h1>
            <p className="text-lg">
              Bodnár Krisztina vagyok, professzionális sminktetoválóként és
              kozmetikusként dolgozom. Örülök, hogy itt vagy.
            </p>
            <br />
            <p className="text-lg">
              Nálam a szépség nem csupán külsőségekről szól – a célom, hogy
              feltöltődve, önazonosan és magabiztosan távozz. Minden kezelést a
              természetesség, az igényesség és a harmónia jegyében végzek.
              Hiszem, hogy a szépség belülről fakad – én pedig abban segítek,
              hogy ez kívül is megmutatkozzon. Számomra a vendégeim nemcsak
              vendégek, hanem olyan nők, akiknek szeretnék egy kis nyugalmat,
              törődést és megújulást nyújtani a rohanó hétköznapokban.
            </p>
            <br />
            <p className="text-lg">
              Célom, hogy kiemeljem mindenkiben azt az egyedi szépséget, ami már
              ott van benne.
            </p>
            <br />
            <p className="text-lg">
              Nálam nemcsak megszépülsz, hanem is feltöltődsz testben és
              lélekben egyaránt.
            </p>
          </div>
          <div className="w-1/2 relative h-[550px]">
            <Image
              src="/assets/download.jpg"
              alt="Description of the image"
              fill
              className="rounded-[20px] shadow-md object-cover"
              sizes="(max-width: 768px) 75vw, 50vw"
            />
          </div>
        </div>
      </div>
      {/* Szolgáltatások */}
      <div id="szolgaltatasok" className="bg-light px-15 py-15">
        <div className="flex items-center pb-15 w-full">
          <div className="flex w-full items-center gap-15 ">
            <div className="w-1/2 relative h-[550px]">
              <Image
                src="/assets/kozmetika.jpg"
                alt="Description of the image"
                fill
                className="rounded-[20px] shadow-md object-cover"
              />
            </div>
            <div className="w-1/2 py-8">
              <h2 className="font-bold text-[40px]">Szolgáltatások</h2>
              <br />
              <div className="text-lg">
                <p>
                  Arckezelések – természetes hatóanyagokkal, látványos
                  eredményekkel
                </p>
                <br />
                <p>
                  Bőröd egyedi – a kezeléseim is azok. Minden alkalmat személyre
                  szabok, bőrtípusodhoz és aktuális állapotodhoz igazítva, hogy
                  a lehető legjobbat hozhassuk ki belőle.
                </p>
                <br />
                <p>
                  Kezeléseimhez kizárólag gondosan válogatott termékeket
                  használok:
                </p>
                <br />
                <p>
                  Ilcsi bio-natur kozmetikumokkal, Amerikai Esthemax maszkokkal
                  (köztük a népszerű hydrojelly maszkkal)
                </p>
                <p>
                  Koreai KRX bőrápolókkal dolgozom, mert hiszem, hogy a
                  természetes hatóanyagok és a tudományos innováció kéz a kézben
                  hozzák a legszebb eredményeket
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Miért ezekkel */}
        <div className="w-full px-10 pb-15">
          <h3 className="text-[32px] font-semibold">
            Miért ezekkel a termékekkel dolgozom?
          </h3>
          <p className="text-lg pr-30">
            A bőrápolás számomra nem csupán szakma,hanem,hivatás.Hiszem,hogy a
            legjobb eredmények akkor születnek,ha a vendégem megkapja a
            személyre szabott figyelmet-és a bőre a legtisztább,leghatékonyabb
            hatóanyagokat. Ezért választottam olyan márkákat,amelyekben
            maximálisan megbízom.
          </p>
        </div>
        {/* Carousel */}

        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem key={index} className="pl-9 py-5 basis-1/3">
                  <div className="p-1 w-[400px] relative aspect-square">
                    <Image
                      src={`/assets/carousel${index + 1}.jpg`}
                      alt={`Portfolio image ${index + 1}`}
                      fill
                      className="rounded-[20px] object-cover shadow-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="static transform-none border-white" />
              <CarouselNext className="static transform-none border-white" />
            </div>
          </Carousel>
        </div>
      </div>
      {/* Sminktetoválás */}
      <div id="sminktetovalas" className="bg-lightest px-20 py-10">
        <div>
          <h2 className="text-center text-[40px] font-bold">
            Sminktetoválásaim
          </h2>
          <p className="text-center text-lg pt-5">
            A célom, hogy reggelente tükörbe nézve csak annyit mondj:
            &ldquo;Igen, ez vagyok én.&rdquo;
          </p>
        </div>
        <div className="flex items-center justify-center gap-15 py-15">
          <Card className="w-[350px] h-[450px] bg-white shadow-md overflow-visible border-none transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="relative w-full h-[250px] -mt-8 mx-auto z-10 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] rounded-bl-0 rounded-br-0">
              <Image
                src="/assets/szemoldok.jpg"
                alt="Description of the image"
                fill
                className="object-cover transform scale-130 translate-x-8 translate-y-10"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-[24px]">Szemöldök</CardTitle>
              <hr className="border-t-3 rounded-full" />
              <CardDescription className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae, cumque.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[350px] h-[450px] bg-white shadow-md overflow-visible border-none transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="rounded-tl-[20px] rounded-tr-[20px] rounded-bl-0 rounded-br-0 relative w-full h-[250px] -mt-8 mx-auto z-10 overflow-hidden">
              <Image
                src="/assets/szempilla.jpg"
                alt="Description of the image"
                fill
                className="object-cover transform scale-160 -translate-x-6 translate-y-10 -rotate-90"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-[24px]">Szempillasűrűsítés</CardTitle>
              <hr className="border-t-3 rounded-full" />
              <CardDescription className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae, cumque.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[350px] h-[450px] bg-white shadow-md overflow-visible border-none transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="relative w-full h-[250px] -mt-8 mx-auto z-10 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-0 rounded-br-0 overflow-hidden">
              <Image
                src="/assets/ajak.jpg"
                alt="Description of the image"
                fill
                className="object-cover scale-100"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-[24px]">Ajak satírozás</CardTitle>
              <hr className="border-t-3 rounded-full" />
              <CardDescription className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae, cumque.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      {/* GyakoriKérdések */}
      <div className="bg-light px-15 py-15">
        <h2 className="font-bold text-[40px]">Gyakori kérdések</h2>
        <div className="flex items-start justify-center gap-15 py-15">
          <div className="w-1/2 py-8">
            <Accordion
              type="single"
              collapsible
              className="w-[600px]"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Hogyan készüljek egy arckezelésre?
                </AccordionTrigger>
                <AccordionContent>
                  Semmi különösre nincs szükség-jössz ahogy vagy. Ha sminkben
                  érkezel,azt le fogom tisztítani. Kérlek ne használj hámlasztó
                  termékeket aznap!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Fájdalmas a savas hámlasztás?
                </AccordionTrigger>
                <AccordionContent>
                  A hámlasztás érzete enyhe bizsergéstől közepes melegségig
                  terjedhet,de nem fájdalmas. A koreai hámlasztókat
                  kíméletesen,biztonságosan,fokozatosan építem be-figyelek a
                  komfortodra!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Mire figyeljek sminktetoválás után?
                </AccordionTrigger>
                <AccordionContent>
                  A friss tetoválás után fontos a megfelelő otthoni
                  utóápolás:részletes útmutatót fogsz kapni tőlem. de mindenképp
                  kerülni kell 2-4 hétig a szaunát,napozást,uszodát,a sminket
                  néhány napig.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-1/2 relative h-[550px]">
            <Image
              src="/assets/questions.jpg"
              alt="Description of the image"
              fill
              className="rounded-[20px] shadow-md object-cover"
              sizes="(max-width: 768px) 75vw, 50vw"
            />
          </div>
        </div>
      </div>
      {/* Elérhetőség */}
      <div className="bg-lightest px-15 py-15">
        <div>
          <h2 className="text-[40px] font-bold">Itt megtalálsz</h2>
          <p className="text-lg">
            Örömmel várom jelentkezésedet személyre szabott konzultációra vagy
            időpontfoglalásra.
          </p>
        </div>
        <div className="mt-8 w-full rounded-[15px] overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.83606174397!2d22.098601664922793!3d48.2708936331019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738ee9e2d493705%3A0x4903a780fafeed4b!2sF%C3%A9nyeslitke%2C%20Kossuth%20u.%20136%2C%204621!5e0!3m2!1shu!2shu!4v1745396704942!5m2!1shu!2shu"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-dark px-15 py-15">
        <div className="flex items-start gap-8 justify-start">
          <div className=" text-white ">
            <h2 className="text-[24px] font-bold">Kapcsolat</h2>
            <hr className="border-1 rounded-full my-2" />
            <div className="flex flex-col gap-2">
              <p className="text-sm">Cím: 4621 Fényeslitke, Kossuth u. 136.</p>
              <p className="text-sm">Email: asd@asd.com</p>
              <p className="text-sm">Telefon: +36 30 123 4567</p>
            </div>
          </div>
          <div className="text-white ">
            <h2 className="text-[24px] font-bold">Navigáció</h2>
            <hr className="border-1 rounded-full my-2" />
            <div className="flex flex-col gap-2 hover:text-darkest">
              <Link href="/#szolgaltatasok" className="text-sm">
                Szolgáltatások
              </Link>
              <Link href="/#sminktetovalas" className="text-sm">
                Sminktetoválásaim
              </Link>
              <Link href="/arlista" className="text-sm">
                Árlista
              </Link>
              <Link href="/idopontfoglalo" className="text-sm">
                időpontfoglalás
              </Link>
            </div>
          </div>
          <div className="text-white">
            <h2 className="text-[24px] font-bold">Nyitvatartás</h2>
            <hr className="border-1 rounded-full my-2" />
            <div className="flex flex-col gap-2">
              <p className="text-sm">Hétfő-Péntek: 9:00 - 18:00</p>
              <p className="text-sm">Szombat: 10:00 - 14:00</p>
              <p className="text-sm">Vasárnap: Zárva</p>
            </div>
          </div>
          <div className="text-white">
            <h2 className="text-[24px] font-bold">Közösségi média</h2>
            <hr className="border-1 rounded-full my-2" />
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-light">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="hover:text-light">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
