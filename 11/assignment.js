class Course {
    #priceData;

    constructor(title, length, priceData) {
        this.title = title;
        this.length = length;
        this.#priceData = priceData;
    }

    get #price() {
        if (this.#priceData >= 0) {
            return `$${this.#priceData}`;
        } else {
            return 'Здесь цена указана не верно';
        }
    }

    set price(priceData) {
        this.#priceData = priceData;
    }

    getUnitPrice() {
        return this.#priceData / this.length;
    }

    intro() {
        return `This is an ${this.title} course. Its duration is ${this.length} months. Costs ${this.price}.`
    }
}

let courseFrance = new Course('France', 10, 100);
let courseEnglish = new Course('English', 11, 154);

console.log(courseFrance, courseEnglish);

console.log(courseFrance.intro(), courseFrance.getUnitPrice());
console.log(courseEnglish.intro(), courseEnglish.getUnitPrice());

class PracticalCourse extends Course{
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercisesle = numOfExercises;
    }
}

class TheoreticalCourse extends Course{
    constructor(title, length, price) {
        super(title, length, price);
    }

    publish() {
        console.log('Hello');
    }
}

let coursePractical = new PracticalCourse('France', 10, 100, 80);
let courseTheoretical = new TheoreticalCourse('English', 11, 154);
coursePractical.price = 22;

console.log(coursePractical, courseTheoretical);

console.log(coursePractical.intro(), coursePractical.getUnitPrice(), coursePractical.numOfExercisesle);
console.log(courseTheoretical.intro(), courseTheoretical.getUnitPrice());
courseTheoretical.publish();
