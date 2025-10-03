class studentHogwarts {
    constructor() {
        let privateScore = 0;
        let name = null;

        // private method
        const changeScoreBy = (points) => {
            privateScore += points;
        };

        // public methods
        this.setName = function(newName) {
            name = newName;
        };

        this.rewardStudent = function() {
            changeScoreBy(1);
        };

        this.penalizeStudent = function() {
            changeScoreBy(-1);
        };

        this.getScore = function() {
            return `${name}: ${privateScore}`;
        };
    }
}

// Harry
let harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Harry: 4

// Draco
let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Draco: -2
