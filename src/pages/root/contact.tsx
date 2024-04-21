import { Button } from "../../components/ui/button";

export function Contact(): React.ReactElement {
  return (
    <section id="contact" className="text-black pt-16">
      <div className="container flex gap-10 items-center  flex-col-reverse lg:flex-row">
        <div className="flex flex-1 flex-col w-full">
          <h2 className="text-center font-bold text-3xl text-[#007bff]">
            Localização
          </h2>
          <p className="text-center text-lg text-gray-700">
            Nos faça uma visita, ficaremos felizes em receber você
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.1039447710077!2d-70.02339852421157!3d-4.391642295582481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91f2eb7d09e4b033%3A0xd9dc3d0d25e8c050!2sJedais%20Tec!5e0!3m2!1spt-BR!2sbr!4v1712894950049!5m2!1spt-BR!2sbr"
            className="w-full h-[315px] lg:h-[630px] rounded-xl mt-8"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-1 flex-col w-full">
          <h2 className="text-center font-bold text-3xl text-[#007bff]">
            Contato
          </h2>
          <p className="text-center text-lg text-gray-700">
            Entre em contato conosco para mais informações
          </p>

          <form className="w-full py-16 bg-[#0099ff] text-white px-8 flex flex-col gap-4 mt-8 rounded-xl">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-bold">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                className="border p-2 rounded-xl text-[#007bff]"
                placeholder="Seu nome aqui"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="border p-2 rounded-xl text-[#007bff]"
                placeholder="exemplo@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="content" className="font-bold">
                Assunto
              </label>
              <input
                type="text"
                id="content"
                className="border p-2 rounded-xl text-[#007bff]"
                placeholder="Assunto aqui"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-bold">
                Mensagem
              </label>
              <textarea
                id="message"
                className="border p-2 rounded-xl text-[#007bff]"
                placeholder="Sua mensagem aqui"
                rows={5}
              />
            </div>

            <div className="flex w-full">
              <Button className="w-full py-6 opacity-90 rounded-xl text-md uppercase font-bold bg-[#131C55] hover:bg-[#131C55]/90">
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
