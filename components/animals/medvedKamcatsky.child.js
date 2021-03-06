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
  require('../../images/animals/medvedKamcatsky/01.jpg'),
  require('../../images/animals/medvedKamcatsky/02.jpg'),
  require('../../images/animals/medvedKamcatsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/medvedKamcatsky/01-thumb.jpg'),
  require('../../images/animals/medvedKamcatsky/02-thumb.jpg'),
  require('../../images/animals/medvedKamcatsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  componentWillMount() {
    this.props.bg();
  },

  render() {
    return (
      <ScrollView>
        <View>
          <InPageImage firstImage={true} indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        </View>
        <View style={styles.scrollView}>
          <AnimalText>
            Ahoj! Jmenuji se Jelizar a jsem medvěd kamčatský. Jak už mé jméno napovídá, pocházím z poloostrova Kamčatka, který se nachází v Asii a je veliký přibližně jako pětinásobek České republiky. Od nás je vzdálený skoro 8 tisíc kilometrů.
          </AnimalText>
          <AnimalText>
            Svůj výběh sdílím s krásnou medvědicí Kamčatkou, se kterou máme už tři mláďata – dvojčata Tobyho a Kubu, kteří se nám narodili 30. ledna 2012 a o tři roky později odcestovali do soukromé zoo na Ukrajinu, a Bruna. Ten se narodil 29. ledna 2016.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            My medvědi kamčatští jsme druhý největší druh medvědů na světě. Jsme mnohem větší než lidé – až tři metry na délku a metr a půl na výšku, vážit můžeme až 750 kilogramů. Máme mohutné tlapy a hustý hnědý kožich, který nás chrání před chladným počasím. Mimo to jsme i velmi rychlí, silní, pohybliví a umíme spoustu věcí, například skvěle šplhat do strmých kopců nebo do korun silných stromů. Jsme výborní plavci, a pokud si chceme ulovit nějakou tu rybu, vydržíme dlouho sedět ve studené vodě. Na souši umíme rychle běhat a za jediný den dokážeme ujít i velkou vzdálenost, třeba sto kilometrů. Tyto a další vlastnosti nám dávají velkou výhodu v tom, že kromě člověka nemáme na souši žádného přemožitele.
          </AnimalText>
          <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Jsme všežravci, živíme se borůvkami, brusinkami, semeny stromů a rybami, ale pokud máme velký hlad, sníme i mršinu nějakého živočicha nebo obyčejnou trávu. Dožíváme se věku kolem dvaceti až třiceti let, ale v zoo můžeme díky péči lidí žít i 50 let.
          </AnimalText>
          <AnimalText>
            Většinu svého života trávíme o samotě. V přírodě společnost vyhledáváme pouze v době, kdy hledáme partnera, se kterým můžeme na svět přivést mláďata. My dva v zoo jsme však spolu pořád a společnost někoho dalšího uvítáme hlavně tehdy, když se k nám blíží ošetřovatel Milan a nese něco dobrého na zub.
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
