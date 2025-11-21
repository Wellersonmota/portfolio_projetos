import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Header = () => {
    return (
        <header id="header" className="flex justify-between items-center py-10 border-b border-gray-200 mb-10">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-red-500 transition-colors">
                <strong>Portfólio de Projetos: </strong>Ciência de dados
            </Link>

            <ul className="flex gap-4">
                <li>
                    <a
                        href="http://www.linkedin.com/in/wellerson-mota"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-400 hover:text-red-500 text-xl transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/invites/contact/?i=1vizvfq09nizk&utm_content=e0aj88"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-gray-400 hover:text-red-500 text-xl transition-colors"
                    >
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:wellersonmota@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email"
                        className="text-gray-400 hover:text-red-500 text-xl transition-colors"
                    >
                        <FaEnvelope />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
