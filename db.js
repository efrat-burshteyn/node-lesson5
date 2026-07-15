export let books=[
  {
        id: 1,
        name: "מדריך לתכנות בסיסי",
        category: "מחשבים",
        price: 95,
        isAvailable: true,
        loans: []
    },
    {
        id: 2,
        name: "היסטוריה של העולם",
        category: "היסטוריה",
        price: 120,
        isAvailable: false,
        loans: [
            { date: "2026-07-10", customerId: 101 }
        ]
    },
    {
        id: 3,
        name: "מתמטיקה שימושית",
        category: "מתמטיקה",
        price: 75,
        isAvailable: true,
        loans: []
    }
]