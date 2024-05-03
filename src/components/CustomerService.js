class CustomerService {
    static getCustomersMedium() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { consulta: 'Consulta 1', fecha: '2021-09-01', hora: '10:00' },
                    { medicamento: 'Medicamento 1', dosis: '2 pastillas', hora: '10:00' },
                    { tratamiento: 'Tratamiento 1', duracion: '3 meses', hora: '10:00' },
                ]);
            }, 1000);
        });
    }
}

export { CustomerService };