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
    it('should return true if passed parameter type is an array', function () {
      expect(is.array(['lol', 'lool'])).to.be.true;
    });
    it("should return false if passed parameter type is not an array", function () {
      expect(is.array("woulaaaaah")).to.be.false;
    });
  });

  describe('is.boolean', function () {
    it('should return true if passed parameter type is a boolean', function () {
      expect(is.boolean(true)).to.be.true;
      expect(is.boolean(false)).to.be.true;
    });
    it("should return false if passed parameter type is not a boolean", function () {
      expect(is.boolean("woulaaaaah")).to.be.false;
    });
  });

  describe('is.date', function () {
    it('should return true if passed parameter type is a date', function () {
      LaDate = new Date(2011-10-21);
      expect(is.date(LaDate)).to.be.true;
    });
    it("should return false if passed parameter type is not a date", function () {
      expect(is.date("woulaaaaah")).to.be.false;
    });
  });

  describe('is.error', function () {
    it('should return true if passed parameter type is an Error', function () {
      erreur = new Error("hannnn");
      expect(is.error(erreur)).to.be.true;
    });
    it("should return false if passed parameter type is not an Error", function () {
      expect(is.error("woulaaaaah")).to.be.false;
    });
  });

  describe('is.function', function () {
    it('should return true if passed parameter type is a Function', function () {

      var uneFonction = function () {
          return "haha";
      };
      expect(is.function(uneFonction)).to.be.true;
    });
    it("should return false if passed parameter type is not a Function", function () {
      expect(is.function("woulaaaaah")).to.be.false;
    });
  });

  describe('is.nan', function () {
    it('should return true if passed parameter type is a not a number', function () {
      expect(is.nan(0/0)).to.be.true;
    });
    it("should return false if passed parameter type is a not a number", function () {
      expect(is.nan(2)).to.be.false;
    });
  });

  describe('is.nan', function () {
    it('should return true if passed parameter type is a not a number', function () {
      expect(is.nan(0/0)).to.be.true;
    });
    it("should return false if passed parameter type is a not a number", function () {
      expect(is.nan(2)).to.be.false;
    });
  });
});
