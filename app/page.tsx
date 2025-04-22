import Image from "next/image";
import placeholderImage from "../assets/placeholder.png";

export default function Home() {
  return (
    <div className="flex items-center bg-lightest px-15 w-full pb-15">
      <div className="flex w-full gap-15 bg-lightest">
        <div className="w-1/2 bg-lightest py-8">
          <h1 className="text-[48px] font-bold">Üdvözöllek!</h1>
          <p className="text-lg">
            Bodnár Krisztina vagyok, professzionális sminktetoválóként és
            kozmetikusként dolgozom. Örülök, hogy itt vagy.
          </p>
          <br />
          <p className="text-lg">
            Nálam a szépség nem csupán külsőségekről szól – a célom, hogy
            feltöltődve, önazonosan és magabiztosan távozz. Minden kezelést a
            természetesség, az igényesség és a harmónia jegyében végzek. Hiszem,
            hogy a szépség belülről fakad – én pedig abban segítek, hogy ez
            kívül is megmutatkozzon. Számomra a vendégeim nemcsak vendégek,
            hanem olyan nők, akiknek szeretnék egy kis nyugalmat, törődést és
            megújulást nyújtani a rohanó hétköznapokban.
          </p>
          <br />
          <p className="text-lg">
            Célom, hogy kiemeljem mindenkiben azt az egyedi szépséget, ami már
            ott van benne.
          </p>
          <br />
          <p className="text-lg">
            Nálam nemcsak megszépülsz, hanem is feltöltődsz testben és lélekben
            egyaránt.
          </p>
        </div>
        <div className="w-1/2 relative">
          <Image
            src={placeholderImage}
            alt="Description of the image"
            fill
            className="rounded-[20px] shadow-md"
            sizes="(max-width: 768px) 75vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
