import { FaGem, FaRocket } from 'react-icons/fa';

const Skills = () => {
    return (
        <section className="mb-20">
            <header className="major mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-3xl font-bold text-gray-800">Habilidades</h2>
            </header>
            <div className="features grid md:grid-cols-2 gap-10">
                <article className="flex gap-6">
                    <span className="icon text-red-500 text-4xl mt-1">
                        <FaGem />
                    </span>
                    <div className="content">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Linguagens de Programação e Banco de Dados</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Python com foco em análise de dados.</li>
                            <li>SQL para extração de dados.</li>
                            <li>M language e DAX.</li>
                            <li>Banco de Dados SQL server e Oracle.</li>
                        </ul>
                    </div>
                </article>

                <article className="flex gap-6">
                    <span className="icon text-red-500 text-4xl mt-1">
                        <FaRocket />
                    </span>
                    <div className="content">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Engenharia de Software</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Git, Github, Gitlab.</li>
                            <li>Python API's.</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Skills;
