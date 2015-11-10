var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });

    describe('is.array', function () {
        it('should return true if passed parameter type is Array', function () {
            expect(is.array(['value1', 'value2'])).to.be.true;
        });
        it('should return false if passed parameter type is not Array', function () {
            expect(is.array('string')).to.be.false;
        });
    });

    describe('is.boolean', function () {
        it('should return true if passed parameter type is boolean', function () {
            expect(is.boolean(true)).to.be.true;
        });
        it('should return false if passed parameter type is not boolean', function () {
            expect(is.boolean('string')).to.be.false;
        });
    });

    describe('is.date', function () {
        it('should return true if passed parameter type is date', function () {
            var date = new Date();
            expect(is.date(date)).to.be.true;
        });
        it('should return false if passed parameter type is not date', function () {
            var date =["2015:11:10:15:02:30"];
            expect(is.date(date)).to.be.false;
        });
    });

    describe('is.number', function () {
        it('should return true if passed parameter type is number', function () {
            var n =1;
            expect(is.number(n)).to.be.true;
        });
        it('should return false if passed parameter type is not number', function () {
            expect(is.number('1')).to.be.false;
        });
    });

    describe('is.json', function () {
        it('should return true if passed parameter type is json', function () {
            var json = {
                "prix": "7499€",
                "marque": "citroen",
                "modèle": "c5",
                "ann": "2007",
                "kilom": "124KM",
                "carburant": "diesel",
                "vitesse": "automatique"
            };
            expect(is.json(json)).to.be.true;
        });
        it('should return false if passed parameter type is not json', function () {
            expect(is.json("prix: 7499€,marque: citroen,modèle: c5,ann: 2007,kilom: 124KM,carburant: diesel,vitesse: automatique")).to.be.false;
        });
    });

    describe('is.empty', function () {
        it('should return true if passed parameter type is empty', function () {
            var v = [];
            expect(is.empty(v)).to.be.true;
        });
        it('should return false if passed parameter type is not Array', function () {
            var v=1;
            expect(is.empty(v)).to.be.false;
        });
    });

    describe('is.existy', function () {
        it('should return true if passed parameter type is existy', function () {
            var v = 1;
            expect(is.existy(v)).to.be.true;
        });
        it('should return false if passed parameter type is not existy', function () {
            var v= null;
            expect(is.existy(v)).to.be.false;
        });
    });

    describe('is.truthy', function () {
        it('should return true if passed parameter type is true', function () {
            var v = true;
            expect(is.truthy(v)).to.be.true;
        });
        it('should return false if passed parameter type is not true', function () {
            var v= false;
            expect(is.truthy(v)).to.be.false;
        });
    });

    describe('is.equal', function () {
        it('should return true if passed parameters type is equal', function () {
            expect(is.equal(1,1)).to.be.true;
        });
        it('should return false if passed parameters type is not equal', function () {
            expect(is.equal(1,2)).to.be.false;
        });
    });

    describe('is.even', function () {
        it('should return true if passed parameter type is even', function () {
            expect(is.even(2)).to.be.true;
        });
        it('should return false if passed parameter type is not even', function () {
            expect(is.even(1)).to.be.false;
        });
    });

    describe('is.positive', function () {
        it('should return true if passed parameter type is positive', function () {
            expect(is.positive(2)).to.be.true;
        });
        it('should return false if passed parameter type is not positive', function () {
            expect(is.positive(-1)).to.be.false;
        });
    });

    describe('is.negative', function () {
        it('should return true if passed parameter type is negative', function () {
            expect(is.negative(-2)).to.be.true;
        });
        it('should return false if passed parameter type is not negative', function () {
            expect(is.negative(2)).to.be.false;
        });
    });

    describe('is.under', function () {
        it('should return true if passed 1st parameter type is under than 2st parameter', function () {
            expect(is.under(1,2)).to.be.true;
        });
        it('should return false if passed 1st parameter type is not under than 2st parameter', function () {
            expect(is.under(2,1)).to.be.false;
        });
    });

    describe('is.finite', function () {
        it('should return true if passed parameter is finite', function () {
            expect(is.finite(2)).to.be.true;
        });
        it('should return false if passed parameter is not finite', function () {
            var v = Infinity;
            expect(is.finite(v)).to.be.false;
        });
    });

    describe('is.infinite', function () {
        it('should return true if passed parameter is infinite', function () {
            var v = Infinity;
            expect(is.infinite(v)).to.be.true;
        });
        it('should return false if passed parameter is finite', function () {
            var v = 1;
            expect(is.infinite(v)).to.be.false;
        });
    });

    describe('is.upperCase', function () {
        it('should return true if passed parameter is upperCase', function () {
            expect(is.upperCase('S')).to.be.true;
        });
        it('should return false if passed parameter is not upperCase', function () {
            expect(is.upperCase('s')).to.be.false;
        });
    });

    describe('is.lowerCase', function () {
        it('should return true if passed parameter is lowerCase', function () {
            expect(is.lowerCase('s')).to.be.true;
        });
        it('should return false if passed parameter is not lowerCase', function () {
            expect(is.lowerCase('S')).to.be.false;
        });
    });

    describe('is.startWith', function () {
        it('should return true if passed 1st parameter is start with 2st parameter ', function () {
            expect(is.startWith('string','s')).to.be.true;
        });
        it('should return false if passed 1st parameter is not start with 2st parameter', function () {
            expect(is.startWith('string','t')).to.be.false;
        });
    });

    describe('is.endWith', function () {
        it('should return true if passed 1st parameter is end with 2st parameter ', function () {
            expect(is.endWith('string','g')).to.be.true;
        });
        it('should return false if passed 1st parameter is not end with 2st parameter', function () {
            expect(is.endWith('string','t')).to.be.false;
        });
    });

    describe('is.today', function () {
        it('should return true if passed parameter is today ', function () {
            var now = new Date();
            expect(is.today(now)).to.be.true;
        });
        it('should return false if passed 1st parameter is not today', function () {
            var now = new Date();
            expect(is.today(now + 2)).to.be.false;
        });
    });

});
