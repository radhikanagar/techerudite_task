
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const events = [
  {
    id: 1,
    title: 'ADICTO: Berlin Festival',
    date: '24.02.2022 - 26.02.2022',
    location: 'Berlin, Germany',
    price: '€30 - €100',
    type: 'Workshop',
    image: require('../assets/image1.jpg'),
  },
  {
    id: 2,
    title: 'Bachata: Open level',
    date: '27.02.2022 @8pm',
    location: 'Berlin, Germany',
    price: '€12',
    type: 'Course',
    image: require('../assets/image2.jpg'),
  },
  {
    id: 3,
    title: 'Bachata: Open level',
    date: '27.02.2022 @8pm',
    location: 'Berlin, Germany',
    price: '€12',
    type: 'Course',
    image: require('../assets/image3.png'),
  },
  {
    id: 4,
    title: 'Bachata: Open level',
    date: '27.02.2022 @8pm',
    location: 'Berlin, Germany',
    price: '€12',
    type: 'Course',
    image: require('../assets/image4.jpg'),
  },
  {
    id: 5,
    title: 'Bachata: Open level',
    date: '27.02.2022 @8pm',
    location: 'Berlin, Germany',
    price: '€12',
    type: 'Course',
    image: require('../assets/image5.png'),
  },
  {
    id: 6,
    title: 'Bachata: Open level',
    date: '27.02.2022 @8pm',
    location: 'Berlin, Germany',
    price: '€12',
    type: 'Course',
    image: require('../assets/image6.jpg'),
  },
  {
    id: 7,
    title: 'Bachata: Open level',
    date: '27.02.2022 @8pm',
    location: 'Berlin, Germany',
    price: '€12',
    type: 'Course',
    image: require('../assets/image2.jpg'),
  },
];

const EventCard = ({ event, isFavorite, onHeartPress }) => {
  return (
    <>
      <View style={styles.card}>
        <Image source={event.image} style={styles.eventImage} />
        <View style={styles.details}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}>{event.title}</Text>
          <Icon name="arrow-right" size={20} color="#000" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[styles.date, { marginRight: 20 }]}>{event.date}</Text>
            <Text style={styles.location}>{event.location}</Text>
          </View>
          <Text style={styles.price}>{event.price}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', gap: '20', }}>
              <Text style={styles.type}>{event.type}</Text>
              <Text style={styles.type}>{event.type}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: '10' }}>
              <TouchableOpacity onPress={() => onHeartPress(event.id)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Icon name="upload" size={20} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onHeartPress(event.id)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Icon name={isFavorite ? 'heart' : 'heart-o'} size={24} color={isFavorite ? '#21D393' : 'black'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>

    </>
  );
};

const FormDetailScreen = () => {
  const [favorites, setFavorites] = useState({});

  const handleHeartPress = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            isFavorite={favorites[event.id] || false}
            onHeartPress={handleHeartPress}
          />
        ))}
      </ScrollView>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.tab}>
          <Icon name="home" size={20} color="#000" />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="search" size={20} color="#000" />
          <Text style={styles.tabText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="user" size={20} color="#000" />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="chrome" size={20} color="#000" />
          <Text style={styles.tabText}>chrome</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  eventImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    color: '#21D393',
    fontSize: 10
  },
  location: {
    color: '#888',
    fontSize: 10
  },
  price: {
    fontWeight: 'bold',
    color: '#333',
  },
  type: {
    fontSize: 11,
    textTransform: 'uppercase',
    backgroundColor: '#ede8e8',
    borderRadius: 3
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tab: {
    padding: 10,
    alignItems: 'center'
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  }
});

export default FormDetailScreen;
