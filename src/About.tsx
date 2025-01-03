import { useState } from 'react';

const About = () => {
  const [name, setName] = useState('no name set');

  function formAction(formData: FormData) {
    const newFirstName = formData.get('firstname');
    const newLastName = formData.get('lastname');
    if (newFirstName || newLastName) {
      setName(`${newFirstName} ${newLastName}` as string);
    }
  }

  return (
    <section id='about-form'>
      <h2 className='username'>
        Current user: <span id='user-name'>{name}</span>
      </h2>
      <form action={formAction}>
        <section className='form-section'>
          <label htmlFor='name1'>Given Name:</label>
          <input type='text' id='name1' name='firstname' required />
        </section>
        <section className='form-section'>
          <label htmlFor='name2'>Family Name:</label>
          <input type='text' id='name2' name='lastname' required />
        </section>
        <button type='submit' className='form-section'>
          Update
        </button>
      </form>
    </section>
  );
};

export default About;
