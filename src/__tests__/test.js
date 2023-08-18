import Bowerman from '../Classes/Bowerman';
import Daemon from '../Classes/Daemon';
import Magician from '../Classes/Magician';
import Swordsman from '../Classes/Swordsman';
import Undead from '../Classes/Undead';
import Zombie from '../Classes/Zombie';

test('Bowerman test', () => {
  const result = new Bowerman('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Daemon test', () => {
  const result = new Daemon('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Magician test', () => {
  const result = new Magician('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Swordsman test', () => {
  const result = new Swordsman('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Undead test', () => {
  const result = new Undead('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Zombie test', () => {
  const result = new Zombie('demo');
  expect(result).toEqual({
    name: 'demo',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
