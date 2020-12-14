const workers = [
  { name: "Bob", salary: 500},
  { name: "Mike", salary: 1300},
  { name: "Din", salary: 1500},
]

const getWorthyWorkers = (workersArr) => {
  const worthyWorkers = [];

  workersArr.forEach(currentWorker => {
    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker.name)
    }
  })
  /*for (let i=0; i<workersArr.length; i++) {
    const currentWorker = workersArr[i];

    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker.name);
    }
  }*/

  return worthyWorkers;
};

console.log(getWorthyWorkers(workers));