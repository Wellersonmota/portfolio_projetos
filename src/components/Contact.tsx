import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="mb-10">
            <header className="major mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-3xl font-bold text-gray-800">Entre em contato</h2>
            </header>
            <p className="text-gray-600 mb-6">Sinta-se à vontade para entrar em contato!</p>

            <ul className="contact space-y-4">
                <li className="flex items-center gap-4 text-gray-600">
                    <FaLinkedin className="text-red-500 text-xl" />
                    <a href="http://www.linkedin.com/in/wellerson-mota" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                        LinkedIn
                    </a>
                </li>

                <li className="flex items-center gap-4 text-gray-600">
                    <FaEnvelope className="text-red-500 text-xl" />
                    <a href="mailto:wellersonmota@gmail.com" className="hover:text-red-500 transition-colors">
                        wellersonmota@gmail.com
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Contact;
