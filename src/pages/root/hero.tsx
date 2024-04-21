export function Hero(): React.ReactElement {
  return (
    <section
      id="home"
      className="h-auto md:h-screen bg-[#007bff] relative overflow-x-hidden"
    >
      <div className="container flex h-full pt-32 md:pt-0 gap-2 md:gap-8 md:flex-row flex-col">
        <div className="flex-1 flex flex-col justify-center gap-2 md:pt-20 pt-12">
          <h2 className="text-5xl font-bold">
            Educação tecnológica especializada, divertida e de qualidade.
          </h2>
          <p className="text-xl">
            Cursos incríveis e dinâmicos para seus filhos
          </p>
          <a
            href="#courses"
            className="mt-4 bg-[#ED078B] px-6 py-3 rounded-full w-max font-bold cursor-pointer"
          >
            Veja nossos cursos
          </a>
        </div>
        <div className="flex h-full justify-center md:justify-end items-end">
          <img src="/image-1.png" className="object-cover md:h-3/4 h-1/2" />
        </div>
      </div>
    </section>
  );
}
