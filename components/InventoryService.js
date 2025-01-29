import axios from 'axios'; 
const API_URL = 'http://localhost:8080/api/Inventories'; 
export const getInventories = async () => { 
try { 
const response = await axios.get(API_URL); 
return response.data; 
  } 
catch (error) { 
console.error('Erreur lors de la récupération des inventaires :', error); 
  } 
};