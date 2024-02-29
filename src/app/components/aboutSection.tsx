import Image from "next/image";

export default function AboutSection() {
  return (
    <div className=" text-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Ouvrir des Horizons, Transformer des Vies
          </h2>
          <div className="text-left">
            <p className="mt-4">
              Dans un monde où les défis semblent parfois insurmontables,
              l'association Aba'a se dresse comme un phare d'espoir pour ceux
              confrontés à des difficultés. Fondée sur la conviction profonde
              que l'éducation est la clé de la résilience et de la réinvention
              de soi, Aba'a offre des formations sur mesure pour les individus
              en situation de vulnérabilité.
            </p>
            <p className="mt-4">
              Chez Aba'a, nous croyons en la puissance de l'apprentissage pour
              non seulement surmonter les obstacles, mais aussi pour ouvrir des
              portes vers de nouvelles opportunités. Nos programmes sont conçus
              pour équiper nos bénéficiaires des compétences nécessaires pour
              naviguer dans les complexités de la vie moderne, tout en
              renforçant leur confiance en leurs propres capacités.
            </p>
          </div>
        </div>
        {/* <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold">WHAT OUR CLIENTS SAY</h3>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <Image
            src="/logo.jpg"
            width={128}
            height={128}
            alt="Parsley"
            className="hexagon-logo"
          />
        </div> */}
      </div>
    </div>
  );
}
