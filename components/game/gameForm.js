import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { createGameCategory, getCategories } from '../../utils/data/categoryData';
import { createGame } from '../../utils/data/gameData';

const initialState = {
  title: '',
  description: '',
  designer: '',
  yearReleased: '',
  numberOfPlayers: 0,
  playTime: 0,
  recAge: 0,
};

const GameForm = ({ obj }) => {
  const router = useRouter();
  const [input, setInput] = useState(initialState);
  const [category, setCategory] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelect = (target) => {
    setCategory(target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    input.playTime = Number(input.playTime);
    input.recAge = Number(input.recAge);
    input.numberOfPlayers = Number(input.numberOfPlayers);
    createGame(input).then((gameObj) => {
      const catCreate = {
        gameId: gameObj.id,
        categoryId: category.value,
      };
      createGameCategory(catCreate).then(() => {
        router.push('/games');
      });
    });
  };

  useEffect(() => {
    if (obj.id) {
      setInput(obj);
    }
  }, [obj]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Game Title</Form.Label>
      <Form.Control name="title" value={input.title} onChange={handleChange} required />
      <Form.Label>Description</Form.Label>
      <Form.Control name="description" value={input.description} onChange={handleChange} required />
      <Form.Label>Designer</Form.Label>
      <Form.Control name="designer" value={input.designer} onChange={handleChange} required />
      <Form.Label>Yeah Release</Form.Label>
      <Form.Control type="date" name="yearReleased" value={input.yearReleased} onChange={handleChange} required />
      <Form.Label>Number of Playes</Form.Label>
      <Form.Control type="number" name="numberOfPlayers" value={input.numberOfPlayers} onChange={handleChange} required />
      <Form.Label>Play Time Min</Form.Label>
      <Form.Control name="playTime" value={input.playTime} onChange={handleChange} required />
      <Form.Label>Recommended Age</Form.Label>
      <Form.Control type="number" name="recAge" value={input.recAge} onChange={handleChange} required />
      <Form.Label>Categories</Form.Label>
      <AsyncSelect
        classNamePrefix="category"
        onChange={handleSelect}
        hideSelectedOptions
        defaultOptions
        value={category}
        loadOptions={getCategories}
      />
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};

GameForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default GameForm;
