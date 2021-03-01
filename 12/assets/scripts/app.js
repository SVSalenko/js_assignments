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
        let id = this.parentNode.getAttribute('id');
        let tooltip = document.createElement('div');
        tooltip.innerHTML = `ID of this project: ${id}`;
        tooltip.id = 'info';
        tooltip.style.padding = '10px';
        tooltip.style.marginTop = '5px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        tooltip.addEventListener('click', () => tooltip.remove());
        document.querySelector('body').append(tooltip);
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
