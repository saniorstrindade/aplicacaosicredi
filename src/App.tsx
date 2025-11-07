import React, { useState, useEffect } from 'react';
import { Award, BarChart3, Users, Search, Star, TrendingUp, Heart, Building, MessageCircle, Instagram, Mail, Phone } from 'lucide-react';

interface Profile {
  id: number;
  name: string;
  role: string;
  photo: string;
  technical: number;
  emotional: number;
  organizational: number;
  tags: string[];
  evidences: string[];
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('Todos os níveis');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/') setCurrentPage('home');
      else if (path === '/profiles') setCurrentPage('profiles');
      else if (path === '/profile-detail') setCurrentPage('profile-detail');
      else if (path === '/challenges') setCurrentPage('challenges');
      else if (path === '/dashboard') setCurrentPage('dashboard');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const profiles = [
    {
          id: 1,
          name: "Sânio Trindade",
          role: "Tech Lead & Arquiteto de Software",
          photo: "/imagens/sanio.jpeg",
          technical: 95,
          emotional: 92,
          organizational: 88,
          tags: ["Validado em ambiente real - TechCorp", "Líder Técnico Certificado"],
          evidences: [
            "Liderou arquitetura de plataforma com 200k+ usuários ativos",
            "Mentor técnico de 8 desenvolvedores sênior e pleno",
            "Responsável por decisões tecnológicas estratégicas da empresa"
          ]
        },
        {
          id: 2,
          name: "Felipe Briguente",
          role: "Analista de Dados",
          photo: "/imagens/felipe.jpeg",
          technical: 90,
          emotional: 75,
          organizational: 88,
          tags: ["Validado em processo seletivo - contratado", "Desenvolvido em jornada interna"],
          evidences: [
            "Criou dashboards Power BI que economizaram 35h/mês",
            "Automatizou análise de KPIs aumentando precisão em 28%",
            "Certificação Microsoft Power BI Data Analyst Associate"
          ]
        },
        {
          id: 3,
          name: "Jamilly Ribeiro",
          role: "Gerente de Projetos",
          photo: "/imagens/jamily.jpeg",
          technical: 70,
          emotional: 95,
          organizational: 93,
          tags: ["Validado em ambiente real - InnovaCorp", "Feedback 360° completo"],
          evidences: [
            "Liderou equipe de 15 pessoas em projeto multidisciplinar",
            "100% de projetos entregues no prazo nos últimos 12 meses",
            "Certificação PMP - Project Management Professional"
          ]
        },
        {
          id: 4,
          name: "Lucas Fernandes",
          role: "Designer UX/UI Sênior",
          photo: "/imagens/lucas.jpeg",
          technical: 88,
          emotional: 85,
          organizational: 80,
          tags: ["Validado em ambiente real - DesignHub", "Portfolio premiado 2024"],
          evidences: [
            "Redesign que aumentou conversão em 60% e retenção em 45%",
            "Conduziu 40+ testes de usabilidade e pesquisas com usuários",
            "Prêmio Best UX Design 2024 - categoria B2B"
          ]
        },
        {
          id: 5,
          name: "Guilherme Costa",
          role: "Desenvolvedor Backend Sênior",
          photo: "/imagens/guilherme.jpeg",
          technical: 92,
          emotional: 78,
          organizational: 85,
          tags: ["Validado em ambiente real - TechStart", "AWS Solutions Architect"],
          evidences: [
            "Arquitetou API REST processando 3M+ requisições/dia",
            "Reduziu custos de infraestrutura em 45% com otimizações",
            "Certificações AWS Solutions Architect + Developer Associate"
          ]
        },
        {
          id: 6,
          name: "Alexandra Maria",
          role: "Head de Marketing Digital",
          photo: "/imagens/alerrandra.jpeg",
          technical: 82,
          emotional: 93,
          organizational: 90,
          tags: ["Validado em ambiente real - MarketCorp", "ROI +180% comprovado"],
          evidences: [
            "Liderou estratégia que gerou R$ 4.2M com ROI de 185%",
            "Gerencia equipe de 6 especialistas em marketing",
            "Certificações avançadas Google Ads, Meta e HubSpot"
          ]
        }
    
  ];

  const challenges = [
    {
      id: 1,
      title: "Análise de Dados Avançada",
      type: "Técnico",
      description: "Analise dataset de vendas com 50k registros, identifique padrões e crie dashboard interativo",
      duration: "2 horas"
    },
    {
      id: 2,
      title: "Mediação de Conflitos",
      type: "Emocional",
      description: "Resolva conflito entre equipes de produto e desenvolvimento com prazos conflitantes",
      duration: "45 min"
    },
    {
      id: 3,
      title: "Planejamento Ágil de Sprint",
      type: "Organizacional",
      description: "Monte cronograma de sprint com 15 tasks, 5 devs e prazo de 2 semanas",
      duration: "1.5 horas"
    },
    {
      id: 4,
      title: "Code Review Challenge",
      type: "Técnico",
      description: "Revise código React/TypeScript e sugira melhorias de performance e boas práticas",
      duration: "1 hora"
    },
    {
      id: 5,
      title: "Gestão de Crise",
      type: "Emocional",
      description: "Lidere equipe sob alta pressão com cliente insatisfeito e deadline em 48h",
      duration: "1 hora"
    },
    {
      id: 6,
      title: "Otimização de Recursos",
      type: "Organizacional",
      description: "Realoque 10 profissionais em 4 projetos maximizando produtividade e skills",
      duration: "2 horas"
    }
  ];

  const VectraLogo = () => (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => {
      setCurrentPage('home');
      window.history.pushState({}, '', '/');
    }}>
      <div className="rounded-lg">
        <img src="/imagens/minha-logo.jpeg" alt="Logo" className="w-10 h-10 object-contain" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Vectra
        </span>
        <span className="text-xs text-gray-500 -mt-1">Platform</span>
      </div>
    </div>
  );

  const ContactButtons = () => (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
      <button
        onClick={() => window.open('https://wa.me/5532991569811?text=Olá! Gostaria de saber mais sobre a plataforma Vectra', '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
      </button>
      <button
        onClick={() => window.open('https://www.instagram.com/vectra.rs?igsh=end4d2trczZwN2g4', '_blank')}
        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        title="Instagram"
      >
        <Instagram className="w-6 h-6 group-hover:animate-pulse" />
      </button>
    </div>
  );

  const Navbar = () => (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <VectraLogo />
            <div className="hidden md:block h-6 w-px bg-gray-300"></div>
            <div className="hidden md:block text-sm text-gray-600 font-medium">
              Você não precisa dizer quem é. É só mostrar.
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => {
                setCurrentPage('home');
                window.history.pushState({}, '', '/');
              }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                currentPage === 'home' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Início
            </button>
            <button 
              onClick={() => {
                setCurrentPage('profiles');
                window.history.pushState({}, '', '/profiles');
              }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                currentPage === 'profiles' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Talentos
            </button>
            <button 
              onClick={() => {
                setCurrentPage('challenges');
                window.history.pushState({}, '', '/challenges');
              }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                currentPage === 'challenges' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Desafios
            </button>
            <button 
              onClick={() => {
                setCurrentPage('dashboard');
                window.history.pushState({}, '', '/dashboard');
              }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                currentPage === 'dashboard' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Dashboard
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setCurrentPage(currentPage === 'home' ? 'profiles' : 'home')}
              className="p-2 rounded-lg text-gray-600"
            >
              <Users className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const SkillBar = ({ label, value, color = "blue" }: { label: string; value: number; color?: string }) => {
    const getColorClass = (colorName: string) => {
      const colors: { [key: string]: string } = {
        blue: 'bg-blue-500',
        green: 'bg-emerald-500',
        purple: 'bg-purple-500'
      };
      return colors[colorName] || 'bg-blue-500';
    };

    return (
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">{label}</span>
          <span className="text-sm font-bold text-gray-900">{value}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div 
            className={`${getColorClass(color)} h-2.5 rounded-full transition-all duration-700 ease-out shadow-sm`} 
            style={{width: `${value}%`}}
          />
        </div>
      </div>
    );
  };

  const ProfileCard = ({ profile, onClick }: { profile: Profile; onClick: (profile: Profile) => void }) => (
    <div 
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 cursor-pointer transform hover:-translate-y-1 border border-gray-100 hover:border-blue-200"
      onClick={() => onClick(profile)}
    >
      <div className="flex items-center mb-6">
        <div className="relative">
          <img 
            className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300 cursor-pointer" 
            src={profile.photo} 
            alt={profile.name}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(profile.photo);
            }}
          />    
          <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white" />
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
            {profile.name}
          </h3>
          <p className="text-gray-600 font-medium">{profile.role}</p>
        </div>
        <Star 
          className={`w-5 h-5 transition-all cursor-pointer ${
            favorites.includes(profile.id) 
              ? 'text-yellow-500 opacity-100 fill-current' 
              : 'text-yellow-500 opacity-0 group-hover:opacity-100 hover:opacity-100'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setFavorites(prev => 
              prev.includes(profile.id) 
                ? prev.filter(id => id !== profile.id)
                : [...prev, profile.id]
            );
          }}
        />
      </div>
      
      <div className="space-y-3 mb-5">
        <SkillBar label="Técnico" value={profile.technical} color="blue" />
        <SkillBar label="Emocional" value={profile.emotional} color="green" />
        <SkillBar label="Organizacional" value={profile.organizational} color="purple" />
      </div>

      <div className="flex flex-wrap gap-2">
        {profile.tags.slice(0, 2).map((tag: string, idx: number) => (
          <span 
            key={idx} 
            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
          >
            {tag}
          </span>
        ))}
        {profile.tags.length > 2 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
            +{profile.tags.length - 2} mais
          </span>
        )}
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Você não precisa 
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                dizer quem é
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
              É só mostrar. ✨
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A primeira plataforma que substitui currículos por <strong>evidências reais</strong>. 
              Conecte talentos e oportunidades através de competências validadas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => {
                setCurrentPage('profiles');
                window.history.pushState({}, '', '/profiles');
              }}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                Explorar Talentos 
                <TrendingUp className="ml-2 w-5 h-5 group-hover:animate-bounce" />
              </span>
            </button>
            <button 
              onClick={() => {
                setCurrentPage('challenges');
                window.history.pushState({}, '', '/challenges');
              }}
              className="group bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-gray-200 hover:border-blue-300"
            >
              <span className="flex items-center justify-center">
                Ver Desafios
                <Award className="ml-2 w-5 h-5 group-hover:animate-pulse" />
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Passaporte de Competências</h3>
            <p className="text-gray-600 leading-relaxed">
              Documento automático e inviolável baseado em mérito e evidências reais de desempenho
            </p>
          </div>
          
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Avaliação 360°</h3>
            <p className="text-gray-600 leading-relaxed">
              Competências técnicas, emocionais e organizacionais validadas por desafios práticos
            </p>
          </div>
          
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Match Inteligente</h3>
            <p className="text-gray-600 leading-relaxed">
              Conexão automática entre talentos e oportunidades com +85% de aderência
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Talentos Validados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Taxa de Sucesso</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Empresas Parceiras</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">24h</div>
              <div className="text-gray-600 font-medium">Tempo Médio Match</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProfilesPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Nossos Talentos</h1>
              <p className="text-gray-600 text-lg">Profissionais validados pela plataforma Vectra</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Buscar por competências ou cargo..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 border border-gray-200 rounded-xl w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                />
              </div>
              <select 
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
              >
                <option>Todos os níveis</option>
                <option>Júnior</option>
                <option>Pleno</option>
                <option>Sênior</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {['Desenvolvimento', 'Design', 'Marketing', 'Vendas', 'Gestão'].map((skill) => (
              <button 
                key={skill}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-sm font-medium"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {profiles
            .filter(profile => 
              profile.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              profile.role.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(profile => (
              <ProfileCard 
                key={profile.id} 
                profile={profile} 
                onClick={(p: Profile) => {
                  setSelectedProfile(p);
                  setCurrentPage('profile-detail');
                  window.history.pushState({}, '', '/profile-detail');
                }}
              />
            ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Anterior
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">2</button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">3</button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ProfileDetailPage = () => {
    if (!selectedProfile) return null;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button 
          onClick={() => {
            setCurrentPage('profiles');
            window.history.pushState({}, '', '/profiles');
            setSelectedProfile(null);
          }}
          className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
        >
          ← Voltar aos Colaboradores
        </button>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white">
            <div className="flex items-center">
              <img 
                className="w-24 h-24 rounded-full object-cover border-4 border-white cursor-pointer hover:opacity-90 transition-opacity" 
                src={selectedProfile.photo} 
                alt={selectedProfile.name}
                onClick={() => setSelectedImage(selectedProfile.photo)}
              />
              <div className="ml-6">
                <h1 className="text-3xl font-bold">{selectedProfile.name}</h1>
                <p className="text-blue-100 text-lg">{selectedProfile.role}</p>
                <div className="flex items-center mt-2">
                  <Star 
                    className={`w-5 h-5 transition-all cursor-pointer ${
                      favorites.includes(selectedProfile.id) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-yellow-400'
                    }`}
                    onClick={() => {
                      setFavorites(prev => 
                        prev.includes(selectedProfile.id) 
                          ? prev.filter(id => id !== selectedProfile.id)
                          : [...prev, selectedProfile.id]
                      );
                    }}
                  />
                  <span className="ml-1">Passaporte Vectra Validado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Competências</h2>
                <div className="space-y-6">
                  <SkillBar label="Técnico" value={selectedProfile.technical} color="blue" />
                  <SkillBar label="Emocional" value={selectedProfile.emotional} color="green" />
                  <SkillBar label="Organizacional" value={selectedProfile.organizational} color="purple" />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Evidências</h2>
                <div className="space-y-3">
                  {selectedProfile.evidences.map((evidence: string, idx: number) => (
                    <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Award className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{evidence}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Tags de Validação</h2>
              <div className="flex flex-wrap gap-2">
                {selectedProfile.tags.map((tag: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ChallengesPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Desafios Públicos Vectra</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prove suas competências através de desafios práticos e alimente seu Passaporte de Competências
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">1,250+</div>
            <div className="text-gray-600">Desafios Concluídos</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
            <div className="text-gray-600">Taxa de Satisfação</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">45min</div>
            <div className="text-gray-600">Tempo Médio</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((challenge: any) => (
            <div key={challenge.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className={`h-2 ${
                challenge.type === 'Técnico' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                challenge.type === 'Emocional' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                'bg-gradient-to-r from-purple-500 to-purple-600'
              }`} />
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl ${
                    challenge.type === 'Técnico' ? 'bg-blue-100' :
                    challenge.type === 'Emocional' ? 'bg-emerald-100' :
                    'bg-purple-100'
                  }`}>
                    {challenge.type === 'Técnico' && <BarChart3 className="w-8 h-8 text-blue-600" />}
                    {challenge.type === 'Emocional' && <Heart className="w-8 h-8 text-emerald-600" />}
                    {challenge.type === 'Organizacional' && <Building className="w-8 h-8 text-purple-600" />}
                  </div>
                  <div className="ml-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      challenge.type === 'Técnico' ? 'bg-blue-100 text-blue-700' :
                      challenge.type === 'Emocional' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {challenge.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{challenge.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    Duração: {challenge.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="w-4 h-4 mr-1" />
                    4.8/5.0
                  </div>
                </div>
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 ${
                  challenge.type === 'Técnico' 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-blue-200' 
                    : challenge.type === 'Emocional' 
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-emerald-200'
                    : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-purple-200'
                } shadow-lg`}>
                  Iniciar Desafio
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Pronto para construir seu Passaporte?</h2>
          <p className="text-blue-100 mb-6">Complete desafios e comprove suas competências com evidências reais</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
            Ver Todos os Desafios
          </button>
        </div>
      </div>
    </div>
  );

  const DashboardPage = () => (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Empresarial</h1>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-2xl font-bold">87%</p>
              <p className="text-gray-600">Execução</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <BarChart3 className="w-8 h-8 text-green-600" />
            <div className="ml-4">
              <p className="text-2xl font-bold">92%</p>
              <p className="text-gray-600">Crescimento</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-2xl font-bold">85%</p>
              <p className="text-gray-600">Colaboração</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Award className="w-8 h-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-2xl font-bold">91%</p>
              <p className="text-gray-600">Confiabilidade</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Equipe Overview</h2>
        <div className="space-y-6">
          {profiles.map((profile: Profile) => (
            <div key={profile.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg space-y-3 sm:space-y-0">
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full object-cover" src={profile.photo} alt={profile.name} />
                <div className="ml-3">
                  <p className="font-medium">{profile.name}</p>
                  <p className="text-sm text-gray-600">{profile.role}</p>
                </div>
              </div>
              <div className="flex justify-center sm:justify-end space-x-6">
                <div className="text-center">
                  <p className="text-base sm:text-lg font-bold text-blue-600">{profile.technical}%</p>
                  <p className="text-xs text-gray-500">Técnico</p>
                </div>
                <div className="text-center">
                  <p className="text-base sm:text-lg font-bold text-emerald-600">{profile.emotional}%</p>
                  <p className="text-xs text-gray-500">Emocional</p>
                </div>
                <div className="text-center">
                  <p className="text-base sm:text-lg font-bold text-purple-600">{profile.organizational}%</p>
                  <p className="text-xs text-gray-500">Organizacional</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'profiles': return <ProfilesPage />;
      case 'profile-detail': return <ProfileDetailPage />;
      case 'challenges': return <ChallengesPage />;
      case 'dashboard': return <DashboardPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {renderPage()}
      <ContactButtons />
      
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-screen bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex">
              <div className="flex-1">
                <img
                  src={selectedImage}
                  alt="Foto ampliada"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="flex-1 p-6 overflow-y-auto max-h-96">
                {(() => {
                  const person = profiles.find(p => p.photo === selectedImage);
                  if (!person) return null;
                  
                  return (
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-gray-900">{person.name}</h2>
                      <p className="text-gray-600 mb-6">{person.role}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Técnico</span>
                          <span className="text-sm font-bold text-blue-600">{person.technical}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: `${person.technical}%`}}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Emocional</span>
                          <span className="text-sm font-bold text-emerald-600">{person.emotional}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-500 h-2 rounded-full" style={{width: `${person.emotional}%`}}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Organizacional</span>
                          <span className="text-sm font-bold text-purple-600">{person.organizational}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: `${person.organizational}%`}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Evidências</h3>
                        {person.evidences.map((evidence: string, idx: number) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600 mb-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            {evidence}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="rounded-lg">
                  <img src="/imagens/minha-logo.jpeg" alt="Logo" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">Vectra</span>
                  <span className="text-xs text-gray-400 -mt-1">Platform</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                A primeira plataforma que conecta talentos e oportunidades através de competências reais e validadas.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => window.open('https://wa.me/5532991569811', '_blank')}
                  className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button
                  onClick={() => window.open('https://www.instagram.com/vectra.rs?igsh=end4d2trczZwN2g4', '_blank')}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-lg transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Plataforma</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <button 
                    onClick={() => {
                      setCurrentPage('profiles');
                      window.history.pushState({}, '', '/profiles');
                    }} 
                    className="hover:text-white transition-colors"
                  >
                    Talentos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setCurrentPage('challenges');
                      window.history.pushState({}, '', '/challenges');
                    }} 
                    className="hover:text-white transition-colors"
                  >
                    Desafios
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setCurrentPage('dashboard');
                      window.history.pushState({}, '', '/dashboard');
                    }} 
                    className="hover:text-white transition-colors"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors text-left">
                    Empresas
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  vectracontratacao@gmail.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (32) 99156-9811
                </li>
                <li className="flex items-center cursor-pointer hover:text-white transition-colors" onClick={() => window.open('https://wa.me/5532991569811', '_blank')}>
                 <MessageCircle className="w-4 h-4 mr-2" />
                 (32) 99156-9811
                </li>
                <li className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2" />
                 @vectra.rs
              </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Vectra Platform. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
                "Você não precisa dizer quem é. É só mostrar."
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;