# unused-npm-names

Find unused npm names.

## Usage

```bash
npm i unused-npm-names -g
```

```bash
$ unn react react-dom react-router fdsagdainfkdsaj

# output
fdsagdainfkdsaj: Unused ✅
react-dom: Used ❌
react-router: Used ❌
react: Used ❌
```

**Use config files**

```js
// names.js
const pkgs = [];

const firstLetters = 'abcdefghigklmnopqrstuvwxyz'.split('');
const secondLetters = '0'.split('');

for (let i = 0; i < firstLetters.length; i ++) {
  for(let j = secondLetters.length - 1; j >= 0; j --) {
    pkgs.push(`${firstLetters[i]}${secondLetters[j]}`);
  }
}

console.log(pkgs); // [ 'a0','b0','c0','d0','e0','f0','g0','h0','i0','g0','k0','l0','m0','n0','o0','p0','q0','r0','s0','t0','u0','v0','w0','x0','y0','z0' ]

module.exports = pkgs;

```

```bash
unn -c names.js

# output
f0: Used ❌
a0: Used ❌
b0: Used ❌
d0: Used ❌
g0: Used ❌
e0: Used ❌
n0: Used ❌
o0: Unused ✅
r0: Used ❌
p0: Used ❌
m0: Used ❌
h0: Used ❌
g0: Used ❌
y0: Used ❌
w0: Used ❌
s0: Used ❌
i0: Used ❌
u0: Used ❌
x0: Used ❌
v0: Used ❌
c0: Used ❌
k0: Used ❌
t0: Used ❌
q0: Used ❌
z0: Used ❌
l0: Used ❌
```

## LICENSE

[MIT](./LICENSE) © PengJiyuan
