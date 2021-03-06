const allPeople = require('../models/people.js');

// Create a function which is a "controller", it
// handles a request, writing the response.
function listAttendees(request, response) {
    // Store the value of the `q` GET parameter in the
    // `query` variable.
    let query = request.query.q;
    let peeps = allPeople;
    if (query){
        query = query.toLowerCase();
        peeps = allPeople.filter(personName => personName.toLowerCase().includes(query));
    };
    const contextData = {
        title: 'List of attendees',
        peopleMatchignQuery: peeps,
    };
    response.render('attendees', contextData);
}

module.exports = {
    listAttendees,
};
