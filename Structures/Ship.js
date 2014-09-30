/**
 * @constructor
 * @param {Addressat} shipper
 * @param {ReceiverAddressat} receiver
 * @param {NeighbourAddress} neighbour
 */
function Ship(shipper, receiver, neighbour) {
    this.shipper = shipper;
    this.receiver = receiver;
    this.neighbour = neighbour;
}


module.exports.Ship = Ship;