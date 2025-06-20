import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  ChevronDown, 
  ArrowRight, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  Zap,
  Target,
  Users,
  BarChart3,
  MessageSquare,
  Mail,
  Instagram,
  Linkedin,
  X,
  Star,
  Timer,
  Eye,
  DollarSign,
  Rocket
} from 'lucide-react';

function App() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora em segundos

  const heroPhrases = [
    "A nova era dos negócios começa com tecnologia.",
    "Você foca no crescimento, a gente cuida do sistema.",
    "Resultados reais com inovação inteligente."
  ];

  const impactPhrases = [
    "Enquanto você perde tempo em planilhas, seu concorrente automatiza.",
    "Sua empresa está crescendo ou só se movimentando?",
    "Quem não investe em tecnologia... paga por ineficiência."
  ];

  // Rotação das frases do hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % heroPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Contador regressivo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const beforeAfter = [
    { before: "Atendimento manual", after: "Operações automatizadas" },
    { before: "Relatórios manuais", after: "BI com dados em tempo real" },
    { before: "Equipe sobrecarregada", after: "Fluxo inteligente e leve" },
    { before: "Marketing genérico", after: "Estratégia com IA" }
  ];

  const benefits = [
    { icon: Clock, text: "Mais tempo" },
    { icon: TrendingUp, text: "Mais eficiência" },
    { icon: Target, text: "Menos retrabalho" },
    { icon: BarChart3, text: "Mais inteligência nos dados" },
    { icon: MessageCircle, text: "Atendimento 24/7" },
    { icon: Rocket, text: "Escalabilidade" }
  ];

  const cases = [
    "Empresa dobrou o faturamento em 90 dias.",
    "Loja virtual saiu de R$5k para R$60k/mês com estrutura inteligente.",
    "Operação enxuta, automatizada e escalável em menos de 1 mês."
  ];

  const testimonials = [
    {
      text: "Com a OpenSky, nosso caos virou clareza. Automatizamos tudo e conseguimos escalar sem contratar mais ninguém.",
      author: "Mariana S."
    },
    {
      text: "Hoje temos previsibilidade, controle e vendas enquanto dormimos.",
      author: "João R."
    },
    {
      text: "A OpenSky transformou nossa operação. Agora focamos no que realmente importa: crescer.",
      author: "Carlos M."
    }
  ];

  const faqs = [
    {
      question: "A OpenSky é só pra empresas grandes?",
      answer: "Não! Atendemos desde pequenos negócios até grandes empresas. Nossas soluções são escaláveis e se adaptam ao seu tamanho e orçamento."
    },
    {
      question: "Preciso saber de tecnologia para contratar?",
      answer: "Absolutamente não. Cuidamos de toda a parte técnica enquanto você foca no seu negócio. Explicamos tudo de forma simples e clara."
    },
    {
      question: "Em quanto tempo terei resultados?",
      answer: "Os primeiros resultados aparecem em 15-30 dias. Resultados significativos em 60-90 dias, dependendo da complexidade do projeto."
    },
    {
      question: "Posso personalizar a solução?",
      answer: "Sim! Todas as nossas soluções são desenvolvidas sob medida para as necessidades específicas do seu negócio."
    },
    {
      question: "Como começo?",
      answer: "Simples: agende um diagnóstico gratuito pelo WhatsApp. Em 30 minutos, você terá um plano estratégico inicial."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* SEÇÃO 1 - HERO / PRIMEIRA DOBRA */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Fundo com blur vermelho */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-red-600/30 blur-[120px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute w-72 h-72 bg-red-500/20 blur-[100px] rounded-full top-1/4 right-1/4" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Logo e frases */}
          <div className="text-center lg:text-left">
            <motion.img
              src="/logo.svg"
              alt="OpenSky Logo"
              className="w-32 h-32 mx-auto lg:mx-0 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ filter: 'drop-shadow(0 0 30px rgba(220, 38, 38, 0.5))' }}
            />
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
              <span className="text-white">Open</span>
              <span className="text-red-500">Sky</span>
            </h1>

            <div className="h-20 mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                >
                  {heroPhrases[currentPhrase]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Lado direito - Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-red-500/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Transforme seu negócio <span className="text-red-500">agora</span>
            </h3>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Nome da empresa"
                className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Instagram (opcional)"
                className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Localização"
                className="w-full px-4 py-3 bg-black/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
              />
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                Quero ser atendido
              </button>
            </form>

            {/* Checklist */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-sm">Envie seus dados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-sm">Analisamos seu cenário</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-sm">Você recebe um plano de ação digital</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Seta animada */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={40} className="text-red-500" />
        </motion.div>
      </section>

      {/* SEÇÃO 2 - QUEM SOMOS */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Quem <span className="text-red-500">Somos</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A <strong className="text-red-500">OpenSky</strong> é uma empresa de inovação digital focada em transformar o presente das empresas através da tecnologia.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Criamos soluções inteligentes, plataformas sob medida e automações que conectam estratégia, inovação e performance.
            </p>
            <p className="text-xl font-semibold text-white">
              Nosso diferencial? <span className="text-red-500">Visão estratégica</span> + <span className="text-red-500">execução técnica</span> + <span className="text-red-500">suporte humano real</span>.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-500/20 to-transparent p-8 rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Profissional OpenSky"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 3 - VOCÊ ESTÁ PERDENDO DINHEIRO */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold mb-4 text-red-500"
          >
            Você está perdendo dinheiro
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl lg:text-3xl font-bold mb-12"
          >
            e ainda não sabe
          </motion.p>

          <div className="space-y-8 mb-12">
            {impactPhrases.map((phrase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-xl lg:text-2xl text-gray-300 font-medium"
              >
                "{phrase}"
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
          >
            Quero saber como mudar isso
          </motion.button>
        </div>
      </section>

      {/* SEÇÃO 4 - ANTES E DEPOIS */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-center mb-16"
          >
            Antes <span className="text-gray-500">vs</span> <span className="text-red-500">Depois</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {beforeAfter.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-red-400 font-medium mb-2">Antes da OpenSky</div>
                    <div className="text-gray-300">{item.before}</div>
                  </div>
                  <ArrowRight className="text-red-500 mx-4" size={24} />
                  <div className="flex-1">
                    <div className="text-green-400 font-medium mb-2">Depois da OpenSky</div>
                    <div className="text-white font-medium">{item.after}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105"
            >
              Quero isso no meu negócio
            </motion.button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - VOCÊ NÃO ESTÁ COMPRANDO TECNOLOGIA */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold mb-6"
          >
            Você não está comprando <span className="text-red-500">tecnologia</span>...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl lg:text-3xl font-bold mb-12 text-red-500"
          >
            Você está comprando liberdade, agilidade e lucro.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.icon className="text-red-500 mx-auto mb-4" size={48} />
                <p className="text-lg font-medium">{benefit.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105"
          >
            Vamos conversar sobre o seu crescimento
          </motion.button>
        </div>
      </section>

      {/* SEÇÃO 6 - CASES MISTERIOSOS */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-center mb-16"
          >
            Resultados <span className="text-red-500">Reais</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {cases.map((caseText, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-red-500/10 to-transparent p-6 rounded-xl border border-red-500/20 text-center"
              >
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <p className="text-lg font-medium">{caseText}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105"
            >
              Descubra como isso é possível
            </motion.button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 - DIAGNÓSTICO GRATUITO */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-red-600/20 px-4 py-2 rounded-full border border-red-500/30 mb-6">
              <Timer className="text-red-500" size={20} />
              <span className="text-red-500 font-bold">{formatTime(timeLeft)}</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Diagnóstico <span className="text-red-500">Gratuito</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Abrimos apenas alguns horários por semana para empresas que querem dar o próximo passo com tecnologia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-red-500/20 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Eye className="text-red-500 mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-2">Diagnóstico gratuito</h3>
                <p className="text-gray-400 text-sm">Análise completa do seu negócio</p>
              </div>
              <div className="text-center">
                <Clock className="text-red-500 mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-2">Reunião de 30 minutos</h3>
                <p className="text-gray-400 text-sm">Conversa estratégica focada</p>
              </div>
              <div className="text-center">
                <Target className="text-red-500 mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-2">Plano estratégico inicial</h3>
                <p className="text-gray-400 text-sm">Roadmap personalizado</p>
              </div>
            </div>

            <motion.a
              href="https://wa.me/5561983114634"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quero agendar meu horário agora
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 8 - DEPOIMENTOS */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-center mb-16"
          >
            O que nossos <span className="text-red-500">clientes</span> dizem
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 relative"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-red-500">— {testimonial.author}</p>
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-2xl -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 - FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-center mb-16"
          >
            Perguntas <span className="text-red-500">Frequentes</span>
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-900/50 rounded-xl border border-gray-700"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium">
                  <span>{faq.question}</span>
                  <ChevronDown className="transform group-open:rotate-180 transition-transform text-red-500" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Button Flutuante */}
      <motion.a
        href="https://wa.me/5561983114634"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all group z-50"
        title="Fale com a OpenSky agora"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <MessageSquare size={24} />
      </motion.a>

      {/* RODAPÉ */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="OpenSky Logo" className="w-8 h-8" />
                <span className="font-bold text-xl">OpenSky</span>
              </div>
              <p className="text-gray-400 text-sm">
                Conectando tecnologia ao resultado real.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white text-sm">Início</a>
                <a href="#" className="block text-gray-400 hover:text-white text-sm">Quem Somos</a>
                <a href="#" className="block text-gray-400 hover:text-white text-sm">FAQ</a>
                <a href="#" className="block text-gray-400 hover:text-white text-sm">Contato</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <div className="space-y-2">
                <a href="mailto:contato@opensky.com.br" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm">
                  <Mail size={16} />
                  contato@opensky.com.br
                </a>
                <a href="https://wa.me/5561983114634" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm">
                  <MessageCircle size={16} />
                  (61) 98311-4634
                </a>
                <p className="text-gray-400 text-sm">Brasília - DF</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">
              &copy; 2024 OpenSky. Todos os direitos reservados.
            </p>
            <p className="text-red-500 font-bold">
              OpenSky — Conectando tecnologia ao resultado real.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;