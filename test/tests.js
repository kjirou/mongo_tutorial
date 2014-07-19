var utils = require('../generator/utils');


describe('utils module', function(){

  it('モジュールが定義されている', function(){
    expect(utils).to.be.a('object');
  });


  describe('accumulateRandomly', function(){

    it('関数が定義されている', function(){
      expect(utils.accumulateRandomly).to.be.a('function');
    });

    it('成功率と加算値が定数の場合に正しく計算できる', function(){
      var stub = sinon.stub(Math, 'random');
      stub.onCall(0).returns(0.1);
      stub.onCall(1).returns(0.2);
      stub.returns(0.3);
      expect(utils.accumulateRandomly(0.25, 1)).to.be(2);
      stub.restore();
    });

    it('成功率と加算値が関数の場合に正しく計算できる', function(){
      expect(utils.accumulateRandomly(
        function(times){
          if (times <= 3) return 1.0;
          return 0.0
        },
        function(times){
          return times;
        }
      )).to.be(1 + 2 + 3);
    });
  });
});
