import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown, ArrowRight, Book, BarChart3, Globe, Zap, Pencil, MessageSquare, Mail, Instagram, Linkedin, Github, X, Star } from 'lucide-react';

function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      icon: Book,
      title: 'SkyBook',
      description: 'Sistema inteligente de agendamentos',
      fullDescription: `O SkyBook é nossa solução completa de agendamentos que revoluciona a forma como você gerencia seu tempo e seus compromissos.

      Principais características:
      • Agendamento automático 24/7
      • Sincronização com múltiplos calendários
      • Lembretes personalizados
      • Interface intuitiva para clientes
      • Painel administrativo completo
      • Relatórios detalhados de ocupação`
    },
    {
      icon: BarChart3,
      title: 'Dashboards',
      description: 'Visualização de dados em tempo real',
      fullDescription: `Transforme dados em insights acionáveis com nossos dashboards personalizados.

      Recursos inclusos:
      • Visualizações em tempo real
      • Gráficos interativos
      • Métricas personalizáveis
      • Exportação de relatórios
      • Alertas inteligentes
      • Integração com múltiplas fontes de dados`
    },
    {
      icon: Globe,
      title: 'Criação de Sites',
      description: 'Websites modernos e responsivos',
      fullDescription: `Desenvolvimento de websites profissionais que combinam design moderno com alta performance.

      Oferecemos:
      • Design responsivo
      • Otimização para SEO
      • Integração com CMS
      • Alta velocidade de carregamento
      • Certificado SSL
      • Hospedagem gerenciada`
    },
    {
      icon: Zap,
      title: 'Automação',
      description: 'Automatize processos repetitivos',
      fullDescription: `Automatize tarefas repetitivas e aumente a eficiência da sua empresa.

      Soluções incluem:
      • Automação de processos (RPA)
      • Integração entre sistemas
      • Workflows personalizados
      • Notificações automáticas
      • Processamento de documentos
      • Relatórios automatizados`
    },
    {
      icon: Pencil,
      title: 'Criação de Conteúdo',
      description: 'Social Media e Estratégias Digitais com IA',
      fullDescription: `Potencialize sua presença digital com conteúdo estratégico e inteligência artificial.

      Oferecemos:
      • Gestão de redes sociais
      • Criação de conteúdo com IA
      • Estratégias de marketing digital
      • Análise de métricas
      • Otimização de campanhas
      • Relatórios de performance`
    }
  ];

  const testimonials = [
    {
      name: "Gabriel Sampaio",
      company: "EaW Studio",
      text: "\"O SkyBook revolucionou completamente a gestão dos meus agendamentos. Antes era uma confusão total, agora tudo flui perfeitamente. A automatização do processo me permitiu focar no que realmente importa: atender meus clientes. Simplesmente transformador!\"",
      rating: 5
    },
    {
      name: "Arthur Linhares",
      company: "M&A Investimentos",
      text: "\"Os dashboards desenvolvidos pela OpenSky são excepcionais! A visualização clara e em tempo real dos nossos KPIs mudou completamente nossa tomada de decisão. A equipe entendeu exatamente nossas necessidades e entregou além das expectativas.\"",
      rating: 5
    }
  ];

  const faqs = [
    { question: 'O que é o SkyBook?', answer: 'O SkyBook é nossa solução de agendamento inteligente que automatiza todo o processo de marcação de horários.' },
    { question: 'Quais tecnologias vocês utilizam?', answer: 'Trabalhamos com as tecnologias mais modernas do mercado, incluindo React, Node.js, TypeScript e diversas soluções cloud.' },
    { question: 'Como funciona o processo de desenvolvimento?', answer: 'Nosso processo é ágil e transparente, com sprints semanais e comunicação constante com o cliente.' },
    { question: 'Vocês oferecem suporte após a entrega?', answer: 'Sim, oferecemos suporte técnico especializado e manutenção contínua para todos os nossos projetos.' },
    { question: 'Qual o prazo médio de desenvolvimento?', answer: 'O prazo varia de acordo com a complexidade do projeto, mas trabalhamos com entregas incrementais para garantir resultados rápidos.' }
  ];

  const impactPhrases = [
    {
      title: "Transforme seu negócio com tecnologia inteligente",
      description: "Soluções inovadoras para impulsionar seu crescimento",
      color: "text-white"
    },
    {
      title: "Seu próximo nível começa com a OpenSky",
      description: "Tecnologia de ponta para resultados extraordinários",
      color: "text-red-500"
    },
    {
      title: "Automatize. Cresça. Conquiste.",
      description: "Simplifique processos, maximize resultados",
      color: "text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-2">
                <img src="/logo.svg" alt="OpenSky Logo" className="w-8 h-8" />
                <span className="font-bold text-xl">OpenSky</span>
              </a>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
                <a href="#quem-somos" className="text-gray-300 hover:text-white transition-colors">Quem Somos</a>
                <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
              </nav>
            </div>
            <a 
              href="https://wa.me/seu-numero"
              className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors relative group"
            >
              <span className="absolute -inset-1 bg-red-500/30 rounded-lg blur animate-pulse group-hover:bg-red-500/50"></span>
              <span className="relative">Fale Conosco</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-[80vh] flex items-center justify-center relative px-4 pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.img
            src="/logo.svg"
            alt="OpenSky Logo"
            className="logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            OpenSky
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Soluções tecnológicas para o futuro
          </motion.p>
          <motion.a 
            href="https://wa.me/seu-numero" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <MessageCircle size={20} />
            Fale com um especialista
          </motion.a>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <ChevronDown size={40} className="text-red-500" />
        </motion.div>
      </section>

      {/* Impact Phrases Section */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactPhrases.map((phrase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h2 className={`text-3xl font-bold mb-4 ${phrase.color}`}>
                  {phrase.title}
                </h2>
                <p className="text-gray-400">{phrase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section-gradient py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="service-card"
                onClick={() => setSelectedService(service.title)}
              >
                <service.icon size={40} className="text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <ArrowRight className="absolute bottom-6 right-6 text-red-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Quem Somos Section */}
<section
  id="quem-somos"
  className="relative py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white"
>
  {/* Fundo decorativo vermelho desfocado */}
  <div className="absolute inset-0">
    <div className="absolute w-96 h-96 bg-red-600/20 blur-[120px] rounded-full top-20 left-10 animate-pulse" />
    <div className="absolute w-72 h-72 bg-red-500/10 blur-[100px] rounded-full bottom-20 right-10" />
  </div>

  <div className="relative max-w-5xl mx-auto z-10 text-center">
    <h2 className="text-5xl font-extrabold mb-8 tracking-tight text-white drop-shadow-md">
      Quem Somos
    </h2>

    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
      A <strong className="text-red-500">OpenSky</strong> é uma empresa de inovação digital focada em transformar o presente das empresas através da tecnologia. Desenvolvemos sistemas inteligentes, plataformas customizadas e soluções automatizadas que conectam estratégia, eficiência e inovação. Nosso compromisso é entregar resultados reais com soluções modernas e escaláveis.
    </p>

    <p className="text-md text-gray-400 leading-relaxed max-w-3xl mx-auto">
      Fundada com a missão de empoderar negócios com ferramentas tecnológicas de ponta, unimos design, performance e automação para construir experiências únicas. Nossa equipe é movida por desafios, criatividade e impacto — entregando valor com excelência técnica, visão estratégica e suporte humano próximo.
    </p>
  </div>
</section>



      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="hero-gradient w-full h-full" />
            </div>
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <div className="relative">
              {services.find(s => s.title === selectedService)?.icon && 
                React.createElement(services.find(s => s.title === selectedService)!.icon, {
                  size: 48,
                  className: 'text-red-500 mb-4'
                })
              }
              <h3 className="text-2xl font-bold mb-4">{selectedService}</h3>
              <div className="prose prose-invert">
                <p className="text-gray-300 whitespace-pre-line">
                  {services.find(s => s.title === selectedService)?.fullDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Testimonials Section */}
      <section id="depoimentos" className="section-gradient py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-6 rounded-xl relative overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300">{testimonial.text}</p>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-gradient py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
          {faqs.map((faq, index) => (
            <details key={index} className="mb-4 group">
              <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-900/50 rounded-lg">
                <span className="font-medium">{faq.question}</span>
                <ChevronDown className="transform group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-4 bg-gray-800/50 rounded-b-lg mt-1">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contato" className="section-gradient py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Entre em Contato</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-900/50 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-900/50 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">Serviço</label>
              <select
                id="service"
                className="w-full px-4 py-2 bg-gray-900/50 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              >
                <option>Skybook</option>
                <option>Dashboards</option>
                <option>Criação de Sites</option>
                <option>Automação</option>
                <option>Criação de Conteúdo</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-900/50 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              ></textarea>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="schedule" className="rounded bg-gray-900/50" />
              <label htmlFor="schedule" className="text-sm">
                Aceito o recebimento e ligações de agendamento.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg transition-all"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/5561983114634"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all group"
        title="Fale com nosso time"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <MessageSquare size={24} />
      </motion.a>

      {/* Footer */}
      <footer className="section-gradient py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OpenSky</h3>
            <div className="space-y-2">
              <a href="mailto:contato@opensky.com.br" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Mail size={16} />
                openskygroup01@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">Política de Privacidade</a>
              <a href="#" className="block text-gray-400 hover:text-white">Termos de Uso</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2024 OpenSky. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;