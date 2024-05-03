import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, FlatList, TouchableOpacity } from "react-native";

interface Item {
    id: number;
    nome: string;
}

const HomeScreen = () => {
    const [lista, setLista] = useState<Item[]>([]);
    const [novoItem, setNovoItem] = useState<string>('');

    // Função para adicionar um novo item à lista
    const adicionarItem = () => {
        if (novoItem.trim() !== '') {
            setLista([...lista, { id: Date.now(), nome: novoItem }]);
            setNovoItem('');
        }
    };

    // Função para excluir um item da lista
    const excluirItem = (id: number) => {
        setLista(lista.filter(item => item.id !== id));
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={styles.input}
                placeholder="Novo Item"
                value={novoItem}
                onChangeText={(text) => setNovoItem(text)}
            />
            <TouchableOpacity style={styles.button} onPress={adicionarItem}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
            <FlatList
                style={{ marginTop: 20 }}
                data={lista}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.nome}</Text>
                        <TouchableOpacity onPress={() => excluirItem(item.id)}>
                            <Text style={{ color: 'red', marginLeft: 10 }}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '80%',
    },
});

export default HomeScreen;
