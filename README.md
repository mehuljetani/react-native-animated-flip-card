<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>react-native-animated-flip-card</title>
    <style>
      .demo-img {
        width: 160px;
        margin: 6px;
        height: auto;
        max-width: 100%;
      }
    </style>
  </head>
  <body>
    <h1>react-native-animated-flip-card</h1>
    <p>
      A React Native component that provides a customizable, animated flip card
      with both horizontal and vertical flipping directions. Perfect for
      creating interactive and engaging user interfaces.
    </p>

    <h2>Installation</h2>
    <p>To install the package, use npm or yarn:</p>

    <h3>Using npm:</h3>
    <pre><code>npm install react-native-animated-flip-card</code></pre>

    <h3>Using yarn:</h3>
    <pre><code>yarn add react-native-animated-flip-card</code></pre>

    <h2>Usage</h2>
    <p>
      To use the <code>DynamicCard</code> component in your React Native
      project, follow these steps:
    </p>

    <h3>Import the Component</h3>
    <pre><code>import DynamicCard from 'react-native-animated-flip-card';</code></pre>

    <h3>Example</h3>
    <p>
      Here's a basic example of how to use the
      <code>DynamicCard</code> component:
    </p>

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
    <h3>Horizontal Flip</h3>
    <img
      src="./src/assets/horizontal.gif"
      alt="Horizontal Flip Demo"
      class="demo-img"
    />
    <h3>Vertical Flip</h3>
    <img
      src="./src/assets/verticle.gif"
      alt="Vertical Flip Demo"
      class="demo-img"
    />

    <h2>Props</h2>
    <table border="1" cellspacing="0" cellpadding="8">
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
          <td>The text displayed on the front side of the card.</td>
        </tr>
        <tr>
          <td><code>description</code></td>
          <td><code>string</code></td>
          <td><code>""</code></td>
          <td>The description displayed on the front side of the card.</td>
        </tr>
        <tr>
          <td><code>backTitle</code></td>
          <td><code>string</code></td>
          <td><code>""</code></td>
          <td>The text displayed on the back side of the card.</td>
        </tr>
        <tr>
          <td><code>backDescription</code></td>
          <td><code>string</code></td>
          <td><code>""</code></td>
          <td>The description displayed on the back side of the card.</td>
        </tr>
        <tr>
          <td><code>imageUrl</code></td>
          <td><code>string</code></td>
          <td><code>""</code></td>
          <td>The URL of the image displayed on the front side of the card.</td>
        </tr>
        <tr>
          <td><code>backImageUrl</code></td>
          <td><code>string</code></td>
          <td><code>""</code></td>
          <td>The URL of the image displayed on the back side of the card.</td>
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
    <p>
      If you have any questions or issues, please open an issue on the
      <a
        href="https://github.com/mehuljetani/react-native-animated-flip-card.git"
        >GitHub repository</a
      >
      or contact the author directly.
    </p>

  </body>
</html>
