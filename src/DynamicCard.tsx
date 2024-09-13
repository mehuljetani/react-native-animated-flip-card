import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  ImageStyle,
  TouchableOpacity,
} from "react-native";
import Animated, {
  Easing,
  withSpring,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface DynamicCardProps {
  title: string;
  imageUrl?: string;
  backTitle?: string;
  description: string;
  backImageUrl?: string;
  backDescription?: string;
  cardStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  flipDirection?: "horizontal" | "vertical";
}

const DynamicCard: React.FC<DynamicCardProps> = ({
  title,
  imageUrl,
  backTitle,
  description,
  backImageUrl,
  backDescription,
  cardStyle = {},
  titleStyle = {},
  imageStyle = {},
  descriptionStyle = {},
  flipDirection = "horizontal",
}) => {
  const flipAnimation = useSharedValue(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const rotationAxis = flipDirection === "horizontal" ? "Y" : "X";

  const frontStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          [`rotate${rotationAxis}`]: withSpring(isFlipped ? "180deg" : "0deg", {
            duration: 3000,
            easing: Easing.out(Easing.ease),
          }),
        },
      ],
      opacity: interpolate(flipAnimation.value, [0, 1], [1, 0]),
    }),
    [isFlipped]
  );

  const backStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          [`rotate${rotationAxis}`]: withSpring(
            isFlipped ? "0deg" : "-180deg",
            {
              duration: 3000,
              easing: Easing.out(Easing.ease),
            }
          ),
        },
      ],
      opacity: interpolate(flipAnimation.value, [0, 1], [0, 1]),
    }),
    [isFlipped]
  );

  const handlePress = () => {
    flipAnimation.value = withSpring(isFlipped ? 0 : 1, {
      duration: 1500,
      easing: Easing.out(Easing.ease),
    });
    setIsFlipped((prev) => !prev);
  };

  return (
    <View style={[styles.cardWrapper, cardStyle]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={handlePress}
        style={styles.cardContainer}
      >
        {/* Front Side */}
        <Animated.View style={[styles.cardFace, frontStyle]}>
          {imageUrl && (
            <Image
              source={{ uri: imageUrl }}
              style={[styles.image, imageStyle]}
            />
          )}
          <View style={styles.content}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <Text style={[styles.description, descriptionStyle]}>
              {description}
            </Text>
          </View>
        </Animated.View>

        {/* Back Side */}
        <Animated.View style={[styles.cardFace, backStyle]}>
          {backImageUrl && (
            <Image
              source={{ uri: backImageUrl }}
              style={[styles.image, imageStyle]}
            />
          )}
          <View style={styles.content}>
            <Text style={[styles.title, titleStyle]}>{backTitle}</Text>
            <Text style={[styles.description, descriptionStyle]}>
              {backDescription}
            </Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: 300,
    height: 450,
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  cardFace: {
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  image: {
    width: "93%",
    height: "94%",
    resizeMode: "cover",
  },
  content: {
    bottom: 20,
    width: "100%",
    position: "absolute",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default DynamicCard;
