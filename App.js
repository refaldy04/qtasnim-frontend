import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

const TableExample = () => {
  const tableHead = [
    'No',
    'Nama Barang',
    'Stok',
    'Jumlah Terjual',
    'Tanggal Transaksi',
    'Jenis Barang',
  ];
  const tableData = [
    ['1', 'Kopi', '100', '10', '01-05-2021', 'Konsumsi'],
    ['2', 'Teh', '100', '20', '05-05-2021', 'Konsumsi'],
    ['3', 'Pasta Gigi', '100', '20', '11-05-2021', 'Pembersih'],
  ];
  const widthArr = [100, 100, 100, 100, 100, 100];

  return (
    <ScrollView horizontal={true}>
      <View>
        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
          <Row
            data={tableHead}
            widthArr={widthArr}
            style={styles.head}
            textStyle={styles.text}
          />
        </Table>
        <ScrollView style={styles.dataWrapper}>
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            {tableData.map(el => (
              <Row
                key={tableData.indexOf(el)}
                data={el}
                widthArr={widthArr}
                textStyle={styles.text}
              />
            ))}
          </Table>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  head: {height: 50, backgroundColor: '#537791'},
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TableExample;
