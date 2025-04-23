import Image from "next/image";
import placeholderImage from "../assets/placeholder.png";
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
              src={placeholderImage}
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
                src={placeholderImage}
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
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="pl-15 py-5 basis-1/3">
                  <div className="p-1 w-[350px] relative aspect-square">
                    <Image
                      src={placeholderImage}
                      alt={`Portfolio image ${index + 1}`}
                      fill
                      className="rounded-[20px] object-cover shadow-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
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
            <div className="relative w-full h-[250px] -mt-8 mx-auto z-10">
              <Image
                src={placeholderImage}
                alt="Description of the image"
                fill
                className="rounded-tl-[20px] rounded-tr-[20px] rounded-bl-0 rounded-br-0 object-cover"
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
            <div className="relative w-full h-[250px] -mt-8 mx-auto z-10">
              <Image
                src={placeholderImage}
                alt="Description of the image"
                fill
                className="rounded-tl-[20px] rounded-tr-[20px] rounded-bl-0 rounded-br-0 object-cover"
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
            <div className="relative w-full h-[250px] -mt-8 mx-auto z-10">
              <Image
                src={placeholderImage}
                alt="Description of the image"
                fill
                className="rounded-tl-[20px] rounded-tr-[20px] rounded-bl-0 rounded-br-0 object-cover"
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
              src={placeholderImage}
              alt="Description of the image"
              fill
              className="rounded-[20px] shadow-md object-cover"
              sizes="(max-width: 768px) 75vw, 50vw"
            />
          </div>
        </div>
      </div>
      {/* Elérhetőség */}
      <div className="bg-lightest px-15 py-15"></div>
    </div>
  );
}
