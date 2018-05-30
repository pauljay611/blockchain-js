const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389564,'0INA90SDNF90N', '90ADSFHDFHSDW');

bitcoin.createNewTransaction(0.002, '0xsaasfasfdads', 'NUUASDASDASD');

bitcoin.createNewBlock(1245678,'0Igbgn90SDNF90N', 'DVOBKCMBOMSGO');

bitcoin.createNewTransaction(0.002, '0xsaasfasfdads', 'NUUASDASDASD');
bitcoin.createNewTransaction(0.1, '0EEESDFXBCs', 'NUXCVBXCVBXCB');
bitcoin.createNewTransaction(0.5, '0SDFSDFSDFasfdads', 'NUSDFSFSFSFSD');

bitcoin.createNewBlock(367448,'ASDFASDFASDFAASDF', 'ASDGADFAGSADF');


console.log(bitcoin);

