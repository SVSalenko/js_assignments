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
        if (this.parentNode.querySelector('#info')) {
            this.parentNode.querySelector('#info').remove()
        }

        let id = this.parentNode.getAttribute('id');
        let tooltip = document.createElement('div');
        tooltip.innerHTML = `ID of this project: ${id}`;
        tooltip.id = 'info';
        tooltip.style.padding = '10px';
        tooltip.style.marginTop = '5px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        tooltip.addEventListener('click', () => tooltip.remove());
        this.parentNode.append(tooltip);
    }

    moveProject(project) {
        if (project.parentNode.querySelector('#info')) {
            project.parentNode.querySelector('#info').remove()
        }

        document.getElementById(this.projectType).querySelector('ul').append(project.parentNode);
        let newButtom = document.createElement('button')
        newButtom.innerHTML = this.text;
        project.parentNode.append(newButtom);
        project.remove();
    }
}

class ActiveProject extends Project {
    constructor() {
        super();
        this.completeProject()
        this.projectType = 'finished-projects';
        this.text = 'Activate'
    }

    completeProject() {
        document.getElementById('active-projects').querySelector('ul').addEventListener('click', (event) => {
            if (event.target.innerHTML === 'Finish') {
                this.moveProject(event.target);
            }
        });
    }
}

class FinishedProject extends Project {
    constructor() {
        super();
        this.activateProject()
        this.projectType = 'active-projects';
        this.text = 'Finish'
    }

    activateProject() {
        document.getElementById('finished-projects').querySelector('ul').addEventListener('click', (event) => {
            if (event.target.innerHTML === 'Activate') {
                this.moveProject(event.target);
            }
        });
    }
}

class App {
    static init() {
        const ActiveProjectsList = new ActiveProject();
        const FinishedProjectsList = new FinishedProject();
    }
}

App.init();
