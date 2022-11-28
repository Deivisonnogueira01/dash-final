import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  bigChart(){
    return [{
      name: 'Salvador',
      data: [502, 635, 809, 947, 1402, 3634, 4000]
  }, {
      name: 'Porto de Galinhas',
      data: [106, 107, 111, 133, 221, 767, 2]
  }, {
      name: 'Maceió',
      data: [163, 203, 276, 408, 547, 729, 1]
  }, {
      name: 'Aracaju',
      data: [18, 31, 54, 156, 339, 818, 1]
  }, {
      name: 'Fortaleza',
      data: [2, 2, 2, 6, 13, 30, 1]
  }]
  }
  card(){
    return [71, 78, 39, 66];
  }
 
  table(){
    return [
      {position: 1, name: 'Salvador', population: 1.0079, estado: 'Bahia'},
      {position: 2, name: 'Porto de Galinhas', population: 4.0026, estado: 'Pernanbuco'},
      {position: 3, name: 'Maceió', population: 6.941, estado: 'Alagoas'},
      {position: 4, name: 'Aracaju', population: 9.0122, estado: 'Sergipe'},
      {position: 5, name: 'Fortaleza', population: 10.811, estado: 'Ceará'},
      {position: 6, name: 'Natal', population: 12.0107, estado: 'Rio Grande do Norte'},
      {position: 7, name: 'Lençóis Maranhenses', population: 14.0067, estado: 'Maranhão'},
      {position: 8, name: 'Jalapão', population: 15.9994, estado: 'Tocantins'},
      {position: 9, name: 'Florianópolis', population: 18.9984, estado: 'Santa Catarina'},
      {position: 10, name: 'Goiânia', population: 20.1797, estado: 'Goiás'},
      {position: 11, name: 'Foz do Iguaçu', population: 22.9897, estado: 'Paraná'},
      {position: 12, name: 'Gramado', population: 24.305, estado: 'Rio Grande do Sul'},
      {position: 13, name: 'Ouro Preto', population: 26.9815, estado: 'Minas Gerais'},
      {position: 14, name: 'Rio de Janeiro', population: 28.0855, estado: 'Rio de Janeiro'},
      {position: 15, name: 'Ilhabela', population: 30.9738, estado: 'São Paulo'},
    ];
  }
}
