import React from 'react';
import Card from '../Card';
import s from './CardList.module.scss';
import getTranslateWord from '../../services/dictionary';
import { Input, FormLabel, IconButton, Paper, CircularProgress, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import FirebaseContext from '../../context/firebaseContext';

class CardList extends React.Component {
  state = {
    eng: '',
    rus: '',
    img: '',
    value: '',
    label: 'Перевод слова',
    isBusy: false,
    searchCardButton: false
  }

  handleEng = (e) => {
    this.setState({ eng: e.target.value })
  }

  handleRus = (e) => {
    this.setState({ rus: e.target.value })
  }

  handleImg = (e) => {
    this.setState({ img: e.target.value })
  }

  handleInputChange = ({ target }) => {
    this.setState({
      value: target.value,
      eng: target.value,
      rus: this.state.rus
    })
  }

  getTheWord = async () => {
    const { value } = this.state;
    const getWord = await getTranslateWord(this.state.value);
   
    const label = getWord.translate === undefined ? 'Такого слова нет' : `${value} - ${getWord.translate}`;

    this.setState({
      label: label,
      value: value,
      rus: getWord.translate,
      isBusy: false,
      searchCardButton: getWord.translate === undefined ? false : true
    })
  }

  handleSubmitSearch = async (e) => {
    e.preventDefault();

    this.setState({
      isBusy: true
    }, this.getTheWord)
  
  
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ searchCardButton: false })
    this.props.onAddedItem({
      eng: this.state.eng,
      rus: this.state.rus,
      id: +new Date(),
      img: this.state.img
    });

  }

  render() {
    const {item = [], onDeletedItem } = this.props;
    return (
      <div className={s.root}>
   
        
        <Paper className={s.searchForm} component="form" onSubmit={this.handleSubmitSearch}>
          <label className={s.searchLabel}>{this.state.label}</label>
          <div className={s.search}>
            <Input className={s.searchInput} placeholder="Введите слово на английском" onChange={this.handleInputChange} required />
            <IconButton  type="submit" >
              {(this.state.isBusy) ? <CircularProgress style={{width: '25px', height: '25px'}}/> : <SearchIcon />}
            </IconButton>
            {(this.state.searchCardButton) && (
              <div className={s.searchToggle}>
                <Button className={s.button} type="submit" variant="contained" color="primary" onClick={this.handleSubmitForm} >Добавить карточку</Button>
                <FormLabel>
                  URL картинки:
                  <Input type="text" onChange={this.handleImg} />
                </FormLabel>
              </div>
              )
            }
          </div>
        </Paper>
        
        
        <form className={s.form} onSubmit={this.handleSubmitForm}>
          <FormLabel>
            Слово на английском:
            <Input type="text" onChange={this.handleEng} required />
          </FormLabel>
          <FormLabel>
            Слово на русском:
            <Input type="text" onChange={this.handleRus} required />
          </FormLabel>
          <FormLabel>
            URL картинки:
            <Input type="text" onChange={this.handleImg} />
          </FormLabel>
          <Button className={s.button} type="submit" variant="contained" color="primary">Добавить карточку</Button>
        </form>
        <div className={s.cardBlock}>
          {
            item.map(({ eng, rus, img, id }) => (
              <Card
                onDeleted={() => onDeletedItem(id)}
                key={id} eng={eng} rus={rus} img={img} />)
            )
          }
        </div>

      </div>
      
    )
  }
}

CardList.contextType = FirebaseContext;

export default CardList;