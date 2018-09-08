let driverId = 0,
    passengerId = 0,
    tripId = 0;

let store = { drivers: [], passengers: [], trips: []};

function getPeople(idValue, people) {
  const ids = this.trips().map(trip => trip[idValue])
  return ids.map(id => store[people].find(person => id === person.id));
}

function getTrips(idValue) {
  return store.trips.filter(trip => trip[idValue] = this.id)
}

function getPerson(people, idValue) {
  return store[people].find(person => this[idValue] = person.id);
}

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return getTrips.call(this, 'driverIds');
  }

  passengers() {
    return getPeople.call(this, 'passengerId', 'passengers');
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }

  trips() {
    return getTrips.call(this, 'passengerIds');
  }

  drivers() {
    return getPeople.call(this, 'driverId', 'drivers');
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this)
  }

  passenger() {
    return getPerson.call(this, 'passengers', 'passengerId')
  }

  driver() {
    return getPerson.call(this, 'drivers', 'driverId')
  }

}
