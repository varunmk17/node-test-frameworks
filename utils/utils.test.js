const expect = require('expect');
const utils = require('./utils')

describe('Utils', () => {
    it('should add two numbers', () => {
        var result = utils.add(1, 3);
        expect(result).toBe(4).toBeA('number');
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 2, (sum) => {
            expect(sum).toBe(6).toBeA('number');
            done();
        });
    });
    
    it('should square it', () => {
        var result = utils.square(2);
        expect(result).toBe(4);
    });
    
    it('should say hi', () => {
        var result = utils.greet('varun');
        expect(result).toBe('Hi varun').toBeA('string');
    });
    
    it('should verify first and last names are set', () => {
       var user = {loc: 'NJ', age: 28}; 
       var result = utils.setName(user, 'varun k');
       expect(result).toInclude({
           firstName: 'varun',
           lastName: 'k'
       }).toBeA('object');
    });
});