<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>react-native-animated-flip-card</h1>
  <p>A React Native component that provides a customizable, animated flip card with both horizontal and vertical flipping directions. Perfect for creating interactive and engaging user interfaces.</p>
   <h2>Features:</h2>
   <p>Flip animation (horizontal or vertical)</p>
   <p>Customizable content for both front and back sides</p>
   <p>Supports images and text styling</p>
   <p>Configurable animation duration and easing</p>

  <h2>Installation</h2>
  <p>To install the package, use npm or yarn:</p>

  <h3>Using npm:</h3>
  <pre><code>npm install react-native-animated-flip-card</code></pre>

  <h3>Using yarn:</h3>
  <pre><code>yarn add react-native-animated-flip-card</code></pre>

  <h2>Usage</h2>
  <p>To use the <code>DynamicCard</code> component in your React Native project, follow these steps:</p>

  <h3>Import the Component</h3>
  <pre><code>import DynamicCard from 'react-native-animated-flip-card';</code></pre>

  <h3>Example</h3>
  <p>Here's a basic example of how to use the <code>DynamicCard</code> component:</p>

  <pre><code>
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import DynamicCard from 'react-native-animated-flip-card';

const App = () => {
  return (
    &lt;View style={styles.container}&gt;
      &lt;StatusBar hidden /&gt;
      &lt;DynamicCard
        backTitle="River Side"
        title="Beautiful Sunset"
        flipDirection={'vertical'}
        cardStyle={styles.customCard}
        imageStyle={styles.customImage}
        titleStyle={styles.customTitle}
        descriptionStyle={styles.customDescription}
        backDescription="A stunning view of the River Side mountains."
        description="A stunning view of the sunset over the mountains."
        imageUrl="https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600"
        backImageUrl="https://images.pexels.com/photos/3217928/pexels-photo-3217928.jpeg?auto=compress&cs=tinysrgb&w=600"
      /&gt;
    &lt;/View&gt;
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  customCard: {
    width: 320,
    height: 500,
    borderRadius: 18,
    backgroundColor: 'white',
  },
  customImage: {
    width: 300,
    height: 480,
    borderRadius: 15,
  },
  customTitle: {
    color: '#fff',
  },
  customDescription: {
    color: '#fff',
  },
});

export default App;
  </code></pre>

  <h2>Demo</h2>
  <p>Check out the demo of the component in action:</p>
  <p>Horizontal</p>
  <img src="https://miro.medium.com/v2/resize:fit:438/format:webp/1*AHPmoHUV7lyHD76_aTOyfA.gif" alt="Demo GIF" style="width: 160px; height: 350px">

  <p>Vertical</p>
  <img src="https://miro.medium.com/v2/resize:fit:438/format:webp/1*6GVL_D2jJfqVkog0odNW3A.gif" alt="Demo GIF" style="width: 160px; height: 350px">

  <h2>Props</h2>
   <table
          border="1"
          cellspacing="0"
          cellpadding="8"
          style="width: 100%; border-collapse: collapse"
        >
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>title</code></td>
              <td><code>string</code></td>
              <td><code>""</code></td>
              <td>The text for front side.</td>
            </tr>
            <tr>
              <td><code>description</code></td>
              <td><code>string</code></td>
              <td><code>""</code></td>
              <td>The description front side.</td>
            </tr>
            <tr>
              <td><code>backTitle</code></td>
              <td><code>string</code></td>
              <td><code>""</code></td>
              <td>The text for back side.</td>
            </tr>
            <tr>
              <td><code>backDescription</code></td>
              <td><code>string</code></td>
              <td><code>""</code></td>
              <td>The description back side.</td>
            </tr>
            <tr>
              <td><code>imageUrl</code></td>
              <td><code>string</code></td>
              <td><code>""</code></td>
              <td>The URL of the image front side.</td>
            </tr>
            <tr>
              <td><code>backImageUrl</code></td>
              <td><code>string</code></td>
              <td><code>""</code></td>
              <td>The URL of the image back side.</td>
            </tr>
            <tr>
              <td><code>cardStyle</code></td>
              <td><code>StyleProp&lt;ViewStyle&gt;</code></td>
              <td><code>{}</code></td>
              <td>Custom style for the card container.</td>
            </tr>
            <tr>
              <td><code>titleStyle</code></td>
              <td><code>StyleProp&lt;TextStyle&gt;</code></td>
              <td><code>{}</code></td>
              <td>Custom style for the title text.</td>
            </tr>
            <tr>
              <td><code>imageStyle</code></td>
              <td><code>StyleProp&lt;ImageStyle&gt;</code></td>
              <td><code>{}</code></td>
              <td>Custom style for the image.</td>
            </tr>
            <tr>
              <td><code>descriptionStyle</code></td>
              <td><code>StyleProp&lt;TextStyle&gt;</code></td>
              <td><code>{}</code></td>
              <td>Custom style for the description text.</td>
            </tr>
            <tr>
              <td><code>flipDirection</code></td>
              <td><code>'horizontal' | 'vertical'</code></td>
              <td><code>'horizontal'</code></td>
              <td>Direction of the flip animation.</td>
            </tr>
          </tbody>
        </table>

  <h2>License</h2>
  <p>This project is licensed under the ISC License.</p>

  <h2>Contact</h2>
  <p>If you have any questions or issues, please open an issue on the <a href="https://github.com/mehuljetani/react-native-animated-flip-card.git">GitHub repository</a> or contact the author directly.</p>
</body>
</html>
