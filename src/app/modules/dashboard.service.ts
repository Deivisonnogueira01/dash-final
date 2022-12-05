import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  items: any;

  
  constructor() { }
  
  bigChart(){
    return [{
      name: 'Salvador',
      data: [5, 7, 8, 9, 1, 3, 4]
  }, {
      name: 'Porto de Galinhas',
      data: [2, 3, 4, 5, 3, 4, 2]
  }, {
      name: 'Maceió',
      data: [1, 2, 2, 4, 5, 7, 1]
  }, {
      name: 'Aracaju',
      data: [1, 3, 5, 1, 3, 8, 1]
  }, {
      name: 'Fortaleza',
      data: [2, 2, 2, 6, 1, 3, 1]
  }]
  }
  card(){
    return [71, 78, 39, 66];
  }
 
  table(){
    return [
      {position: 1, name: 'Salvador', population: 3.000001, estado: 'Bahia'},
      {position: 2, name: 'Porto de Galinhas', population: 4.00006, estado: 'Pernambuco'},
      {position: 3, name: 'Maceió', population: 1.00007, estado: 'Alagoas'},
      {position: 4, name: 'Aracaju', population: 664.908, estado: 'Sergipe'},
      {position: 5, name: 'Fortaleza', population: 2.687, estado: 'Ceará'},
      {position: 6, name: 'Natal', population: 891.000, estado: 'Rio Grande do Norte'},
      {position: 7, name: 'Lençóis Maranhenses', population: 1.091, estado: 'Maranhão'},
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


    lista(){
      this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
    }

  
    graficChart(){
      return[{
        data: [10, 20, 30]
      }]
     
    }


  
}
