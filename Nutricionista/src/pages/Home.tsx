import Logo from '../assets/Logo.png';
import "../styles/header.css";
import "../styles/utility.css";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
import Button from '../components/button.tsx';
import { useState, useEffect } from 'react';
import "../styles/hero.css";
import "../styles/solution.css";
import IconEmagrecimento from "../assets/emagrecimento.svg";
import IconLipedema from "../assets/lipedema.svg";
import IconNutricao from "../assets/nutricao.svg";
import TestimonialCard from '../components/TestimonialCard.tsx';
import { IconBrandInstagram, IconBrandFacebook, IconBrandWhatsapp } from '@tabler/icons-react';
import CheckIcon from '../assets/check.svg';

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
            <header className="py-sm">
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <nav className="flex items-center justify-between">
                        <img src={Logo} alt="Larissa Litvin - Nutricionista" width={220} height={80} />

                        <div className="desktop-only">
                            <ul className="flex gap-1">
                                <li><a onClick={() => setShowMobileMenu(false)} href="#">Home</a></li>
                                <li><a onClick={() => setShowMobileMenu(false)} href="#solution">Serviços</a></li>
                                <li><a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a></li>
                                <li><a onClick={() => setShowMobileMenu(false)} href="#pricing">Planos</a></li>
                                <li><a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a></li>
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
                                            <li><a onClick={() => setShowMobileMenu(false)} href="#">Home</a></li>
                                            <li><a onClick={() => setShowMobileMenu(false)} href="#solution">Serviços</a></li>
                                            <li><a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a></li>
                                            <li><a onClick={() => setShowMobileMenu(false)} href="#pricing">Planos</a></li>
                                            <li><a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a></li>
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
                </div>
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
                        <span><img src={IconEmagrecimento} alt="ícone emagrecimento" width={64} height={64} /></span>
                        <div>
                            <h3>Emagrecimento Saudável</h3>
                            <p>Protocolos individualizados para perda de peso com saúde, sem dietas restritivas, respeitando seu metabolismo e rotina.</p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span><img src={IconLipedema} alt="ícone lipedema" width={64} height={64} /></span>
                        <div>
                            <h3>Tratamento do Lipedema</h3>
                            <p>Abordagem nutricional especializada para o lipedema, reduzindo inflamação, dor e melhorando sua qualidade de vida.</p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span><img src={IconNutricao} alt="ícone nutrição" width={64} height={64} /></span>
                        <div>
                            <h3>Nutrição Funcional</h3>
                            <p>Alimentação como remédio — tratamos a causa, não só o sintoma, com foco no equilíbrio intestinal, hormonal e metabólico.</p>
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
                        <TestimonialCard text="Lari, sua querida, eu quem agradece. Ainda continuo tentando fazer a dieta e não consigo comer mais como antes. Obrigada pela atenção, profissionalismo e carinho comigo — tenho certeza que com todas as pacientes você é maravilhosa!" stars={5} />
                        <TestimonialCard text="Acredito que estou indo bem, pois diminuí bastante as quantidades no almoço e na janta. Como sempre mais leve, presto atenção na mastigação e parei com as guloseimas. Muito obrigada pelo cuidado, dedicação e orientação. Sua ajuda foi fundamental para alcançar meus objetivos e melhorar minha qualidade de vida!" stars={5} />
                        {/* duplicados para o loop infinito funcionar sem corte */}
                        <TestimonialCard text="Lari, sua querida, eu quem agradece. Ainda continuo tentando fazer a dieta e não consigo comer mais como antes. Obrigada pela atenção, profissionalismo e carinho comigo — tenho certeza que com todas as pacientes você é maravilhosa!" stars={5} />
                        <TestimonialCard text="Acredito que estou indo bem, pois diminuí bastante as quantidades no almoço e na janta. Como sempre mais leve, presto atenção na mastigação e parei com as guloseimas. Muito obrigada pelo cuidado, dedicação e orientação. Sua ajuda foi fundamental para alcançar meus objetivos e melhorar minha qualidade de vida!" stars={5} />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <div className="plan">
                            <h3>Consulta com Retorno</h3>
                            <div className="hr" />
                            <div className="price">
                                <h2>R$250</h2>
                                <p>,00</p>
                            </div>
                            <p>à vista</p>
                        </div>
                        <div className="hr" />
                        <ul>
                            <li className="features"><img src={CheckIcon} width={20} height={20} /><p>1 consulta nutricional</p></li>
                            <li className="features"><img src={CheckIcon} width={20} height={20} /><p>1 retorno incluído</p></li>
                            <li className="features"><img src={CheckIcon} width={20} height={20} /><p>Plano alimentar personalizado</p></li>
                        </ul>
                        <Button text="Agendar consulta" />
                    </div>

                    <div className="pricing-card">
                        <div className="plan">
                            <h3>Programa Nutricional</h3>
                            <div className="hr" />
                            <div className="price">
                                <h2>R$540</h2>
                                <p>,00</p>
                            </div>
                            <p>2x sem juros ou 3x+ com juros da maquininha</p>
                        </div>
                        <div className="hr" />
                        <ul>
                            <li className="features"><img src={CheckIcon} width={20} height={20} /><p>3 consultas nutricionais</p></li>
                            <li className="features"><img src={CheckIcon} width={20} height={20} /><p>Acompanhamento contínuo</p></li>
                            <li className="features"><img src={CheckIcon} width={20} height={20} /><p>Plano alimentar personalizado</p></li>
                            <li className="features"><img src={CheckIcon} width={20} height={20} /><p>Suporte entre as consultas</p></li>
                        </ul>
                        <Button text="Agendar consulta" />
                    </div>

                    <div className="pricing-card">
                        <div className="plan">
                            <h3>Avaliação de Bioimpedância</h3>
                            <div className="hr" />
                            <div className="price">
                                <h2>R$50</h2>
                                <p>,00</p>
                            </div>
                            <p>avulso ou junto a qualquer plano</p>
                        </div>
                        <div className="hr" />
                        <ul>
                            <li className="features"><img src={CheckIcon} width={20} height={20} /><p>Avaliação de composição corporal</p></li>
                            <li className="features"><img src={CheckIcon} width={20} height={20} /><p>Análise de massa muscular e gordura</p></li>
                            <li className="features"><img src={CheckIcon} width={20} height={20} /><p>Resultado na hora</p></li>
                        </ul>
                        <Button text="Agendar consulta" />
                    </div>
                </section>
            </section>

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
                <div className="footer-brand" style={{ alignItems: 'center' }}>
                    <img src={Logo} alt="Larissa Litvin Nutricionista" width={220} style={{ height: 'auto' }} />
                    <div className="footer-socials">
                        <a href="#" target="_blank" rel="noopener noreferrer"><IconBrandInstagram size={24} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><IconBrandFacebook size={24} /></a>
                        <a href="https://wa.me/5545999368498" target="_blank" rel="noopener noreferrer"><IconBrandWhatsapp size={24} /></a>
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