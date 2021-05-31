import React from 'react';
import cl from 'classnames';
import s from './Card.module.scss';
import { CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';
import defaultPhoto from './img/default.png';

class Card extends React.Component {
  state = {
    done: false,
    isRemembered: false
  }

  handleCardClick = () => {
    this.setState( ({ done, isRemembered }) => {
      if (!isRemembered) {
        return {
          done: !done
        };
      }
      
    });
  }

  handleIsRememberClick = () => {
    this.setState( ({ isRemembered, done }) => {
      return {
        isRemembered: true,
        done: true
      };
    });
  }

  handleDelitedClick = () => {
    this.props.onDeleted();
  }

  render() {
    const { eng, rus, img } = this.props;
    const { done, isRemembered } = this.state;

    return (
      <div className={s.root}>
        <div className={ cl(s.card, { [s.done]: done, [s.isRemembered]: isRemembered }) } onClick={this.handleCardClick}>
          <div className={s.cardInner}>
            <div className={s.cardFront}>
              {(img !== '') ? <img className={s.cardImg} src={img} alt="" /> : <img className={s.cardImg} src={defaultPhoto} alt="" /> }
              { eng }
            </div>
            <div className={s.cardBack}>
            {(img !== '') ? <img className={s.cardImg} src={img} alt="" /> : <img className={s.cardImg} src={defaultPhoto} alt="" /> }
              { rus }
            </div>
          </div> 
        </div>
        <div className={s.icons}>
          <div className={s.icon}>
            <CheckSquareOutlined onClick={this.handleIsRememberClick} />
          </div>
          <div className={s.icon}>
            <DeleteOutlined onClick={this.handleDelitedClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;