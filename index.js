var HashCount = require('./src/HashCount');

var credoCount = new HashCount({
    organization: 'credo',
    organizations: require('./input/organizations'),
});
