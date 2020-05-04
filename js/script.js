// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.
class Circle {
  constructor(_radius) {
    this.radius = _radius;
  }
  get circleRadius() {
    return this.radius;
  }
  set circleRadius(rad) {
    this.radius = rad;
  }
  get circleDiameter() {
    return this.radius * 2;
  }
  countSquare() {
    let square = Math.PI * this.radius ** 2;
    return square.toFixed(2);
  }
  countCircumference() {
    let circumference = 2 * Math.PI * this.radius;
    return circumference.toFixed(2);
  }
}
let circle = new Circle(10);
// console.log(circle);
circle.circleRadius = 30;
// console.log(circle);
// console.log(`Square of the circle equals to ${circle.countSquare()}`);
// console.log(
//   `Circumference of the circle equals to ${circle.countCircumference()}`
// );

// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов.

class Marker {
  constructor(_color) {
    this.color = _color;
    this.ink = 100;
  }
  print(text) {
    let printedText = "";
    for (let character of text) {
      if (this.ink > 0) {
        if (character !== " ") {
          this.ink -= 0.5;
        }
        printedText += `${character}`;
      }
    }
    document.write(`<p style="color:${this.color}">${printedText}</p>`);
  }
}
let markerCrimson = new Marker("#DC143C");
// markerCrimson.print("Olya Olya Olya");
// markerCrimson.print("Olya Olya Olya");

class RefillableMarker extends Marker {
  fill() {
    this.ink = 100;
  }
}

let markerCadetBlue = new RefillableMarker("#5F9EA0");
// markerCadetBlue.print(
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, in!"
// );

// console.log(markerCadetBlue.ink);
markerCadetBlue.fill();
// console.log(markerCadetBlue.ink);

// 3.Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
// Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

class Employee {
  constructor(_name, _surname, _jobPosition) {
    this.name = _name;
    this.surname = _surname;
    this.jobPosition = _jobPosition;
  }
}

let bankEmployees = [
  new Employee("Vira", "Mukhina", "Loan Officer"),
  new Employee("Vladyslav", "Morozov", "Financial Analyst"),
  new Employee("Anton", "Kirik", "Accountant"),
  new Employee("Olena", "Vasylenko", "Financial Adviser"),
];

class EmpTable {
  constructor(_employeesArray) {
    this.employeesArray = _employeesArray;
  }

  getHtml() {
    let result = `<table style="border: 1px solid black"><tr><th>First name</th><th>Last name</th><th>Job Position</th></tr>`;
    for (let employee of this.employeesArray) {
      result += `<tr><td>${employee.name}</td><td>${employee.surname}</td><td>${employee.jobPosition}</td></tr>`;
    }
    result += `</table>`;
    document.write(result);
  }
}

let employee = new EmpTable(bankEmployees);
// employee.getHtml();
