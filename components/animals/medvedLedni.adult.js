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
  require('../../images/animals/medvedLedni/01.jpg'),
  require('../../images/animals/medvedLedni/02.jpg'),
  require('../../images/animals/medvedLedni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/medvedLedni/01-thumb.jpg'),
  require('../../images/animals/medvedLedni/02-thumb.jpg'),
  require('../../images/animals/medvedLedni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  componentWillMount() {
    this.props.bg();
  },

  render() {
    // @todo: Title: Cora - Malý příběh velké matky
    return (
      <ScrollView>
        <View>
          <InPageImage firstImage={true} indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        </View>
        <View style={styles.scrollView}>
          <AnimalText>
            <Text style={styles.ctextItalic}>„Budoucí osud dítěte je vždy dílem matky.“</Text> Napoleon Bonaparte
          </AnimalText>
          <AnimalText>
Psal se tenkrát listopad roku 1998, když se v ruské zoo v Petrohradě narodilo malé lední medvídě. Vážilo jen něco málo přes půl kilogramu a velikostí se podobalo spíše kryse než medvědovi.
          </AnimalText>
          <AnimalText>
Cora, jak byla malá medvědí slečna pojmenována, hezky prospívala. Vždyť po tátovi, který pocházel z volné přírody, dostala do vínku divokého ducha a předpoklady stát se velkou a silnou medvědicí – dvouvrstvý kožich, který ji bude chránit i před 40stupňovým mrazem a ledovou vodou, schopnost uplavat najednou až 100 kilometrů, drobné výčnělky na polštářcích tlap, které jí umožní chodit po ledu, aniž by to klouzalo, tisíckrát lepší čich, než mají lidé, a mnohem, mnohem více. Po mámě pak Cora zdědila životní poslání – stát se velkou matkou, jako byla už i její babička.
          </AnimalText>
          <AnimalText>
Ve stejných dnech, tak jako v Rusku, i v Kazachstánu přišlo na svět mládě. V Almatě se narodil ledvědí-medvědí kluk jak buk a dostal jméno Umca. Růst se mu však moc nechtělo, proto ho museli ošetřovatelé od jeho tří měsíců dokrmovat, aby nabral dost sil. Zadařilo se, a tak mohl Umca už v necelém roce odjet do Brna, aby se zde v budoucnu podílel na záchraně svého zranitelného druhu.
          </AnimalText>
          <AnimalText>
          Sedm měsíců poté, v březnu 2000, do Brna dorazila i Cora. Zpočátku si s Umcou moc nerozuměli, a byli proto ve výběhu odděleni přepážkou. Během dospívání Cora poprvé projevila zájem o sblížení. Umca byl však zvyklý spíše na přítomnost lidí než jiných příslušníků svého druhu, proto se bližšímu kontaktu s Corou bránil. Ta však, hnána svými přirozenými pudy, brzy zdolala překážky, které je oddělovaly, a Umca už se neubránil.
          </AnimalText>
          <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
          Brzy začali chovatelé pociťovat naději, že by se brněnskou zoo mohly začít ozývat zvuky podobné startujícím traktorům, to když malá medvíďata sají mléko.
          </AnimalText>
          <AnimalText>
            Naděje – to je pocit, který provází medvíďata až první 3 roky života, protože do té doby není nic jisté.
          </AnimalText>
          <AnimalText>
            Naděje – ještě ne radost, ale zdaleka ne zklamání – proto, že jen necelých deset procent medvíďat narozených v zoologických zahradách se dožije dospělosti.
          </AnimalText>
          <AnimalText>
            Tak bohužel i v Brně několik let po sobě naději střídalo zklamání. Cora se však nedala, a když se 23. listopadu 2007 zahradou začaly rozléhat zvuky hned dvou traktorů, ošetřovatelé opět pocítili naději – takovou, která den ode dne sílila a už nepohasla. Tak přišla na svět první úspěšně odchovaná dvojčata ledních medvědů v Česku – Bill a Tom. Kluci vyrostli a odjeli do světa. Řadu dalších zklamání přerušilo až narození Komety a Nanuka 24. listopadu 2012, kteří se měli k radosti ošetřovatelů čile k světu. Nanuk odcestoval ze zoologické zahrady v roce 2014, a když následující rok letěla nad Brnem Kometa, rozhodli se ošetřovatelé, že odteď už bude všechno jinak.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Dali Coře svobodu v bytí matkou. Jestliže doteď byla březí Cora zavírána do porodního boxu, aby zůstala ona i mláďata v bezpečí, od této chvíle už mohla jít kdykoliv dovnitř – a kdykoliv ven. Už nebyla ustrašená, už se nebála vězení. A to se vyplatilo, protože hned nadcházející zimu, 21. listopadu 2015, přivedla na svět další mládě – Noriu. Porodní box byl sice stále otevřený, takže když venku udeřily mrazy, nebylo ani vevnitř úplně nejtepleji. Ale to malému medvíděti ani trošku nevadilo – vždyť mělo skvělou mámu, která ho vždycky ochránila!
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
