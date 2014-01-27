var Transform = require('stream').Transform;
var inherits = require('inherits');

inherits(ReqMap, Transform);
module.exports = ReqMap;

function ReqMap () {
    if (!(this instanceof ReqMap)) return new ReqMap;
    Transform.call(this, { objectMode: true });
}

ReqMap.prototype._transform = function (row, enc, next) {
    console.log('row=', row);
    next();
};

ReqMap.prototype._flush = function (next) {
    this.push(null);
    next();
};
