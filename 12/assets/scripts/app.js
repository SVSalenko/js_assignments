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

    switchProject() {
        let relocatableProjects = document.getElementById(this.relocatableProjectType).querySelector('ul');
        let destinationProjects = document.getElementById(this.destinationProjectType).querySelector('ul');

        relocatableProjects.addEventListener('click', (event) => {
            if (event.target.innerHTML === 'Finish' || event.target.innerHTML === 'Activate') {
                this.moveProject(event.target.parentNode);
            }
        });

        relocatableProjects.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('projectId', event.target.id);
        });

        destinationProjects.addEventListener('dragover', (event) => {
            event.preventDefault();
            relocatableProjects.classList.remove('drop');
            destinationProjects.classList.add('drop');
        });

        destinationProjects.addEventListener('drop', (event) => {
            event.preventDefault();
            let project = document.getElementById(event.dataTransfer.getData('projectId'));
            this.moveProject(project);
        });

        destinationProjects.addEventListener('dragend', (event) => {
            destinationProjects.classList.remove('drop');
        });
    }

    moveProject(project) {
        if (project.querySelector('#info')) {
            project.querySelector('#info').remove();
        }

        document.getElementById(this.destinationProjectType).querySelector('ul').append(project);
        project.querySelector('button:last-child').innerHTML = this.textButton;
    }
}

class ActiveProject extends Project {
    constructor() {
        super();
        this.textButton = 'Activate';
        this.relocatableProjectType = 'active-projects';
        this.destinationProjectType = 'finished-projects';
        this.switchProject();
    }
}

class FinishedProject extends Project {
    constructor() {
        super();
        this.textButton = 'Finish';
        this.relocatableProjectType = 'finished-projects';
        this.destinationProjectType = 'active-projects';
        this.switchProject();
    }
}

class App {
    static init() {
        const ActiveProjectsList = new ActiveProject();
        const FinishedProjectsList = new FinishedProject();
    }
}

App.init();
