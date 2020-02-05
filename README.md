# TypeIt - React

The official React component for [TypeIt](https://github.com/alexmacarthur/typeit), the most versatile JavaScript animated typing utility on the planet. You can use it to bring dynamic typewriter effects to your React applications.

## License Options

Use this component in an open source or personal project for free. For commercial projects, the following licenses are available. A single license will cover use of this component, as well as TypeItJS itself.

- Single Commercial License - [Purchase Here](https://typeitjs.com/checkout/limited)
- Extended Commercial License - [Purchase Here](https://typeitjs.com/checkout/unlimited)

## Installation

`npm install typeit-react`

## Usage

### The Simplest Example

In its simplest implementation, import the component and wrap some text to be typed.

```js
import TypeIt from "typeit-react";

export default () => {
  return (
    <div className="App">
      <TypeIt>This will be typed in a `span` element!</TypeIt>
    </div>
  );
};
```

Note: This approach will cause the string to first be rendered in the markup and _then_ picked up by TypeIt, which might be desired if you're using it with a statically rendered application (ex: GatsbyJS). However, it may also cause a brief flash of text when the page loads. For an alternative way to define strings, see below.

### Customizing Your Options

To tweak the animation to your liking, pass an object as the `options` prop. All options supported by TypeIt can be used here. Using this prop, you can also set strings without passing them as children. To view all options, see [TypeIt's documentation](https://typeitjs.com/docs#options).

```javascript
import TypeIt from "typeit-react";

export default () => {
  return (
    <div className="App">
      <TypeIt
        options={{
          strings: ["This will be typed!"],
          speed: 10,
          waitUntilVisible: true
        }}
      />
    </div>
  );
};
```

### Choose Your Own Element

Out of the box, a `span` element is used to contain the typing animation. To choose your own element, use the `element` prop.

```javascript
import TypeIt from "typeit-react";

export default () => {
  return (
    <div className="App">
      <TypeIt element={"h3"}>This will be typed in an H3 tag.</TypeIt>
    </div>
  );
};
```

## Need Help?

If you're working with a custom implementation of TypeIt and would like some help, I'm available for hire. [Get in touch!](https://macarthur.me/contact)

## License

[GPL-2.0](https://github.com/alexmacarthur/typeit/blob/master/LICENSE) © Alex MacArthur
