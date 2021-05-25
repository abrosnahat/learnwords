import React from 'react';
import HeaderBlock from '../../components/HeaderBlock';
import FooterBlock from '../../components/FooterBlock';
import CardList from '../../components/CardList';
import FirebaseContext from '../../context/firebaseContext';

class HomePage extends React.Component {
    state = {
        wordArr: []
      }

      urlRequest = `/cards/${this.props.user.uid}`;
    
      componentDidMount() {
        const { getUserCardRef } = this.context;

        getUserCardRef().on('value', res => {
          this.setState({
            wordArr: res.val() || [],
          });
        })
      }
    
      handleIsDelitedItem = (id) => {
        const { wordArr } = this.state;
        const { setCards } = this.context;
        
        const newWordArr = wordArr.filter((item) => item.id !== id);

        setCards(this.urlRequest, newWordArr);
      }
    
      handleIsAddedItem = (item) => {
        const { setCards } = this.context;
        const { wordArr } = this.state;

        setCards(this.urlRequest, [item, ...wordArr]);
      }
    
      render() {
        const { wordArr } = this.state;
    
        return (
          <>
          
            {/* <HeaderBlock title="Выучить и запомнить слово навсегда!" descr="На нашем сайте вы можете составить свой список слов и выражений на изучаемом языке. А мы вам поможем их запомнить." /> */}
            <CardList onDeletedItem={this.handleIsDelitedItem} onAddedItem={this.handleIsAddedItem} item={wordArr} />
            <FooterBlock text="Разработано при поддержке React Marathon 2.0" />
          </>
        );
      }
}

HomePage.contextType = FirebaseContext;

export default HomePage;