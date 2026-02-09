import Image from "next/image";

export default function ProjectPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">

      {/* Sectie 1 — over jou (flexbox) */}
      <section className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold">Mijn project</h1>

          <p>
            Ik ben Robin, student grafisch design. Ik hou van strak design,
            typografie en een duidelijke structuur.
          </p>

          <p>
            Dit project toont mijn proces van concept tot eindresultaat.
          </p>
        </div>

        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-xl border">
            <Image
              src="/me.jpg"
              alt="Foto van mij"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Sectie 2 — afbeeldingen (flexbox gallery) */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Projectbeelden</h2>

        <div className="flex flex-wrap gap-6">
          <div className="w-full md:w-[48%]">
            <Image
              src="/project-1.jpg"
              alt="Projectbeeld 1"
              width={1200}
              height={800}
              className="rounded-xl border"
            />
          </div>

          <div className="w-full md:w-[48%]">
            <Image
              src="/project-2.jpg"
              alt="Projectbeeld 2"
              width={1200}
              height={800}
              className="rounded-xl border"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
