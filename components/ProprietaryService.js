import axios from 'axios'; 
const API_URL = 'http://localhost:8080/api/Owners'; 
export const getOwners = async () => { 
try { 
const response = await axios.get(API_URL); 
return response.data; 
  } 
catch (error) { 
console.error('Erreur lors de la récupération des propriétaire :', error); 
  } 
};