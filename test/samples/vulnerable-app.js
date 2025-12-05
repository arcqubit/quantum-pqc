// Vulnerable JavaScript Application - Test Sample
// Contains quantum-vulnerable cryptographic patterns for E2E testing

const crypto = require('crypto');

// RSA 2048-bit key generation (quantum-vulnerable)
function generateRsaKeyPair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: { type: 'spki', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
    });
    return { publicKey, privateKey };
}

// ECDSA signing (quantum-vulnerable)
function signWithEcdsa(data, privateKey) {
    const sign = crypto.createSign('SHA256');
    sign.update(data);
    return sign.sign(privateKey, 'hex');
}

// ECDH key exchange (quantum-vulnerable)
function performEcdh() {
    const ecdh = crypto.createECDH('secp256k1');
    ecdh.generateKeys();
    return ecdh.getPublicKey('hex');
}

// MD5 hash (weak algorithm)
function hashWithMd5(data) {
    return crypto.createHash('md5').update(data).digest('hex');
}

// SHA-1 hash (deprecated)
function hashWithSha1(data) {
    return crypto.createHash('sha1').update(data).digest('hex');
}

// DES encryption (weak algorithm)
function encryptWithDes(data, key) {
    const cipher = crypto.createCipher('des', key);
    return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
}

// 3DES encryption (deprecated)
function encryptWith3des(data, key) {
    const cipher = crypto.createCipher('des-ede3', key);
    return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
}

module.exports = {
    generateRsaKeyPair,
    signWithEcdsa,
    performEcdh,
    hashWithMd5,
    hashWithSha1,
    encryptWithDes,
    encryptWith3des
};
