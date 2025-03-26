import config from "../config";

const { apiUrl } = config;

interface LoginFormData {
    email: string;
    password: string;
}

interface RegisterFormData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: string;
    departement: string;
}

const UserService = {
    async login(formData: LoginFormData): Promise<any> {
        try {
            const response = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Erreur de login:", error);
            throw error;
        }
    },

    async register(formData: RegisterFormData): Promise<any> {
        try {
            console.log(formData)
            const response = await fetch(`${apiUrl}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Erreur d'inscription:", error);
            throw error;
        }
    },

    async getAllUsers(): Promise<any> {
        try {
            const response = await fetch(`${apiUrl}/users`);

            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Utilisateurs récupérés :", data); // Affiche les données dans la console
            return data;
        } catch (error) {
            console.error("Erreur lors de la récupération des utilisateurs:", error);
            throw error;
        }
    }
};

export default UserService;
