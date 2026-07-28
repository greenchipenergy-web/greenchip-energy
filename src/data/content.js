import{Building2,Leaf,Zap,BatteryCharging,Droplet,Car,Wind,Factory,Trophy,Scale,Lightbulb,Handshake,Star,ShieldCheck,Search,Globe2,Recycle,HeartHandshake,Wallet,HardHat,Link2,Settings,ClipboardList,Rocket,ShoppingCart,Users}from'lucide-react'

export const IMG = '/images/'

export const SOLUTIONS = [
  {
    id:'rooftop',
    img:'Commerial rooftop.jpg',
    title:'Rooftop Solar',
    sub:'Commercial & Industrial',
    icon:Building2,
    tagline:'Turn your roof into a power plant',
    intro:'Turning to green energy and reducing carbon footprint got a lot easier with rooftop solar. With rooftop solar in India gaining popularity, commercial and industrial bodies are increasingly choosing solar energy over conventional energy sources.',
    body:'Adopting solar power is a major advantage to businesses as it significantly reduces the energy costs involved, and can even earn profit from excess energy sold back to the grid. With GreenChip, one of the best solar rooftop companies in Telangana, you can ensure you have chosen the best commercial or industrial solar installation partner.',
    body2:'We pride ourselves on enabling companies to go green and generate higher returns on their solar investment. Our team handles everything from feasibility studies, structural analysis, system design, procurement, installation, and performance monitoring.',
    benefits:['Lower industrial & commercial electricity tariffs','Transform underutilised rooftop space','Grid support and net-metering income','Energy independence from utility rate hikes','Reduce carbon footprint significantly'],
    stats:[['70%','Bill Reduction'],['25 Yrs','System Life'],['3–5 Yrs','Payback Period']],
  },  
  {
    id:'ground',
    img:'groundmount.jpg',
    title:'Ground Mounted Solar',
    sub:'Large Scale Arrays',
    icon:Leaf,
    tagline:'Scalable solar for any land size',
    intro:'GreenChip enables businesses looking to save electricity costs and switch to solar power with comprehensive ground-mounted solar solutions for any scale of deployment.',
    body:'Ground-mounted solar systems are ideal for large commercial or industrial premises with available land. These systems can be optimally tilted and oriented for maximum energy generation, unlike rooftop systems which are constrained by roof geometry.',
    body2:'Our ground-mounted solutions include single-axis and dual-axis trackers for maximum yield, fixed-tilt systems for cost efficiency, agrivoltaic designs combining farming and solar generation, and full EPC delivery with performance guarantees.',
    benefits:['Optimal tilt and orientation for maximum yield','Scalable from 100 kW to 100+ MW','Single-axis and dual-axis tracker options','Agrivoltaic design possible','Full EPC with performance guarantee'],
    stats:[['100MW+','Capacity Delivered'],['99.5%','Uptime SLA'],['40%','Depreciation Benefit']],
  },
  {
    id:'solarpark',
    img:'solarpark.jpg',
    title:'Solar Park',
    sub:'Utility Scale Power',
    icon:Zap,
    tagline:'Grid-level renewable power generation',
    intro:'A solar park, also referred to as a solar power plant or photovoltaic (PV) power station, is a large-scale renewable energy installation designed for grid-level power generation.',
    body:'Solar parks aggregate multiple solar projects in a single location, sharing common infrastructure such as grid connection, roads, and security. This reduces per-unit project cost and speeds up commissioning timelines for utility-scale capacity.',
    body2:'GreenChip has experience developing and executing utility-scale solar parks with capacities ranging from 5 MW to 500 MW. We manage land acquisition, regulatory approvals, grid interconnection, SCADA systems, and long-term O&M contracts.',
    benefits:['5 MW to 500 MW capacity range','Shared infrastructure reduces LCOE','Grid interconnection & SCADA included','Land acquisition and regulatory support','Long-term O&M contracts available'],
    stats:[['500MW','Total Pipeline'],['15+','Parks Developed'],['8.5%','Avg. IRR Delivered']],
  },
  {
    id:'bess',
    img:'solar-battery.jpg',
    title:'Battery Energy Storage',
    sub:'Solar + Storage (BESS)',
    icon:BatteryCharging,
    tagline:'Store the sun, power the night',
    intro:'Battery Energy Storage Systems (BESS) paired with solar enable businesses to store excess solar energy generated during peak sunlight hours and dispatch it when needed — including at night or during grid outages.',
    body:'Using renewable energy sources such as solar power combined with advanced lithium-ion and LiFePO4 battery technologies, GreenChip delivers reliable 24/7 clean energy solutions for industrial, commercial, and utility customers.',
    body2:'Our BESS solutions support peak demand management, reducing costly demand charges, time-of-use arbitrage, backup power for critical loads, and grid stabilization services. We partner with leading battery manufacturers to deliver the best technology at competitive price points.',
    benefits:['24/7 solar energy availability','Peak demand charge reduction','Time-of-use energy arbitrage','Critical load backup power','Grid stabilisation ancillary services'],
    stats:[['99.9%','System Availability'],['6000+','Cycle Life'],['10 Yr','Performance Warranty']],
  },
  {
    id:'floating',
    img:'floating solar.jpg',
    title:'Floating Solar Panels',
    sub:'Innovative Technology',
    icon:Droplet,
    tagline:'Solar on water — innovative & efficient',
    intro:'GreenChip is a solar energy solution company that develops innovative and smart floating solar technologies for water bodies, reservoirs, irrigation tanks, and industrial ponds.',
    body:'Floating photovoltaic (FPV) systems offer a dual benefit — generating clean energy while reducing water evaporation from reservoirs by up to 70%. This makes FPV ideal for water-stressed regions of India. The cooling effect of water also improves panel efficiency by 5–10% compared to rooftop installations.',
    body2:'We are amongst the top service providers of floating solar panels in India. Our FPV systems use high-quality HDPE floats, corrosion-resistant mounting systems, and waterproof cable management. We handle all aspects from bathymetric surveys to commissioning and O&M.',
    benefits:['70% reduction in water evaporation','5–10% higher panel efficiency','No land acquisition required','Dual use of water bodies','Ideal for water-stressed regions'],
    stats:[['50+','FPV Projects'],['#1','FPV Provider India'],['2x','ROI vs Land Solar']],
  },
  {
    id:'carport',
    img:'carport1solar.jpg',
    title:'Solar Carport',
    sub:'Dual Use Infrastructure',
    icon:Car,
    tagline:'Solar shade for vehicles and profits',
    intro:'Any facility with a large, dedicated parking space can transform it into a solar energy generator with GreenChip\'s premium carport solar structures — generating clean energy while providing shade for vehicles.',
    body:'Solar carports integrate photovoltaic panels into overhead structures over parking areas. This dual-use approach maximises land utilisation without consuming additional space. They are ideal for shopping malls, IT parks, hospitals, educational institutions, and manufacturing facilities.',
    body2:'Our carport structures are engineered for wind and seismic loads, designed to accommodate EV charging stations, and can be combined with battery storage for peak-shaving. We offer both single-tier and multi-tier carport designs to suit varying site requirements.',
    benefits:['Dual use — parking + power generation','Vehicle shade reduces heat damage','EV charging integration ready','No additional land required','Aesthetic premium design options'],
    stats:[['25 kW–5 MW','Capacity Range'],['EV Ready','Charging Integration'],['30%','Shading Benefit']],
  },
  {
    id:'hybrid',
    img:'Hybrid-solar- wind.jpg',
    title:'Hybrid Solar & Wind',
    sub:'Combined Renewable Systems',
    icon:Wind,
    tagline:'Best of both renewable worlds',
    intro:'Greenchip controllers ensure uninterrupted power through intelligent management of hybrid power sources and instant changeover from grid to off-grid power, or vice versa, as necessary.',
    body:'Our controllers help you add sources to your energy mix and combine them as needed when stability issues or financial considerations prompt you to use less grid power. With ongoing power and load metering, Greenchip solutions instantly switch to another source in your plant if production cannot keep up with demand. One example of this is using sky imager software to predict when PV production is likely to drop and bringing other power sources such as gensets online.',
    body2:'In combination applications, our solutions automatically adjust power and reactive power references with grid support if frequency or voltage drops, and they rotate gensets to automatically ensure the most fuel-optimised running mode through various load demands. In grid-tied operation, all gensets can be stopped to maximise sustainable power penetration, and our controllers facilitate the use of energy storage systems (ESS) to store green power, provide fast backup, and carry out peak shaving and load sharing. You can configure load-dependent genset start/stop (with a genset controller) and minimum genset load constraints (with a PV controller).',
    benefits:[
      'Solar, storage, wind, mains, and genset integration in hybrid applications',
      'ASC-4 sustainable controllers and AGC-4 Mk II/AGC 150 let you control up to 32 gensets',
      'Applications with up to 16 sustainable power plants',
      'Maximised sustainable power penetration',
      'Ideal for self-consumption applications',
      'Priority of connected power sources can be defined and changed',
      'Built-in power metering',
      'Highly customisable with user-friendly M-Logic tool'
    ],
    stats:[['40%','Higher Yield vs Solo Solar'],['24/7','Uninterrupted Power'],['Remote','Location Ready']],
  },
  {
    id:'substation',
    img:'transformer.jpg',
    title:'Sub-Stations',
    sub:'Grid Infrastructure',
    icon:Factory,
    tagline:'Backbone of renewable integration',
    intro:'An integrated multifaceted engineering company specialising in implementing cost-effective, time-bound power transmission and distribution projects. We execute EPC (supply, erection, testing, and commissioning) of switchyards and substations up to 400/220/132 kV.',
    body:'We perform all kinds of electrical work, including detailed engineering of EHV substations and transmission lines, installing flood lights and poles, laying cables, installing transformers and switchyards up to 400 kV, and indoor/outdoor lighting. We have executed projects for reputed organisations and are approved by major utilities and government agencies.',
    body2:'Our services cover substation design, engineering, bay erection, testing & commissioning, operation & maintenance, and liaison with utilities and regulators. We provide site preparation, foundations, equipment installation, wiring, comprehensive testing, and long-term O&M tailored to client needs.',
    benefits:[
      'Substation Projects (up to 400/220/132 kV)',
      'Detailed design and engineering',
      'Bay erection: transformer & line bays',
      'Testing, commissioning and diagnostics',
      'Operation & maintenance and routine inspections',
      'Liaison with utilities and regulatory approvals',
      'Fault analysis, thermal imaging and preventive maintenance',
      'Turnkey EPC delivery with experienced technical teams'
    ],
    stats:[['400kV','Max Voltage Capacity'],['50+','Substations Built'],['100%','Uptime Record']],
    gallery:[
      'transformer1.png',
      'transformer2.jpg',
      'transformer3.jpg',
      'transformer4.jpg',
      'transformer5.jpg',
      'transformer6.jpg',
      'transformer7.png',
      'transformer8.jpg'
    ],
  },
  {
    id:'wind',
    img:'wind1.png',
    title:'Wind Turbine',
    sub:'Wind Energy',
    icon:Wind,
    tagline:'Harnessing India\'s wind potential',
    sub:'Wind Farm Project Development',
    intro:'Acquire the best lands for your wind farm. ',
    sections:[
      {title:'Wind Farm Project Development',
       text:'Land Assessment, Identification, Acquisition, Long term Leasing Agreements, and Necessary nodal approvals. Project Management, Quality Control, Civil Works like Roads, Foundation, and Offices. Retrofitting is the intelligent way to make the most of your investments and maximize the profitability of ageing equipment. As wind turbines age, they gradually lose energy efficiency. Thousands of the 3 million+ wind turbines across the globe may not be performing their optimum levels, mostly due to blade surface and leading-edge degradation. As a result, the demand for optimizing wind turbine blade performance to regain lost efficiency is rapidly growing.'},
      {title:'Site Assessment',
       text:'As a seasoned leader in renewable energy, Greenchip prioritizes rigorous site assessment to lay the groundwork for our project development methodology. Our expert team conducts comprehensive feasibility studies, meticulously analysing wind resources, terrain characteristics, topographical features, and environmental impact factors. We ensure accurate site selection and optimal project outcomes by leveraging cutting-edge technology and industry-leading expertise.'},
      {title:'Permitting and Regulatory Compliance',
       text:'Navigating the intricate landscape of permitting and regulatory compliance is a core strength of Greenchip’s project development strategy. With years of experience in the renewable energy sector, our team adeptly manages the complexities of obtaining permits and adhering to local regulations and environmental requirements. We collaborate closely with regulatory authorities and stakeholders to obtain necessary permits and address environmental concerns effectively by prioritizing ecological stewardship and sustainable development.'},
    {title:'Land Acquisition',
      text :'At GreenChip, we understand the importance of strategic land acquisition in project development. Drawing on our extensive industry knowledge and network, we negotiate land leases or acquire parcels for wind farm projects that meet our stringent criteria. Factors such as wind resource potential, access to infrastructure, and community considerations guide our land acquisition efforts, ensuring the long-term success and viability of projects.'}
      ],
    benefits:[
      'Land assessment, identification and acquisition',
      'Site assessment & feasibility studies',
      'Permitting and regulatory compliance',
      'Turbine procurement and supply chain management',
      'Civil works: roads, foundations, and infrastructure',
      'Retrofitting and blade performance optimisation',
      'Operation & maintenance and long-term O&M support',
      'Project management and quality control'
    ],
    stats:[['300GW','India Wind Potential'],['5–100 MW','Project Range'],['25%+','Average CUF Achieved']],
    gallery:[
      'wind1.png',
      'wind2.jpg',
      'wind3.jpg',
      'wind4.png',
      'wind5.png',
      'wind6.png',
      'wind7.png',
      'wind8.jpg'
    ],
  },
]

export const PARTNERS = [
  '1.png','2.jpg','3.png','4.jpg','5.jpg','6.png','Am-Plus.png','enrich.jpg','gprec.png',
  'greenko.jpg','grip.png','jntuhyd.jpeg','kits.jpg','MVDM_logo.jpg','ncc.gif','New-Project-1.png',
  'part1.png','part10.png','part11.jpeg','part2.png','part3.png','part4.png','part5.png','part6.png','part7.png','part8.png','part9.png',
  'radisson.png','rewatt.png','Snowman_Logo_ratina.png','synergy.png'
]

export const VALUES = [
  {icon:Trophy,title:'Quality',col:'#16a34a',desc:'We deliver value in all our relationships. Quality is embedded in every project we undertake — from the smallest rooftop installation to the largest utility-scale solar park.'},
  {icon:Scale,title:'Integrity',col:'#15803d',desc:'We conduct business with utmost honesty and transparency. We always do what is right, even when it\'s not easy — maintaining trust with clients, partners, and communities.'},
  {icon:Leaf,title:'Sustainability',col:'#166534',desc:'Committed to promoting renewable energy and reducing environmental impact. Every project we deliver contributes to India\'s clean energy transition and carbon neutrality goals.'},
  {icon:Lightbulb,title:'Innovation',col:'#14532d',desc:'Constantly seeking new technologies and methods to improve our processes. From floating solar to hydrogen electrolysers — we stay at the frontier of clean energy innovation.'},
  {icon:Handshake,title:'Collaboration',col:'#16a34a',desc:'We believe in the power of collaboration. We work closely with customers, technology partners, and communities to achieve shared goals and create lasting positive impact.'},
  {icon:Star,title:'Excellence',col:'#15803d',desc:'Committed to delivering excellence in everything we do — from the quality of our installations to the responsiveness of our customer support and performance monitoring teams.'},
]

export const ETHICS = [
  {icon:ShieldCheck,title:'Safety First',desc:'The safety of our customers and employees is always our top priority. We ensure all solar installations comply with relevant safety regulations and standards, conducting rigorous risk assessments for every project.'},
  {icon:Search,title:'Transparency & Honesty',desc:'We are transparent and honest in all our dealings with customers, employees, and stakeholders. This means providing clear information about our products, services, pricing, and any potential risks associated with solar installations.'},
  {icon:Globe2,title:'Social Responsibility',desc:'As a solar company, we have a responsibility to contribute to the social and economic development of communities where we operate — through initiatives such as job creation, community development, and support for local businesses.'},
  {icon:Recycle,title:'Environmental Responsibility',desc:'We strive to minimise our carbon footprint and ensure all products and services are environmentally friendly. We responsibly dispose of old panels, use recycled packaging, and continuously reduce our operational emissions.'},
  {icon:HeartHandshake,title:'Respect for Human Rights',desc:'We respect the human rights of our employees and customers, and avoid any practices that could be considered discriminatory or exploitative. We maintain fair wages, safe working conditions, and equal opportunity employment.'},
]

export const APPROACH = [
  {num:'01',icon:Wallet,title:'Investment',desc:'We arrange capital to help deliver and scale projects to meet customer renewable energy goals. Our financial solutions are tailored to each client\'s unique requirements — from CAPEX to OPEX/RESCO structures.'},
  {num:'02',icon:HardHat,title:'Development',desc:'Collaborative partnerships with technology partners and customers to build and operate quality assets. We bring together expertise from across the industry for seamless, on-time project execution.'},
  {num:'03',icon:Zap,title:'Value Engineering',desc:'Leveraging design, engineering, and investment expertise to fit customers\' needs while maximising value. Every solution is optimised for peak ROI, reliability, and long-term performance over 25+ years.'},
  {num:'04',icon:Link2,title:'Integration',desc:'Ability to bundle proven energy infrastructure solutions to provide a customer (or aggregated customer base) with multiple services — solar, storage, EV charging, and monitoring — for complete energy independence.'},
]

export const PROJECTS = [
  
]
  
export const LATEST_GALLERY = {
  carport: [
    'carpet.jpeg','carpet1.jpeg','carpet10.jpeg','carpet11.jpeg','carpet12.jpeg','carpet13.jpeg','carpet2.jpeg','carpet3.jpeg','carpet4.jpeg','carpet5.jpeg','carpet7.jpeg','carpet8.jpeg','carpet9.jpeg'
  ],
  Enargystorage: [
    'EnergyStorage1.png','EnergyStorage2.png','EnergyStorage3.png','EnergyStorage4.png','EnergyStorage5.png','EnergyStorage6.png','EnergyStorage7.png','EnergyStorage8.png','EnergyStorage9.png','EnergyStorage10.png','EnergyStorage11.png','EnergyStorage12.png'
  ],
  bio_CNG: [
    'bio_CNG.jpeg','bio_CNG2.jpeg','bio_CNG3.jpeg','bio_CNG4.jpeg','bio_CNG5.jpeg'
  ],
  floting: [
    'flot.jpeg','flot1.jpeg','flot2.jpeg','flot3.jpeg','flot5.jpeg'
  ],
  ground: [
    'ground.jpeg','ground1.jpeg','ground10.jpeg','ground11.jpeg','ground12.jpeg','ground13.jpeg','ground14.jpeg','ground15.jpeg','ground16.jpeg','ground17.jpeg','ground18.jpeg','ground19.jpeg','ground2.jpeg','ground20.jpeg','ground21.jpeg','ground22.jpeg','ground23 (2).jpeg','ground23.jpeg','ground24.jpeg','ground25.jpeg','ground3.jpeg','ground4.jpeg','ground5.jpeg','ground6.jpeg','ground7.jpeg','ground8.jpeg','ground9.jpeg','ground26.jpeg','ground27.jpeg','ground28.jpeg','ground29.jpeg','ground30.jpeg','ground31.jpeg','ground32.jpeg','ground33.jpeg','ground34.jpeg','ground.mp4'
  ],
  rooftop: [
    'roof.mp4','roof1.jpeg','roof10.jpeg','roof12.jpeg','roof13.jpeg','roof14.jpeg','roof15.jpeg','roof16.jpeg','roof17.jpeg','roof18.jpeg','roof2.jpeg','roof20.jpeg','roof21.jpeg','roof22.jpeg','roof23.jpeg','roof24.jpeg','roof25.jpeg','roof26.jpeg','roof27.jpeg','roof3.jpeg','roof6.jpeg','roof7.jpeg','roof8.jpeg','roof28.jpeg','roof29.jpeg','roof30.jpeg','roof31.jpeg','roof32.jpeg','roof33.jpeg','roof34.jpeg','roof35.jpeg','roof36.jpeg','roof37.jpeg','roof38.jpeg','roof39.jpeg','roof40.jpeg','roof41.jpeg','roof42.jpeg','roof43.jpeg','roof44.jpeg','roof45.jpeg','roof46.jpeg','roof47.jpeg','roof48.jpeg','roof49.jpeg','roof50.jpeg','roof51.jpeg','roof52.jpeg','roof53.jpeg','roof54.jpeg','roof55.jpeg','roof56.jpeg','roof57.jpeg','roof58.jpeg','roof59.jpeg','roof60.jpeg','roof61.jpeg','roof62.jpeg'
  ],
  transformer: [
    'transformer1.jpg','transformer1.png','transformer2.jpg','transformer3.jpg','transformer4.jpg','transformer5.jpg','transformer6.jpg','transformer7.png','transformer8.jpg','transformer9.jpg','transformer10.jpg'
  ],
  wind: [
    'wind.png','wind1.png','wind2.jpg','wind3.jpg','wind4.png','wind5.png','wind6.png','wind7.png','wind8.jpg','windturbine3.jpg'
  ]
}

export const JOBS = [
  {title:'Site Engineer - Solar',dept:'Engineering',type:'Full-time',icon:Settings,
    desc:'Responsible for on-site execution of solar projects, ensuring installation quality and safety.',
    resp:['Execute solar installations and supervise site teams','Coordinate with vendors and contractors for timely deliveries','Ensure compliance with safety and quality standards','Assist in commissioning and troubleshooting activities'],
    req:['1–3 years experience in solar installations preferred','Basic electrical knowledge and familiarity with PV systems','Good communication and coordination skills'],
  },
  {title:'Project Manager - Solar',dept:'Project Management',type:'Full-time',icon:ClipboardList,
    desc:'Lead solar projects from planning to handover, managing timelines, budgets and stakeholder communication.',
    resp:['Plan and manage project schedules and resources','Coordinate cross-functional teams and subcontractors','Monitor project budgets and deliverables','Ensure timely project delivery and client satisfaction'],
    req:['3+ years managing EPC or solar projects','Strong organisational and stakeholder management skills','Experience with project planning tools'],
  },
  {title:'Business Development - Solar',dept:'Sales',type:'Full-time',icon:Rocket,
    desc:'Identify and develop new business opportunities in the solar market and grow the company pipeline.',
    resp:['Prospect and qualify commercial leads','Prepare proposals and drive contract negotiations','Build relationships with clients and partners','Track market trends and competitor activity'],
    req:['2+ years sales/business development in solar or renewables preferred','Good communication and negotiation skills','Target-driven and self-motivated'],
  },
  {title:'Purchase / Procurement Executive',dept:'Procurement',type:'Full-time',icon:ShoppingCart,
    desc:'Handle procurement of equipment and materials required for solar projects, ensuring cost-effectiveness and quality.',
    resp:['Source and negotiate with suppliers','Manage purchase orders and inventory tracking','Ensure timely procurement to meet project schedules','Maintain supplier records and quality checks'],
    req:['1–3 years procurement experience','Familiarity with solar component suppliers is a plus','Good negotiation and record-keeping skills'],
  },
  {title:'HR & Admin Executive',dept:'Human Resources',type:'Full-time',icon:Users,
    desc:'Support HR and administrative operations for the growing team, including hiring, on-boarding and office administration.',
    resp:['Manage recruitment and employee onboarding','Handle HR records and payroll coordination','Support office administration and vendor management','Facilitate employee communications and policies'],
    req:['1–3 years HR or admin experience','Familiarity with HR processes and basic payroll','Good interpersonal and organisational skills'],
  },
]
