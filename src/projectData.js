import ex1 from "../public/explorenesia/1.jpg";
import ex2 from "../public/explorenesia/2.jpg";
import ex3 from "../public/explorenesia/3.jpg";
import ex4 from "../public/explorenesia/4.jpg";
import ex5 from "../public/explorenesia/5.jpg";
import ex6 from "../public/explorenesia/6.jpg";
import ex7 from "../public/explorenesia/7.jpg";
import ex8 from "../public/explorenesia/8.jpg";
import dis1 from "../public/diskop/1.jpg";
import dis2 from "../public/diskop/2.jpg";
import dis3 from "../public/diskop/3.jpg";
import dis4 from "../public/diskop/4.jpg";
import dis5 from "../public/diskop/5.jpg";
import su1 from "../public/suki/1.jpg";
import su2 from "../public/suki/2.jpg";
import su3 from "../public/suki/3.jpg";
import su4 from "../public/suki/4.jpg";
import su5 from "../public/suki/5.jpg";
import pt1 from "../public/panjitravel/1.jpg";
import pt2 from "../public/panjitravel/2.jpg";
import pt3 from "../public/panjitravel/3.jpg";
import pt4 from "../public/panjitravel/4.jpg";
import pt5 from "../public/panjitravel/5.jpg";
import ele1 from "../public/elegame/1.png";
import ele2 from "../public/elegame/2.png";
import ele3 from "../public/elegame/3.png";
import ele4 from "../public/elegame/4.png";
import sm1 from "../public/smarthome/1.jpg";
import sm2 from "../public/smarthome/2.jpg";
import tt from "../public/tasktracker/1.jpg";
import tt2 from "../public/tasktracker/2.jpg";
import tt3 from "../public/tasktracker/3.jpg";
import tt4 from "../public/tasktracker/4.jpg";
import tt5 from "../public/tasktracker/5.jpg";
import sp1 from "../public/studentportal/2.jpg";
import sp2 from "../public/studentportal/1.jpg";
import sp3 from "../public/studentportal/3.jpg";
import sp4 from "../public/studentportal/4.jpg";
import sp5 from "../public/studentportal/5.jpg";
import rs1 from "../public/retno/1.jpg";
import rs2 from "../public/retno/2.jpg";
import rs3 from "../public/retno/3.jpg";
import rs4 from "../public/retno/4.jpg";
import rs5 from "../public/retno/5.jpg";
import rs6 from "../public/retno/6.jpg";
import vrac1 from "../public/vrac/1.jpeg";
import vrac2 from "../public/vrac/2.jpeg";
import iasc1 from "../public/iasc/1.png";
import iasc2 from "../public/iasc/2.png";
import iasc3 from "../public/iasc/3.png";
import iasc4 from "../public/iasc/4.png";
import iasc5 from "../public/iasc/5.png";
import iasc6 from "../public/iasc/6.png";
import eve1 from "../public/evendor/1.png";
import eve2 from "../public/evendor/2.png";
import eve3 from "../public/evendor/3.png";
import eve4 from "../public/evendor/4.png";
import sib1 from "../public/sibakti/1.png";
import sib2 from "../public/sibakti/2.png";
import sib3 from "../public/sibakti/3.png";
import sib4 from "../public/sibakti/4.png";
import sib5 from "../public/sibakti/5.png";
import boff1 from "../public/boffice/1.png";
import boff2 from "../public/boffice/2.png";
import boff3 from "../public/boffice/3.png";
import boff4 from "../public/boffice/4.png";
import mleb1 from "../public/mleb/1.png";
import mleb2 from "../public/mleb/2.png";
import mleb3 from "../public/mleb/3.png";
import mleb4 from "../public/mleb/4.png";
import mleb5 from "../public/mleb/5.png";
import mleb6 from "../public/mleb/6.png";
import udik1 from "../public/udiklat/1.png";
import udik2 from "../public/udiklat/2.png";
import udik3 from "../public/udiklat/3.png";

export const projectData = [
  {
    id: 1,
    images: [iasc1],
    title: "National Anti-Fraud & Response System",
    description:
      "A cross-institutional platform for handling financial fraud reports in Indonesia. It supports report submission, verification, institutional coordination, and monitoring of fraud response activities.",

    link: "",

    technologies: ["C#", ".NET Framework", "SQL Server", "SSIS", "REST API"],

    detailSlug: "national-fraud-reporting-platform",

    analysisVisuals: [
      {
        src: iasc2,
        title: "Report Review & Resolution Workflow",
        description:
          "An illustrative activity diagram showing the general process of report submission, verification, and follow-up handling.",
        alt: "Illustrative activity diagram showing fraud report submission, review, and follow-up processes",
        type: "Activity Diagram",
      },
      {
        src: iasc3,
        title: "API Integration Workflow",
        description:
          "A conceptual integration diagram illustrating data exchange and communication between interconnected systems.",
        alt: "Illustrative API integration workflow between interconnected systems",
        type: "System Integration",
      },
      {
        src: iasc4,
        title: "ERD - Key Entities & Relationships",
        description:
          "A simplified entity relationship diagram showing the general data domains and relationships within a reporting platform.",
        alt: "Simplified entity relationship diagram showing reporting and transaction data domains",
        type: "Entity Relationship Diagram",
      },
      {
        src: iasc5,
        title: "Dashboard Mockup & Reporting Summaries",
        description:
          "An illustrative dashboard concept for monitoring report summaries and operational indicators.",
        alt: "Illustrative dashboard mockup presenting report summaries and monitoring indicators",
        type: "UI/UX Design",
      },
      {
        src: iasc6,
        title: "Verification Mockup & Workflow",
        description:
          "An illustrative interface concept for reviewing submitted information and supporting verification activities.",
        alt: "Illustrative verification interface for reviewing submitted reports",
        type: "UI/UX Design",
      },
    ],

    caseStudy: {
      title: "National Anti-Fraud & Response System",

      summary:
        "A system analysis case study of a cross-institutional financial fraud reporting platform. The system supports report handling, information verification, institutional coordination, and operational monitoring through integrated workflows and data exchange.",

      category: "SYSTEM ANALYSIS CASE STUDY",
      status: "On Production",
      period: "2025 – Present",
      role: "System Analyst, Database Engineer",

      metadata: [
        ["Team", "Cross-functional team"],
        [
          "Tools",
          "System Specifications, Mockups, ERD, Use Case Diagrams, Activity Diagrams, SQL, ETL",
        ],
      ],

      overview:
        "The platform facilitates the handling of suspected financial fraud reports through a centralized system involving multiple institutions. It provides capabilities for report submission, verification, follow-up coordination, and operational monitoring. System integration supports information exchange between relevant parties, while reporting features provide visibility into handling progress.",

      problemStatement: [
        "Fraud report handling involves multiple institutions and stakeholders, requiring coordinated workflows and clear responsibilities.",
        "Information from different sources needs to be reviewed and managed consistently throughout the reporting process.",
        "Operational users need reliable data and monitoring capabilities to support case handling and decision-making.",
        "Migrating legacy data into a new system requires careful analysis of existing data structures and consistency.",
      ],

      objectives: [
        "Provide a centralized platform for financial fraud report handling.",
        "Support structured report verification and institutional follow-up.",
        "Improve coordination and information exchange between participating institutions.",
        "Provide monitoring and reporting capabilities for operational users.",
        "Ensure data consistency during system migration and integration.",
      ],

      scopeItems: [
        "Report Management: Submission, review, and tracking of fraud reports.",
        "Verification & Follow-up: Management of report verification and subsequent handling activities.",
        "Institutional Coordination: Support for communication and data exchange between participating institutions.",
        "System Integration: Integration capabilities for exchanging information with relevant external systems.",
        "Reporting & Monitoring: Dashboard and reporting features for operational oversight.",
        "Data Management: Management and migration of reporting and transaction-related information.",
      ],

      myContributions: [
        "Requirement Analysis: Gathered and analyzed client requirements and translated business needs into system specifications.",
        "UI/UX Mockup Design: Prepared interface mockups and coordinated design reviews and confirmation with the client.",
        "System Documentation: Documented workflows, functional requirements, validations, and expected system behavior.",
        "System Modeling: Prepared analysis artifacts, including ERDs, use case diagrams, and activity diagrams.",
        "Development Coordination: Translated approved requirements into development tasks and communicated implementation expectations to developers.",
        "API & Integration Documentation: Prepared API documentation and test scenarios to support implementation and integration.",
        "Data Migration: Analyzed legacy and new database structures, prepared data mapping, and developed ETL queries for migration.",
        "Data Reconciliation: Investigated SQL stored procedures and addressed dashboard calculation discrepancies identified during migration.",
        "Testing & Deployment Support: Participated in SIT, UAT, security testing activities, go-live preparation, and post-launch maintenance support.",
      ],

      processSteps: [
        "Requirement Gathering & Analysis",
        "Business Process Modeling",
        "UI/UX Mockup & Stakeholder Review",
        "System Documentation & Data Analysis",
        "Development Coordination",
        "Testing, Migration & Deployment Support",
      ],

      architecture: [
        "Web-Based Application: Provides interfaces for reporting, verification, and operational monitoring.",
        "Application Layer: Handles business processes and system functionality.",
        "Integration Layer: Supports communication and data exchange with external systems.",
        "Database Layer: Manages reporting and related operational data.",
        "Data Processing: Supports data migration and transformation activities.",
        "Reporting Layer: Provides dashboards and operational summaries.",
      ],

      dataModel: [
        "Reporting Data: Core report information and related records.",
        "Party & Incident Information: Information associated with reports and involved parties.",
        "Account & Transaction Data: Records supporting transaction-related review and follow-up.",
        "Verification Records: Data supporting review outcomes and handling progress.",
        "Integration Data: Information exchanged between interconnected systems.",
        "Migration Data: Mapping and transformation of legacy records into the new database structure.",
      ],

      apiExample: "",

      apiDescription:
        "The platform supports API-based integration for information exchange with relevant external systems. Implementation-specific endpoint details and request or response structures are excluded from this portfolio.",

      decisions: [
        {
          title: "Translate Business Needs into System Specifications",
          description:
            "Business requirements were translated into workflows, functional specifications, and validation scenarios to provide clear implementation guidance.",
        },
        {
          title: "Validate Interface Designs Before Development",
          description:
            "Interface mockups were reviewed with stakeholders to establish a shared understanding of system functionality before implementation.",
        },
        {
          title: "Analyze Legacy Data Before Migration",
          description:
            "Existing database structures were examined to identify data differences and establish appropriate migration mappings.",
        },
        {
          title: "Reconcile Data After Migration",
          description:
            "Data consistency and reporting results were investigated to identify and address discrepancies during migration and deployment preparation.",
        },
      ],

      validationNote:
        "This case study presents an anonymized overview of the system and professional contributions. Internal workflows, production data, database object names, endpoint details, and confidential implementation materials are excluded.",

      acceptanceCriteria:
        "The platform supports its intended reporting, verification, integration, and monitoring capabilities. Relevant data migration and reporting discrepancies were addressed during go-live preparation.",

      validationDescription:
        "Participated in system testing, user acceptance testing, security testing activities, migration preparation, and post-launch support. Migration-related data and dashboard discrepancies were addressed before go-live, while other operational findings continued to be handled after launch.",

      takeaways: [
        "System Analysis: Translating business needs into clear and actionable system specifications.",
        "Stakeholder Collaboration: Aligning user expectations with development implementation through structured communication.",
        "Data Migration: Understanding legacy data structures and ensuring consistency during migration.",
        "System Integration: Identifying information exchange requirements between interconnected systems.",
        "Problem Solving: Investigating data and reporting discrepancies through structured analysis.",
      ],
    },
  },

  {
    id: 2,
    images: [sib1],
    title: "Enterprise Retirement & Employee Development System",
    description:
      "An integrated enterprise module for managing employee retirement programs, learning activities, and related administrative processes within an existing Human Capital platform.",

    link: "",

    technologies: ["Spring Boot 4", "Vue.js", "PostgreSQL"],

    detailSlug: "enterprise-retirement-employee-development",

    analysisVisuals: [
      {
        src: sib2,
        title: "Assessment Program Flow Diagram",
        description:
          "An illustrative use case diagram outlining the assessment program workflow, including participant registration, assessment activities, evaluation, and result management.",
        alt: "Use case diagram illustrating assessment program registration, evaluation activities, and assessment result management",
        type: "Use Case Diagram",
      },
      {
        src: sib3,
        title: "Spiritual Program Flow Diagram",
        description:
          "An illustrative use case diagram describing the spiritual development program workflow, including participant involvement, program activities, and progress monitoring.",
        alt: "Use case diagram illustrating spiritual development program activities, participant involvement, and program monitoring",
        type: "Use Case Diagram",
      },
      {
        src: sib5,
        title: "Assessment Program Use Case Diagram",
        description:
          "A use case diagram illustrating the interactions between employees and system administrators throughout the assessment program, from participation to evaluation and reporting.",
        alt: "Use case diagram showing employee and administrator interactions within the assessment program",
        type: "Use Case Diagram",
      },
      {
        src: sib4,
        title: "Spiritual Program Use Case Diagram",
        description:
          "A use case diagram illustrating the interactions between employees and system administrators in managing spiritual development programs, activities, and participation records.",
        alt: "Use case diagram showing employee and administrator interactions in spiritual development program management",
        type: "Use Case Diagram",
      },
    ],

    caseStudy: {
      title: "Enterprise Retirement & Employee Development System",

      summary:
        "A system analysis case study focused on integrating a standalone retirement management application into an existing enterprise Human Capital platform. The project involves business process analysis, database design, and cross-module data integration to support centralized retirement program management.",

      category: "SYSTEM ANALYSIS CASE STUDY",
      status: "In Progress",
      period: "2026 – Present",
      role: "System Analyst, Database Engineer",

      metadata: [
        ["Team", "Cross-functional team"],
        [
          "Tools",
          "System Specifications, UI/UX Mockups, ERD, Database Design, Data Modeling, Database Views, SQL",
        ],
      ],

      overview:
        "The project focuses on integrating an existing retirement management application into an enterprise Human Capital platform. The module brings together retirement program management, employee assessment information, learning activities, and related administrative processes. It also utilizes data from existing platform modules to support a more integrated and consistent information environment.",

      problemStatement: [
        "The existing retirement management application operated separately from the broader enterprise platform.",
        "Integrating the functionality required an understanding of existing system structures, data sources, and dependencies.",
        "Information from several existing modules needed to be identified and made available to support the new module's functionality.",
        "The new module needed to align with established business processes and data management practices within the enterprise platform.",
      ],

      objectives: [
        "Integrate retirement management functionality into the existing enterprise platform.",
        "Adapt existing business processes to the platform's established environment.",
        "Provide centralized management of retirement-related programs and activities.",
        "Utilize relevant employee and operational data from existing modules.",
        "Improve data consistency and integration across the enterprise ecosystem.",
      ],

      scopeItems: [
        "Program Management: Management of retirement-related programs and supporting master data.",
        "Assessment & Interest Mapping: Utilization of employee assessment information to support program planning and recommendations.",
        "Learning Management: Management of retirement learning activities and related administrative processes.",
        "Participant Administration: Management of participant registration and supporting information.",
        "Approval Management: Coordination of administrative approval processes.",
        "Reporting & Monitoring: Monitoring of program activities and implementation progress.",
        "Cross-Module Integration: Integration of relevant information from existing enterprise modules.",
      ],

      myContributions: [
        "Requirement Gathering & Business Analysis: Gathered stakeholder requirements, analyzed existing business processes, and translated operational needs into functional specifications.",
        "UI/UX Mockup & Requirement Validation: Prepared interface mockups based on business requirements and coordinated design reviews with stakeholders before development.",
        "Database Design & Data Modeling: Designed database structures and entity relationships based on functional requirements and approved interface designs.",
        "Existing System & Database Analysis: Studied relevant database structures and data relationships within the existing enterprise platform to identify dependencies and reusable data sources.",
        "Cross-Module Data Integration: Analyzed data requirements from existing modules, identified required fields and relationships based on approved mockups, and prepared database views for data consumption.",
        "Development Coordination: Communicated functional requirements, data dependencies, and expected system behavior to developers while monitoring implementation progress.",
        "Project Coordination: Coordinated stakeholder communication, followed up on implementation findings, and supported the project throughout its development.",
      ],

      processSteps: [
        "Requirement Gathering & Business Analysis",
        "Existing System & Database Analysis",
        "Business Process Modeling",
        "UI/UX Mockup & Stakeholder Validation",
        "Database Design & Data Integration Planning",
        "Development Coordination & Implementation Review",
      ],

      architecture: [
        "Enterprise Platform: Provides the existing application environment for integrated retirement management functionality.",
        "Retirement Management Module: Handles retirement-related programs and administrative processes.",
        "Existing Data Sources: Provides relevant employee, assessment, learning, and certification information.",
        "Database Layer: Supports module-specific data management and relationships.",
        "Data Integration Layer: Uses structured database views to provide relevant information from existing modules.",
      ],

      dataModel: [
        "Program Management: Data related to program configuration and administration.",
        "Participant Management: Employee and participant information required by retirement processes.",
        "Assessment Information: References and results used to support program-related information needs.",
        "Learning & Certification: Data related to learning activities and certification outcomes.",
        "Administrative Records: Registration, approval, and supporting document information.",
        "Integration Data: Structured information from existing enterprise modules made available through database views.",
      ],

      apiExample: null,

      apiDescription:
        "The project involves cross-module data integration within an existing enterprise platform. Relevant data structures are analyzed and database views are prepared to provide the information required by the retirement management module. Specific internal database objects and integration implementation details are excluded.",

      decisions: [
        {
          title: "Integration Within the Existing Enterprise Platform",
          description:
            "The retirement management functionality was developed as an integrated module rather than as an independent application, aligning with the platform's centralized system environment.",
        },
        {
          title: "Mockup-Driven Data Analysis",
          description:
            "Approved interface mockups were used as references to identify required information, determine data fields, and define the structure of database views.",
        },
        {
          title: "Utilization of Existing Data Sources",
          description:
            "Relevant database structures from existing modules were analyzed to identify available information and support cross-module data integration.",
        },
        {
          title: "Alignment Between Business and Technical Requirements",
          description:
            "Functional requirements, data dependencies, and implementation expectations were coordinated with developers to maintain consistency between business needs and technical implementation.",
        },
      ],

      validationNote:
        "This case study presents an anonymized overview of the system analysis, database design, and integration activities performed during the development of an enterprise module. Internal platform structures, database object names, detailed business rules, and confidential implementation materials are excluded.",

      acceptanceCriteria:
        "The retirement management module supports its intended business processes within the existing enterprise platform. Relevant data from existing modules can be accessed through the prepared data structures, and the module's functionality is aligned with approved requirements and interface designs.",

      validationDescription:
        "Requirements and interface mockups were reviewed with stakeholders before development. Database and integration requirements were analyzed against approved designs and relevant existing platform structures, then coordinated with developers during implementation.",

      takeaways: [
        "Enterprise System Analysis: Developing functionality within an established platform requires understanding existing structures and dependencies.",
        "Database Design: Translating business and interface requirements into appropriate data structures and relationships.",
        "Cross-Module Integration: Identifying relevant data sources and preparing structured access to information across existing modules.",
        "Mockup-Driven Analysis: Using approved interface designs as references for defining data requirements.",
        "Business & Technical Coordination: Bridging stakeholder expectations and developer implementation through clear functional and data requirements.",
      ],
    },
  },

  {
    id: 3,
    images: [eve1],
    title: "Enterprise Procurement & Vendor Lifecycle Platform",
    description:
      "An enterprise platform for managing vendor information, documentation, verification, and procurement-related activities through integration with existing enterprise systems.",

    link: "",

    technologies: ["Java EE", "Spring 5", "Oracle Database"],

    detailSlug: "enterprise-procurement-vendor-lifecycle",

    analysisVisuals: [
      {
        src: eve2,
        title: "Employee Development Use Case",
        description:
          "An illustrative use case diagram showing employee registration, development program participation, assessment, and competency evaluation workflows.",
        alt: "Use case diagram illustrating employee development program participation and competency assessment workflows",
        type: "Use Case Diagram",
      },
      {
        src: eve3,
        title: "Employee Registration Page",
        description:
          "An overview of the employee registration interface, illustrating how employee information is recorded and managed within the development platform.",
        alt: "Employee registration interface for employee development and management system",
        type: "Application Interface",
      },
      {
        src: eve4,
        title: "CSMS Assessment Page",
        description:
          "An overview of the assessment interface used to support employee evaluation, competency assessment, and development program monitoring.",
        alt: "Employee assessment interface supporting competency evaluation and development monitoring",
        type: "Application Interface",
      },
    ],

    caseStudy: {
      title: "Enterprise Procurement & Vendor Lifecycle Platform",

      summary:
        "A system analysis case study focused on developing an integrated vendor management platform. The system centralizes vendor administration and provides connectivity with existing procurement, contract management, and approval systems.",

      category: "SYSTEM ANALYSIS CASE STUDY",
      status: "On Production",
      period: "2026",
      role: "System Analyst",

      metadata: [
        ["Team", "Cross-functional team"],
        [
          "Tools",
          "System Specifications, UI/UX Mockups, Use Case Diagrams, Activity Diagrams, Database Design, API Documentation",
        ],
      ],

      overview:
        "The platform is designed to manage vendor-related activities within an enterprise procurement environment. It supports vendor information management, document administration, verification, procurement information, and contract monitoring. The platform also connects with existing enterprise applications to provide a more integrated vendor management experience.",

      problemStatement: [
        "Vendor-related information and activities involve multiple processes that need to be managed within a centralized platform.",
        "Existing procurement and contract management applications operate as separate systems, creating integration requirements for information exchange.",
        "Approval processes need to be connected with an existing enterprise approval platform.",
        "Developing the platform requires understanding existing application workflows, data structures, and integration dependencies.",
      ],

      objectives: [
        "Provide centralized management of vendor-related information and activities.",
        "Support vendor administration and document management processes.",
        "Improve visibility into procurement-related information and vendor activities.",
        "Integrate relevant information from existing procurement and contract management systems.",
        "Connect approval processes with the existing enterprise approval platform.",
      ],

      scopeItems: [
        "Vendor Management: Management of vendor profiles and supporting information.",
        "Document Management: Administration of vendor documents and verification activities.",
        "Procurement Information: Access to procurement and bidding-related information.",
        "Contract Monitoring: Access to relevant purchase order and contract information.",
        "Vendor Monitoring: Monitoring of vendor status and related administrative activities.",
        "System Integration: Integration with existing procurement, contract management, and approval applications.",
      ],

      myContributions: [
        "Requirement Analysis: Gathered and analyzed stakeholder requirements and translated business needs into functional specifications.",
        "UI/UX Mockup & Requirement Validation: Prepared interface mockups and coordinated design reviews with stakeholders before development.",
        "System Documentation: Prepared system workflows, functional specifications, and supporting technical documentation.",
        "System & Data Analysis: Analyzed business processes, data requirements, and dependencies involving existing enterprise applications.",
        "Cross-System Integration Analysis: Analyzed integration requirements between the vendor management platform, existing procurement and contract systems, and the enterprise approval platform.",
        "API Integration Documentation: Coordinated integration requirements and information exchange specifications with developers.",
        "Development Coordination: Communicated functional requirements, integration dependencies, and expected system behavior to developers.",
        "Project Coordination: Coordinated stakeholder communication, followed up on implementation findings, and monitored development progress.",
      ],

      processSteps: [
        "Requirement Gathering & Business Analysis",
        "Existing System & Process Analysis",
        "UI/UX Mockup & Stakeholder Validation",
        "System Documentation & Integration Analysis",
        "Development Coordination",
        "Testing & Implementation Review",
      ],

      architecture: [
        "Vendor Management Platform: Provides centralized functionality for vendor administration and related activities.",
        "Procurement Integration: Connects with existing procurement applications to exchange relevant procurement information.",
        "Contract Integration: Connects with existing contract management applications to retrieve relevant contract-related information.",
        "Approval Integration: Connects with an existing enterprise approval platform to support integrated approval workflows.",
        "Database Layer: Manages vendor-related information and application data.",
      ],

      dataModel: [
        "Vendor Information: General vendor profiles and administrative information.",
        "Document Management: Vendor documents and verification-related information.",
        "Procurement Information: Data associated with procurement activities.",
        "Contract Information: Purchase order and contract-related information.",
        "Approval Records: Information required to support approval processes.",
        "Integration Data: Information exchanged between the vendor management platform and connected enterprise systems.",
      ],

      apiExample: null,

      apiDescription:
        "The platform requires integration with existing procurement, contract management, and approval applications. API-based communication is used to support relevant information exchange and approval workflow connectivity. Specific endpoints, payload structures, and internal integration configurations are excluded from this portfolio.",

      decisions: [
        {
          title: "Integration with Existing Enterprise Applications",
          description:
            "The platform was designed to work alongside existing procurement and contract management applications rather than duplicating their core functionality. Integration requirements were analyzed to determine how relevant information could be exchanged between systems.",
        },
        {
          title: "Centralized Vendor Information Management",
          description:
            "Vendor-related information and administrative activities were organized within a centralized platform to provide a more consistent management experience.",
        },
        {
          title: "Integration with the Existing Approval Platform",
          description:
            "Approval workflow integration was analyzed to connect relevant business processes with the organization's existing approval platform.",
        },
        {
          title: "Alignment Between Business Processes and System Integration",
          description:
            "Business requirements and integration dependencies were coordinated with developers to ensure that the platform's functionality aligned with existing enterprise processes.",
        },
      ],

      validationNote:
        "This case study presents an anonymized overview of the system analysis and integration activities performed during development. Internal business rules, application configurations, database structures, API specifications, and confidential implementation details are excluded.",

      acceptanceCriteria:
        "The platform supports its intended vendor management functionality and provides the required connectivity with existing procurement, contract management, and approval applications.",

      validationDescription:
        "Functional requirements, interface mockups, and integration needs were analyzed and coordinated with stakeholders and developers during the development process.",

      takeaways: [
        "Enterprise System Analysis: Understanding existing applications and their dependencies before introducing new functionality.",
        "System Integration: Analyzing information exchange and workflow connectivity across multiple enterprise applications.",
        "Requirements Engineering: Translating stakeholder needs into functional specifications and implementation guidance.",
        "Stakeholder Collaboration: Aligning business expectations with technical implementation across different systems.",
        "Integration Planning: Identifying dependencies and coordination requirements when developing within an existing enterprise ecosystem.",
      ],
    },
  },

  {
    id: 4,
    images: [boff1],
    title: "Integrated Digital Office & Workflow Platform",
    description:
      "A digital office platform designed to streamline correspondence management, document workflows, and internal communication through integrated administrative processes.",
    link: "",
    technologies: [
      "Java 8",
      "Spring Boot 2",
      "Oracle Database 11",
      "RESTful JSON",
      "LDAP",
    ],
    detailSlug: "integrated-digital-office-workflow-platform",

    analysisVisuals: [
      {
        src: boff2,
        title: "Incoming Letter Use Case Diagram",
        description:
          "An illustrative use case diagram outlining the incoming letter management workflow, including document registration, verification, distribution, disposition, and follow-up processing.",
        alt: "Use case diagram illustrating incoming letter registration, verification, distribution, and disposition workflows",
        type: "Use Case Diagram",
      },
      {
        src: boff3,
        title: "Dashboard Page",
        description:
          "An overview of the application dashboard, presenting key information, workflow summaries, and document processing activities to support centralized office administration.",
        alt: "Digital office application dashboard displaying workflow summaries and document processing information",
        type: "Application Interface",
      },
      {
        src: boff4,
        title: "Incoming Letter Detail Page",
        description:
          "An overview of the incoming letter detail interface, displaying document information, processing status, disposition records, and related workflow activities.",
        alt: "Incoming letter detail interface displaying document information, disposition records, and workflow status",
        type: "Application Interface",
      },
    ],
    caseStudy: {
      title: "Integrated Digital Office & Workflow Platform",
      summary:
        "A centralized digital correspondence platform that supports incoming and outgoing document management, workflow distribution, follow-up activities, and electronic document signing through integration with existing enterprise systems.",
      category: "SYSTEM ANALYSIS CASE STUDY",
      status: "On Production",
      period: "2025 – 2026",

      metadata: [
        ["Role", "System Analyst"],
        ["Team", "Cross-functional team"],
        [
          "Tools",
          "System Specifications, UI/UX Mockups, Use Case Diagrams, Activity Diagrams, Database Design, API Documentation",
        ],
      ],

      overview:
        "The project focuses on digitizing office administration and correspondence processes within an enterprise environment. The platform provides centralized management of incoming and outgoing correspondence, document distribution, disposition workflows, follow-up activities, and correspondence monitoring. It also supports document approval and electronic signing through integration with existing enterprise applications.",

      problemStatement:
        "Office correspondence processes require coordination across multiple organizational roles and administrative activities. Managing document distribution, approval, follow-up, and tracking through separate or manual processes can make it difficult to maintain visibility and consistency. The development also requires careful analysis of existing enterprise systems, organizational data sources, authentication services, and document-signing capabilities to ensure the new platform works within the existing system environment.",

      objectives: [
        "Centralize incoming and outgoing correspondence management.",
        "Digitize document distribution, disposition, and follow-up workflows.",
        "Improve visibility into correspondence status and activity history.",
        "Support standardized document creation through reusable templates.",
        "Connect correspondence processes with existing enterprise services.",
        "Improve administrative efficiency and document traceability.",
      ],

      scopeItems: [
        "Incoming and outgoing correspondence management.",
        "Document creation and template management.",
        "Document distribution and disposition workflows.",
        "Follow-up activities and correspondence tracking.",
        "Organizational and user reference data management.",
        "Role-based access control and application security.",
        "Email and in-application notifications.",
        "Electronic document signing integration.",
      ],

      myContributions: [
        "Conducted requirement gathering and analysis to translate stakeholder needs into functional system requirements.",
        "Prepared UI/UX mockups and facilitated stakeholder reviews to validate proposed workflows and application interfaces.",
        "Analyzed existing business processes and translated them into system workflows, use cases, and supporting technical documentation.",
        "Analyzed database structures and data requirements to support application features and integration needs.",
        "Analyzed integration requirements between the platform and existing enterprise systems, including authentication, employee reference data, and electronic document signing services.",
        "Prepared supporting system documentation and integration specifications for the development team.",
        "Coordinated with developers to clarify requirements, workflows, validations, and expected system behavior.",
        "Monitored implementation progress and facilitated communication between stakeholders and the development team.",
      ],

      processSteps: [
        "Requirement Gathering: Identified stakeholder needs, existing administrative processes, and system expectations.",
        "Business Process Analysis: Reviewed correspondence workflows and translated operational activities into structured system processes.",
        "UI/UX Design: Prepared application mockups and validated proposed interfaces with stakeholders.",
        "System Analysis & Documentation: Defined functional requirements, use cases, workflows, data requirements, and integration needs.",
        "Integration Analysis: Examined dependencies and data exchange requirements involving existing enterprise services.",
        "Development Coordination: Communicated requirements and clarified implementation details with developers.",
        "Review & Validation: Supported stakeholder reviews and evaluated implementation against the agreed requirements.",
      ],

      requirements: [],

      businessRules: [],

      architecture: [
        "Presentation Layer: Web-based interfaces for correspondence management and administrative activities.",
        "Application Layer: Business logic for document management, correspondence workflows, notifications, and access control.",
        "Data Layer: Oracle-based data storage for application records and correspondence information.",
        "Enterprise Integration Layer: Communication with existing authentication, employee data, and electronic signing services.",
        "Notification Services: Email and in-application notifications for relevant workflow activities.",
      ],

      dataModel: [
        "Correspondence Management: Core information related to incoming and outgoing documents.",
        "Document Management: Document files, attachments, and reusable document templates.",
        "Workflow Management: Distribution, disposition, follow-up, and activity history.",
        "Organizational Data: Employee references and organizational structures.",
        "Access Management: User accounts, roles, and permission configurations.",
        "Integration Records: References and status information exchanged with connected enterprise services.",
        "Notification Records: User notifications and communication history.",
      ],

      apiExample: null,

      apiDescription:
        "The platform uses RESTful JSON web services to communicate with connected enterprise applications. One of the key integration areas is electronic document signing, allowing correspondence documents to be processed through an existing signing service. Authentication and employee reference data are also aligned with existing enterprise services. Internal endpoints, payload structures, and integration configurations are excluded from this public case study.",

      decisions: [
        {
          title: "Integration with Existing Enterprise Systems",
          description:
            "Integration requirements were analyzed to ensure the platform could work with existing authentication services, employee data sources, and document-signing capabilities.",
        },
        {
          title: "Centralized Correspondence Management",
          description:
            "Incoming and outgoing correspondence activities were organized within a centralized platform to improve document visibility and traceability.",
        },
        {
          title: "Structured Document Workflows",
          description:
            "Document distribution, approval, and follow-up activities were modeled as structured workflows to support consistent administrative processes.",
        },
        {
          title: "Template-Based Document Creation",
          description:
            "Reusable document templates were incorporated into the analysis to support more consistent document preparation and administration.",
        },
        {
          title: "Alignment Between Business and Technical Requirements",
          description:
            "Business expectations, existing system dependencies, and technical considerations were translated into requirements that could be understood and implemented by the development team.",
        },
      ],

      validationNote:
        "This case study uses an anonymized project name and presents the system at a conceptual level. Client-specific workflows, internal business rules, database schemas, production data, and integration configurations are intentionally excluded.",

      acceptanceCriteria:
        "The platform supports centralized correspondence management, structured document workflows, user access control, activity tracking, and integration with relevant enterprise services.",

      validationDescription:
        "Requirements and proposed workflows were analyzed, translated into application mockups and system documentation, and reviewed with stakeholders. Integration requirements and implementation progress were also coordinated with the development team.",

      takeaways: [
        "Enterprise system analysis and requirements engineering.",
        "Business process modeling for administrative workflows.",
        "System integration analysis across existing enterprise applications.",
        "Document management and workflow design.",
        "Database and organizational data analysis.",
        "Stakeholder communication and development coordination.",
      ],
    },
  },

  {
    id: 5,
    images: [mleb1],
    title: "Museum Services & Booking Management System",
    description:
      "An integrated digital platform combining a public-facing museum website and an internal management application to support visitor services, booking operations, marketing activities, and museum management.",
    link: "",
    technologies: [
      "PHP",
      "Laravel",
      "PostgreSQL",
      "JavaScript",
      "jQuery",
      "AJAX",
      "Apache",
    ],
    detailSlug: "museum-services-booking-management-system",

    analysisVisuals: [
      {
        src: mleb2,
        title: "Visitor Booking Custom Facilities Activity Diagram",
        description:
          "An activity diagram illustrating the visitor booking workflow for customized museum facilities, including booking requests, availability checks, reservation processing, and booking confirmation.",
        alt: "Activity diagram illustrating visitor booking requests, facility availability checks, reservation processing, and booking confirmation",
        type: "Activity Diagram",
      },
      {
        src: mleb3,
        title: "Marketing Create Transaction Activity Diagram",
        description:
          "An activity diagram outlining the marketing transaction creation process, including transaction input, booking information verification, and transaction record management.",
        alt: "Activity diagram illustrating marketing transaction creation, booking information verification, and transaction record management",
        type: "Activity Diagram",
      },
      {
        src: mleb4,
        title: "Check-in, Check-out, & Review Process Activity Diagram",
        description:
          "An activity diagram illustrating the visitor service lifecycle, covering check-in verification, facility usage, check-out processing, and visitor review submission.",
        alt: "Activity diagram illustrating visitor check-in, facility usage, check-out processing, and review submission",
        type: "Activity Diagram",
      },
      {
        src: mleb5,
        title: "Visitor Booking Use Case Diagram",
        description:
          "A use case diagram describing visitor interactions with the booking platform, including facility exploration, reservation requests, booking management, and transaction-related activities.",
        alt: "Use case diagram illustrating visitor interactions with museum facility booking and reservation management features",
        type: "Use Case Diagram",
      },
      {
        src: mleb6,
        title: "Catalog Page",
        description:
          "An overview of the museum catalog interface, presenting available facilities, visitor services, and relevant information to support facility exploration and booking decisions.",
        alt: "Museum catalog interface displaying available facilities, visitor services, and booking information",
        type: "Application Interface",
      },
    ],
    caseStudy: {
      title: "Museum Services & Booking Management System",
      summary:
        "Development of an integrated digital ecosystem consisting of a public website and an internal management application. The platform supports visitor information and booking services while providing internal teams with tools to manage products, transactions, marketing activities, and operational performance.",
      category: "Web Application",
      status: "On Production",
      period: "2025 - 2026",
      role: "System Analyst",
      metadata: [
        ["Team", "Cross-functional team"],
        [
          "Tools",
          "System Specifications, UI/UX Mockups, Use Case Diagrams, Activity Diagrams, Database Design, API Documentation",
        ],
      ],

      overview:
        "The project involved developing a digital platform for museum services and internal operations. The public website allows visitors to explore museum information, browse available facilities and programs, register for events, make bookings, complete payments, and manage their transactions. Meanwhile, the internal management application supports staff in managing content, products and services, marketing activities, bookings, schedules, and operational analytics.",

      problemStatement:
        "Museum services and internal operational activities required a digital platform that could accommodate different user needs. Visitors needed an accessible channel to explore services and make bookings, while internal teams needed centralized tools to manage offerings, monitor transactions, organize marketing activities, and review operational performance. The project also involved evolving requirements and business processes that were not fully established at the beginning, requiring continuous clarification and alignment with stakeholders.",

      objectives: [
        "Provide a public digital platform for presenting museum information and available services.",
        "Enable visitors to explore offerings, register for events, and make online bookings.",
        "Provide internal tools for managing museum content, products, services, and operational data.",
        "Support transaction monitoring and booking management through a centralized application.",
        "Improve visibility of marketing and operational performance through dashboards and reports.",
      ],

      scopeItems: [
        "Public Museum Website: Landing page, museum information, events, news, educational props, and FAQ.",
        "Service Catalog: Information and catalog of accommodation, meeting rooms, other facilities, educational programs, and souvenirs.",
        "Visitor Account: Registration, login, user dashboard, transaction history, reviews, and profile management.",
        "Online Booking: Booking facilities, programs, and souvenirs, including package selection, additional services, promotions, payment, and invoice generation.",
        "User & Access Management: Internal user administration, role-based access, and activity history.",
        "Master Data & Content Management: Management of reference data, homepage content, news, and website information.",
        "Product & Service Management: Management of facilities, programs, souvenirs, add-ons, attractions, attraction bundles, and events.",
        "Marketing Management: Promotion, canvassing, and exhibition management.",
        "Transaction Management: Booking monitoring, transaction creation, payment confirmation, and guide assignment.",
        "Calendar & Scheduling: Facility availability, visitor schedules, events, canvassing, and exhibition calendars.",
        "Dashboard Analytics: Revenue, program performance, facility utilization, and marketing performance monitoring.",
      ],

      myContributions: [
        "Gathered and analyzed requirements through discussions and clarification sessions with stakeholders.",
        "Analyzed business processes across visitor-facing services and internal museum operations.",
        "Identified user roles, access requirements, functional needs, and system boundaries.",
        "Translated business requirements into system workflows, functional specifications, and application requirements.",
        "Prepared interface mockups and process documentation as references for development.",
        "Presented proposed workflows and interface designs to stakeholders for review and validation.",
        "Analyzed data requirements and relationships to support application functionality and operational reporting.",
        "Coordinated with developers to communicate requirements, clarify expected system behavior, and resolve implementation questions.",
        "Monitored development progress and maintained communication with stakeholders regarding requirements and design adjustments.",
        "Supported testing activities by clarifying expected behavior and reviewing implementation against agreed requirements.",
      ],

      processSteps: [
        "Requirement Gathering: Collected information about visitor services, booking activities, marketing processes, and internal museum operations.",
        "Business Process Analysis: Identified user needs, operational workflows, responsibilities, and functional requirements for both applications.",
        "System Design: Translated requirements into application workflows, interface mockups, functional specifications, and data requirements.",
        "Stakeholder Validation: Presented proposed designs and workflows to stakeholders to clarify requirements and confirm operational alignment.",
        "Development Coordination: Communicated system requirements and clarified implementation details with developers throughout development.",
        "Testing & Evaluation: Supported testing activities and reviewed system behavior against validated requirements.",
      ],

      requirements: [
        "Visitors can access museum information, events, news, educational content, and available services through the public website.",
        "Visitors can browse and filter available facilities, programs, and souvenirs.",
        "Visitors can register, log in, manage their profiles, and access their transaction history.",
        "Visitors can submit bookings, select available service options, complete payments, and obtain invoices.",
        "Visitors can submit reviews for completed transactions and museum experiences.",
        "Internal users can manage user accounts, roles, reference data, and activity history.",
        "Internal users can manage website content, products, services, and promotional offerings.",
        "Internal users can monitor transactions, manage bookings, and organize operational schedules.",
        "Internal users can manage marketing activities, including canvassing and exhibitions.",
        "Management can review operational performance through dashboard analytics and reports.",
      ],

      businessRules: [],

      architecture: {
        description:
          "The system is organized into two application interfaces with different responsibilities. The public website provides visitor-facing information and transaction functionality, while the internal management application supports administrative and operational activities. Based on the documented technology stack, the applications use a Laravel and PHP application layer, PostgreSQL for data storage, and Apache as the web server. This is a logical representation of the documented application structure; the manuals do not specify the physical deployment topology or detailed communication architecture between the two applications.",
        components: [
          "Public Website: Provides museum information, service catalogs, event registration, visitor accounts, booking, payment, invoice, and review functionality.",
          "Internal Management Application: Provides administrative functionality for managing users, content, master data, products, services, transactions, marketing, and operational schedules.",
          "Application Layer: Processes application requests and implements the business functionality of the web applications.",
          "Data Layer: Stores information required for visitor services, transactions, content, reference data, and internal operations.",
          "Web Server: Handles web application delivery and incoming requests.",
        ],
        designConsiderations: [
          "Separation of User Responsibilities: Public visitors and internal staff access different application interfaces according to their needs.",
          "Centralized Management: Internal operational functions are grouped into modules to support administration and monitoring.",
          "Service and Product Flexibility: Facilities and programs support multiple packages and additional offerings.",
          "Transaction Visibility: Booking and payment information can be monitored through transaction management and user dashboards.",
          "Operational Monitoring: Calendar views and analytics support the monitoring of facilities, programs, and marketing activities.",
          "Role-Based Access: Application features are controlled according to user roles and assigned permissions.",
        ],
      },

      dataModel: null,

      apiExample: null,

      apiDescription: "",

      decisions: [
        {
          title: "Separate Public and Internal Applications",
          description:
            "The platform was organized into a public website and an internal management application to accommodate different user needs and operational responsibilities.",
        },
        {
          title: "Modular Operational Management",
          description:
            "Internal functionality was organized into dedicated modules covering user management, content, products and services, marketing, transactions, and scheduling.",
        },
        {
          title: "Flexible Product and Service Configuration",
          description:
            "Facilities and programs were designed to support multiple packages, physical facility units, and additional service offerings.",
        },
        {
          title: "Centralized Transaction Monitoring",
          description:
            "Booking and payment activities were made accessible through transaction management, supported by calendar views for operational monitoring.",
        },
        {
          title: "Iterative Requirement Validation",
          description:
            "Evolving requirements and initially unclear business processes required continuous clarification and stakeholder validation throughout development.",
        },
      ],

      validationNote:
        "One of the main challenges was that client requirements continued to evolve while some business processes were not fully established at the beginning of the project. This required repeated clarification, process exploration, and design adjustments to ensure that the proposed system remained aligned with actual operational needs.",

      acceptanceCriteria: [
        "The public website provides visitors with access to museum information and available services.",
        "Visitors can access account functionality and complete the documented booking process.",
        "Visitors can review their transactions and access generated invoices.",
        "Internal users can manage relevant content, reference data, products, and services.",
        "Internal users can monitor bookings and manage operational activities.",
        "Marketing activities and schedules can be managed through the internal application.",
        "Dashboard analytics provide visibility into revenue, program performance, facility utilization, and marketing activities.",
      ],

      validationDescription:
        "Requirements and interface designs were reviewed with stakeholders before and during development. Testing activities were also conducted with museum users to review application functionality and ensure that the implemented features aligned with the documented requirements and operational expectations.",

      takeaways: [
        "Gained experience in business process discovery when operational workflows are not fully established.",
        "Improved the ability to manage evolving requirements through structured clarification, impact analysis, and stakeholder validation.",
        "Strengthened system analysis skills across public-facing services and internal operational applications.",
        "Developed a better understanding of service catalog, booking, transaction, and operational management workflows.",
        "Improved coordination between stakeholders and developers throughout the system development lifecycle.",
      ],
    },
  },

  {
    id: 6,
    images: [udik1],
    title: "Training Facility Feasibility Inspection System",
    description:
      "A web-based facility inspection and workforce monitoring system designed to manage facility checklists, operational activities, warehouse inventory, and outsourced workforce performance assessments.",
    link: "",
    technologies: [
      "PHP",
      "Laravel",
      "PostgreSQL",
      "JavaScript",
      "jQuery",
      "AJAX",
      "Apache",
    ],
    detailSlug: "training-facility-feasibility-inspection-system",

    analysisVisuals: [
      {
        src: udik2,
        title: "Master Data Inspection Objects Page",
        description:
          "An overview of the inspection object master data interface, illustrating how inspection objects are registered, organized, and maintained to support training facility feasibility assessments.",
        alt: "Master data interface displaying inspection objects used in training facility feasibility assessments",
        type: "Application Interface",
      },
      {
        src: udik3,
        title: "Master Data Shift Schedules Page",
        description:
          "An overview of the shift schedule master data interface, presenting schedule information used to organize inspection activities and support operational planning for training facilities.",
        alt: "Master data interface displaying shift schedules for training facility inspection activities",
        type: "Application Interface",
      },
    ],
    caseStudy: {
      title: "Training Facility Feasibility Inspection System",
      summary:
        "Development of a web-based system to support facility inspection activities, checklist management, warehouse operations, and outsourced workforce performance monitoring through role-based access and centralized reporting.",

      category: "Web Application",
      status: "On Production",
      period: "2025 – 2026",
      role: "System Analyst",

      metadata: [
        ["Team", "Cross-functional team"],
        [
          "Tools",
          "System Specifications, UI/UX Mockups, Use Case Diagrams, Activity Diagrams, Database Design, API Documentation",
        ],
      ],

      overview:
        "The project focused on developing a centralized application for managing facility inspection activities and operational workforce monitoring. The system provides administrative features for managing users, access permissions, inspection categories, facilities, assessment criteria, and shift schedules. Operational personnel can access assigned checklists to inspect facilities, while management can monitor inspection progress, manage warehouse activities, and review outsourced workforce performance.",

      problemStatement:
        "Facility inspection activities require structured checklists and a consistent way to monitor completion across different facility categories. The system also needs to accommodate different operational roles and their respective access permissions. In addition, warehouse activities and outsourced workforce performance assessments require dedicated management and reporting capabilities.",

      objectives: [
        "Centralize facility inspection and checklist management.",
        "Provide role-based access for administrators and operational personnel.",
        "Enable operational personnel to perform facility inspections through a structured checklist.",
        "Support monitoring of inspection completion across facility categories.",
        "Provide management functionality for warehouse operations.",
        "Support outsourced workforce performance assessment and reporting.",
      ],

      scopeItems: [
        "Authentication & Access Management: Login, user management, role management, and checklist permissions.",
        "Inspection Dashboard: Overview of facility categories and inspection completion status.",
        "Master Data Management: Management of inspection categories, facilities, assessment objects, and shift schedules.",
        "Facility Inspection: Checklist execution by operational personnel through a scanning-based workflow.",
        "Warehouse Management: Management of warehouse data and inbound and outbound inventory activities.",
        "TAD Performance Assessment: Management of assessment categories, assessment aspects, performance reports, and exports.",
        "Audit Log: Recording and review of application activity history.",
      ],

      myContributions: [
        "Analyzed the documented business requirements and identified the functional scope of the application.",
        "Reviewed user roles and access requirements for administrative and operational personnel.",
        "Analyzed facility inspection workflows, including checklist configuration and inspection execution.",
        "Translated documented requirements into system functionality and application workflows.",
        "Prepared interface mockups and system documentation as references for development.",
        "Analyzed data requirements and relationships between inspection categories, facilities, and assessment objects.",
        "Coordinated with developers to clarify requirements and expected application behavior.",
        "Communicated with stakeholders to clarify functional requirements and resolve ambiguities during development.",
        "Monitored implementation progress and supported testing activities against the agreed requirements.",
      ],

      processSteps: [
        "Requirement Analysis: Reviewed the requirements document and identified application modules, user roles, and functional needs.",
        "Business Process Analysis: Analyzed facility inspection, checklist execution, warehouse operations, and workforce assessment workflows.",
        "System Design: Translated requirements into application workflows, interface mockups, access permissions, and data requirements.",
        "Development Coordination: Communicated functional requirements and clarified implementation details with developers.",
        "Testing & Validation: Supported functional testing and reviewed application behavior against the documented requirements.",
      ],

      requirements: [
        "Administrators can authenticate and manage application users.",
        "Administrators can configure user roles and access permissions, including permissions for inspection checklists.",
        "The dashboard displays inspection categories and their corresponding completion status.",
        "Administrators can manage inspection categories, facilities, shift schedules, and assessment objects.",
        "Assessment objects support different checklist response configurations, including options with additional remarks.",
        "Operational personnel can access the inspection dashboard, scan facilities, complete checklists, and save inspection results.",
        "The application supports warehouse data management and inbound and outbound inventory activities.",
        "The application supports management of TAD performance assessment categories and assessment aspects.",
        "Management can access performance reports and export assessment results.",
        "The application provides audit logs for activity monitoring.",
      ],

      businessRules: [
        "Inspection access is controlled through role-based permissions.",
        "The documented operational roles with checklist access include Cleaning Service, Security, and Driver.",
        "Inspection categories contain multiple facilities or inspection items.",
        "Inspection progress is represented through three dashboard states: not yet checked, partially checked, and fully checked.",
        "Shift identifiers are predefined, while working hours for each shift can be configured.",
        "Inspection checklist response configurations support different option combinations, including configurations with an additional remarks field.",
      ],

      architecture: {
        description:
          "The application can be represented through an administrative interface and an operational inspection interface. Administrators manage users, permissions, master data, and reporting, while operational personnel access the inspection workflow according to their assigned permissions. The application uses Laravel and PHP for its application layer, PostgreSQL for data storage, and Apache as the web server. This is a conceptual logical architecture based on the documented requirements and the technology information provided; detailed deployment and integration architecture are not available in the source document.",

        components: [
          "Authentication & Authorization: Handles user login, role management, and feature-level access permissions.",
          "Administrative Management: Provides management of master data, inspection configuration, warehouse activities, and workforce assessment.",
          "Inspection Management: Supports facility checklist access, inspection execution, and inspection progress monitoring.",
          "Reporting & Analytics: Provides inspection dashboards, performance reports, and data export functionality.",
          "Data Layer: Stores application information related to users, inspection configuration, operational activities, and assessment records.",
          "Web Server: Supports application delivery and incoming web requests.",
        ],

        designConsiderations: [
          "Role-Based Access Control: Application features are made available according to user roles and assigned permissions.",
          "Configurable Inspection Structure: Inspection categories, facilities, and assessment objects are managed through master data.",
          "Standardized Checklist Responses: Different checklist response configurations accommodate different inspection requirements.",
          "Inspection Progress Visibility: Dashboard status indicators help management monitor inspection completion.",
          "Centralized Operational Management: Inspection, warehouse, and workforce assessment functions are provided within one application.",
          "Reporting Support: Dashboard and export features provide access to operational and assessment information.",
        ],
      },

      dataModel: null,

      apiExample: null,

      apiDescription: "",

      keyDecisions: [
        {
          title: "Role-Based Inspection Access",
          description:
            "Checklist access is controlled through role and permission configuration, allowing inspection activities to be assigned to designated operational personnel.",
        },
        {
          title: "Configurable Inspection Structure",
          description:
            "Inspection categories, facilities, and assessment objects are managed separately to provide a structured and configurable checklist setup.",
        },
        {
          title: "Flexible Checklist Response Options",
          description:
            "Checklist configurations support different response combinations, including options that require additional remarks.",
        },
        {
          title: "Visual Inspection Progress Monitoring",
          description:
            "The dashboard uses distinct status indicators to communicate whether inspection activities have not started, are partially completed, or are fully completed.",
        },
        {
          title: "Centralized Operational Monitoring",
          description:
            "Facility inspection, warehouse management, and workforce performance assessment are accommodated within a centralized application.",
        },
      ],

      validationNote:
        "The available requirements document describes the main modules, user roles, and high-level inspection workflows. However, detailed business process documentation, complete validation scenarios, and technical integration specifications were not included in the available material.",

      acceptanceCriteria: [
        "Users can access application features according to their assigned roles and permissions.",
        "Administrators can configure inspection categories, facilities, shifts, and assessment objects.",
        "Operational personnel can perform and save facility checklist inspections.",
        "The dashboard reflects inspection completion status.",
        "Warehouse inbound and outbound activities can be managed through the application.",
        "TAD assessment categories and aspects can be managed.",
        "Performance assessment reports can be accessed and exported.",
        "Application activity history can be reviewed through audit logs.",
      ],

      validationDescription:
        "System validation should cover authentication and access permissions, master data configuration, checklist execution, inspection status updates, warehouse activities, assessment management, reporting, and audit log functionality. The available document does not provide detailed test scenarios or recorded testing results.",

      takeaways: [
        "Gained experience analyzing operational inspection workflows and translating them into structured application requirements.",
        "Developed a better understanding of role-based access control and configurable checklist systems.",
        "Strengthened skills in analyzing master data relationships and operational monitoring requirements.",
        "Gained exposure to systems combining facility inspection, inventory operations, and workforce performance assessment.",
        "Improved the ability to translate high-level requirements into functional specifications and coordinate their implementation with developers.",
      ],
    },
  },

  {
    id: 7,
    images: [ele1],
    title: "Efootball Account Ecommerce (Elegame)",
    description:
      "Elegame is an e-commerce platform for buying and selling eFootball accounts, featuring account listings, budget-based filtering, and seller dashboard analytics.",

    analysisVisuals: [
      {
        src: ele2,
        title: "Marketplace Listing Interface",
        description:
          "An overview of the marketplace interface displaying available eFootball accounts and their pricing.",
        alt: "Elegame marketplace interface displaying eFootball account listings and prices",
        type: "Application Interface",
      },
      {
        src: ele3,
        title: "Account Filtering Interface",
        description:
          "An overview of the filtering interface supporting account discovery based on budget and preferences.",
        alt: "Elegame account filtering interface with budget-based account filters",
        type: "Application Interface",
      },
      {
        src: ele4,
        title: "Seller Dashboard",
        description:
          "An overview of the seller dashboard displaying account management and sales analytics.",
        alt: "Elegame seller dashboard displaying account management and sales analytics",
        type: "Application Interface",
      },
    ],

    technologies: ["Laravel", "PHP", "PostgreSQL", "Tailwind CSS"],

    caseStudy: {
      title: "Efootball Account Ecommerce (Elegame)",
      summary:
        "Development of an e-commerce platform for buying and selling eFootball accounts, supporting account discovery, budget-based filtering, and seller-side management.",

      category: "E-commerce Platform",
      status: "Personal Project - On Production",
      period: "2026",
      role: "System Analyst, Full-Stack Developer",
      metadata: [
        ["Team", "Individual Project"],
        [
          "Tools",
          "System Specifications, UI/UX Mockups, Use Case Diagrams, Activity Diagrams, Database Design, Coding",
        ],
      ],

      overview:
        "Elegame provides a marketplace where users can explore eFootball account listings, compare account prices, and discover accounts based on their budget. The platform also includes seller-side functionality for managing listings and monitoring sales through a centralized dashboard.",

      problemStatement:
        "Finding eFootball accounts that match a specific budget and preference can be inconvenient when listings are scattered across different channels. Elegame centralizes account listings and provides filtering capabilities to simplify account discovery.",

      objectives: [
        "Provide a centralized marketplace for eFootball account listings.",
        "Enable users to discover accounts based on budget and preferences.",
        "Support account listing management and sales monitoring.",
      ],

      scopeItems: [
        "Account Marketplace: Browse available eFootball accounts and their details.",
        "Account Filtering: Filter listings based on budget and account preferences.",
        "Seller Dashboard: Manage account listings and monitor sales information.",
      ],

      myContributions: [
        "Designed and developed the e-commerce application.",
        "Implemented account listing and filtering functionality.",
        "Developed seller dashboard functionality for account management.",
        "Integrated application data management using Laravel and MySQL.",
      ],
    },
  },

  {
    id: 8,
    images: [ex1],
    title: "Explorenesia Smart Tourism",
    description:
      "Explorenesia is a smart tourism dashboard developed to analyze visitor sentiment and tourism insights across Indonesia’s super-priority destinations.",
    // link: "https://github.com/smart-tourism/web",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "MySQL",
      "Tailwind",
    ],
    analysisVisuals: [
      {
        src: ex2,
        title: "Tourism Dashboard",
        description:
          "Dashboard interface for presenting tourism-related insights and visitor statistics.",
        alt: "Explorenesia tourism dashboard interface",
        type: "Application Interface",
      },
      {
        src: ex3,
        title: "Sentiment Analysis",
        description:
          "Interface for exploring sentiment analysis results from tourism reviews.",
        alt: "Explorenesia sentiment analysis visualization",
        type: "Data Visualization",
      },
      {
        src: ex4,
        title: "Tourism Statistics",
        description: "Visualization of visitor statistics and tourism data.",
        alt: "Explorenesia tourism statistics dashboard",
        type: "Data Visualization",
      },
      {
        src: ex5,
        title: "Tourism Review Insights",
        description:
          "Interface for presenting review data collected from multiple tourism platforms.",
        alt: "Explorenesia tourism review insights",
        type: "Application Interface",
      },
      {
        src: ex6,
        title: "Destination Analysis",
        description:
          "Interface supporting exploration of tourism information across destinations.",
        alt: "Explorenesia destination analysis interface",
        type: "Application Interface",
      },
      {
        src: ex7,
        title: "Tourism Chatbot",
        description:
          "Integrated chatbot interface for interacting with tourism-related information.",
        alt: "Explorenesia tourism chatbot",
        type: "Application Interface",
      },
      {
        src: ex8,
        title: "Tourism Information Interface",
        description:
          "Additional interface supporting tourism data exploration.",
        alt: "Explorenesia tourism information interface",
        type: "Application Interface",
      },
    ],
    caseStudy: {
      title: "Explorenesia Smart Tourism",
      summary:
        "Development of a smart tourism dashboard integrating web-scraped reviews, sentiment analysis, visitor statistics, and an interactive chatbot.",
      category: "Smart Tourism & Data Analytics",
      status: "On Production - Research Project",
      period: "2024 – 2025",
      role: "System Analyst, Full-Stack Developer",
      metadata: [
        ["Team", "Cross-functional team"],
        [
          "Tools",
          "System Specifications, UI/UX Mockups, Use Case Diagrams, Activity Diagrams, Database Design, API Documentation",
        ],
      ],
      overview:
        "Explorenesia provides a centralized platform for analyzing tourism-related information from Indonesia’s super-priority destinations. The system combines review data collection, sentiment analysis, tourism statistics, and chatbot functionality to support tourism insight exploration.",
      problemStatement:
        "Tourism insights are distributed across multiple review platforms, making it difficult to analyze visitor sentiment and tourism trends in one place.",
      objectives: [
        "Centralize tourism review data from multiple platforms.",
        "Present sentiment analysis and visitor statistics through visualizations.",
        "Provide an integrated chatbot for tourism-related information.",
      ],
      scopeItems: [
        "Tourism review data collection through web scraping.",
        "Sentiment analysis and tourism statistics visualization.",
        "Integrated tourism chatbot.",
      ],
      myContributions: [
        "Developed the web application using Next.js and React.",
        "Integrated tourism data presentation and analysis interfaces.",
        "Implemented application components using TypeScript.",
      ],
    },
  },

  {
    id: 9,
    images: [dis1],
    title:
      "Sistem Informasi Bantuan, Fasilitasi, dan Pelatihan bagi IKM (Situansilat)",
    description:
      "Situansilat is a dashboard system for managing assistance, facilitation, and training data for local SMEs, with multi-sheet Excel reporting capabilities.",
    // link: "https://github.com/Ongghuen/diskoperindag-web",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind", "Bootstrap"],
    analysisVisuals: [
      {
        src: dis2,
        title: "Dashboard Interface",
        description:
          "Dashboard interface for accessing and managing SME-related information.",
        alt: "Situansilat dashboard interface",
        type: "Application Interface",
      },
      {
        src: dis3,
        title: "SME Data Management",
        description:
          "Interface for managing data related to SME assistance and facilitation.",
        alt: "Situansilat SME data management interface",
        type: "Application Interface",
      },
      {
        src: dis4,
        title: "Training Management",
        description:
          "Interface supporting the management of SME training information.",
        alt: "Situansilat training management interface",
        type: "Application Interface",
      },
      {
        src: dis5,
        title: "Excel Reporting",
        description:
          "Reporting functionality supporting detailed multi-sheet Excel exports.",
        alt: "Situansilat Excel reporting interface",
        type: "Application Interface",
      },
    ],
    caseStudy: {
      title: "Situansilat",
      summary:
        "Development of an SME information management dashboard supporting assistance, facilitation, training records, and detailed Excel reporting.",
      category: "Government Information System",
      status: "On Production - Semester Project",
      period: "2024",
      role: "System Analyst, Full-Stack Developer",
      metadata: [
        ["Team", "Cross-functional team"],
        ["Tools", "System Development, Data Management, Excel Reporting"],
      ],
      overview:
        "Situansilat is an information management system developed to support the administration of assistance, facilitation, and training programs for local SMEs (IKM). The platform centralizes SME-related records and provides reporting capabilities to support administrative activities.",
      problemStatement:
        "Managing SME assistance, facilitation, and training information requires structured data management and reliable reporting capabilities to support administrative activities.",
      objectives: [
        "Centralize SME assistance, facilitation, and training information.",
        "Support structured management of SME-related records.",
        "Provide detailed Excel exports for reporting purposes.",
      ],
      scopeItems: [
        "SME assistance data management.",
        "SME facilitation data management.",
        "SME training information management.",
        "Multi-sheet Excel reporting.",
      ],
      myContributions: [
        "Developed the web application using Laravel and PHP.",
        "Implemented SME-related data management functionality.",
        "Developed Excel export functionality with multi-sheet support.",
        "Integrated dashboard and reporting interfaces.",
      ],
    },
  },

  {
    id: 10,
    images: [su1],
    title: "Mabel Sumber Rejeki Ecommerce (Suki)",
    description:
      "Suki is an e-commerce admin dashboard for managing product listings, tracking transaction statuses, generating sales reports, and analyzing performance. Designed to support daily operations and decision-making for the Mabel Sumber Rejeki platform.",
    // link: "https://github.com/Ongghuen/suki-web-backend",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    analysisVisuals: [
      {
        src: su2,
        title: "Product Management",
        description: "Admin interface for managing product listings.",
        alt: "Suki product management interface",
        type: "Application Interface",
      },
      {
        src: su3,
        title: "Transaction Management",
        description:
          "Interface for monitoring and managing transaction statuses.",
        alt: "Suki transaction management interface",
        type: "Application Interface",
      },
      {
        src: su4,
        title: "Sales Reporting",
        description: "Interface supporting sales report generation.",
        alt: "Suki sales reporting interface",
        type: "Application Interface",
      },
      {
        src: su5,
        title: "Performance Dashboard",
        description:
          "Dashboard for reviewing sales performance and business information.",
        alt: "Suki business performance dashboard",
        type: "Application Interface",
      },
    ],
    caseStudy: {
      title: "Suki Ecommerce",
      summary:
        "Development of an e-commerce administration dashboard for product management, transaction monitoring, sales reporting, and performance analysis.",
      category: "E-commerce Management System",
      status: "On Archive - Semester Project",
      period: "2024",
      role: "System Analyst, Full-Stack Developer",
      metadata: [
        ["Team", "Cross-functional team"],
        ["Tools", "System Development, Database Management, Reporting"],
      ],
      overview:
        "Suki is an e-commerce administration platform designed to support daily operational activities. The system centralizes product management, transaction monitoring, and sales reporting to provide operational visibility and business performance insights.",
      problemStatement:
        "E-commerce operations require centralized management of product information, transaction statuses, and sales performance to maintain operational visibility and support business decisions.",
      objectives: [
        "Centralize product listing management.",
        "Support transaction status monitoring.",
        "Provide sales reporting capabilities.",
        "Present business performance information.",
      ],
      scopeItems: [
        "Product listing management.",
        "Transaction status monitoring.",
        "Sales report generation.",
        "Business performance analysis.",
      ],
      myContributions: [
        "Developed the administration application using Laravel and PHP.",
        "Implemented product management functionality.",
        "Developed transaction monitoring interfaces.",
        "Integrated sales reporting and dashboard functionality.",
      ],
    },
  },

  {
    id: 11,
    images: [pt1],
    title: "Panji Laras Travel Landing Page",
    description:
      "Panji Laras Travel is a responsive landing page designed to showcase travel services, highlight tour packages, and provide essential information to potential customers.",
    // link: "https://github.com/DaffaAfifi/panji-travel",
    technologies: ["Bootstrap"],
    analysisVisuals: [
      {
        src: pt2,
        title: "Travel Service Presentation",
        description:
          "Interface presenting travel services and business information.",
        alt: "Panji Laras travel service landing page",
        type: "Website Interface",
      },
      {
        src: pt3,
        title: "Tour Package Section",
        description: "Interface showcasing available tour packages.",
        alt: "Panji Laras tour package presentation",
        type: "Website Interface",
      },
      {
        src: pt4,
        title: "Travel Information",
        description: "Section presenting essential travel-related information.",
        alt: "Panji Laras travel information interface",
        type: "Website Interface",
      },
      {
        src: pt5,
        title: "Responsive Website Layout",
        description:
          "Website layout designed to support mobile-friendly browsing.",
        alt: "Panji Laras responsive website layout",
        type: "Website Interface",
      },
    ],
    caseStudy: {
      title: "Panji Laras Travel Landing Page",
      summary:
        "Design and development of a responsive travel landing page to present travel services, tour packages, and essential customer information.",
      category: "Website Development",
      status: "Completed",
      period: "2024",
      role: "Web Developer",
      metadata: [
        ["Team", "Individual Project"],
        ["Tools", "Bootstrap, Responsive Web Design"],
      ],
      overview:
        "Panji Laras Travel is a landing page designed to introduce travel services and communicate package information to potential customers through a responsive website interface.",
      problemStatement:
        "Travel services need an accessible online presentation to communicate offerings and provide potential customers with relevant information.",
      objectives: [
        "Present travel services through a dedicated website.",
        "Showcase tour packages and essential information.",
        "Provide a responsive browsing experience across devices.",
      ],
      scopeItems: [
        "Travel service presentation.",
        "Tour package showcase.",
        "Essential customer information.",
        "Responsive website layout.",
      ],
      myContributions: [
        "Developed the landing page using Bootstrap.",
        "Implemented responsive website layouts.",
        "Organized content sections for travel services and packages.",
      ],
    },
  },

  {
    id: 12,
    images: [sm1],
    title: "Smart Home Energy Management System",
    description:
      "Smart Home Energy Management System built with Golang and the Tapas AI model from Hugging Face. It collects and processes household energy usage data to deliver insights and recommendations for optimizing energy consumption in smart home environments.",
    // link: "https://github.com/DaffaAfifi/golang-rg-stuff/tree/main/ai%20w%20golang/final-project-golang-ai-v4",
    technologies: ["Gin", "Golang", "Hugging Face"],
    analysisVisuals: [
      {
        src: sm2,
        title: "Energy Management Interface",
        description:
          "Interface supporting the presentation of household energy usage information.",
        alt: "Smart home energy management interface",
        type: "Application Interface",
      },
    ],
    caseStudy: {
      title: "Smart Home Energy Management System",
      summary:
        "Development of a smart home energy management system integrating Golang and an AI model to process energy usage data and provide optimization insights.",
      category: "AI & Smart Home",
      status: "Completed",
      period: "2024",
      role: "System Analyst, Full-Stack Developer",
      metadata: [
        ["Team", "Individual Project"],
        ["Tools", "Golang, Gin, Hugging Face"],
      ],
      overview:
        "The system processes household energy usage data and uses an AI model to provide insights and recommendations related to energy consumption optimization.",
      problemStatement:
        "Household energy usage data can be difficult to interpret without a system that processes the information and presents useful insights.",
      objectives: [
        "Process household energy usage data.",
        "Provide energy consumption insights.",
        "Generate recommendations for energy optimization.",
      ],
      scopeItems: [
        "Energy usage data processing.",
        "AI-assisted energy insight generation.",
        "Energy optimization recommendations.",
      ],
      myContributions: [
        "Developed application functionality using Golang.",
        "Integrated the Gin framework.",
        "Integrated the Tapas AI model from Hugging Face.",
      ],
    },
  },

  {
    id: 13,
    images: [tt],
    title: "Task Tracker Plus",
    description:
      "Task Tracker Plus is a productivity app designed to help students manage their study schedules more effectively. Built with Go (Golang) and PostgreSQL, it enables users to organize tasks, set deadlines, and stay on top of their academic goals.",
    // link: "https://github.com/DaffaAfifi/golang-rg-stuff/tree/main/web%20application/fcp-web-application-v2",
    technologies: ["Gin", "Golang", "PostgreSQL", "Bootstrap"],
    analysisVisuals: [
      {
        src: tt2,
        title: "Task Management Interface",
        description: "Interface for organizing and managing academic tasks.",
        alt: "Task Tracker Plus task management interface",
        type: "Application Interface",
      },
      {
        src: tt3,
        title: "Study Schedule Management",
        description:
          "Interface supporting the organization of study schedules.",
        alt: "Task Tracker Plus study schedule interface",
        type: "Application Interface",
      },
      {
        src: tt4,
        title: "Deadline Tracking",
        description: "Interface for reviewing tasks and their deadlines.",
        alt: "Task Tracker Plus deadline tracking interface",
        type: "Application Interface",
      },
      {
        src: tt5,
        title: "Productivity Overview",
        description:
          "Interface presenting task-related information for academic planning.",
        alt: "Task Tracker Plus productivity overview",
        type: "Application Interface",
      },
    ],
    caseStudy: {
      title: "Task Tracker Plus",
      summary:
        "Development of a student productivity application for organizing study schedules, managing tasks, and tracking academic deadlines.",
      category: "Productivity Application",
      status: "Completed",
      period: "2024",
      role: "System Analyst, Full-Stack Developer",
      metadata: [
        ["Team", "Individual Project"],
        ["Tools", "Golang, Gin, PostgreSQL, Bootstrap"],
      ],
      overview:
        "Task Tracker Plus supports students in organizing academic activities through task management and study schedule planning. The application provides a centralized place to manage tasks and deadlines.",
      problemStatement:
        "Students may struggle to maintain organized study schedules and track multiple academic deadlines using disconnected planning methods.",
      objectives: [
        "Provide centralized academic task management.",
        "Support study schedule organization.",
        "Help users track deadlines and academic activities.",
      ],
      scopeItems: [
        "Task organization and management.",
        "Study schedule planning.",
        "Deadline tracking.",
      ],
      myContributions: [
        "Developed application functionality using Golang and Gin.",
        "Integrated PostgreSQL for data management.",
        "Implemented task-related application interfaces.",
      ],
    },
  },

  {
    id: 14,
    images: [sp1],
    title: "Student Portal API",
    description:
      "Student Portal API is a RESTful service built with Golang (Gin framework) and PostgreSQL. It provides endpoints for managing student-related operations, including user registration, authentication, and student data management.",
    // link: "https://github.com/DaffaAfifi/golang-rg-stuff/tree/main/database%20management/fcp-database-management-v2",
    technologies: ["Gin", "Golang", "PostgreSQL"],
    analysisVisuals: [
      {
        src: sp2,
        title: "Student Portal API",
        description:
          "Project interface or implementation visual associated with the student portal.",
        alt: "Student Portal API project visual",
        type: "Application Interface",
      },
      {
        src: sp3,
        title: "Student Data Management",
        description:
          "Visual associated with student data management functionality.",
        alt: "Student Portal student data management visual",
        type: "Application Interface",
      },
      {
        src: sp4,
        title: "Authentication",
        description:
          "Visual associated with user registration or authentication functionality.",
        alt: "Student Portal authentication visual",
        type: "Application Interface",
      },
      {
        src: sp5,
        title: "API Implementation",
        description: "Implementation visual associated with the API service.",
        alt: "Student Portal API implementation visual",
        type: "Technical Implementation",
      },
    ],
    caseStudy: {
      title: "Student Portal API",
      summary:
        "Development of a RESTful API service for student data management, user registration, and authentication using Golang and PostgreSQL.",
      category: "Backend Development",
      status: "Completed",
      period: "2024",
      role: "System Analyst, Full-Stack Developer",
      metadata: [
        ["Team", "Individual Project"],
        ["Tools", "Golang, Gin, PostgreSQL"],
      ],
      overview:
        "Student Portal API provides backend services for student-related operations. The application exposes RESTful endpoints to support user registration, authentication, and student data management.",
      problemStatement:
        "Student-related applications require structured backend services to manage student information and handle user authentication consistently.",
      objectives: [
        "Provide RESTful endpoints for student operations.",
        "Support user registration and authentication.",
        "Enable student data management through API services.",
      ],
      scopeItems: [
        "User registration.",
        "User authentication.",
        "Student data management.",
        "RESTful API development.",
      ],
      myContributions: [
        "Developed backend services using Golang and Gin.",
        "Integrated PostgreSQL for data persistence.",
        "Implemented API endpoints for student-related operations.",
      ],
    },
  },

  {
    id: 15,
    images: [rs1],
    title: "Rumah Batik Retnosari",
    description:
      "Rumah Batik Retnosari is a desktop application built using Java and NetBeans to help manage store operations. It includes features for managing master data (customers, suppliers, products) and handling key transactions such as purchases, sales, and orders.",
    // link: "https://github.com/DaffaAfifi/retnosari-app",
    technologies: ["Java", "NetBeans"],
    analysisVisuals: [
      {
        src: rs2,
        title: "Master Data Management",
        description:
          "Interface for managing customer, supplier, and product information.",
        alt: "Rumah Batik Retnosari master data interface",
        type: "Desktop Application",
      },
      {
        src: rs3,
        title: "Purchase Transactions",
        description: "Interface supporting purchase transaction management.",
        alt: "Rumah Batik Retnosari purchase transaction interface",
        type: "Desktop Application",
      },
      {
        src: rs4,
        title: "Sales Transactions",
        description: "Interface supporting sales transaction management.",
        alt: "Rumah Batik Retnosari sales transaction interface",
        type: "Desktop Application",
      },
      {
        src: rs5,
        title: "Order Management",
        description: "Interface for managing store orders.",
        alt: "Rumah Batik Retnosari order management interface",
        type: "Desktop Application",
      },
      {
        src: rs6,
        title: "Store Operations",
        description: "Additional interface supporting daily store operations.",
        alt: "Rumah Batik Retnosari store operations interface",
        type: "Desktop Application",
      },
    ],
    caseStudy: {
      title: "Rumah Batik Retnosari",
      summary:
        "Development of a Java desktop application to support store operations through master data management and purchase, sales, and order transactions.",
      category: "Desktop Information System",
      status: "Completed - Semester Project",
      period: "2023",
      role: "System Analyst, Full-Stack Developer",
      metadata: [
        ["Team", "Individual Project"],
        ["Tools", "Java, NetBeans"],
      ],
      overview:
        "Rumah Batik Retnosari is a desktop application designed to support store operations. It centralizes master data and transaction activities to simplify operational data management.",
      problemStatement:
        "Store operations require structured management of customer, supplier, and product information alongside purchase, sales, and order transactions.",
      objectives: [
        "Centralize store master data management.",
        "Support purchase and sales transaction processing.",
        "Manage store orders through a desktop application.",
      ],
      scopeItems: [
        "Customer master data.",
        "Supplier master data.",
        "Product master data.",
        "Purchase transactions.",
        "Sales transactions.",
        "Order management.",
      ],
      myContributions: [
        "Developed the desktop application using Java and NetBeans.",
        "Implemented master data management functionality.",
        "Developed purchase, sales, and order transaction features.",
      ],
    },
  },

  {
    id: 16,
    images: [vrac1],
    title: "Post Stroke Therapy Bikes",
    description:
      "Post Stroke Therapy Bikes is a VR simulator game designed for post-stroke rehabilitation. It aims to support patients in their recovery through immersive and interactive cycling therapy experiences.",
    link: "",
    technologies: [],
    analysisVisuals: [
      {
        src: vrac2,
        title: "VR Therapy Experience",
        description:
          "Visual showcasing the immersive cycling therapy simulation.",
        alt: "Post Stroke Therapy Bikes VR simulation",
        type: "VR Simulation",
      },
    ],
    caseStudy: {
      title: "Post Stroke Therapy Bikes",
      summary:
        "Development of a VR cycling simulator designed to support post-stroke rehabilitation through immersive and interactive therapy experiences.",
      category: "Virtual Reality & Rehabilitation",
      status: "Completed - Semester Project",
      period: "2024",
      role: "System Analyst, Full-Stack Developer",
      metadata: [
        ["Team", "Cross-functional team"],
        ["Tools", "VR Simulation"],
      ],
      overview:
        "Post Stroke Therapy Bikes is a virtual reality simulator designed to provide an immersive cycling experience for post-stroke rehabilitation. The project focuses on interactive simulation as a supporting experience for rehabilitation activities.",
      problemStatement:
        "Rehabilitation activities may benefit from interactive experiences that provide an engaging environment for patients during therapy.",
      objectives: [
        "Create an immersive cycling simulation.",
        "Provide an interactive VR rehabilitation experience.",
        "Explore VR as a supporting medium for post-stroke therapy.",
      ],
      scopeItems: [
        "Virtual cycling simulation.",
        "Interactive VR experience.",
        "Rehabilitation-oriented simulation environment.",
      ],
      myContributions: [
        "Developed the VR cycling simulation project.",
        "Worked on the immersive and interactive therapy experience.",
      ],
    },
  },
];
