# ascii-image

> Convert images to ASCII art without native dependencies

ascii-image allows you to convert images to ASCII art **without native
dependencies**. This means that all you need to do is `npm install ascii-image`,
instead of `brew`ing and `apt-get`ing other packages.

## API

See an [example](#example).

#### path

The path to the image you wish to asciify. Currently supported formats are:

* JPG
* PNG
* GIF

#### options.fit

*Default: 'original'*

The fit to which to resize the image:

* `box` - Resize the image such that it fits inside a bounding box defined by
          the specified [width](#options.width) and [height](#options.height).
          Maintains aspect ratio.
* `width` - Resize the image by scaling the width to the specified width.
            Maintains aspect ratio.
* `height` - Resize the image by scaling the height to the specified height.
             Maintains aspect ratio.
* `original` - Doesn't resize the image.
* `none` - Scales the width and height to the specified values, ignoring
           original aspect ratio.

#### options.width

*Default: original image width*

The width to which to resize the image.

#### options.height

*Default: original image height*

The height to which to resize the image.

#### options.c_ratio

*Default: 2*

Since a monospace character is taller than it is wide, this property defines the
integer approximation of the ratio of the width to height. You probably don't
really need to change this.

#### callback

The function to call after the image is asciified. Receives the asciified text
as a parameter.

## Example

```js
var asciify = require('asciify-image');

var options = {
  fit:    'box',
  width:  200,
  height: 100
}

asciify('path/to/image.png', options, function (asciified) {
  // Print to console
  console.log(asciified);
});
```

## How It Works

Images are represented by pixels. This package reads each pixel as an RGBa
value. Each of these values is converted into a single integer, called
"intensity". A darker pixel would have a higher intensity, and a lighter pixel
would have a lower intensity.

For each pixel, a character is substituted: for a light pixel, the character
"," may be substituted, but for a darker pixel, the character "8" would be
substituted. Since these characters are different sizes, they look lighter or
darker in the big picture (pun somewhat intended).
