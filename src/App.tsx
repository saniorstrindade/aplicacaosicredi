import React, { useState } from 'react';
import { User, Award, BarChart3, Users, Search, Star, TrendingUp, Heart, Building } from 'lucide-react';

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

  // Dados mockados
  const profiles = [
    {
      id: 1,
      name: "jurema Silva",
      role: "Desenvolvedora Frontend",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      technical: 85,
      emotional: 92,
      organizational: 78,
      tags: ["Validado em ambiente real - TechCorp", "Desafio Público Vectra"],
      evidences: ["Projeto React complexo", "Feedback 360°", "Microdesafios semanais"]
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Analista de Dados",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      technical: 90,
      emotional: 75,
      organizational: 88,
      tags: ["Validado em processo seletivo - contratado", "Desenvolvido em jornada interna"],
      evidences: ["Dashboard Power BI", "Análise de KPIs", "Automação de relatórios"]
    },
    {
      id: 3,
      name: "Marina Costa",
      role: "Gerente de Projetos",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      technical: 70,
      emotional: 95,
      organizational: 93,
      tags: ["Validado em ambiente real - InnovaCorp", "Feedback 360° completo"],
      evidences: ["Gestão de equipe 15 pessoas", "Projeto entregue no prazo", "Certificação PMP"]
    }
  ];

  const challenges = [
    {
      id: 1,
      title: "Desafio de Análise de Dados",
      type: "Técnico",
      description: "Analise uma planilha de vendas e crie um relatório com insights",
      duration: "2 horas"
    },
    {
      id: 2,
      title: "Resolução de Conflitos",
      type: "Emocional",
      description: "Simule a mediação de um conflito entre colegas de trabalho",
      duration: "45 min"
    },
    {
      id: 3,
      title: "Planejamento Estratégico",
      type: "Organizacional",
      description: "Organize um cronograma de projeto com recursos limitados",
      duration: "1.5 horas"
    }
  ];

  // Componentes
  const Navbar = () => (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600"  onClick={() => setCurrentPage('home')}>Vectra</div>
            <div className="ml-4 text-sm text-gray-500">Você não precisa dizer quem é. É só mostrar.</div>
          </div>
          <div className="flex space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 text-sm font-medium ${currentPage === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Início
            </button>
            <button 
              onClick={() => setCurrentPage('profiles')}
              className={`px-3 py-2 text-sm font-medium ${currentPage === 'profiles' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Colaboradores
            </button>
            <button 
              onClick={() => setCurrentPage('challenges')}
              className={`px-3 py-2 text-sm font-medium ${currentPage === 'challenges' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Desafios
            </button>
            <button 
              onClick={() => setCurrentPage('dashboard')}
              className={`px-3 py-2 text-sm font-medium ${currentPage === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const SkillBar = ({ label, value, color = "blue" }: { label: string; value: number; color?: string }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`bg-${color}-600 h-2 rounded-full transition-all duration-300`} 
          style={{width: `${value}%`}}
        ></div>
      </div>
    </div>
  );

  const ProfileCard = ({ profile, onClick }: { profile: Profile; onClick: (profile: Profile) => void }) => (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer transform hover:scale-105"
      onClick={() => onClick(profile)}
    >
      <div className="flex items-center mb-4">
        <img className="w-16 h-16 rounded-full object-cover" src={profile.photo} alt={profile.name} />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{profile.name}</h3>
          <p className="text-gray-600">{profile.role}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <SkillBar label="Técnico" value={profile.technical} color="blue" />
        <SkillBar label="Emocional" value={profile.emotional} color="green" />
        <SkillBar label="Organizacional" value={profile.organizational} color="purple" />
      </div>

      <div className="flex flex-wrap gap-1">
        {profile.tags.slice(0, 2).map((tag: string, idx: number) => (
          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  // Páginas
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Você não precisa dizer quem é.
          </h1>
          <h2 className="text-3xl font-light text-blue-600 mb-8">
            É só mostrar.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plataforma de contratação e engajamento baseada em competências reais. 
            Substitua o currículo por um Passaporte de Competências conquistado através de evidências.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Passaporte de Competências</h3>
            <p className="text-gray-600">Documento automático e inviolável baseado em mérito e evidências reais</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Avaliação 360°</h3>
            <p className="text-gray-600">Competências técnicas, emocionais e organizacionais validadas</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Match Inteligente</h3>
            <p className="text-gray-600">Conexão automática entre talentos e oportunidades por aderência real</p>
          </div>
        </div>

        <button 
          onClick={() => setCurrentPage('profiles')}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Explorar Talentos
        </button>
      </div>
    </div>
  );

  const ProfilesPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Colaboradores</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar por competências..." 
              className="pl-10 pr-4 py-2 border rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {profiles.map(profile => (
          <ProfileCard 
            key={profile.id} 
            profile={profile} 
            onClick={(p: Profile) => {
              setSelectedProfile(p);
              setCurrentPage('profile-detail');
            }} 
          />
        ))}
      </div>
    </div>
  );

  const ProfileDetailPage = () => {
    if (!selectedProfile) return null;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button 
          onClick={() => setCurrentPage('profiles')}
          className="mb-6 text-blue-600 hover:text-blue-800"
        >
          ← Voltar aos Colaboradores
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white">
            <div className="flex items-center">
              <img className="w-24 h-24 rounded-full object-cover border-4 border-white" src={selectedProfile.photo} alt={selectedProfile.name} />
              <div className="ml-6">
                <h1 className="text-3xl font-bold">{selectedProfile.name}</h1>
                <p className="text-blue-100 text-lg">{selectedProfile.role}</p>
                <div className="flex items-center mt-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="ml-1">Passaporte Vectra Validado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Competências</h2>
                <div className="space-y-4">
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Desafios Públicos</h1>
      
      <div className="grid lg:grid-cols-3 gap-6">
        {challenges.map(challenge => (
          <div key={challenge.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="flex items-center mb-4">
              {challenge.type === 'Técnico' && <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />}
              {challenge.type === 'Emocional' && <Heart className="w-8 h-8 text-green-600 mr-3" />}
              {challenge.type === 'Organizacional' && <Building className="w-8 h-8 text-purple-600 mr-3" />}
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                challenge.type === 'Técnico' ? 'bg-blue-100 text-blue-800' :
                challenge.type === 'Emocional' ? 'bg-green-100 text-green-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {challenge.type}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
            <p className="text-gray-600 mb-4">{challenge.description}</p>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Duração: {challenge.duration}</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Iniciar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DashboardPage = () => (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Empresarial</h1>
      
      <div className="grid lg:grid-cols-4 gap-6 mb-8">
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
        <div className="space-y-4">
          {profiles.map(profile => (
            <div key={profile.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full object-cover" src={profile.photo} alt={profile.name} />
                <div className="ml-3">
                  <p className="font-medium">{profile.name}</p>
                  <p className="text-sm text-gray-600">{profile.role}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-600">{profile.technical}%</p>
                  <p className="text-xs text-gray-500">Técnico</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-green-600">{profile.emotional}%</p>
                  <p className="text-xs text-gray-500">Emocional</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-purple-600">{profile.organizational}%</p>
                  <p className="text-xs text-gray-500">Organizacional</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Renderização principal
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
    </div>
  );
};

export default App;