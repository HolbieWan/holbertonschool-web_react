interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}
const student1: Student = {
  firstName: 'Manu',
  lastName: 'MeynetG',
  age: 54,
  location: 'Bellevaux'
}
const student2: Student = {
  firstName: 'Cedric',
  lastName: 'Tobie',
  age: 42,
  location: 'Annemasse'
}
const studentList: Student[] = [student1, student2];
// function renderTable(): void {
// }