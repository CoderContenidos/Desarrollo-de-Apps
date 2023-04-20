import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Header from "../Components/Header";
import allProducts from "../data/products.json";
import { colors } from "../Global/colors";
import AnimatedLoader from 'react-native-animated-loader';

const ItemDetail = ({ route, navigation}) => {
    const [product, setProduct] = useState(null);
    const [isPortrait, setIsPortrait] = useState(true);
    const [isLandscape, setIsLandscape] = useState(false);

    const {height, width} = useWindowDimensions()

    console.log(route.params);
    const {id} = route.params

    useEffect(()=> {
      if (height > width) {
        setIsPortrait(true)
        setIsLandscape(false)
      } else {
        setIsPortrait(false)
        setIsLandscape(true)
      }
    }, [height, width])

    console.log(isPortrait, isLandscape);

    useEffect(() => {
        console.log(id);
        const productFinded = allProducts.find(
            (product) => product.id === id
        );
        setProduct(productFinded);
    }, [id]);

    const goBack = () => {
      navigation.goBack();
    }

    return (
        <View style = {styles.main}>
            <Pressable 
              onPress={goBack}
              style = {styles.buy}
            >
              <Text style = {styles.descriptionText}>Go back</Text>
            </Pressable>
            {product ?
              <View style = {styles.container}>
                <Image 
                  source = {{uri: product.images[0]}}
                  style = {styles.image}
                  resizeMode = "cover"
                />
                <View style = {styles.textContainer}>
                  <Text style = {styles.descriptionText}>{product.title}</Text>
                  <Text style = {styles.descriptionText}>{product.description}</Text>
                  <Text style = {styles.descriptionTextPrice}>${product.price}</Text>
                  <Pressable
                    style = {styles.buy}
                  >
                    <Text style = {styles.buyText}>Buy now</Text>
                  </Pressable>
                </View>
              </View>
              :
              <AnimatedLoader
                visible={true}
                overlayColor="rgba(255,255,255,0.75)"
                speed={0.75}
              />
            }
        </View>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    height: "100%",
  },
  image: {
    width: '100%',
    height: 400,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 6
  },
  descriptionText: {
    fontFamily: 'Josefin',
    fontSize: 16,
    color: 'black',
    paddingVertical: 4,
  },
  descriptionTextPrice: {
    fontFamily: 'Josefin',
    fontSize: 25,
    color: 'black',
    paddingVertical: 6,
  },
  buy: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.green1,
  },
  buyText: {
    fontFamily: 'PlayFair',
    fontSize: 22,
    color: colors.lightGray
  }
});
