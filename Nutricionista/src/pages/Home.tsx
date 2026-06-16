import Logo from '../assets/logo.svg';
import "../styles/header.css";
import "../styles/utility.css";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
import Button from '../components/button.tsx';
import { useState, useEffect } from 'react';
import Champion from "../assets/champion.svg";
import "../styles/hero.css";
import "../styles/solution.css";
import TestimonialCard from '../components/TestimonialCard.tsx';
import { IconBrandInstagram, IconBrandFacebook, IconBrandWhatsapp } from '@tabler/icons-react';

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Larissa Litvin - Nutricionista" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a onClick={() => setShowMobileMenu(false)} href="#">Home</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(false)} href="#solution">Serviços</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(false)} href="#pricing">Planos</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="https://wa.me/5545999368498" target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                            <Button text="Agendar consulta" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#solution">Serviços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#pricing">Planos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <li>
                                        <a onClick={() => setShowMobileMenu(false)} className="reverse-color" href="https://wa.me/5545999368498" target="_blank" rel="noopener noreferrer">
                                            WhatsApp
                                        </a>
                                    </li>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <section id="hero">
                <div className="container content">
                    <p className="desktop-only">Olá, seja bem-vinda! 🌿</p>
                    <h1>Transforme sua saúde com uma nutrição feita para você!</h1>
                    <p>
                        Especialista em emagrecimento e tratamento do lipedema,
                        a Dra. Larissa Litvin cuida de você com uma abordagem
                        clínica e funcional, respeitando o seu corpo e a sua história.
                    </p>
                    <div className="flex gap-1">
                        <span>
                            <Button text="Agendar consulta" />
                        </span>
                        <span className="desktop-only">
                            <Button text="Saiba mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Serviços</h2>
                        <span className="desktop-only">
                            <h2>Sob medida para você</h2>
                        </span>
                    </span>
                    <p>
                        Cuidar de você é a nossa prioridade! A <strong>Dra. Larissa Litvin </strong>
                        oferece um atendimento personalizado, focado nos seus objetivos,
                        com ciência e acolhimento em cada etapa da sua jornada.
                    </p>
                </header>

                <div className="even-columns">
                    <div className="card">
                        <span>
                            <img src={Champion} alt="ícone serviço" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Emagrecimento Saudável</h3>
                            <p>
                                Protocolos individualizados para perda de peso com saúde,
                                sem dietas restritivas, respeitando seu metabolismo e rotina.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Champion} alt="ícone serviço" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Tratamento do Lipedema</h3>
                            <p>
                                Abordagem nutricional especializada para o lipedema,
                                reduzindo inflamação, dor e melhorando sua qualidade de vida.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Champion} alt="ícone serviço" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Nutrição Funcional</h3>
                            <p>
                                Alimentação como remédio — tratamos a causa, não só o sintoma,
                                com foco no equilíbrio intestinal, hormonal e metabólico.
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Resultados que falam por si</p>
                        <h2>Cada paciente importa!</h2>
                    </span>
                    <p>
                        Veja o que dizem as pacientes que transformaram
                        sua saúde com o acompanhamento da Dra. Larissa Litvin.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard
                            name="Ana Paula S."
                            role="Paciente — Emagrecimento"
                            text="Em 3 meses de acompanhamento com a Dra. Larissa perdi 8kg sem passar fome. O plano alimentar é super prático e ela sempre me incentiva. Recomendo demais!"
                            image={""}
                            stars={5}
                        />
                        <TestimonialCard
                            name="Juliana M."
                            role="Paciente — Lipedema"
                            text="Depois de anos sofrendo com dores e inchaço, finalmente encontrei uma profissional que entende o lipedema de verdade. A Dra. Larissa mudou minha vida!"
                            image={""}
                            stars={5}
                        />
                        <TestimonialCard
                            name="Fernanda R."
                            role="Paciente — Nutrição Funcional"
                            text="Minha energia voltou, minha digestão melhorou e emagreci sem sofrimento. O atendimento é humanizado e o plano alimentar é muito gostoso de seguir!"
                            image={""}
                            stars={5}
                        />
                        <TestimonialCard
                            name="Camila T."
                            role="Paciente — Emagrecimento"
                            text="A Dra. Larissa é incrível! Muito atenciosa, explica tudo direitinho e os resultados apareceram rápido. Me sinto muito mais disposta e confiante!"
                            image={""}
                            stars={5}
                        />
                    </div>
                </section>
            </section>

            {/* <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                </section>
            </section> */}

            <section id="contact" className="container">
                <header>
                    <p className="desktop-only">Estamos aqui para você</p>
                    <h2>Entre em contato</h2>
                </header>
                <p>
                    Tire suas dúvidas sobre consultas, atendimento online ou presencial.
                    A Dra. Larissa está pronta para te acolher e iniciar sua transformação!
                </p>
                <form className="contact-form">
                    <input type="email" placeholder="Seu melhor e-mail" />
                    <textarea placeholder="Escreva sua mensagem. Responderei o mais breve possível! 💕" />
                    <Button text="Enviar mensagem" />
                </form>
            </section>

            <footer className="container">
                <div className="footer-brand">
                    <img src={Logo} alt="Larissa Litvin Nutricionista" width={160} height={60} />
                    <div className="footer-socials">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <IconBrandInstagram size={24} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <IconBrandFacebook size={24} />
                        </a>
                        <a href="https://wa.me/5545999368498" target="_blank" rel="noopener noreferrer">
                            <IconBrandWhatsapp size={24} />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Profissional</h4>
                        <ul>
                            <li><a href="#">Sobre a Dra. Larissa</a></li>
                            <li><a href="#">CRN-8: 12192</a></li>
                            <li><a href="#">Formação</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Serviços</h4>
                        <ul>
                            <li><a href="#solution">Emagrecimento</a></li>
                            <li><a href="#solution">Lipedema</a></li>
                            <li><a href="#solution">Nutrição Funcional</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contato</h4>
                        <ul>
                            <li><a href="https://wa.me/5545999368498" target="_blank" rel="noopener noreferrer">(45) 99936-8498</a></li>
                            <li><a href="mailto:larissaalbrecht04@gmail.com">larissaalbrecht04@gmail.com</a></li>
                            <li><a href="#contact">Fale conosco</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Feito com amor na aula de Programação Web 🤍 ©2025 Larissa Litvin Nutricionista — Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}