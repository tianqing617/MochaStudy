# TOC
   - [add function test](#add-function-test)
   - [Array](#array)
     - [#indexOf()](#array-indexof)
<a name=""></a>
 
<a name="add-function-test"></a>
# add function test
1 + 1 = 2.

```js
expect(add(1, 1)).to.be.equal(2);
```

100 + 1000.

```js
// to.equal 等同于 to.be.equal
expect(add(100, 1000)).to.equal(1100);
```

<a name="array"></a>
# Array
<a name="array-indexof"></a>
## #indexOf()
should return -1 when the value is not present.

```js
assert.equal([1, 2, 3].indexOf(4), -1);
```

