# Vulnerable Python Application - Test Sample
# Contains quantum-vulnerable cryptographic patterns for E2E testing

from cryptography.hazmat.primitives.asymmetric import rsa, dsa, ec
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.backends import default_backend
import hashlib

# RSA 2048-bit key generation (quantum-vulnerable)
def generate_rsa_key():
    private_key = rsa.generate_private_key(
        public_exponent=65537,
        key_size=2048,
        backend=default_backend()
    )
    return private_key

# RSA 1024-bit key (weak and quantum-vulnerable)
def generate_weak_rsa_key():
    private_key = rsa.generate_private_key(
        public_exponent=65537,
        key_size=1024,
        backend=default_backend()
    )
    return private_key

# DSA key generation (quantum-vulnerable)
def generate_dsa_key():
    private_key = dsa.generate_private_key(
        key_size=2048,
        backend=default_backend()
    )
    return private_key

# ECDSA key generation (quantum-vulnerable)
def generate_ecdsa_key():
    private_key = ec.generate_private_key(
        ec.SECP256K1(),
        backend=default_backend()
    )
    return private_key

# MD5 hash (weak algorithm)
def hash_md5(data):
    return hashlib.md5(data.encode()).hexdigest()

# SHA-1 hash (deprecated)
def hash_sha1(data):
    return hashlib.sha1(data.encode()).hexdigest()

# DES encryption import (weak algorithm)
from Crypto.Cipher import DES

def encrypt_des(data, key):
    cipher = DES.new(key, DES.MODE_ECB)
    return cipher.encrypt(data)

# 3DES encryption import (deprecated)
from Crypto.Cipher import DES3

def encrypt_3des(data, key):
    cipher = DES3.new(key, DES3.MODE_ECB)
    return cipher.encrypt(data)
