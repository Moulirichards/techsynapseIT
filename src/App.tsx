import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ScrollToTop } from '@/components/ScrollToTop';

// Lazy load all page components
const Index = lazy(() => import('@/pages/Index'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));
const Products = lazy(() => import('@/pages/Products'));
const Services = lazy(() => import('@/pages/Services'));
const Careers = lazy(() => import('@/pages/Careers'));
const News = lazy(() => import('@/pages/News'));
const Blog = lazy(() => import('@/pages/Blog'));

// Service Category Pages
const WebDevelopment = lazy(() => import('@/pages/services/WebDevelopment'));
const MobileApps = lazy(() => import('@/pages/services/MobileApps'));
const AIMachineLearning = lazy(() => import('@/pages/services/AIMachineLearning'));
const DataAnalytics = lazy(() => import('@/pages/services/DataAnalytics'));
const CloudSolutions = lazy(() => import('@/pages/services/CloudSolutions'));
const DigitalMarketing = lazy(() => import('@/pages/services/DigitalMarketing'));
const SoftwareDevelopment = lazy(() => import('@/pages/services/SoftwareDevelopment'));
const CreativeDesign = lazy(() => import('@/pages/services/CreativeDesign'));
const ConsultingServices = lazy(() => import('@/pages/services/ConsultingServices'));
const DevOpsServices = lazy(() => import('@/pages/services/DevOpsServices'));
const Cybersecurity = lazy(() => import('@/pages/services/Cybersecurity'));
const QATestingServices = lazy(() => import('@/pages/services/QATestingServices'));

// Individual Service Pages
const SEOServices = lazy(() => import('@/pages/services/SEOServices'));
const UIUXDesign = lazy(() => import('@/pages/services/UIUXDesign'));
const LogoDesign = lazy(() => import('@/pages/services/LogoDesign'));
const BrochureDesign = lazy(() => import('@/pages/services/BrochureDesign'));
const WebsiteDesign = lazy(() => import('@/pages/services/WebsiteDesign'));
const SearchEngineMarketing = lazy(() => import('@/pages/services/SearchEngineMarketing'));
const SocialMediaMarketing = lazy(() => import('@/pages/services/SocialMediaMarketing'));
const PayPerClickManagement = lazy(() => import('@/pages/services/PayPerClickManagement'));
const ContentMarketing = lazy(() => import('@/pages/services/ContentMarketing'));

// Web Development
const ReactJS = lazy(() => import('@/pages/services/web-development/ReactJS'));
const Angular = lazy(() => import('@/pages/services/web-development/Angular'));
const VueJS = lazy(() => import('@/pages/services/web-development/VueJS'));
const NodeJS = lazy(() => import('@/pages/services/web-development/NodeJS'));

// Mobile Apps
const Android = lazy(() => import('@/pages/services/mobile-apps/Android'));
const IOSDevelopment = lazy(() => import('@/pages/services/mobile-apps/iOS'));
const Flutter = lazy(() => import('@/pages/services/mobile-apps/Flutter'));

// AI/ML
const MachineLearning = lazy(() => import('@/pages/services/ai-ml/MachineLearning'));
const ComputerVision = lazy(() => import('@/pages/services/ai-ml/ComputerVision'));
const NaturalLanguageProcessing = lazy(() => import('@/pages/services/ai-ml/NaturalLanguageProcessing'));

// Cloud Solutions
const AWS = lazy(() => import('@/pages/services/cloud-solutions/AWS'));
const Azure = lazy(() => import('@/pages/services/cloud-solutions/Azure'));
const GoogleCloud = lazy(() => import('@/pages/services/cloud-solutions/GoogleCloud'));

// Technology Pages
const ReactDevelopment = lazy(() => import('@/pages/technologies/ReactDevelopment'));
const NodeJSDevelopment = lazy(() => import('@/pages/technologies/NodeJSDevelopment'));
const IoTSolutions = lazy(() => import('@/pages/technologies/IoTSolutions'));
const BlockchainDevelopment = lazy(() => import('@/pages/technologies/BlockchainDevelopment'));
const ARVRDevelopment = lazy(() => import('@/pages/technologies/ARVRDevelopment'));

// Consulting service imports
const NetSuiteConsultant = lazy(() => import('@/pages/services/NetSuiteConsultant'));
const SoftwareConsultant = lazy(() => import('@/pages/services/SoftwareConsultant'));
const SharePointDevelopment = lazy(() => import('@/pages/services/SharePointDevelopment'));
const ITStrategyConsulting = lazy(() => import('@/pages/services/ITStrategyConsulting'));
const RecruitmentService = lazy(() => import('@/pages/services/RecruitmentService'));

// Blog Pages
const LogisticsLeadersVehicleRelocation = lazy(() => import('@/pages/blog/LogisticsLeadersVehicleRelocation'));
const AutomationSoftwareTestingCourse = lazy(() => import('@/pages/blog/AutomationSoftwareTestingCourse'));
const AIFutureEnterpriseSolutions = lazy(() => import('@/pages/blog/AIFutureEnterpriseSolutions'));
const CloudSecurityBestPractices = lazy(() => import('@/pages/blog/CloudSecurityBestPractices'));

// Newly created sub-service pages
const WindowsAppDevelopment = lazy(() => import('@/pages/services/WindowsAppDevelopment'));
const XamarinAppDevelopment = lazy(() => import('@/pages/services/XamarinAppDevelopment'));
const HybridAppDevelopment = lazy(() => import('@/pages/services/HybridAppDevelopment'));
const NativeAppDevelopment = lazy(() => import('@/pages/services/NativeAppDevelopment'));
const SEOCopywriting = lazy(() => import('@/pages/services/SEOCopywriting'));
const BrandConsulting = lazy(() => import('@/pages/services/BrandConsulting'));
const LeadManagementSystem = lazy(() => import('@/pages/services/LeadManagementSystem'));
const CRMSoftwareDevelopment = lazy(() => import('@/pages/services/CRMSoftwareDevelopment'));
const EducationalWebPortal = lazy(() => import('@/pages/services/EducationalWebPortal'));
const RestaurantWebPortal = lazy(() => import('@/pages/services/RestaurantWebPortal'));
const HealthCarePortal = lazy(() => import('@/pages/services/HealthCarePortal'));
const TravelPortal = lazy(() => import('@/pages/services/TravelPortal'));
const RealEstatePortal = lazy(() => import('@/pages/services/RealEstatePortal'));
const HRPayrollSoftware = lazy(() => import('@/pages/services/HRPayrollSoftware'));
const JewellerySoftware = lazy(() => import('@/pages/services/JewellerySoftware'));
const CRMSoftware = lazy(() => import('@/pages/services/CRMSoftware'));
const RealEstateSoftware = lazy(() => import('@/pages/services/RealEstateSoftware'));
const InventoryManagementSoftware = lazy(() => import('@/pages/services/InventoryManagementSoftware'));
const HospitalManagementSoftware = lazy(() => import('@/pages/services/HospitalManagementSoftware'));
const SchoolManagementSoftware = lazy(() => import('@/pages/services/SchoolManagementSoftware'));
const SoftwareTesting = lazy(() => import('@/pages/services/SoftwareTesting'));
const SecurityTesting = lazy(() => import('@/pages/services/SecurityTesting'));
const PerformanceTesting = lazy(() => import('@/pages/services/PerformanceTesting'));
const EcommerceDevelopment = lazy(() => import('@/pages/services/EcommerceDevelopment'));

// Technology Pages
const HtmlCss = lazy(() => import('@/pages/technologies/HtmlCss'));
const AngularJsJs = lazy(() => import('@/pages/technologies/AngularJsJs'));
const AjaxJson = lazy(() => import('@/pages/technologies/AjaxJson'));
const Jquery = lazy(() => import('@/pages/technologies/Jquery'));
const JqueryUI = lazy(() => import('@/pages/technologies/JqueryUI'));
const Drupal = lazy(() => import('@/pages/technologies/Drupal'));
const Joomla = lazy(() => import('@/pages/technologies/Joomla'));
const Wordpress = lazy(() => import('@/pages/technologies/Wordpress'));
const Php = lazy(() => import('@/pages/technologies/Php'));
const Java = lazy(() => import('@/pages/technologies/Java'));
const SqlDatabase = lazy(() => import('@/pages/technologies/SqlDatabase'));
const SqlServer = lazy(() => import('@/pages/technologies/SqlServer'));
const Oracle = lazy(() => import('@/pages/technologies/Oracle'));
const JavaTesting = lazy(() => import('@/pages/technologies/JavaTesting'));
const Shell = lazy(() => import('@/pages/technologies/Shell'));
const UnitTesting = lazy(() => import('@/pages/technologies/UnitTesting'));
const SystemTesting = lazy(() => import('@/pages/technologies/SystemTesting'));
const IntegrationTesting = lazy(() => import('@/pages/technologies/IntegrationTesting'));
const Architecture = lazy(() => import('@/pages/technologies/Architecture'));
const Sdlc = lazy(() => import('@/pages/technologies/Sdlc'));
const DeploymentAutomation = lazy(() => import('@/pages/technologies/DeploymentAutomation'));
const SoftwareTestingTech = lazy(() => import('@/pages/technologies/SoftwareTesting'));
const Iis = lazy(() => import('@/pages/technologies/Iis'));
const Tomcat = lazy(() => import('@/pages/technologies/Tomcat'));
const Apache = lazy(() => import('@/pages/technologies/Apache'));
const Jboss = lazy(() => import('@/pages/technologies/Jboss'));
const Mongodb = lazy(() => import('@/pages/technologies/Mongodb'));
const Cassandra = lazy(() => import('@/pages/technologies/Cassandra'));
const Redis = lazy(() => import('@/pages/technologies/Redis'));
const Godaddy = lazy(() => import('@/pages/technologies/Godaddy'));
const GoogleCloudTech = lazy(() => import('@/pages/technologies/GoogleCloud'));
const AwsTech = lazy(() => import('@/pages/technologies/Aws'));
const Python = lazy(() => import('@/pages/technologies/Python'));
const Perl = lazy(() => import('@/pages/technologies/Perl'));
const JspJsf = lazy(() => import('@/pages/technologies/JspJsf'));
const JavaFrameworks = lazy(() => import('@/pages/technologies/JavaFrameworks'));

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 1,
//       refetchOnWindowFocus: false,
//     },
//   },
// });

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div style={{padding: '2rem', textAlign: 'center'}}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />

            {/* Service Category Routes */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/ai-ml" element={<AIMachineLearning />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/creative-design" element={<CreativeDesign />} />
            <Route path="/services/consulting" element={<ConsultingServices />} />
            <Route path="/services/devops" element={<DevOpsServices />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/qa-testing" element={<QATestingServices />} />

            {/* Individual Service Routes */}
            <Route path="/services/seo-services" element={<SEOServices />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/logo-design" element={<LogoDesign />} />
            <Route path="/services/brochure-design" element={<BrochureDesign />} />
            <Route path="/services/website-design" element={<WebsiteDesign />} />
            <Route path="/services/search-engine-marketing" element={<SearchEngineMarketing />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/pay-per-click-management" element={<PayPerClickManagement />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />

            {/* Consulting Service Routes */}
            <Route path="/services/netsuite-consultant" element={<NetSuiteConsultant />} />
            <Route path="/services/software-consultant" element={<SoftwareConsultant />} />
            <Route path="/services/sharepoint-development" element={<SharePointDevelopment />} />
            <Route path="/services/it-strategy-consulting" element={<ITStrategyConsulting />} />
            <Route path="/services/recruitment-service" element={<RecruitmentService />} />

            {/* Web Development Technology Routes */}
            <Route path="/services/web-development/reactjs" element={<ReactJS />} />
            <Route path="/services/web-development/angular" element={<Angular />} />
            <Route path="/services/web-development/vuejs" element={<VueJS />} />
            <Route path="/services/web-development/nodejs" element={<NodeJS />} />

            {/* Mobile App Routes */}
            <Route path="/services/mobile-apps/android-development" element={<Android />} />
            <Route path="/services/mobile-apps/ios-development" element={<IOSDevelopment />} />
            <Route path="/services/mobile-apps/flutter" element={<Flutter />} />

            {/* AI/ML Routes */}
            <Route path="/services/ai-ml/machine-learning" element={<MachineLearning />} />
            <Route path="/services/ai-ml/computer-vision" element={<ComputerVision />} />
            <Route path="/services/ai-ml/natural-language-processing" element={<NaturalLanguageProcessing />} />

            {/* Cloud Solutions Routes */}
            <Route path="/services/cloud-solutions/aws" element={<AWS />} />
            <Route path="/services/cloud-solutions/azure" element={<Azure />} />
            <Route path="/services/cloud-solutions/google-cloud" element={<GoogleCloud />} />

            {/* Technology Routes */}
            <Route path="/technologies/html-css" element={<HtmlCss />} />
            <Route path="/technologies/angular-js" element={<AngularJsJs />} />
            <Route path="/technologies/ajax-json" element={<AjaxJson />} />
            <Route path="/technologies/jquery" element={<Jquery />} />
            <Route path="/technologies/jquery-ui" element={<JqueryUI />} />
            <Route path="/technologies/drupal" element={<Drupal />} />
            <Route path="/technologies/joomla" element={<Joomla />} />
            <Route path="/technologies/wordpress" element={<Wordpress />} />
            <Route path="/technologies/php" element={<Php />} />
            <Route path="/technologies/java" element={<Java />} />
            <Route path="/technologies/nodejs-development" element={<NodeJSDevelopment />} />
            <Route path="/technologies/react-development" element={<ReactDevelopment />} />
            <Route path="/technologies/iot-solutions" element={<IoTSolutions />} />
            <Route path="/technologies/blockchain-development" element={<BlockchainDevelopment />} />
            <Route path="/technologies/ar-vr-development" element={<ARVRDevelopment />} />
            <Route path="/technologies/sql-database" element={<SqlDatabase />} />
            <Route path="/technologies/sql-server" element={<SqlServer />} />
            <Route path="/technologies/oracle" element={<Oracle />} />
            <Route path="/technologies/java-testing" element={<JavaTesting />} />
            <Route path="/technologies/shell" element={<Shell />} />
            <Route path="/technologies/unit-testing" element={<UnitTesting />} />
            <Route path="/technologies/system-testing" element={<SystemTesting />} />
            <Route path="/technologies/integration-testing" element={<IntegrationTesting />} />
            <Route path="/technologies/architecture" element={<Architecture />} />
            <Route path="/technologies/sdlc" element={<Sdlc />} />
            <Route path="/technologies/deployment-automation" element={<DeploymentAutomation />} />
            <Route path="/technologies/software-testing" element={<SoftwareTestingTech />} />
            <Route path="/technologies/iis" element={<Iis />} />
            <Route path="/technologies/tomcat" element={<Tomcat />} />
            <Route path="/technologies/apache" element={<Apache />} />
            <Route path="/technologies/jboss" element={<Jboss />} />
            <Route path="/technologies/mongodb" element={<Mongodb />} />
            <Route path="/technologies/cassandra" element={<Cassandra />} />
            <Route path="/technologies/redis" element={<Redis />} />
            <Route path="/technologies/godaddy" element={<Godaddy />} />
            <Route path="/technologies/google-cloud" element={<GoogleCloudTech />} />
            <Route path="/technologies/aws" element={<AwsTech />} />
            <Route path="/technologies/python" element={<Python />} />
            <Route path="/technologies/perl" element={<Perl />} />
            <Route path="/technologies/jsp-jsf" element={<JspJsf />} />
            <Route path="/technologies/java-frameworks" element={<JavaFrameworks />} />

            {/* Blog Routes */}
            <Route path="/blog/logistics-leaders-vehicle-relocation" element={<LogisticsLeadersVehicleRelocation />} />
            <Route path="/blog/automation-software-testing-course" element={<AutomationSoftwareTestingCourse />} />
            <Route path="/blog/ai-future-enterprise-solutions" element={<AIFutureEnterpriseSolutions />} />
            <Route path="/blog/cloud-security-best-practices" element={<CloudSecurityBestPractices />} />

            {/* Newly created sub-service routes */}
            <Route path="/services/windows-app-development" element={<WindowsAppDevelopment />} />
            <Route path="/services/xamarin-app-development" element={<XamarinAppDevelopment />} />
            <Route path="/services/hybrid-app-development" element={<HybridAppDevelopment />} />
            <Route path="/services/native-app-development" element={<NativeAppDevelopment />} />
            <Route path="/services/seo-copywriting" element={<SEOCopywriting />} />
            <Route path="/services/brand-consulting" element={<BrandConsulting />} />
            <Route path="/services/lead-management-system" element={<LeadManagementSystem />} />
            <Route path="/services/crm-software-development" element={<CRMSoftwareDevelopment />} />
            <Route path="/services/educational-web-portal" element={<EducationalWebPortal />} />
            <Route path="/services/restaurant-web-portal" element={<RestaurantWebPortal />} />
            <Route path="/services/healthcare-portal" element={<HealthCarePortal />} />
            <Route path="/services/travel-portal" element={<TravelPortal />} />
            <Route path="/services/real-estate-portal" element={<RealEstatePortal />} />
            <Route path="/services/hr-payroll-software" element={<HRPayrollSoftware />} />
            <Route path="/services/jewellery-software" element={<JewellerySoftware />} />
            <Route path="/services/crm-software" element={<CRMSoftware />} />
            <Route path="/services/real-estate-software" element={<RealEstateSoftware />} />
            <Route path="/services/inventory-management-software" element={<InventoryManagementSoftware />} />
            <Route path="/services/hospital-management-software" element={<HospitalManagementSoftware />} />
            <Route path="/services/school-management-software" element={<SchoolManagementSoftware />} />
            <Route path="/services/software-testing" element={<SoftwareTesting />} />
            <Route path="/services/security-testing" element={<SecurityTesting />} />
            <Route path="/services/performance-testing" element={<PerformanceTesting />} />
            <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
          </Routes>
        </Suspense>
      </Router>
    // </QueryClientProvider>
  );
}

export default App;
