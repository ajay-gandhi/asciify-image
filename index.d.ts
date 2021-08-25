declare module 'asciify-image' {

	interface asciifyOptions {
		/** 
		 * Defines if the output should be colored (`true`) or black and white (`false`) 
		 * 
		 * **Default:** `true`
		*/
		color?: boolean,
		/** 
		 * The fit to resize the image to: 
		 * 
		 * **Default:** `original`
		 * 
		 * • `box` - Resize the image such that it fits inside a bounding box defined by the specified width and height. Maintains aspect ratio. 
		 * 
		 * • `width` - Resize the image by scaling the width to the specified width. Maintains aspect ratio. 
		 * 
		 * • `height` - Resize the image by scaling the height to the specified height. Maintains aspect ratio.
		 * 
		 * • `original` - Doesn't resize the image.
		 * 
		 * • `none` - Scales the width and height to the specified values, ignoring original aspect ratio.*/
		fit?: 'box' | 'width' | 'height' | 'original' | 'none',
		/** 
		 * The width to resize the image to. Use a percentage to set the image width to x% of the terminal window width.
		 * 
		 * **Default:** `original image width`
		*/
		width?: number | string,
		/** 
		 * The height to resize the image to. Use a percentage to set the image width to x% of the terminal window height.
		 * 
		 * **Default:** `original image height`
		*/
		height?: number | string,
		/** 
		 * The format to return the asciified image in. Can be "string" or "array".
		 * 
		 * **Default:** `string`
		*/
		format?: 'string' | 'array',
		/**
		 * Since a monospace character is taller than it is wide, this property defines the integer approximation of the ratio of the width to height. You probably don't need to change this.
		 * 
		 * **Default:** `2`
		 */ 
		c_ratio?: number,
	}
	/** The function to call after the image is asciified. Receives any errors that occurred as the first parameter and the asciified text as the second. When omitted, the module will return a Promise */
	type asciifyCallback = (err: Error, asciified: string | string[]) => void;

	type asciifyImageInput = string | Buffer | URL;

	function asciifyImage(image: asciifyImageInput, options?: asciifyOptions, callback?: asciifyCallback): Promise<string | string[]>;
  export = asciifyImage;
}
