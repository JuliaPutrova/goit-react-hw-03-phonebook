import React, { Component } from 'react';
import { LabelName, Search, BtnContact, FormSt } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  //метод, который будет обновлять состояние input
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  //метод для отправки form
  handleSubmit = e => {
    //функция, чтобы старница не перезагружалась при submit
    e.preventDefault();

    //передаем props Компонента ContactForm (ребенка) в Компонент App (родитель)
    this.props.addNewContact(this.state);
    //после submit сбрасываем все поля input
    this.reset();
  };

  //метод, который сбрасывает все поля input
  reset = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormSt onSubmit={this.handleSubmit}>
        <LabelName>
          {' '}
          Name
          <Search
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </LabelName>
        <LabelName>
          Number
          <Search
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </LabelName>
        <BtnContact type="submit">Add contact</BtnContact>
      </FormSt>
    );
  }
}

export default ContactForm;
