module.exports = function (grunt, options) {

    var tasks = ['node_version', 'jshint', 'mochaTest'];

    // computation...
    return {
        'tasks': ['availabletasks'],
        'default': tasks
    };
};
