/* DESCRIPTION:
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 */

const rgb = (r, g, b) =>
  [r, g, b]
    .map((val) => Math.max(0, Math.min(255, val)).toString(16).padStart(2, `0`))
    .join(``)
    .toUpperCase();

// &&

function rgb(r, g, b) {
  let convert = function (value) {
    if (value < 0) {
      return "00";
    }
    if (value > 255) {
      return "FF";
    }
    return (
      value > 15 ? value.toString(16) : "0" + value.toString(16)
    ).toUpperCase();
  };
  return convert(r) + convert(g) + convert(b);
}
