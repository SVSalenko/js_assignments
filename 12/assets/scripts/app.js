class Project {
    constructor() {
        this.info();
    }

    info() {
        for (var ul of document.querySelectorAll('ul')) {
            for (var li of ul.querySelectorAll('li')) {
                li.querySelector('button').addEventListener('click', this.showInfo);
            }
        }
    }

    showInfo() {
        alert(this.parentNode.getAttribute('id'));
    }
}

class ActiveProject extends Project {
    constructor() {
        super();
        this.completeProject()
    }

    completeProject() {
        for (var variable of document.getElementById('active-projects').querySelector('ul').querySelectorAll('li')) {
            variable.querySelector('button:last-child').addEventListener('click', this.moveProject);
        }
    }

    moveProject() {
        document.getElementById('finished-projects').querySelector('ul').append(this.parentNode);
        let newButtom = document.createElement('button')
        newButtom.innerHTML = 'Activate';
        this.parentNode.append(newButtom);
        this.remove();
        Lists.update();
    }
}

class FinishedProject extends Project {
    constructor() {
        super();
        this.activateProject()
    }

    activateProject() {
        for (var variable of document.getElementById('finished-projects').querySelector('ul').querySelectorAll('li')) {
            variable.querySelector('button:last-child').addEventListener('click', this.moveProject);
        }
    }

    moveProject() {
        document.getElementById('active-projects').querySelector('ul').append(this.parentNode);
        let newButtom = document.createElement('button')
        newButtom.innerHTML = 'Finish';
        this.parentNode.append(newButtom);
        this.remove();
        Lists.update();
    }
}

class Lists {
    static update() {
        const ActiveProjectsList = new ActiveProject();
        const FinishedProjectsList = new FinishedProject();
    }
}

class App {
    static init() {
        const ProjectsList = new Project();
        Lists.update();
    }
}

App.init();
