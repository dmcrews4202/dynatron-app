import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      { id: 1, firstName: 'Freddy', lastName: 'Freeloader', email: 'ff@ff.com', created: Date.parse('10 Nov 2022'), updated: Date.parse('11 Nov 2022')},
      { id: 2, firstName: 'Freddy2', lastName: 'Freeloader', email: 'ff2@ff.com', created: Date.parse('12 Nov 2022'), updated: Date.parse('13 Nov 2022')},
      { id: 3, firstName: 'Freddy3', lastName: 'Freeloader', email: 'ff3@ff.com', created: Date.parse('14 Nov 2022'), updated: Date.parse('15 Nov 2022')},
      { id: 4, firstName: 'Freddy4', lastName: 'Freeloader', email: 'ff4@ff.com', created: Date.parse('16 Nov 2022'), updated: Date.parse('17 Nov 2022')},
      { id: 5, firstName: 'Freddy5', lastName: 'Freeloader', email: 'ff5@ff.com', created: Date.parse('18 Nov 2022'), updated: Date.parse('19 Nov 2022')},
      { id: 6, firstName: 'Freddy6', lastName: 'Freeloader', email: 'ff6@ff.com', created: Date.parse('20 Nov 2022'), updated: Date.parse('21 Nov 2022')},
      { id: 7, firstName: 'Freddy7', lastName: 'Freeloader', email: 'ff7@ff.com', created: Date.parse('22 Nov 2022'), updated: Date.parse('23 Nov 2022')},
      { id: 8, firstName: 'Freddy8', lastName: 'Freeloader', email: 'ff8@ff.com', created: Date.parse('24 Nov 2022'), updated: Date.parse('25 Nov 2022')},
      { id: 9, firstName: 'Freddy9', lastName: 'Freeloader', email: 'ff9@ff.com', created: Date.parse('26 Nov 2022'), updated: Date.parse('27 Nov 2022')},
      { id: 10, firstName: 'Freddy10', lastName: 'Freeloader', email: 'ff10@ff.com', created: Date.parse('28 Nov 2022'), updated: Date.parse('29 Nov 2022')},
      { id: 11, firstName: 'Freddy11', lastName: 'Freeloader', email: 'ff@ff.com', created: Date.parse('10 Nov 2022'), updated: Date.parse('11 Nov 2022')},
      { id: 12, firstName: 'Freddy12', lastName: 'Freeloader', email: 'ff2@ff.com', created: Date.parse('12 Nov 2022'), updated: Date.parse('13 Nov 2022')},
      { id: 13, firstName: 'Freddy13', lastName: 'Freeloader', email: 'ff3@ff.com', created: Date.parse('14 Nov 2022'), updated: Date.parse('15 Nov 2022')},
      { id: 14, firstName: 'Freddy14', lastName: 'Freeloader', email: 'ff4@ff.com', created: Date.parse('16 Nov 2022'), updated: Date.parse('17 Nov 2022')},
      { id: 15, firstName: 'Freddy15', lastName: 'Freeloader', email: 'ff5@ff.com', created: Date.parse('18 Nov 2022'), updated: Date.parse('19 Nov 2022')},
      { id: 16, firstName: 'Freddy16', lastName: 'Freeloader', email: 'ff6@ff.com', created: Date.parse('20 Nov 2022'), updated: Date.parse('21 Nov 2022')},
      { id: 17, firstName: 'Freddy17', lastName: 'Freeloader', email: 'ff7@ff.com', created: Date.parse('22 Nov 2022'), updated: Date.parse('23 Nov 2022')},
      { id: 18, firstName: 'Freddy18', lastName: 'Freeloader', email: 'ff8@ff.com', created: Date.parse('24 Nov 2022'), updated: Date.parse('25 Nov 2022')},
      { id: 19, firstName: 'Freddy19', lastName: 'Freeloader', email: 'ff9@ff.com', created: Date.parse('26 Nov 2022'), updated: Date.parse('27 Nov 2022')},
      { id: 20, firstName: 'Freddy20', lastName: 'Freeloader', email: 'ff10@ff.com', created: Date.parse('28 Nov 2022'), updated: Date.parse('29 Nov 2022')},
      { id: 21, firstName: 'Freddy11', lastName: 'Freeloader', email: 'ff@ff.com', created: Date.parse('10 Nov 2022'), updated: Date.parse('11 Nov 2022')},
      { id: 22, firstName: 'Freddy12', lastName: 'Freeloader', email: 'ff2@ff.com', created: Date.parse('12 Nov 2022'), updated: Date.parse('13 Nov 2022')},
      { id: 23, firstName: 'Freddy13', lastName: 'Freeloader', email: 'ff3@ff.com', created: Date.parse('14 Nov 2022'), updated: Date.parse('15 Nov 2022')},
      { id: 24, firstName: 'Freddy14', lastName: 'Freeloader', email: 'ff4@ff.com', created: Date.parse('16 Nov 2022'), updated: Date.parse('17 Nov 2022')},
      { id: 25, firstName: 'Freddy15', lastName: 'Freeloader', email: 'ff5@ff.com', created: Date.parse('18 Nov 2022'), updated: Date.parse('19 Nov 2022')},
      { id: 26, firstName: 'Freddy16', lastName: 'Freeloader', email: 'ff6@ff.com', created: Date.parse('20 Nov 2022'), updated: Date.parse('21 Nov 2022')},
      { id: 27, firstName: 'Freddy17', lastName: 'Freeloader', email: 'ff7@ff.com', created: Date.parse('22 Nov 2022'), updated: Date.parse('23 Nov 2022')},
      { id: 28, firstName: 'Freddy18', lastName: 'Freeloader', email: 'ff8@ff.com', created: Date.parse('24 Nov 2022'), updated: Date.parse('25 Nov 2022')},
      { id: 29, firstName: 'Freddy19', lastName: 'Freeloader', email: 'ff9@ff.com', created: Date.parse('26 Nov 2022'), updated: Date.parse('27 Nov 2022')},
      { id: 30, firstName: 'Freddy20', lastName: 'Freeloader', email: 'ff10@ff.com', created: Date.parse('28 Nov 2022'), updated: Date.parse('29 Nov 2022')},
      { id: 31, firstName: 'Freddy11', lastName: 'Freeloader', email: 'ff@ff.com', created: Date.parse('10 Nov 2022'), updated: Date.parse('11 Nov 2022')},
      { id: 32, firstName: 'Freddy12', lastName: 'Freeloader', email: 'ff2@ff.com', created: Date.parse('12 Nov 2022'), updated: Date.parse('13 Nov 2022')},
      { id: 33, firstName: 'Freddy13', lastName: 'Freeloader', email: 'ff3@ff.com', created: Date.parse('14 Nov 2022'), updated: Date.parse('15 Nov 2022')},
      { id: 34, firstName: 'Freddy14', lastName: 'Freeloader', email: 'ff4@ff.com', created: Date.parse('16 Nov 2022'), updated: Date.parse('17 Nov 2022')},
      { id: 35, firstName: 'Freddy15', lastName: 'Freeloader', email: 'ff5@ff.com', created: Date.parse('18 Nov 2022'), updated: Date.parse('19 Nov 2022')},
      { id: 36, firstName: 'Freddy16', lastName: 'Freeloader', email: 'ff6@ff.com', created: Date.parse('20 Nov 2022'), updated: Date.parse('21 Nov 2022')},
      { id: 37, firstName: 'Freddy17', lastName: 'Freeloader', email: 'ff7@ff.com', created: Date.parse('22 Nov 2022'), updated: Date.parse('23 Nov 2022')},
      { id: 38, firstName: 'Freddy18', lastName: 'Freeloader', email: 'ff8@ff.com', created: Date.parse('24 Nov 2022'), updated: Date.parse('25 Nov 2022')},
      { id: 39, firstName: 'Freddy19', lastName: 'Freeloader', email: 'ff9@ff.com', created: Date.parse('26 Nov 2022'), updated: Date.parse('27 Nov 2022')},
      { id: 40, firstName: 'Freddy20', lastName: 'Freeloader', email: 'ff10@ff.com', created: Date.parse('28 Nov 2022'), updated: Date.parse('29 Nov 2022')},
      { id: 41, firstName: 'Freddy11', lastName: 'Freeloader', email: 'ff@ff.com', created: Date.parse('10 Nov 2022'), updated: Date.parse('11 Nov 2022')},
      { id: 42, firstName: 'Freddy12', lastName: 'Freeloader', email: 'ff2@ff.com', created: Date.parse('12 Nov 2022'), updated: Date.parse('13 Nov 2022')},
      { id: 43, firstName: 'Freddy13', lastName: 'Freeloader', email: 'ff3@ff.com', created: Date.parse('14 Nov 2022'), updated: Date.parse('15 Nov 2022')},
      { id: 44, firstName: 'Freddy14', lastName: 'Freeloader', email: 'ff4@ff.com', created: Date.parse('16 Nov 2022'), updated: Date.parse('17 Nov 2022')},
      { id: 45, firstName: 'Freddy15', lastName: 'Freeloader', email: 'ff5@ff.com', created: Date.parse('18 Nov 2022'), updated: Date.parse('19 Nov 2022')},
      { id: 46, firstName: 'Freddy16', lastName: 'Freeloader', email: 'ff6@ff.com', created: Date.parse('20 Nov 2022'), updated: Date.parse('21 Nov 2022')},
      { id: 47, firstName: 'Freddy17', lastName: 'Freeloader', email: 'ff7@ff.com', created: Date.parse('22 Nov 2022'), updated: Date.parse('23 Nov 2022')},
      { id: 48, firstName: 'Freddy18', lastName: 'Freeloader', email: 'ff8@ff.com', created: Date.parse('24 Nov 2022'), updated: Date.parse('25 Nov 2022')},
      { id: 49, firstName: 'Freddy19', lastName: 'Freeloader', email: 'ff9@ff.com', created: Date.parse('26 Nov 2022'), updated: Date.parse('27 Nov 2022')},
      { id: 50, firstName: 'Freddy20', lastName: 'Freeloader', email: 'ff10@ff.com', created: Date.parse('28 Nov 2022'), updated: Date.parse('29 Nov 2022')},
      { id: 51, firstName: 'Freddy11', lastName: 'Freeloader', email: 'ff@ff.com', created: Date.parse('10 Nov 2022'), updated: Date.parse('11 Nov 2022')},
      { id: 52, firstName: 'Freddy12', lastName: 'Freeloader', email: 'ff2@ff.com', created: Date.parse('12 Nov 2022'), updated: Date.parse('13 Nov 2022')},
      { id: 53, firstName: 'Freddy13', lastName: 'Freeloader', email: 'ff3@ff.com', created: Date.parse('14 Nov 2022'), updated: Date.parse('15 Nov 2022')},
      { id: 54, firstName: 'Freddy14', lastName: 'Freeloader', email: 'ff4@ff.com', created: Date.parse('16 Nov 2022'), updated: Date.parse('17 Nov 2022')},
      { id: 55, firstName: 'Freddy15', lastName: 'Freeloader', email: 'ff5@ff.com', created: Date.parse('18 Nov 2022'), updated: Date.parse('19 Nov 2022')},
      { id: 56, firstName: 'Freddy16', lastName: 'Freeloader', email: 'ff6@ff.com', created: Date.parse('20 Nov 2022'), updated: Date.parse('21 Nov 2022')},
      { id: 57, firstName: 'Freddy17', lastName: 'Freeloader', email: 'ff7@ff.com', created: Date.parse('22 Nov 2022'), updated: Date.parse('23 Nov 2022')},
      { id: 58, firstName: 'Freddy18', lastName: 'Freeloader', email: 'ff8@ff.com', created: Date.parse('24 Nov 2022'), updated: Date.parse('25 Nov 2022')},
      { id: 59, firstName: 'Freddy19', lastName: 'Freeloader', email: 'ff9@ff.com', created: Date.parse('26 Nov 2022'), updated: Date.parse('27 Nov 2022')},
      { id: 60, firstName: 'Freddy20', lastName: 'Freeloader', email: 'ff10@ff.com', created: Date.parse('28 Nov 2022'), updated: Date.parse('29 Nov 2022')},
      { id: 61, firstName: 'Freddy11', lastName: 'Freeloader', email: 'ff@ff.com', created: Date.parse('10 Nov 2022'), updated: Date.parse('11 Nov 2022')},
      { id: 62, firstName: 'Freddy12', lastName: 'Freeloader', email: 'ff2@ff.com', created: Date.parse('12 Nov 2022'), updated: Date.parse('13 Nov 2022')},
      { id: 63, firstName: 'Freddy13', lastName: 'Freeloader', email: 'ff3@ff.com', created: Date.parse('14 Nov 2022'), updated: Date.parse('15 Nov 2022')},
      { id: 64, firstName: 'Freddy14', lastName: 'Freeloader', email: 'ff4@ff.com', created: Date.parse('16 Nov 2022'), updated: Date.parse('17 Nov 2022')},
      { id: 65, firstName: 'Freddy15', lastName: 'Freeloader', email: 'ff5@ff.com', created: Date.parse('18 Nov 2022'), updated: Date.parse('19 Nov 2022')},
      { id: 66, firstName: 'Freddy16', lastName: 'Freeloader', email: 'ff6@ff.com', created: Date.parse('20 Nov 2022'), updated: Date.parse('21 Nov 2022')},
      { id: 67, firstName: 'Freddy17', lastName: 'Freeloader', email: 'ff7@ff.com', created: Date.parse('22 Nov 2022'), updated: Date.parse('23 Nov 2022')},
      { id: 68, firstName: 'Freddy18', lastName: 'Freeloader', email: 'ff8@ff.com', created: Date.parse('24 Nov 2022'), updated: Date.parse('25 Nov 2022')},
      { id: 69, firstName: 'Freddy19', lastName: 'Freeloader', email: 'ff9@ff.com', created: Date.parse('26 Nov 2022'), updated: Date.parse('27 Nov 2022')},
      { id: 70, firstName: 'Freddy20', lastName: 'Freeloader', email: 'ff10@ff.com', created: Date.parse('28 Nov 2022'), updated: Date.parse('29 Nov 2022')},
      { id: 71, firstName: 'Freddy11', lastName: 'Freeloader', email: 'ff@ff.com', created: Date.parse('10 Nov 2022'), updated: Date.parse('11 Nov 2022')},
      { id: 72, firstName: 'Freddy12', lastName: 'Freeloader', email: 'ff2@ff.com', created: Date.parse('12 Nov 2022'), updated: Date.parse('13 Nov 2022')},
      { id: 73, firstName: 'Freddy13', lastName: 'Freeloader', email: 'ff3@ff.com', created: Date.parse('14 Nov 2022'), updated: Date.parse('15 Nov 2022')},
      { id: 74, firstName: 'Freddy14', lastName: 'Freeloader', email: 'ff4@ff.com', created: Date.parse('16 Nov 2022'), updated: Date.parse('17 Nov 2022')},
      { id: 75, firstName: 'Freddy15', lastName: 'Freeloader', email: 'ff5@ff.com', created: Date.parse('18 Nov 2022'), updated: Date.parse('19 Nov 2022')},
      { id: 76, firstName: 'Freddy16', lastName: 'Freeloader', email: 'ff6@ff.com', created: Date.parse('20 Nov 2022'), updated: Date.parse('21 Nov 2022')},
      { id: 77, firstName: 'Freddy17', lastName: 'Freeloader', email: 'ff7@ff.com', created: Date.parse('22 Nov 2022'), updated: Date.parse('23 Nov 2022')},
      { id: 78, firstName: 'Freddy18', lastName: 'Freeloader', email: 'ff8@ff.com', created: Date.parse('24 Nov 2022'), updated: Date.parse('25 Nov 2022')},
      { id: 79, firstName: 'Freddy19', lastName: 'Freeloader', email: 'ff9@ff.com', created: Date.parse('26 Nov 2022'), updated: Date.parse('27 Nov 2022')},
      { id: 80, firstName: 'Freddy20', lastName: 'Freeloader', email: 'ff10@ff.com', created: Date.parse('28 Nov 2022'), updated: Date.parse('29 Nov 2022')},
      { id: 81, firstName: 'Freddy11', lastName: 'Freeloader', email: 'ff@ff.com', created: Date.parse('10 Nov 2022'), updated: Date.parse('11 Nov 2022')},
      { id: 82, firstName: 'Freddy12', lastName: 'Freeloader', email: 'ff2@ff.com', created: Date.parse('12 Nov 2022'), updated: Date.parse('13 Nov 2022')},
      { id: 83, firstName: 'Freddy13', lastName: 'Freeloader', email: 'ff3@ff.com', created: Date.parse('14 Nov 2022'), updated: Date.parse('15 Nov 2022')},
      { id: 84, firstName: 'Freddy14', lastName: 'Freeloader', email: 'ff4@ff.com', created: Date.parse('16 Nov 2022'), updated: Date.parse('17 Nov 2022')},
      { id: 85, firstName: 'Freddy15', lastName: 'Freeloader', email: 'ff5@ff.com', created: Date.parse('18 Nov 2022'), updated: Date.parse('19 Nov 2022')},
      { id: 86, firstName: 'Freddy16', lastName: 'Freeloader', email: 'ff6@ff.com', created: Date.parse('20 Nov 2022'), updated: Date.parse('21 Nov 2022')},
      { id: 87, firstName: 'Freddy17', lastName: 'Freeloader', email: 'ff7@ff.com', created: Date.parse('22 Nov 2022'), updated: Date.parse('23 Nov 2022')},
      { id: 88, firstName: 'Freddy18', lastName: 'Freeloader', email: 'ff8@ff.com', created: Date.parse('24 Nov 2022'), updated: Date.parse('25 Nov 2022')},
      { id: 89, firstName: 'Freddy19', lastName: 'Freeloader', email: 'ff9@ff.com', created: Date.parse('26 Nov 2022'), updated: Date.parse('27 Nov 2022')},
      { id: 90, firstName: 'Freddy20', lastName: 'Freeloader', email: 'ff10@ff.com', created: Date.parse('28 Nov 2022'), updated: Date.parse('29 Nov 2022')},
      { id: 91, firstName: 'Freddy11', lastName: 'Freeloader', email: 'ff@ff.com', created: Date.parse('10 Nov 2022'), updated: Date.parse('11 Nov 2022')},
      { id: 92, firstName: 'Freddy12', lastName: 'Freeloader', email: 'ff2@ff.com', created: Date.parse('12 Nov 2022'), updated: Date.parse('13 Nov 2022')},
      { id: 93, firstName: 'Freddy13', lastName: 'Freeloader', email: 'ff3@ff.com', created: Date.parse('14 Nov 2022'), updated: Date.parse('15 Nov 2022')},
      { id: 94, firstName: 'Freddy14', lastName: 'Freeloader', email: 'ff4@ff.com', created: Date.parse('16 Nov 2022'), updated: Date.parse('17 Nov 2022')},
      { id: 95, firstName: 'Freddy15', lastName: 'Freeloader', email: 'ff5@ff.com', created: Date.parse('18 Nov 2022'), updated: Date.parse('19 Nov 2022')},
      { id: 96, firstName: 'Freddy16', lastName: 'Freeloader', email: 'ff6@ff.com', created: Date.parse('20 Nov 2022'), updated: Date.parse('21 Nov 2022')},
      { id: 97, firstName: 'Freddy17', lastName: 'Freeloader', email: 'ff7@ff.com', created: Date.parse('22 Nov 2022'), updated: Date.parse('23 Nov 2022')},
      { id: 98, firstName: 'Freddy18', lastName: 'Freeloader', email: 'ff8@ff.com', created: Date.parse('24 Nov 2022'), updated: Date.parse('25 Nov 2022')},
      { id: 99, firstName: 'Freddy19', lastName: 'Freeloader', email: 'ff9@ff.com', created: Date.parse('26 Nov 2022'), updated: Date.parse('27 Nov 2022')},
      { id: 100, firstName: 'Freddy20', lastName: 'Freeloader', email: 'ff10@ff.com', created: Date.parse('28 Nov 2022'), updated: Date.parse('29 Nov 2022')},
      ];
    return {customers};
  }

}