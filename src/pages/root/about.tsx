export function About(): React.ReactElement {
  return (
    <section
      id="about"
      className="bg-[rgb(25,163,255)] py-20 flex flex-col gap-12"
    >
      <div className="container ">
        <h2 className="text-center font-bold text-3xl">Sobre nós</h2>
        <p className="text-center text-lg text-gray-100">
          Conheça um pouco sobre nossa escola
        </p>

        <div className="flex gap-12 mt-10 flex-col md:flex-row">
          <div className="flex flex-1 flex-col w-full">
            <p className="text-justify w-full text-lg">
              A Startup Jedais Tec é uma empresa dedicada à educação
              tecnológica, focada especialmente no desenvolvimento de crianças e
              jovens do interior do Amazonas. Nosso objetivo é formar mentes
              curiosas, preparando-as para um futuro dominado por avanços
              digitais. O diferencial da escola, está na sua abordagem
              educacional única, combinando ensino de tecnologia com
              metodologias ativas de aprendizagem.
            </p>
          </div>
        </div>
      </div>

      <div className="container flex gap-12 w-full flex-col-reverse lg:flex-row">
        <div className="flex flex-1 w-full flex-col gap-4">
          <h2 className="text-2xl font-bold">Equipe Administrativa</h2>
          <div className="flex flex-col gap-10 items-center justify-center">
            <div className="flex gap-2 p-2 border border-blue-400">
              <img
                src="/professional-1.jpeg"
                alt="Team image 1"
                className="w-36 h-full object-cover"
              />
              <p className="text-justify text-lg">
                <strong>João Aguila</strong> -{" "}
                <strong>
                  <em>Diretor Fundador</em>
                </strong>{" "}
                de 31 anos, bacharel em Administração pela <em>UFAM</em> e
                Técnico em Redes de Computadores e Manutenção e suporte pelo{" "}
                <em>CETAM</em>. Conhecido pela sua paixão pela tecnologia e pelo
                seu desejo de democratizar o ensino de informática. Sua visão
                para a Jedais Tec é iluminar o caminho para um futuro brilhante
                para as crianças através da educação digital.
              </p>
            </div>

            <div className="flex gap-2 p-2 border border-blue-400">
              <img
                src="/professional-2.jpeg"
                alt="Team image 1"
                className="w-36 h-full object-cover"
              />
              <p className="text-justify text-lg">
                <strong>Thiago Castelo Branco</strong> -{" "}
                <strong>
                  <em>Co-Fundador</em>
                </strong>{" "}
                de 23 anos, Cursando Administração na <em>UFAM</em>. Tendo
                atuado como Supervisor do Censo 2022 do <em>IBGE</em> e Escrivão
                de Polícia Civil. Possui experiência acadêmica e prática. Ambos
                os profissionais da Administração que cuidam da gestão da
                startup, garantindo a organização e o suporte necessário para o
                funcionamento eficaz da instituição.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 w-full flex-col gap-4">
          <h2 className="text-center font-bold text-2xl">Organizacional</h2>
          <div className="flex flex-col gap-10 items-center justify-center">
            <div className="flex gap-1 flex-col bg-[#fd4d40c5] p-8">
              <h2 className="font-bold text-center text-2xl"> Missão</h2>
              <p className="text-center text-lg">
                A missão da Jedais Tec é capacitar crianças e jovens dos
                interiores do Amazonas, para o futuro da tecnologia, dando-lhes
                as habilidades que precisam para explorar e criar no mundo
                digital.
              </p>
            </div>
            <div className="flex gap-1 flex-col bg-[#fdb62fc5] p-8">
              <h2 className="font-bold text-center text-2xl">Visão</h2>
              <p className="text-center text-lg">
                Ser líder em educação tecnológica para crianças e jovens,
                transformando-se no farol que ilumina o caminho para
                descobertas, inovações e a busca pela excelência.
              </p>
            </div>
            <div className="flex gap-1 flex-col bg-[#16c3b0c5] p-8">
              <h2 className="font-bold text-center text-2xl">Valores</h2>
              <p className="text-center text-lg">
                Responsabilidade, Integridade, Foco no sucesso do Aluno,
                Trabalho em Equipe, Inclusão Digital e Inovação no Ensino
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
