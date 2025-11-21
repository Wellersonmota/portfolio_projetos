import Image from 'next/image';

const Hero = () => {
    return (
        <section id="banner" className="flex flex-col-reverse md:flex-row gap-10 items-center mb-20">
            <div className="content flex-1">
                <header>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Seja bem-vindo(a) ao meu portfólio de projetos em Ciência de dados!
                    </h2>
                </header>
                <p className="text-lg text-gray-600 mb-4">
                    Nessa página serão apresentadas minhas habilidades em resolução de problemas de negócio fazendo uso de conceitos da Ciência de Dados, por meio de projetos com dados públicos.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                    Você encontrará também minhas experiências profissionais, habilidades, ferramentas e conceitos relacionados a Ciência de Dados utilizados no desenvolvimento dos projetos.
                </p>
                <p className="text-lg text-gray-600">
                    Sinta-se à vontade para entrar em contato utilizando os links ao final da página.
                </p>
            </div>
            <div className="image object flex-1 max-w-md">
                <Image
                    src="/portfolio_projetos/images/Perfil.jpg"
                    alt="Foto de perfil de Wellerson Mota"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover shadow-md w-full h-auto"
                    priority
                />
            </div>
        </section>
    );
};

export default Hero;
