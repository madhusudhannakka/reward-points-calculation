export const fetchCustomers = async () => {
    console.log("Fetching customer data...");
    try {
      const res = await fetch('/data/customers.json');
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching customers:", error);
      throw error;
    }
  };
  