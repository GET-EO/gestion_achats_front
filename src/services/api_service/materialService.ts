import config from "../config";

const { apiUrl } = config;

interface Material {
    name: string;
    description: string;
    unit_price: number;
    supplier_id: string;
    category_id: string;
}

const MaterialService =  {

    async add(formData: Material): Promise<void> {
        try {
            const response = await fetch(`${apiUrl}/products`, {
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
}
export default MaterialService