import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../data/colors';
const categoryIcons = [
  <Icon name="flight" size={25} color={COLORS.primary} />,
  <Icon name="beach-access" size={25} color={COLORS.primary} />,
  <Icon name="near-me" size={25} color={COLORS.primary} />,
  <Icon name="place" size={25} color={COLORS.primary} />,
];
const {width} = Dimensions.get('screen');
const Card = ({place}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', place)}>
      <ImageBackground style={style.cardImage} source={place.image}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="place" size={20} color={COLORS.white} />
            <Text style={{marginLeft: 5, color: COLORS.white}}>
              {place.location}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={20} color={COLORS.white} />
            <Text style={{marginLeft: 5, color: COLORS.white}}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export const style = StyleSheet.create({
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
});
export default Card;
