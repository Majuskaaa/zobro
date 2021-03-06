import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

const styles = require('../../styles/styles.ios');
const InPageImage = require('../inPageImage');
const AnimalText = require('../animalText');

const IMAGES = [
  require('../../images/animals/liskaPolarni/01.jpg'),
  require('../../images/animals/liskaPolarni/02.jpg'),
  require('../../images/animals/liskaPolarni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/liskaPolarni/01-thumb.jpg'),
  require('../../images/animals/liskaPolarni/02-thumb.jpg'),
  require('../../images/animals/liskaPolarni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  componentWillMount() {
    this.props.bg();
  },

  render() {
    return (
      <ScrollView>
        <View>
          <InPageImage firstImage={true} indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        </View>
        <View style={styles.scrollView}>
          <AnimalText>
            Ahoj děti.
          </AnimalText>
          <AnimalText>
            Mám na vás na začátek otázku: znáte úsloví „liška podšitá“? A víte, co znamená? To, že je někdo hodně mazaný, chytrý, nebo dokonce vychytralý. My jsme ale lišky polární, proto jsme podšité i trochu jinak.
          </AnimalText>
          <AnimalText>
            Má se to takto: vy lidé nosíte v zimě bundy a kabáty a máte je podšité tak, aby vám bylo hezky teplo a netáhlo vám na záda. Naše liščí tlapy se na šití nehodí, proto nám musí podšívka vyrůst. Příroda to vymyslela chytře, máme tak huňatou srst (i zespoda tlapek), že nám není zima ani v tundrách, kde žijeme. Jak možná víte, tundry jsou místa, kde je taková zima, že už tam ani nerostou stromy. Rozkládají se v Rusku na Sibiři, v Kanadě a na Aljašce a na spoustě ostrovů – mohly byste znát třeba Grónsko a Island.
          </AnimalText>
          <AnimalText>
            Na rozdíl od spousty jiných živočichů v zimě nespíme. Aby nás nebylo vidět, máme bílý, dokonce sněhobílý kožíšek. Pobíháme sněhem a lovíme lumíky, ptáky, ryby nebo žereme mršiny. V zimě taky hodně cestujeme, chodíme tam, kde máme co jíst. A v noci spíme zahrabané do sněhu.
          </AnimalText>
          <AnimalText>
            Zato v létě, když se nám srst zbarvuje do hnědošeda, abychom se mohly schovávat mezi kameny, se vracíme k norám, které každý rok rozšiřujeme. V nich se rodí malá liščata, o která se starají nejenom mámy lišky, ale i lišáci. Mláďata pouštíme poprvé ven z nory, když jsou zhruba měsíc stará. Pak se dál osamostatňují, až vyrostou natolik, že se bez nás obejdou. V tu dobu už můžou mít malá liščata.
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
