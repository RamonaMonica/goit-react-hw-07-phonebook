import { createSelector } from '@reduxjs/toolkit';

// Selector pentru a obține lista de contacte:
export const selectContacts = state => state.contacts.items;

// Selector pentru a obține filtrul:
export const selectFilter = state => state.filter;

// Selector pentru a obține eroarea asociată contactelor:
export const selectError = state => state.contacts.error;

// Selector pentru a verifica dacă există o încărcare în curs pentru contacte:
export const selectIsLoading = state => state.contacts.isLoading;

// ==== Selector pentru a filtra contactele în funcție de șirul de căutare: ====

// Se definește si se exporta un selector numit 'selectFilteredContacts' utilizând createSelector:
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter], // Se specifică inputurile pentru selector (lista de contacte și filtrul)

  // Funcție de filtrare a contactelor:
  (contacts, filter) => {

    // Se returneaza o listă de contacte filtrată pe baza șirului de căutare:
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);