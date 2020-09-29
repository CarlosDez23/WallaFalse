import React, { useState } from "react";
import { StyleSheet, FlatList, View, Alert } from "react-native";

//Componentes
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

//Colores
import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  /*Utilizamos destructuración para poner la posicion cero del array que devuelve useState en count
    y la 1 en setCount*/
  /* Con useState, creamos un "atributo" de esta "clase" 
    y su set, esto es lo que nos devuelve el método en un array
    por lo que cuando queremos actualizar un componente de la 
    interfaz, tenemos que utilizar el set de los datos 
    que estemos utilizando para que los componentes se vuelvan
    a renderizar porque detectan un cambio en el estado*/
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    /* Eliminamos el item de la lista, para ello utilizamos
    la función filter que devuelve un Array con los elementos 
    que cumplen la condición que le pasamos. En este caso,
    recibimos un mensaje por lo que vamos a filtrar y vamos a
    decir que nos devuelva un array con los objetos cuya id 
    sea distinta a la id del mensaje que eremos eliminar*/
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
    /* Esta sería la forma burra de hacerlo
    const newElements = [];
    for (let i = 0; i < messages.length; i++) {
      const element = messages[i];
      if (element.id === message.id) {
        messages.splice(i, 1);
      } else {
        newElements.push(element);
      }
    }
    setMessages(newElements);
    */
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
        renderItem={({ item }) => (
          <ListItem
            name={item.title}
            listings={item.description}
            image={item.image}
            onPress={() =>
              Alert.alert("Seleccionado elemento ", item.title.toString())
            }
            /*Con la sinxtaxis como la del itemSeparator no podemos pasarle la función onPress,
            por lo que renderizamos el componente con normalidad */
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
