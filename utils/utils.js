module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b); 
    }, 1000);
};

module.exports.square = (a) => a * a;

module.exports.greet = (text) => `Hi ${text}` ;

module.exports.setName = (user, fullname) => {
    var names = fullname.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];

    return user;
};