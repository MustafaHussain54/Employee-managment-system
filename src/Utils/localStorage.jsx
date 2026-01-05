
const employees = [
  {
    id: 1,
    email: "emp1@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        title: "Submit Report",
        description: "Submit monthly sales report",
        date: "2026-01-05",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend weekly team meeting",
        date: "2026-01-03",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Follow up with client via email",
        date: "2026-01-02",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "emp2@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        title: "Bug Fix",
        description: "Fix login page bug",
        date: "2026-01-04",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review teammate's PR",
        date: "2026-01-03",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Tests",
        description: "Write unit tests for API",
        date: "2026-01-01",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    email: "emp3@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        title: "Design Mockup",
        description: "Create UI mockups for dashboard",
        date: "2026-01-06",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Call",
        description: "Discuss requirements with client",
        date: "2026-01-02",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Docs",
        description: "Update project documentation",
        date: "2026-01-01",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Research",
        description: "Research new UI trends",
        date: "2026-01-04",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "emp4@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        title: "Deploy App",
        description: "Deploy application to staging",
        date: "2026-01-05",
        category: "Deployment",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server Check",
        description: "Check server health",
        date: "2026-01-03",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Backup Data",
        description: "Take database backup",
        date: "2026-01-02",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    email: "emp5@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        title: "Prepare Presentation",
        description: "Prepare slides for demo",
        date: "2026-01-06",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Demo Session",
        description: "Product demo with client",
        date: "2026-01-04",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Feedback Review",
        description: "Review client feedback",
        date: "2026-01-03",
        category: "Review",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    
  }
];
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
     const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees,admin);
    
}