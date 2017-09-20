const noble = require('noble');
noble.on('stateChange', function(state) {
    if (state === 'poweredOn') {
        noble.startScanning();
    } else {
        noble.stopScanning();
    }
});
noble.on('scanStop', () => {
    noble.startScanning();
});

noble.on('discover', peripheral => {
  //peripheral.once('rssiUpdate', callback(rssi));
  console.log(peripheral.address, peripheral.rssi, peripheral.connectable ? 1 : 0, peripheral.advertisement.txPowerLevel, peripheral.advertisement.localName);
});
