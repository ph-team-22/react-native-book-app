import React, {useEffect,useState} from 'react';
import axios from "axios"
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
const BookCard = () => {
     const [books, setBooks] = useState([]);
  useEffect(() => {
    const uri = `https://shrouded-crag-01009.herokuapp.com/books`;
    axios
      .get(uri)
      .then(function (response) {
        setBooks(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
    return (
       <ScrollView>
         <View style={style.card}>
        {
          books.map((book, index) => (
            <View key={index}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={book.imageLink} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{book.title}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {book.author}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${book.pages}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
          ))
        }
        </View>
       </ScrollView>
    );
  };
  const style = StyleSheet.create({
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
  export default BookCard;