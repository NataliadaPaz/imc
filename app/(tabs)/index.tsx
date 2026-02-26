import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.05,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1.05,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
        <MaterialCommunityIcons name="heart-pulse" size={70} color="#fff" />

        <Text style={styles.title}>Calculadora IMC</Text>
        <Text style={styles.subtitle}>Vamos cuidar da sua saúde 💙</Text>
        <Text style={styles.subtitle}>Natália da Paz</Text>


        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5ce791',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#92ecb6',
    width: '85%',
    padding: 30,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#f5f6fa',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C5CE7',
  },
});


// Este é um componente de tela inicial para uma calculadora de IMC (Índice de Massa Corporal). Ele apresenta um cartão animado com um ícone de coração, título, subtítulo e um botão "Começar". O cartão tem uma animação de pulsação contínua para chamar a atenção do usuário. Quando o botão é pressionado, ele executa uma animação rápida de contração e expansão para fornecer feedback visual.