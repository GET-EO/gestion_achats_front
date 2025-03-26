import config from "../config";

const { apiUrl } = config;

interface Budget {
    department: string;
    total_amount: number;
    used_amount: number;
    remaining_amount: number;
}

const BudgetService = {
    async getBudget(): Promise<Budget> {
        try {
            const response = await fetch(`${apiUrl}/budgets`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }

            const data =  await response.json();
            
            return data;
        } catch (error) {
            console.error("Erreur lors de la récupération du budget:", error);
            throw error;
        }
    },

    async createBudget(budgetData: Budget): Promise<Budget> {
        try {
            const response = await fetch(`${apiUrl}/budgets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(budgetData),
            });

            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Erreur lors de la création du budget:", error);
            throw error;
        }
    }
};

export default BudgetService;
