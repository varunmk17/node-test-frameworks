const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('Apps', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy', () => {
        var spy = expect.createSpy();
        spy('Varun', 28);
        expect(spy).toHaveBeenCalledWith('Varun', 28);
    });

    it('should save user', () => {
        var email = 'varun@test.com';
        var password = '123';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        });
    });
});