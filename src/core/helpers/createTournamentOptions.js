const fs = require('fs');
const tournaments = require('../constants/tournamentsFromDatabase.json');
const optionsUnsorted = []
const labels = []
tournaments.forEach(tournament => {
    const name = tournament.name
    const year = tournament.year
    const id = tournament.id
    let label
    if (year == "") {
        label = name
    }
    else {
        label = `${name} ${year}`
    }
    labels.push(label)
    optionsUnsorted.push({
        value: id,
        label: label
    })
})
labels.sort()
let optionsSorted = []
labels.forEach(label => {
    let id = undefined
    optionsUnsorted.forEach(option => {
        if (option.label == label) {
            id = option.value
        }
    })
    optionsSorted.push({
        value: id,
        label: label
    })
})
optionsSorted = optionsSorted.filter((obj, index, self) =>
    index === self.findIndex((el) => el.value === obj.value)
);
const optionsJSON = JSON.stringify(optionsSorted)
fs.writeFile(`../constants/tournamentOptions.json`, optionsJSON, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});