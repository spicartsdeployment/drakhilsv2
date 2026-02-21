import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { SplashScreen } from './components/SplashScreen';
import { DepartmentPage } from './components/DepartmentPage';
import { SpecialityPage } from './components/SpecialityPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AboutSitePage } from './pages/resources/AboutSitePage';
import { LocationsPage } from './pages/resources/LocationsPage';
import { BlogsPage } from './pages/resources/BlogsPage';
import { BlogDetailPage } from './pages/resources/BlogDetailPage';
import { EventsPage } from './pages/resources/EventsPage';
import { GalleryPage } from './pages/resources/GalleryPage';
import { SimplePage } from './pages/resources/SimplePage';
import { HealthPolicyPage } from './pages/resources/HealthPolicyPage';
import { TermsPage } from './pages/resources/TermsPage';
import { TherapistBioPage } from './pages/TherapistBioPage';
import { FAQPage } from './pages/FAQPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { GalleryPageAboutUs } from './pages/GalleryPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { RegisterAppointmentPage } from './pages/RegisterAppointmentPage';
import PatientPortalPage from './pages/PatientPortalPageNew';
import { departmentsData } from './data/departmentsData';
import { specialitiesData } from './data/specialitiesData';

// Simple Router Context
export const RouterContext = React.createContext<{
  currentPath: string;
  navigate: (path: string) => void;
  goBack: () => void;
  params: Record<string, string>;
}>({
  currentPath: '/',
  navigate: () => {},
  goBack: () => {},
  params: {},
});

export const useNavigate = () => {
  const { navigate } = React.useContext(RouterContext);
  return navigate;
};

export const useGoBack = () => {
  const { goBack } = React.useContext(RouterContext);
  return goBack;
};

export const useParams = () => {
  const { params } = React.useContext(RouterContext);
  return params;
};

export const useLocation = () => {
  const { currentPath } = React.useContext(RouterContext);
  return {
    pathname: currentPath,
    search: currentPath.includes('?') ? currentPath.substring(currentPath.indexOf('?')) : ''
  };
};

export const Link: React.FC<{ to: string; children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ to, children, className, style }) => {
  const { navigate } = React.useContext(RouterContext);
  
  return (
    <a
      href={to}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPath, setCurrentPath] = useState('/');
  const [params, setParams] = useState<Record<string, string>>({});
  const [history, setHistory] = useState<string[]>(['/']);

  useEffect(() => {
    // Hide splash screen after 3000ms (3 seconds)
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      const newPath = window.location.pathname;
      setCurrentPath(newPath);
      // Update params based on new path
      updateParams(newPath);
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const updateParams = (path: string) => {
    const therapistMatch = path.match(/\/therapist\/(.+)/);
    if (therapistMatch) {
      setParams({ id: therapistMatch[1] });
    } else {
      const serviceMatch = path.match(/\/services\/(.+)/);
      if (serviceMatch) {
        setParams({ serviceId: serviceMatch[1] });
      } else {
        const blogMatch = path.match(/\/blog\/(.+)/);
        if (blogMatch) {
          setParams({ id: blogMatch[1] });
        } else {
          setParams({});
        }
      }
    }
  };

  const navigate = (path: string) => {
    setCurrentPath(path);
    updateParams(path);
    // Add to history stack
    setHistory(prev => [...prev, path]);
    window.scrollTo(0, 0);
    // Update browser history
    window.history.pushState({}, '', path);
  };

  const goBack = () => {
    if (history.length > 1) {
      // Remove current page from history
      const newHistory = [...history];
      newHistory.pop();
      const previousPath = newHistory[newHistory.length - 1];
      
      setHistory(newHistory);
      setCurrentPath(previousPath);
      updateParams(previousPath);
      window.scrollTo(0, 0);
      // Update browser history
      window.history.pushState({}, '', previousPath);
    } else {
      // If no history, go to home
      navigate('/');
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  const renderPage = () => {
    // Home
    if (currentPath === '/') return <HomePage />;
    
    // Main Pages
    if (currentPath === '/about') return <AboutPage />;
    if (currentPath === '/about-us') return <AboutUsPage />;
    if (currentPath === '/about-us/gallery') return <GalleryPageAboutUs />;
    if (currentPath === '/contact') return <ContactPage />;
    if (currentPath === '/login') return <LoginPage />;
    if (currentPath === '/register') return <RegisterPage />;
    if (currentPath === '/register-appointment') return <RegisterAppointmentPage />;
    if (currentPath === '/patient-portal') return <PatientPortalPage />;

    // Department Routes
    if (currentPath === '/departments/orthopedic') return <DepartmentPage data={departmentsData.orthopedic} />;
    if (currentPath === '/departments/neurological') return <DepartmentPage data={departmentsData.neurological} />;
    if (currentPath === '/departments/cardio') return <DepartmentPage data={departmentsData.cardio} />;
    if (currentPath === '/departments/pediatrics') return <DepartmentPage data={departmentsData.pediatrics} />;
    if (currentPath === '/departments/oncology') return <DepartmentPage data={departmentsData.oncology} />;
    if (currentPath === '/departments/sports') return <DepartmentPage data={departmentsData.sports} />;
    if (currentPath === '/departments/obstetrics') return <DepartmentPage data={departmentsData.obstetrics} />;
    if (currentPath === '/departments/geriatrics') return <DepartmentPage data={departmentsData.geriatrics} />;
    if (currentPath === '/departments/wellness') return <DepartmentPage data={departmentsData.wellness} />;

    // Speciality Routes
    if (currentPath === '/specialities/nursing-care') return <SpecialityPage data={specialitiesData.nursingCare} />;
    if (currentPath === '/specialities/physical-therapist') return <SpecialityPage data={specialitiesData.physicalTherapist} />;
    if (currentPath === '/specialities/occupational-therapist') return <SpecialityPage data={specialitiesData.occupationalTherapist} />;
    if (currentPath === '/specialities/speech-swallow-therapist') return <SpecialityPage data={specialitiesData.speechSwallowTherapist} />;
    if (currentPath === '/specialities/psychology') return <SpecialityPage data={specialitiesData.psychology} />;
    if (currentPath === '/specialities/diet-nutrition') return <SpecialityPage data={specialitiesData.dietNutrition} />;
    if (currentPath === '/specialities/yoga-therapy') return <SpecialityPage data={specialitiesData.yogaTherapy} />;
    if (currentPath === '/specialities/physical-fitness') return <SpecialityPage data={specialitiesData.physicalFitness} />;
    if (currentPath === '/specialities/music-therapy') return <SpecialityPage data={specialitiesData.musicTherapy} />;

    // Service Detail Routes
    if (currentPath.startsWith('/services/')) return <ServiceDetailPage />;

    // Therapist Bio Route
    if (currentPath.startsWith('/therapist/')) return <TherapistBioPage />;

    // Blog Detail Route
    if (currentPath.startsWith('/blog/')) return <BlogDetailPage />;

    // Resource Routes
    if (currentPath === '/resources/about-site') return <AboutSitePage />;
    if (currentPath === '/resources/contact') return <ContactPage />;
    if (currentPath === '/resources/faq') return <FAQPage />;
    if (currentPath === '/resources/locations') return <LocationsPage />;
    if (currentPath === '/resources/blogs') return <BlogsPage />;
    if (currentPath.startsWith('/blogs')) return <BlogsPage />;
    if (currentPath === '/resources/events') return <EventsPage />;
    if (currentPath === '/resources/gallery') return <GalleryPage />;
    
    if (currentPath === '/resources/health-policy') {
      return (
        <HealthPolicyPage />
      );
    }
    
    if (currentPath === '/resources/news') {
      return (
        <SimplePage 
          title="News Network" 
          content={
            <div className="space-y-6">
              <div>
                <h3 className="mb-3" style={{ color: '#0f8987' }}>Latest Updates</h3>
                <p className="text-gray-700 mb-4">
                  Stay informed about the latest developments at PhysioTherapy, including new services, facility updates, and healthcare innovations.
                </p>
              </div>
              <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#0f8987' }}>
                <p className="text-sm text-gray-500 mb-2">December 1, 2025</p>
                <h4 className="mb-2">New Aquatic Therapy Pool Opening</h4>
                <p className="text-gray-700">
                  We're excited to announce the opening of our state-of-the-art aquatic therapy pool at the Main Campus, providing low-impact rehabilitation options for our patients.
                </p>
              </div>
              <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#0f8987' }}>
                <p className="text-sm text-gray-500 mb-2">November 20, 2025</p>
                <h4 className="mb-2">Expanded Evening Hours</h4>
                <p className="text-gray-700">
                  To better serve our community, we've extended our hours at all locations. Evening appointments now available until 7:00 PM on weekdays.
                </p>
              </div>
              <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#0f8987' }}>
                <p className="text-sm text-gray-500 mb-2">November 10, 2025</p>
                <h4 className="mb-2">New Telemedicine Services</h4>
                <p className="text-gray-700">
                  PhysioTherapy now offers virtual consultations for select services, making it easier to access care from the comfort of your home.
                </p>
              </div>
            </div>
          }
        />
      );
    }
    
    if (currentPath === '/resources/pricing') {
      return (
        <SimplePage 
          title="Price Transparency" 
          content={
            <div className="space-y-6">
              <div>
                <h3 className="mb-3" style={{ color: '#0f8987' }}>Our Commitment to Transparency</h3>
                <p className="text-gray-700">
                  We believe in transparent pricing and clear communication about the cost of care. Below are general price ranges for our most common services.
                </p>
              </div>
              <div>
                <h3 className="mb-3" style={{ color: '#0f8987' }}>Common Services</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Initial Evaluation (45-60 minutes)</span>
                    <span style={{ color: '#0f8987' }}>$150 - $250</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Follow-up Session (30 minutes)</span>
                    <span style={{ color: '#0f8987' }}>$75 - $125</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Extended Session (60 minutes)</span>
                    <span style={{ color: '#0f8987' }}>$125 - $200</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Specialized Therapy (varies)</span>
                    <span style={{ color: '#0f8987' }}>$100 - $300</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-3" style={{ color: '#0f8987' }}>Insurance and Payment</h3>
                <p className="text-gray-700 mb-3">
                  We accept most major insurance plans. Your out-of-pocket cost will depend on your specific insurance coverage, deductible, and co-payment requirements.
                </p>
                <p className="text-gray-700">
                  For specific pricing information or to verify your insurance coverage, please contact our billing department at billing@physiotherapy.com or call +1 (555) 123-4567.
                </p>
              </div>
            </div>
          }
        />
      );
    }
    
    if (currentPath === '/resources/terms') {
      return (
        <TermsPage />
      );
    }

    // Default to home
    return <HomePage />;
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate, goBack, params }}>
      <div className="min-h-screen" style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
        {/* Hide Navbar on patient portal pages */}
        {!currentPath.startsWith('/patient-') && <Navbar />}
        {renderPage()}
      </div>
    </RouterContext.Provider>
  );
}

export default App;