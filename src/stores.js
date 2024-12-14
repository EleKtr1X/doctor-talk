import { writable } from 'svelte/store'; 

export const personObject = writable({}); 
export const selectedPerson = writable({}); 
export const isDoctor = writable(false);