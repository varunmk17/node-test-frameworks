const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect({
                    name: 'varun',
                    loc: 'NJ'
                })
                .expect((res) => {
                    expect(res.body).toInclude({
                        loc: 'NJ'
                    });
                })
                .end(done);
        });
    })
    
    describe('GET /Users', () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Varun',
                        age: 28
                    });
                })
                .end(done);
        });
    });
});