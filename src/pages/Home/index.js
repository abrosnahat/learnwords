import React from 'react';
import HeaderBlock from '../../components/HeaderBlock';
import FooterBlock from '../../components/FooterBlock';
import CardList from '../../components/CardList';
import Test from '../../components/Test/index';
import FirebaseContext from '../../context/firebaseContext';
import { Button } from '@material-ui/core';
class HomePage extends React.Component {
    state = {
        wordArr: [],
        cardTest: true
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

      cardButton = () => {
        this.setState({ cardTest: true })
      }

      
      TestButton = () => {
        this.setState({ cardTest: false })
      }
    
      render() {
        const { wordArr } = this.state;
    
        return (
          <>
            <HeaderBlock /> 
            <div style={{ textAlign: 'center', background: 'rgba(10,143,196,0.9)' }}>
              <Button variant="contained" size="large" color="primary" onClick={this.cardButton} >Карточки</Button>
              <Button variant="contained" size="large" color="primary" onClick={this.TestButton} >Тест</Button>
            </div>
            {(this.state.cardTest) ? <CardList onDeletedItem={this.handleIsDelitedItem} onAddedItem={this.handleIsAddedItem} item={wordArr} /> : <Test items={wordArr} />}
            <FooterBlock text="© 2021 abros.nahat" />
          </>
        );
      }
}

HomePage.contextType = FirebaseContext;

export default HomePage;