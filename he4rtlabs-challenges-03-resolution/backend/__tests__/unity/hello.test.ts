interface Hello {
  name: string;
}

const Hello: Hello = {
  name: 'Hello World',
};

it('Should verify name', () => {
  expect(Hello.name).toBe('Hello World');
});
