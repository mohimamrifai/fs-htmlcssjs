// Data jobs untuk berbagai perusahaan
const jobsData = [
    {
        id: 1,
        company: "Money Forward",
        logo: "MF",
        logoColor: "#ff6b35",
        description: "Tools to improve financial health.",
        positions: [
            {
                title: "Tech Lead, CTO Office, Platform Application Division",
                salary: "¥6.9M ~ ¥10.0M",
                tags: [
                    { text: "No Japanese required", color: "blue" },
                    { text: "Apply from abroad", color: "green" },
                    { text: "Partially Remote", color: "yellow" }
                ],
                skills: ["Engineering Management", "Go", "Java"]
            },
            {
                title: "Senior QA Manager (HR Solutions Department)",
                salary: "¥10.0M ~ ¥15M",
                tags: [
                    { text: "No Japanese required", color: "blue" },
                    { text: "Japan residents only", color: "orange" },
                    { text: "Partially Remote", color: "yellow" },
                    { text: "Backend", color: "purple" }
                ],
                skills: ["Engineering Management", "Quality Assurance", "Test Automation"]
            }
        ],
        moreJobs: 24
    },
    {
        id: 2,
        company: "Rakuten",
        logo: "R",
        logoColor: "#bf0000",
        description: "Global innovation company empowering society.",
        positions: [
            {
                title: "Senior Software Engineer, E-commerce Platform",
                salary: "¥8.0M ~ ¥12.0M",
                tags: [
                    { text: "English required", color: "blue" },
                    { text: "Full Remote", color: "green" },
                    { text: "Stock Options", color: "purple" }
                ],
                skills: ["React", "Node.js", "AWS", "Microservices"]
            },
            {
                title: "Data Scientist, AI Research Division",
                salary: "¥9.5M ~ ¥14.0M",
                tags: [
                    { text: "PhD Preferred", color: "orange" },
                    { text: "Hybrid Work", color: "yellow" },
                    { text: "Machine Learning", color: "purple" }
                ],
                skills: ["Python", "TensorFlow", "Deep Learning", "Statistics"]
            }
        ],
        moreJobs: 18
    },
    {
        id: 3,
        company: "SoftBank",
        logo: "SB",
        logoColor: "#ffdd00",
        description: "Technology conglomerate driving digital transformation.",
        positions: [
            {
                title: "Cloud Infrastructure Architect",
                salary: "¥10.5M ~ ¥16.0M",
                tags: [
                    { text: "Senior Level", color: "orange" },
                    { text: "Tokyo Office", color: "blue" },
                    { text: "Leadership Role", color: "purple" }
                ],
                skills: ["Kubernetes", "Docker", "Terraform", "GCP"]
            },
            {
                title: "Mobile App Developer, Consumer Products",
                salary: "¥7.5M ~ ¥11.0M",
                tags: [
                    { text: "Japanese N2+", color: "orange" },
                    { text: "Flexible Hours", color: "green" },
                    { text: "Mobile", color: "purple" }
                ],
                skills: ["Swift", "Kotlin", "React Native", "Firebase"]
            }
        ],
        moreJobs: 31
    },
    {
        id: 4,
        company: "Mercari",
        logo: "M",
        logoColor: "#ff4757",
        description: "Marketplace platform connecting people worldwide.",
        positions: [
            {
                title: "Backend Engineer, Payment Systems",
                salary: "¥8.5M ~ ¥13.0M",
                tags: [
                    { text: "Go Expert", color: "blue" },
                    { text: "Remote OK", color: "green" },
                    { text: "FinTech", color: "purple" }
                ],
                skills: ["Go", "PostgreSQL", "Redis", "Kafka"]
            },
            {
                title: "Product Manager, International Expansion",
                salary: "¥9.0M ~ ¥14.5M",
                tags: [
                    { text: "Global Team", color: "blue" },
                    { text: "Strategy Role", color: "orange" },
                    { text: "Product", color: "purple" }
                ],
                skills: ["Product Strategy", "Analytics", "A/B Testing", "SQL"]
            }
        ],
        moreJobs: 22
    },
    {
        id: 5,
        company: "LINE",
        logo: "L",
        logoColor: "#00c300",
        description: "Life on LINE - connecting people, information and society.",
        positions: [
            {
                title: "Frontend Engineer, Messaging Platform",
                salary: "¥7.0M ~ ¥11.5M",
                tags: [
                    { text: "React Expert", color: "blue" },
                    { text: "Work from Home", color: "green" },
                    { text: "Frontend", color: "purple" }
                ],
                skills: ["React", "TypeScript", "Next.js", "GraphQL"]
            },
            {
                title: "DevOps Engineer, Infrastructure Team",
                salary: "¥8.8M ~ ¥13.5M",
                tags: [
                    { text: "Kubernetes", color: "blue" },
                    { text: "On-call Support", color: "orange" },
                    { text: "DevOps", color: "purple" }
                ],
                skills: ["Kubernetes", "Prometheus", "Grafana", "Jenkins"]
            }
        ],
        moreJobs: 27
    }
];

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jobsData;
}