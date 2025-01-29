import axios from 'axios'; 
import { env } from '../env/env-local';

export const getProducts = async () => { 
try { 
const response = await axios.get(env.productUrl); 
return response.data; 
  } 
catch (error) { 
console.error('Erreur lors de la récupération des produits :', error); 
  } 
};