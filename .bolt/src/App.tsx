import { Star, CheckCircle, TrendingUp, Users, Zap, ArrowRight, Smartphone, Award, ShoppingCart, CreditCard } from 'lucide-react';
import { useState, useEffect } from 'react';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#1D4ED8', stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* T shape - modern and bold */}
    <rect x="15" y="15" width="35" height="8" rx="4" fill="url(#tapGradient)" />
    <rect x="28" y="15" width="10" height="50" rx="5" fill="url(#tapGradient)" />

    {/* A shape - stylized triangle with cutout */}
    <path d="M 55 65 L 70 20 L 85 65 L 78 65 L 70 40 L 62 65 Z" fill="url(#tapGradient)" />

    {/* NFC wave signal emanating */}
    <circle cx="33" cy="75" r="3" fill="#3B82F6" opacity="0.8" />
    <path d="M 38 75 Q 43 70, 48 75" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
    <path d="M 41 75 Q 48 67, 55 75" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round" />
    <path d="M 44 75 Q 53 64, 62 75" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.2" strokeLinecap="round" />
  </svg>
);

// Floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    left: number;
    animationDelay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          size: Math.random() * 100 + 50, // 50-150px
          left: Math.random() * 100, // 0-100%
          animationDelay: Math.random() * 20, // 0-20s
          duration: Math.random() * 10 + 15, // 15-25s
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="floating-shapes">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-shape"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="fixed inset-0 animated-bg"></div>
      <FloatingParticles />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full glassmorphism z-50 border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Logo className="w-10 h-10" />
                <span className="text-2xl font-bold text-white drop-shadow-lg">TAPear</span>
              </div>
              <button
                onClick={scrollToProducts}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-medium hover:bg-white/30 transition-all duration-200 hover:shadow-lg border border-white/30"
              >
                Ver Productos
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 glassmorphism text-white px-4 py-2 rounded-full mb-6 border border-white/30">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Tecnología NFC para reseñas instantáneas</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Un TAP, Miles de
                <span className="gradient-text"> Reseñas</span>
              </h1>

              <p className="text-xl text-white/90 mb-10 leading-relaxed drop-shadow-lg">
                El dispositivo NFC inteligente que convierte cada cliente satisfecho en una reseña positiva.
                Simple, rápido y efectivo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button
                  onClick={scrollToProducts}
                  className="glassmorphism text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-xl hover:scale-105 shimmer-effect"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Comprar Dispositivo</span>
                </button>
                <button
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/30 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Ver Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-white/80">
                ✓ Envío gratis · ✓ Configuración en 5 minutos · ✓ Sin mensualidades
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 glassmorphism border-y border-white/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="card-hover">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">15,000+</div>
                <div className="text-white/80">Dispositivos Activos</div>
              </div>
              <div className="card-hover">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">2 seg</div>
                <div className="text-white/80">Para Dejar Reseña</div>
              </div>
              <div className="card-hover">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">85%</div>
                <div className="text-white/80">Tasa de Conversión</div>
              </div>
              <div className="card-hover">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">5x</div>
                <div className="text-white/80">Más Reseñas al Mes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Reviews Matter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 animated-bg-alt">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Por Qué las Reseñas Importan
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Las reseñas son el motor de crecimiento más poderoso para tu negocio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glassmorphism p-6 rounded-xl border border-white/20 card-hover">
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">93%</div>
                <p className="text-white/90">de consumidores leen reseñas antes de comprar</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl border border-white/20 card-hover">
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">+31%</div>
                <p className="text-white/90">más ganancias con buenas reseñas online</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl border border-white/20 card-hover">
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">4.3★</div>
                <p className="text-white/90">calificación mínima para ser considerado confiable</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl border border-white/20 card-hover">
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">72%</div>
                <p className="text-white/90">confían más en un negocio con reseñas recientes</p>
              </div>
            </div>

            <div className="mt-12 glassmorphism p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="card-hover">
                  <Award className="w-12 h-12 text-white mx-auto mb-4 drop-shadow-lg" />
                  <h3 className="font-bold text-white mb-2">Mayor Credibilidad</h3>
                  <p className="text-white/80 text-sm">Las reseñas generan confianza inmediata en nuevos clientes</p>
                </div>
                <div className="card-hover">
                  <TrendingUp className="w-12 h-12 text-white mx-auto mb-4 drop-shadow-lg" />
                  <h3 className="font-bold text-white mb-2">Mejor Posicionamiento</h3>
                  <p className="text-white/80 text-sm">Google prioriza negocios con más reseñas positivas</p>
                </div>
                <div className="card-hover">
                  <Users className="w-12 h-12 text-white mx-auto mb-4 drop-shadow-lg" />
                  <h3 className="font-bold text-white mb-2">Más Clientes</h3>
                  <p className="text-white/80 text-sm">Cada reseña positiva atrae nuevos compradores</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Tan Simple Como 1-2-3
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tu cliente solo necesita acercar su teléfono. Nosotros hacemos el resto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cliente Acerca Teléfono</h3>
              <p className="text-slate-600 leading-relaxed">
                Un simple TAP con cualquier smartphone. No necesita apps ni configuración.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Se Abre Automáticamente</h3>
              <p className="text-slate-600 leading-relaxed">
                Directo a tu página de Google, Facebook o la plataforma que elijas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reseña Publicada</h3>
              <p className="text-slate-600 leading-relaxed">
                En 10 segundos tienes una nueva reseña. Así de simple.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tecnología NFC</h3>
              <p className="text-slate-600 leading-relaxed">
                Compatible con todos los smartphones modernos. Sin apps, sin complicaciones.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Configuración Rápida</h3>
              <p className="text-slate-600 leading-relaxed">
                Recibe tu dispositivo, configúralo en 5 minutos y empieza a capturar reseñas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dashboard en Tiempo Real</h3>
              <p className="text-slate-600 leading-relaxed">
                Monitorea todas tus reseñas desde un panel intuitivo y fácil de usar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Elige Tu Dispositivo TAPear
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Dispositivos NFC premium diseñados para maximizar tus reseñas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">TAPear Card</h3>
                <p className="text-slate-600">Perfecto para empezar</p>
              </div>

              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-slate-900 mb-2">€60</div>
                <p className="text-slate-500">Pago único</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Tarjeta NFC premium</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Diseño personalizable</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Reseñas ilimitadas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Dashboard básico</span>
                </li>
              </ul>

              <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200">
                Comprar Ahora
              </button>
            </div>

            {/* Stand Card - Featured */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl shadow-xl border-2 border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  MÁS POPULAR
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">TAPear Stand</h3>
                <p className="text-blue-100">Ideal para mostrador</p>
              </div>

              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-white mb-2">€80</div>
                <p className="text-blue-100">Pago único</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Stand acrílico premium</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Chip NFC de alta gama</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Diseño personalizado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Dashboard avanzado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Analytics en tiempo real</span>
                </li>
              </ul>

              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                Comprar Ahora
              </button>
            </div>

            {/* Pro Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">TAPear Pro</h3>
                <p className="text-slate-600">Para múltiples ubicaciones</p>
              </div>

              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-slate-900 mb-2">€199</div>
                <p className="text-slate-500">Pack de 5 stands</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">5 stands premium</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Gestión centralizada</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Reportes avanzados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Soporte prioritario</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">API de integración</span>
                </li>
              </ul>

              <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200">
                Comprar Ahora
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              <CreditCard className="w-5 h-5 inline mr-2" />
              Pago seguro con tarjeta o transferencia · Envío gratis en península
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Casos de Éxito Reales
            </h2>
            <p className="text-xl text-slate-600">
              Negocios que transformaron su reputación con TAPear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-6 italic">
                "Pasamos de 12 a 180 reseñas en Google en solo 4 meses. Nuestras reservas aumentaron un 65%."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-100" />
                <div>
                  <div className="font-bold text-slate-900">Carlos Ruiz</div>
                  <div className="text-sm text-slate-600">Restaurante El Patio</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-6 italic">
                "Súper fácil de usar. Nuestros clientes lo aman y nosotros recibimos 5 estrellas constantemente."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-100" />
                <div>
                  <div className="font-bold text-slate-900">Ana Martínez</div>
                  <div className="text-sm text-slate-600">Salón de Belleza Glow</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-6 italic">
                "La mejor inversión para nuestro gimnasio. Ahora aparecemos primero en búsquedas locales."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-100" />
                <div>
                  <div className="font-bold text-slate-900">David López</div>
                  <div className="text-sm text-slate-600">Gimnasio FitZone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Empieza a Recibir Más Reseñas Hoy
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Dispositivo en tu puerta en 48h. Sin mensualidades. Sin complicaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={scrollToProducts}
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all duration-200 hover:shadow-xl hover:scale-105 text-lg"
            >
              Ver Dispositivos
            </button>
            <button
              className="bg-blue-700 text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all duration-200 border-2 border-white/20 text-lg"
            >
              Hablar con Ventas
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Envío en 48h</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Garantía 30 días</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Soporte técnico incluido</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Logo className="w-8 h-8 brightness-200" />
            <span className="text-xl font-bold">TAPear</span>
          </div>
          <p className="text-slate-400 mb-4">
            Transformando reseñas en resultados desde 2024
          </p>
          <p className="text-sm text-white/80">
            © 2024 TAPear Review. Todos los derechos reservados MoCa&investment sl
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
