import Image from "next/image";
import placeholderImage from "../assets/placeholder.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
          <div className="w-1/2 relative h-[600px]">
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
      <div className="bg-light px-15 py-15">
        <div className="flex items-center pb-15 w-full">
          <div className="flex w-full items-center gap-15 ">
            <div className="w-1/2 relative h-[600px]">
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
    </div>
  );
}
