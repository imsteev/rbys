import crypto from 'crypto';

const numBytes = parseInt(Bun.argv[2]) || 32;
const bytes = crypto.randomBytes(numBytes);

console.log("Random bytes generated: " + numBytes);
console.log(`bytes:`, bytes);
console.log(`hex: ${bytes.toString('hex')}`);
